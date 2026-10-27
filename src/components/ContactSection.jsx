import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function ContactSection({ onInquirySuccess, prefilledTopic = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: prefilledTopic || 'General Inquiry',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update inquiryType if prefilledTopic changes
  React.useEffect(() => {
    if (prefilledTopic) {
      setFormData((prev) => ({ ...prev, inquiryType: prefilledTopic }));
    }
  }, [prefilledTopic]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details or questions regarding your inquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceNumber = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
      onInquirySuccess({
        ...formData,
        referenceNumber,
        timestamp: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'General Inquiry',
        date: '',
        message: ''
      });
      setErrors({});
    }, 700);
  };

  return (
    <section id="contact" className="section-padding bg-charcoal-dark" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>CONCIERGE &amp; INQUIRIES</span>
          <h2 className="section-title light">
            DISCREET ATTENTION TO EVERY DETAIL
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle light" style={{ marginTop: '1.25rem' }}>
            Whether arranging a bespoke stay, private event, or reserving our dining tables, our Clefs d'Or concierge team is at your continuous service.
          </p>
        </div>

        {/* Content Grid: Contact Details & Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Concierge Touchpoints */}
          <div style={{ color: 'var(--color-ivory)' }}>
            <div
              style={{
                backgroundColor: 'rgba(37, 39, 35, 0.65)',
                border: '1px solid rgba(198, 168, 120, 0.25)',
                borderRadius: '2px',
                padding: '2.5rem',
                marginBottom: '2rem'
              }}
            >
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                PRIVATE BUTLER &amp; DESK
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-ivory)', margin: '0.35rem 0 1.25rem' }}>
                Reach The Sanctuary
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(247, 244, 238, 0.8)', marginBottom: '2rem' }}>
                Our hospitality ambassadors are available 24 hours daily to assist with reservations, custom itineraries, private aviation arrangements, and culinary preferences.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--color-ivory)',
                    textDecoration: 'none',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.5)',
                    border: '1px solid rgba(198, 168, 120, 0.2)',
                    borderRadius: '2px',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.2)'}
                >
                  <div style={{ color: 'var(--color-gold)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-taupe-light)' }}>
                      MAIN DESK &amp; RESERVATIONS
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                      {HOTEL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.conciergeEmail}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--color-ivory)',
                    textDecoration: 'none',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.5)',
                    border: '1px solid rgba(198, 168, 120, 0.2)',
                    borderRadius: '2px',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.2)'}
                >
                  <div style={{ color: 'var(--color-gold)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-taupe-light)' }}>
                      CONCIERGE INQUIRIES
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                      {HOTEL_INFO.conciergeEmail}
                    </div>
                  </div>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--color-ivory)',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.5)',
                    border: '1px solid rgba(198, 168, 120, 0.2)',
                    borderRadius: '2px'
                  }}
                >
                  <div style={{ color: 'var(--color-gold)' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-taupe-light)' }}>
                      CONCIERGE HOURS
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                      24 Hours • 7 Days a Week
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-pill" style={{ width: '100%', justifyContent: 'center' }}>
              DEMONSTRATION CONTACT INTERFACE • NO LIVE EMAILS TRANSMITTED
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            style={{
              backgroundColor: 'rgba(30, 32, 28, 0.88)',
              border: '1px solid var(--color-gold-border)',
              borderRadius: '2px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-dark)',
              position: 'relative'
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                CONFIDENTIAL CORRESPONDENCE
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-ivory)', margin: '0.25rem 0' }}>
                Send An Inquiry
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-taupe-light)' }}>
                Please share your stay dates or event preferences. Our team will respond with a tailored proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-taupe-light)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Alistair Vance or Dr. Ananya Sen"
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(21, 23, 20, 0.7)',
                      border: errors.name ? '1px solid #ff7b72' : '1px solid rgba(198, 168, 120, 0.3)',
                      color: 'var(--color-ivory)',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.88rem',
                      borderRadius: '2px',
                      outline: 'none'
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: '#ff7b72', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-taupe-light)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="patron@domain.com"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(21, 23, 20, 0.7)',
                        border: errors.email ? '1px solid #ff7b72' : '1px solid rgba(198, 168, 120, 0.3)',
                        color: 'var(--color-ivory)',
                        padding: '0.75rem 0.9rem',
                        fontSize: '0.88rem',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                    {errors.email && (
                      <span style={{ color: '#ff7b72', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-taupe-light)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      PHONE / WHATSAPP
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98111 00000"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(21, 23, 20, 0.7)',
                        border: '1px solid rgba(198, 168, 120, 0.3)',
                        color: 'var(--color-ivory)',
                        padding: '0.75rem 0.9rem',
                        fontSize: '0.88rem',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Inquiry Type & Desired Date */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-taupe-light)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      INQUIRY NATURE
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(21, 23, 20, 0.7)',
                        border: '1px solid rgba(198, 168, 120, 0.3)',
                        color: 'var(--color-ivory)',
                        padding: '0.75rem 0.9rem',
                        fontSize: '0.88rem',
                        borderRadius: '2px',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Suite & Room Reservation">Suite &amp; Room Reservation</option>
                      <option value="Private Gala or Wedding">Private Gala or Wedding</option>
                      <option value="Dining & Table Booking">Dining &amp; Table Booking</option>
                      <option value="Spa & Wellness Rituals">Spa &amp; Wellness Rituals</option>
                      <option value="Executive Board Retreat">Executive Board Retreat</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="contact-date"
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--color-taupe-light)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      PREFERRED TIMEFRAME
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(21, 23, 20, 0.7)',
                        border: '1px solid rgba(198, 168, 120, 0.3)',
                        color: 'var(--color-ivory)',
                        padding: '0.75rem 0.9rem',
                        fontSize: '0.88rem',
                        borderRadius: '2px',
                        outline: 'none',
                        colorScheme: 'dark'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-taupe-light)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    MESSAGE / SPECIAL PREFERENCES *
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Kindly share any dietary inclinations, flight arrival details, celebration themes, or suite preferences..."
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(21, 23, 20, 0.7)',
                      border: errors.message ? '1px solid #ff7b72' : '1px solid rgba(198, 168, 120, 0.3)',
                      color: 'var(--color-ivory)',
                      padding: '0.75rem 0.9rem',
                      fontSize: '0.88rem',
                      borderRadius: '2px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && (
                    <span style={{ color: '#ff7b72', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem' }}
                  id="submit-inquiry-btn"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'TRANSMITTING CONFIDENTIAL INQUIRY...' : 'SUBMIT CONFIDENTIAL INQUIRY'}</span>
                </button>

              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
