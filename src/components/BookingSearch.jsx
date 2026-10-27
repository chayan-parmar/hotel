import React, { useState } from 'react';
import { Calendar, Users, Home, Search, AlertCircle, Sparkles, Tag } from 'lucide-react';

export default function BookingSearch({ onSearchStays, initialOfferCode = '' }) {
  // Compute sensible default dates (Tomorrow -> 3 nights stay)
  const getTomorrowString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getCheckOutDefault = (checkInStr) => {
    const d = new Date(checkInStr);
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  };

  const tomorrow = getTomorrowString();
  const defaultCheckOut = getCheckOutDefault(tomorrow);

  const [checkIn, setCheckIn] = useState(tomorrow);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [promoCode, setPromoCode] = useState(initialOfferCode);
  const [validationError, setValidationError] = useState('');

  // Auto-adjust checkout if check-in moves beyond checkout
  const handleCheckInChange = (newCheckIn) => {
    setCheckIn(newCheckIn);
    setValidationError('');
    if (newCheckIn >= checkOut) {
      setCheckOut(getCheckOutDefault(newCheckIn));
    }
  };

  const handleCheckOutChange = (newCheckOut) => {
    setCheckOut(newCheckOut);
    setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setValidationError('Please select both your preferred check-in and check-out dates.');
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      setValidationError('Check-out date must be at least one day after check-in.');
      return;
    }

    const diffTime = Math.abs(checkOutDate - checkInDate);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (nights <= 0) {
      setValidationError('Please select a stay duration of at least 1 night.');
      return;
    }

    setValidationError('');
    onSearchStays({
      checkIn,
      checkOut,
      nights,
      guests: parseInt(guests, 10),
      rooms: parseInt(rooms, 10),
      promoCode: promoCode.trim()
    });
  };

  return (
    <div
      id="booking-panel"
      style={{
        position: 'relative',
        zIndex: 30,
        marginTop: '-3.75rem',
        marginBottom: '3rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem'
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: 'var(--color-charcoal-dark)',
          border: '1px solid var(--color-gold-border)',
          borderRadius: '2px',
          boxShadow: 'var(--shadow-dark)',
          padding: '1.75rem 2rem',
          color: 'var(--color-ivory)',
          position: 'relative'
        }}
      >
        {/* Subtle Decorative Gold Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)'
          }}
        />

        {/* Demo Notification Label */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(198, 168, 120, 0.15)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={14} color="var(--color-gold)" />
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-light)',
                fontWeight: 600
              }}
            >
              BESPOKE RESERVATIONS &amp; SUITE AVAILABILITY
            </span>
          </div>

          <div className="demo-pill">
            <span>DEMO SEARCH • SAMPLE RATES ONLY</span>
          </div>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              alignItems: 'flex-end'
            }}
          >
            {/* Check-In */}
            <div>
              <label
                htmlFor="check-in-date"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-taupe-light)',
                  marginBottom: '0.45rem'
                }}
              >
                <Calendar size={13} color="var(--color-gold)" />
                <span>CHECK-IN</span>
              </label>
              <input
                id="check-in-date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(37, 39, 35, 0.75)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  color: 'var(--color-ivory)',
                  padding: '0.75rem 0.85rem',
                  fontSize: '0.88rem',
                  borderRadius: '2px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  colorScheme: 'dark'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(198, 168, 120, 0.3)'}
              />
            </div>

            {/* Check-Out */}
            <div>
              <label
                htmlFor="check-out-date"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-taupe-light)',
                  marginBottom: '0.45rem'
                }}
              >
                <Calendar size={13} color="var(--color-gold)" />
                <span>CHECK-OUT</span>
              </label>
              <input
                id="check-out-date"
                type="date"
                min={checkIn || tomorrow}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(37, 39, 35, 0.75)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  color: 'var(--color-ivory)',
                  padding: '0.75rem 0.85rem',
                  fontSize: '0.88rem',
                  borderRadius: '2px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  colorScheme: 'dark'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(198, 168, 120, 0.3)'}
              />
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests-select"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-taupe-light)',
                  marginBottom: '0.45rem'
                }}
              >
                <Users size={13} color="var(--color-gold)" />
                <span>GUESTS</span>
              </label>
              <select
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(37, 39, 35, 0.75)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  color: 'var(--color-ivory)',
                  padding: '0.75rem 0.85rem',
                  fontSize: '0.88rem',
                  borderRadius: '2px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="1">1 Guest (Single Occupancy)</option>
                <option value="2">2 Guests (Couple / Pair)</option>
                <option value="3">3 Guests (Suite with Extra Bed)</option>
                <option value="4">4 Guests (Family / Party)</option>
                <option value="5">5+ Guests (Presidential Vault)</option>
              </select>
            </div>

            {/* Rooms */}
            <div>
              <label
                htmlFor="rooms-select"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-taupe-light)',
                  marginBottom: '0.45rem'
                }}
              >
                <Home size={13} color="var(--color-gold)" />
                <span>ROOMS / SUITES</span>
              </label>
              <select
                id="rooms-select"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(37, 39, 35, 0.75)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  color: 'var(--color-ivory)',
                  padding: '0.75rem 0.85rem',
                  fontSize: '0.88rem',
                  borderRadius: '2px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="1">1 Room / Suite</option>
                <option value="2">2 Connecting Suites</option>
                <option value="3">3 Suites (Group Stay)</option>
                <option value="4">4 Suites / Full Wing</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem'
                }}
                id="search-stays-btn"
              >
                <Search size={15} />
                <span>SEARCH STAYS</span>
              </button>
            </div>
          </div>

          {/* Validation Alert */}
          {validationError && (
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(217, 83, 79, 0.15)',
                border: '1px solid rgba(217, 83, 79, 0.4)',
                borderRadius: '2px',
                color: '#ffcdd2',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <AlertCircle size={15} />
              <span>{validationError}</span>
            </div>
          )}

          {/* Optional Promo Code Toggle */}
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--color-taupe)'
            }}
          >
            <Tag size={13} color="var(--color-gold)" />
            <span>Have an exclusive privilege code?</span>
            <input
              type="text"
              placeholder="e.g. WEEKEND-ESCP"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(198, 168, 120, 0.25)',
                color: 'var(--color-gold-light)',
                padding: '0.25rem 0.6rem',
                fontSize: '0.75rem',
                borderRadius: '2px',
                width: '150px',
                outline: 'none',
                letterSpacing: '0.08em'
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
