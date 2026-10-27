import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/hotelData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-ivory-warm" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">PATRON ACCLAIM</span>
          <h2 className="section-title">
            MEMORABLE BY DESIGN.
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
            Reflections from patrons who have experienced our quiet courtyards, gastronomic artistry, and intuitive hospitality.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span className="demo-pill">
              DEMONSTRATION CONTENT • FICTIONAL EXPERIENCES FOR DESIGN PORTFOLIO
            </span>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid rgba(198, 168, 120, 0.35)',
                borderRadius: '2px',
                padding: '2.5rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Gold Quote Icon */}
              <div
                style={{
                  color: 'var(--color-gold)',
                  marginBottom: '1.25rem',
                  opacity: 0.9
                }}
              >
                <Quote size={32} />
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>

              {/* Quote Body */}
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  lineHeight: 1.7,
                  color: 'var(--color-charcoal)',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                  flexGrow: 1
                }}
              >
                "{t.quote}"
              </p>

              {/* Author & Suite Stayed */}
              <div style={{ borderTop: '1px solid rgba(198, 168, 120, 0.25)', paddingTop: '1.25rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-charcoal)' }}>
                  {t.author}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-taupe-muted)', marginTop: '2px' }}>
                  {t.role} • {t.location}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold-dark)',
                    backgroundColor: 'rgba(198, 168, 120, 0.12)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px'
                  }}
                >
                  Stayed in: {t.stayedIn}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Demonstration Notice */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-taupe-muted)', letterSpacing: '0.04em' }}>
            Note: The reviews above are illustrative editorial examples created exclusively for this hotel design demonstration.
          </p>
        </div>

      </div>
    </section>
  );
}
