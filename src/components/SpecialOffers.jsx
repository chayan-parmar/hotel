import React from 'react';
import { Tag, Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/hotelData';

export default function SpecialOffers({ onSelectOffer }) {
  return (
    <section id="offers" className="section-padding bg-charcoal" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>CURATED PRIVILEGES</span>
          <h2 className="section-title light">
            EXCLUSIVE RETREAT OFFERS
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle light" style={{ marginTop: '1.25rem' }}>
            Elevate your stay with thoughtfully composed packages designed around leisurely weekends, romantic celebrations, and extended journeys.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span className="demo-pill">
              DEMO OFFERS • EDITABLE PROMOTIONAL EXAMPLES
            </span>
          </div>
        </div>

        {/* 3 Offer Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              style={{
                backgroundColor: 'rgba(30, 32, 28, 0.88)',
                border: '1px solid rgba(198, 168, 120, 0.25)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Photo & Badge */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(21, 23, 20, 0.8) 0%, transparent 60%)'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.88)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-gold-light)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '2px'
                  }}
                >
                  {offer.badge}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '1rem',
                    color: 'var(--color-gold-light)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    backgroundColor: 'rgba(21, 23, 20, 0.7)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px'
                  }}
                >
                  CODE: {offer.code}
                </div>
              </div>

              {/* Offer Body */}
              <div style={{ padding: '2rem 1.75rem 1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                    {offer.tagline}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.65rem',
                      color: 'var(--color-ivory)',
                      margin: '0.3rem 0 0.75rem',
                      fontWeight: 400
                    }}
                  >
                    {offer.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    color: 'rgba(247, 244, 238, 0.8)',
                    marginBottom: '1.5rem'
                  }}
                >
                  {offer.description}
                </p>

                {/* Benefits List */}
                <div style={{ marginBottom: '1.75rem', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-taupe-light)', marginBottom: '0.65rem' }}>
                    SAMPLE PACKAGE INCLUSIONS:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {offer.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.82rem',
                          color: 'var(--color-ivory)'
                        }}
                      >
                        <Check size={14} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => onSelectOffer(offer)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Calendar size={14} />
                  <span>CHECK OFFER AVAILABILITY</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Legal / Demo note */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-taupe)', maxWidth: '650px', margin: '0 auto' }}>
            Offers are subject to seasonal demo allocation. Rates and package inclusions represent editable portfolio examples and do not constitute guaranteed contracts or live inventory.
          </p>
        </div>

      </div>
    </section>
  );
}
