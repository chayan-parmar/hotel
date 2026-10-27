import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Compass, Clock } from 'lucide-react';

export default function WelcomeSection({ onOpenStoryModal }) {
  const architecturalImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85";

  return (
    <section id="story" className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Narrative & Philosophy */}
          <div>
            <span className="eyebrow eyebrow-dark">OUR PHILOSOPHY</span>
            
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                marginBottom: '1.5rem',
                lineHeight: 1.18
              }}
            >
              A PLACE TO ARRIVE. <br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>
                A PLACE TO BELONG.
              </span>
            </h2>

            <div 
              style={{
                width: '48px',
                height: '1px',
                backgroundColor: 'var(--color-gold)',
                marginBottom: '1.75rem'
              }}
            />

            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: 'var(--color-charcoal-light)',
                marginBottom: '1.25rem'
              }}
            >
              Conceived as a tranquil private estate away from the city's ceaseless momentum, Aurelia Grand is guided by the art of unobtrusive, thoughtful hospitality. Every archway, tranquil water pavilion, and sunlit corridor has been composed to inspire stillness.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.8,
                color: 'var(--color-taupe-muted)',
                marginBottom: '2rem'
              }}
            >
              Here, luxury is not measured in loud ornamentation, but in the discreet warmth of our butler care, the quiet cadence of morning birdsong over the courtyard, and the tactile perfection of natural linens and hand-carved stone.
            </p>

            {/* Key Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2.5rem',
                borderTop: '1px solid rgba(198, 168, 120, 0.25)',
                paddingTop: '1.5rem'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold-dark)', fontWeight: 500 }}>
                  48
                </div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                  Bespoke Suites
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold-dark)', fontWeight: 500 }}>
                  1,200 m²
                </div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                  Sanctuary Spa
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold-dark)', fontWeight: 500 }}>
                  3 Venues
                </div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                  Michelin Gastronomy
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-gold-dark)', fontWeight: 500 }}>
                  24/7 Care
                </div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                  Dedicated Butler
                </div>
              </div>
            </div>

            {/* CTA to Open Story Modal */}
            <button
              onClick={onOpenStoryModal}
              className="btn-link-gold"
              style={{ fontSize: '0.82rem' }}
            >
              <span>DISCOVER OUR STORY &amp; ARCHITECTURE</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Right Column: Architectural Photography with Luxury Frame */}
          <div style={{ position: 'relative' }}>
            <div className="luxury-frame" style={{ maxWidth: '520px', margin: '0 auto' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <img
                  src={architecturalImage}
                  alt="Aurelia Grand Architecture and Reflection Pavilion"
                  style={{
                    width: '100%',
                    height: '560px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Floating Architectural Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(198, 168, 120, 0.3)',
                    padding: '1.25rem 1.5rem',
                    color: 'var(--color-ivory)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)'
                    }}
                  >
                    THE HERITAGE PAVILION
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      color: 'var(--color-ivory)',
                      marginTop: '0.25rem'
                    }}
                  >
                    Symmetry, Serenity &amp; Reflection
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
