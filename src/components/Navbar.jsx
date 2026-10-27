import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Globe, Sparkles } from 'lucide-react';
import { HOTEL_INFO, NAVIGATION_LINKS } from '../data/hotelData';

export default function Navbar({ onOpenBookingModal, activeCurrency, onToggleCurrency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(25, 27, 24, 0.94)' : 'rgba(25, 27, 24, 0.35)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(198, 168, 120, 0.25)' : '1px solid rgba(255, 255, 255, 0.12)',
          padding: isScrolled ? '0.85rem 0' : '1.35rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo & Monogram */}
          <a 
            href="#hero" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}
          >
            <div 
              style={{
                width: '38px',
                height: '38px',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                letterSpacing: '0.05em',
                background: 'rgba(198, 168, 120, 0.1)'
              }}
            >
              AG
            </div>
            <div>
              <div 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.22em',
                  color: 'var(--color-ivory)',
                  fontWeight: 500,
                  lineHeight: 1
                }}
              >
                AURELIA GRAND
              </div>
              <div 
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.28em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  marginTop: '3px'
                }}
              >
                HOTEL &amp; SUITES
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--color-ivory)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '4px 0',
                  opacity: 0.9,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-gold)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-ivory)';
                  e.currentTarget.style.opacity = '0.9';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              title={`Switch currency to ${activeCurrency === 'INR' ? 'USD ($)' : 'INR (₹)'}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(198, 168, 120, 0.3)',
                color: 'var(--color-gold-light)',
                padding: '0.45rem 0.75rem',
                borderRadius: '2px',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.3)'}
            >
              <Globe size={13} />
              <span>{activeCurrency}</span>
            </button>

            {/* Check Availability CTA */}
            <button
              onClick={() => onOpenBookingModal()}
              className="btn-primary"
              style={{
                padding: '0.7rem 1.4rem',
                fontSize: '0.74rem',
                display: 'none'
              }}
              id="nav-availability-btn"
            >
              <Calendar size={14} />
              <span>CHECK AVAILABILITY</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'none',
                border: '1px solid rgba(198, 168, 120, 0.4)',
                color: 'var(--color-ivory)',
                padding: '0.5rem',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 899,
            backgroundColor: 'rgba(21, 23, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6rem 2rem 3rem',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                SANCTUARY OF ELEGANCE
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-ivory)' }}>
                AURELIA GRAND
              </div>
            </div>

            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-ivory)',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid rgba(198, 168, 120, 0.12)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => {
                closeMenu();
                onOpenBookingModal();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '1rem' }}
            >
              <Calendar size={16} />
              <span>CHECK AVAILABILITY</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="btn-secondary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <Phone size={15} />
              <span>CONCIERGE: {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (min-width: 992px) {
          #nav-availability-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          #mobile-menu-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
