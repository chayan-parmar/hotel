import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Send, Check, Sparkles } from 'lucide-react';
import { HOTEL_INFO, NAVIGATION_LINKS } from '../data/hotelData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-charcoal-deep)',
        color: 'var(--color-ivory)',
        borderTop: '1px solid rgba(198, 168, 120, 0.25)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(198, 168, 120, 0.15)'
          }}
        >
          {/* Column 1: Brand Wordmark & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  border: '1px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  letterSpacing: '0.05em'
                }}
              >
                AG
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', letterSpacing: '0.2em', color: 'var(--color-ivory)', lineHeight: 1 }}>
                  AURELIA GRAND
                </div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.25em', color: 'var(--color-gold)', marginTop: '3px' }}>
                  HOTEL &amp; PRIVATE RESIDENCES
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.7, color: 'var(--color-taupe-light)', marginBottom: '1.5rem' }}>
              An intimate sanctuary where classical grandeur meets modern acoustic calm, culinary poetry, and bespoke hospitality.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href="#hero"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Instagram"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = 'rgba(198, 168, 120, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="#hero"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Facebook"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = 'rgba(198, 168, 120, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="#hero"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = 'rgba(198, 168, 120, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--color-taupe-light)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-taupe-light)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Concierge */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Direct Concierge
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.84rem', color: 'var(--color-taupe-light)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'inherit' }}>
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${HOTEL_INFO.conciergeEmail}`} style={{ color: 'inherit' }}>
                  {HOTEL_INFO.conciergeEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter Demo */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              Aurelia Gazettes
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-taupe)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Receive seasonal cultural gazettes, private dining invitations, and curated retreat previews.
            </p>

            {newsletterSubscribed ? (
              <div
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'rgba(198, 168, 120, 0.15)',
                  border: '1px solid var(--color-gold)',
                  borderRadius: '2px',
                  color: 'var(--color-gold-light)',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Check size={16} color="var(--color-gold)" />
                <span>Enrolled in Aurelia Privileges (Demo).</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      flexGrow: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(198, 168, 120, 0.3)',
                      color: 'var(--color-ivory)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.8rem',
                      borderRadius: '2px',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: '0.65rem 1rem', fontSize: '0.72rem' }}
                  >
                    <Send size={13} />
                  </button>
                </div>
                {newsletterError && (
                  <span style={{ color: '#ff7b72', fontSize: '0.72rem', marginTop: '4px', display: 'block' }}>
                    {newsletterError}
                  </span>
                )}
                <span style={{ fontSize: '0.68rem', color: 'var(--color-taupe)', display: 'block', marginTop: '6px' }}>
                  * Demonstration newsletter form.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer & Back to Top */}
        <div
          style={{
            paddingTop: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.78rem',
            color: 'var(--color-taupe)'
          }}
        >
          <div>
            <div>
              &copy; {new Date().getFullYear()} AURELIA GRAND HOTEL &amp; RESIDENCES. ALL RIGHTS RESERVED.
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(166, 154, 136, 0.8)', marginTop: '4px' }}>
              A Static Frontend Luxury Hospitality Portfolio Project. No live bookings or transactions.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Demo Notice: Privacy policy placeholder.')}>
              Privacy Code
            </span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Demo Notice: Terms of hospitality placeholder.')}>
              Terms of Hospitality
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'none',
                border: '1px solid rgba(198, 168, 120, 0.3)',
                color: 'var(--color-gold)',
                padding: '0.4rem 0.85rem',
                borderRadius: '2px',
                cursor: 'pointer',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
