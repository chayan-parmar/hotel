import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/hotelData';

export default function Experiences({ onOpenInquiryWithTopic }) {
  return (
    <section id="experiences" className="section-padding bg-charcoal" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>CURATED PURSUITS</span>
          <h2 className="section-title light">
            SIGNATURE EXPERIENCES
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle light" style={{ marginTop: '1.25rem' }}>
            From candlelit sensory dining to ancient restorative bath rituals, every experience at Aurelia Grand is designed to linger in memory.
          </p>
        </div>

        {/* 4 Experience Blocks in Refined 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {EXPERIENCES_DATA.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                backgroundColor: 'rgba(32, 34, 30, 0.85)',
                border: '1px solid rgba(198, 168, 120, 0.22)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.22)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Large Carefully Cropped Image */}
              <div
                style={{
                  position: 'relative',
                  height: '290px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-charcoal-deep)'
                }}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(21, 23, 20, 0.75) 0%, transparent 60%)'
                  }}
                />

                {/* Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.85)',
                    border: '1px solid var(--color-gold-border)',
                    color: 'var(--color-gold-light)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Sparkles size={11} color="var(--color-gold)" />
                  <span>{exp.badge}</span>
                </div>
              </div>

              {/* Text & Understated Link */}
              <div style={{ padding: '2rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                    marginBottom: '0.35rem'
                  }}
                >
                  {exp.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    color: 'var(--color-ivory)',
                    marginBottom: '0.85rem',
                    fontWeight: 400
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'rgba(247, 244, 238, 0.82)',
                    marginBottom: '1rem',
                    flexGrow: 1
                  }}
                >
                  {exp.description}
                </p>

                <p
                  style={{
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: 'var(--color-taupe)',
                    marginBottom: '1.5rem',
                    fontStyle: 'italic'
                  }}
                >
                  "{exp.details}"
                </p>

                {/* Timing and CTA link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(198, 168, 120, 0.18)',
                    fontSize: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-taupe-light)' }}>
                    <Clock size={13} color="var(--color-gold)" />
                    <span>{exp.timing}</span>
                  </div>

                  <button
                    onClick={() => onOpenInquiryWithTopic(exp.title)}
                    className="btn-link-gold"
                    style={{
                      color: 'var(--color-gold-light)',
                      borderColor: 'var(--color-gold)',
                      fontSize: '0.72rem'
                    }}
                  >
                    <span>ENQUIRE EXPERIENCE</span>
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
