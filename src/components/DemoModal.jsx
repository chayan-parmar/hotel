import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  Home, 
  ShieldCheck, 
  Printer, 
  ArrowRight,
  Utensils,
  BookOpen,
  Send,
  BedDouble
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

export default function DemoModal({ modalState, onClose, activeCurrency }) {
  const [selectedSuiteForReservation, setSelectedSuiteForReservation] = useState(null);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [guestNameInput, setGuestNameInput] = useState('Lady Victoria Sterling');
  const [guestEmailInput, setGuestEmailInput] = useState('victoria@sterling-holdings.co.uk');

  if (!modalState || !modalState.isOpen) return null;

  const { type, data } = modalState;

  const formatPrice = (priceINR, priceUSD) => {
    if (activeCurrency === 'USD') {
      return `$${priceUSD.toLocaleString()}`;
    }
    return `₹${priceINR.toLocaleString('en-IN')}`;
  };

  const handleSimulateReservation = (suite) => {
    setSelectedSuiteForReservation(suite);
    setReservationConfirmed(true);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: type === 'availability' ? '860px' : '720px',
          padding: '2.5rem',
          backgroundColor: 'var(--color-ivory)',
          borderRadius: '2px',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal window"
        >
          <X size={18} />
        </button>

        {/* =========================================================================
            1. AVAILABILITY SEARCH RESULTS MODAL
           ========================================================================= */}
        {type === 'availability' && (
          <div>
            {!reservationConfirmed ? (
              <div>
                {/* Header */}
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(198, 168, 120, 0.25)', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <Sparkles size={16} color="var(--color-gold-dark)" />
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      DEMONSTRATION AVAILABILITY PREVIEW
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: 'var(--color-charcoal)' }}>
                    Available Stays &amp; Sample Rates
                  </h3>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span className="demo-pill" style={{ color: 'var(--color-gold-dark)', borderColor: 'var(--color-gold)' }}>
                      DEMO SEARCH ONLY • NO LIVE PAYMENT OR REAL INVENTORY PROCESSED
                    </span>
                  </div>
                </div>

                {/* Search Parameters Summary Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-ivory-warm)',
                    border: '1px solid rgba(198, 168, 120, 0.3)',
                    padding: '1rem 1.25rem',
                    borderRadius: '2px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem',
                    fontSize: '0.84rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={15} color="var(--color-gold-dark)" />
                    <span>
                      <strong>Dates:</strong> {data?.checkIn || 'Tomorrow'} &rarr; {data?.checkOut || '3 Days Later'} ({data?.nights || 3} Nights)
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={15} color="var(--color-gold-dark)" />
                    <span><strong>Guests:</strong> {data?.guests || 2}</span>
                    <span style={{ margin: '0 4px', opacity: 0.5 }}>|</span>
                    <Home size={15} color="var(--color-gold-dark)" />
                    <span><strong>Rooms:</strong> {data?.rooms || 1}</span>
                  </div>
                  {data?.promoCode && (
                    <div style={{ color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      Offer Code: {data.promoCode}
                    </div>
                  )}
                </div>

                {/* Available Suites List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxHeight: '50vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
                  {ROOMS_DATA.map((room) => {
                    const nights = data?.nights || 3;
                    const totalPriceINR = room.priceINR * nights * (data?.rooms || 1);
                    const totalPriceUSD = room.priceUSD * nights * (data?.rooms || 1);

                    return (
                      <div
                        key={room.id}
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '1.25rem',
                          backgroundColor: 'var(--color-white)',
                          border: '1px solid rgba(198, 168, 120, 0.25)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                          padding: '1.25rem'
                        }}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          style={{
                            width: '140px',
                            height: '110px',
                            objectFit: 'cover',
                            borderRadius: '2px',
                            flexShrink: 0
                          }}
                        />

                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-charcoal)' }}>
                                {room.name}
                              </h4>
                              <span style={{ fontSize: '0.72rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                                AVAILABLE FOR DATES
                              </span>
                            </div>
                            <p style={{ fontSize: '0.82rem', color: 'var(--color-charcoal-light)', margin: '0.25rem 0' }}>
                              {room.capacity} • {room.bedType} • {room.size}
                            </p>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
                              Includes: Gourmet Breakfast, Butler Care &amp; Spa Access
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginTop: '0.75rem',
                              paddingTop: '0.75rem',
                              borderTop: '1px solid rgba(198, 168, 120, 0.15)'
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.7rem', color: 'var(--color-taupe)', textTransform: 'uppercase' }}>
                                Total Stay ({nights} Nights)
                              </div>
                              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                {formatPrice(totalPriceINR, totalPriceUSD)}
                              </div>
                            </div>

                            <button
                              onClick={() => handleSimulateReservation(room)}
                              className="btn-primary"
                              style={{ padding: '0.6rem 1.25rem', fontSize: '0.72rem' }}
                            >
                              <span>SIMULATE RESERVATION</span>
                              <ArrowRight size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Simulated Instant Reservation Voucher Confirmation */
              <div>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(198, 168, 120, 0.15)',
                      border: '1px solid var(--color-gold)',
                      color: 'var(--color-gold-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                    DEMONSTRATION CONFIRMATION VOUCHER
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-charcoal)', marginTop: '0.25rem' }}>
                    Stay Simulation Confirmed
                  </h3>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span className="demo-pill">
                      REFERENCE: #AG-RES-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                </div>

                {/* Printable Style Voucher Card */}
                <div
                  style={{
                    backgroundColor: 'var(--color-ivory-warm)',
                    border: '1px dashed var(--color-gold)',
                    borderRadius: '2px',
                    padding: '2rem',
                    marginBottom: '2rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(198, 168, 120, 0.3)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-charcoal)' }}>
                        AURELIA GRAND
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-taupe)' }}>
                        New Delhi • Sanctuary of Timeless Hospitality
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-taupe)', textTransform: 'uppercase' }}>
                        STATUS
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--color-gold-dark)', fontSize: '0.88rem' }}>
                        DEMO CONFIRMED
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', fontSize: '0.86rem' }}>
                    <div>
                      <div style={{ color: 'var(--color-taupe)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                        SUITE RESERVED
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                        {selectedSuiteForReservation?.name || 'Deluxe Room'}
                      </div>
                    </div>

                    <div>
                      <div style={{ color: 'var(--color-taupe)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                        STAY DURATION
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                        {data?.nights || 3} Nights ({data?.checkIn || 'Tomorrow'} to {data?.checkOut || '3 Days Later'})
                      </div>
                    </div>

                    <div>
                      <div style={{ color: 'var(--color-taupe)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                        PARTY SIZE
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                        {data?.guests || 2} Guests • {data?.rooms || 1} Suite
                      </div>
                    </div>

                    <div>
                      <div style={{ color: 'var(--color-taupe)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                        SAMPLE SETTLEMENT TOTAL
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                        {formatPrice(
                          (selectedSuiteForReservation?.priceINR || 24000) * (data?.nights || 3),
                          (selectedSuiteForReservation?.priceUSD || 290) * (data?.nights || 3)
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(198, 168, 120, 0.25)', fontSize: '0.75rem', color: 'var(--color-taupe-muted)' }}>
                    * This voucher confirms a successful frontend demonstration interaction. No credit card has been charged, and no real hotel inventory was reserved.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button
                    onClick={() => window.print()}
                    className="btn-outline-dark"
                    style={{ padding: '0.8rem 1.5rem', fontSize: '0.75rem' }}
                  >
                    <Printer size={14} />
                    <span>PRINT DEMO VOUCHER</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="btn-primary"
                    style={{ padding: '0.8rem 1.75rem', fontSize: '0.75rem' }}
                  >
                    <span>RETURN TO HOTEL SITE</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            2. OUR STORY & ARCHITECTURE MODAL
           ========================================================================= */}
        {type === 'story' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                HERITAGE &amp; PROVENANCE
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-charcoal)', margin: '0.35rem 0' }}>
                The Aurelia Grand Chronicle
              </h3>
              <div className="gold-divider" />
            </div>

            <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem', fontSize: '0.94rem', lineHeight: 1.85, color: 'var(--color-charcoal-light)' }}>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85"
                alt="Aurelia Grand Architecture"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '2px', marginBottom: '1.5rem' }}
              />

              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                An Ode To Timeless Architectural Poise
              </h4>
              <p style={{ marginBottom: '1.25rem' }}>
                Aurelia Grand was envisioned as a living tribute to the classical symmetry of regal Indian palatial estates and European mid-century serenity. Resting within acres of scented jasmine courtyards, our design honors noble natural elements: white Makrana marble floors that remain cool underfoot, hand-turned teak balustrades, and sound-dampened acoustic masonry that preserves quietude.
              </p>

              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                The Philosophy of Thoughtful Hospitality
              </h4>
              <p style={{ marginBottom: '1.25rem' }}>
                At Aurelia Grand, service is not an exercise in formality, but an intuitive, anticipatory craft. From our Clefs d'Or concierge cadre to our private dedicated suite butlers, our hosts are trained in the understated art of being present without ever intruding.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--color-ivory-warm)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  padding: '1.5rem',
                  borderRadius: '2px',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-charcoal)' }}>
                  "We believe that the highest luxury in modern life is not more objects, but deep calm, time held in stillness, and memories that linger forever."
                </div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', marginTop: '0.75rem' }}>
                  — The Aurelia Grand Curators &amp; Architects
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={onClose} className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
                <span>RETURN TO EXPLORATION</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. TABLE RESERVATION DEMO MODAL
           ========================================================================= */}
        {type === 'dining' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                GASTRONOMIC RESERVATIONS
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: 'var(--color-charcoal)' }}>
                Reserve A Table at L'Aurelia
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-taupe-muted)', marginTop: '0.35rem' }}>
                Experience Michelin-caliber gastronomy and rare vintage pairings.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-ivory-warm)',
                border: '1px solid rgba(198, 168, 120, 0.3)',
                padding: '1.75rem',
                borderRadius: '2px',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>DINING VENUE</label>
                  <select style={{ width: '100%', padding: '0.65rem', border: '1px solid rgba(198, 168, 120, 0.3)', borderRadius: '2px', marginTop: '4px' }}>
                    <option>L'Aurelia Grand Salon</option>
                    <option>Candlelit Courtyard Terrace</option>
                    <option>Subterranean Sommelier Vault</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>PARTY SIZE</label>
                  <select style={{ width: '100%', padding: '0.65rem', border: '1px solid rgba(198, 168, 120, 0.3)', borderRadius: '2px', marginTop: '4px' }}>
                    <option>2 Guests (Intimate Table)</option>
                    <option>4 Guests</option>
                    <option>6 Guests (Private Alcove)</option>
                    <option>8+ Guests (Chef's Table)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>SPECIAL DIETARY REQUESTS</label>
                <input
                  type="text"
                  placeholder="e.g. Vegetarian tasting pairing, truffle preference, anniversary seating..."
                  style={{ width: '100%', padding: '0.65rem', border: '1px solid rgba(198, 168, 120, 0.3)', borderRadius: '2px', marginTop: '4px' }}
                />
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => {
                  alert('Demo Table Reservation Simulated! Our Maître d\' will reserve your preferred seating upon arrival.');
                  onClose();
                }}
                className="btn-primary"
                style={{ padding: '0.9rem 2.2rem' }}
              >
                <Utensils size={15} />
                <span>CONFIRM DEMO TABLE RESERVATION</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            4. INQUIRY CONFIRMATION MODAL
           ========================================================================= */}
        {type === 'inquiry' && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(198, 168, 120, 0.15)',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle2 size={30} />
            </div>

            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              INQUIRY RECEIVED IN CONFIDENCE
            </span>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: 'var(--color-charcoal)', margin: '0.35rem 0 1rem' }}>
              Thank You, {data?.name || 'Valued Guest'}
            </h3>

            <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Your confidential inquiry regarding <strong>{data?.inquiryType || 'Your Stay'}</strong> has been simulated successfully. In a production environment, our senior concierge would respond within four hours.
            </p>

            <div
              style={{
                backgroundColor: 'var(--color-ivory-warm)',
                border: '1px dashed var(--color-gold)',
                padding: '1.25rem',
                borderRadius: '2px',
                display: 'inline-block',
                marginBottom: '2rem'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: 'var(--color-taupe)', textTransform: 'uppercase' }}>
                INQUIRY REFERENCE NUMBER
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                {data?.referenceNumber || 'AG-894721'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-taupe-muted)', marginTop: '4px' }}>
                Logged on {data?.timestamp || 'Today'}
              </div>
            </div>

            <div>
              <button onClick={onClose} className="btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
                <span>CLOSE &amp; CONTINUE EXPLORING</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
