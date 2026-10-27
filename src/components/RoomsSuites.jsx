import React from 'react';
import { Users, Bed, Maximize2, ArrowRight, Sparkles, Check } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

export default function RoomsSuites({ onSelectRoom, activeCurrency }) {
  const formatPrice = (priceINR, priceUSD) => {
    if (activeCurrency === 'USD') {
      return `$${priceUSD.toLocaleString()}`;
    }
    return `₹${priceINR.toLocaleString('en-IN')}`;
  };

  return (
    <section id="rooms" className="section-padding bg-ivory-soft" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">ACCOMMODATIONS &amp; RESIDENCES</span>
          <h2 className="section-title">
            SANCTUARIES OF CALM &amp; GRACE
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
            Each suite is an individually curated haven of understated luxury, featuring custom 400-thread Egyptian linens, Italian marble bathrooms, and acoustic seclusion.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span className="demo-pill">
              SAMPLE RATES IN {activeCurrency} • EDITABLE PORTFOLIO CONTENT
            </span>
          </div>
        </div>

        {/* 4 Room Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="luxury-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              {/* Image Container with subtle hover zoom */}
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-charcoal-dark)'
                }}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Popular or Tagline Pill */}
                {room.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(21, 23, 20, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid var(--color-gold)',
                      color: 'var(--color-gold-light)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Sparkles size={11} color="var(--color-gold)" />
                    <span>SIGNATURE SUITE</span>
                  </div>
                )}

                {/* View Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(21, 23, 20, 0.75)',
                    color: 'var(--color-ivory)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '2px'
                  }}
                >
                  {room.view}
                </div>
              </div>

              {/* Room Card Body */}
              <div style={{ padding: '2rem 1.75rem 1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold-dark)',
                      fontWeight: 600
                    }}
                  >
                    {room.tagline}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.65rem',
                      color: 'var(--color-charcoal)',
                      margin: '0.35rem 0 0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {room.name}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'var(--color-charcoal-light)',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  {room.shortDescription}
                </p>

                {/* Specifications Bar */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem 0',
                    borderTop: '1px solid rgba(198, 168, 120, 0.2)',
                    borderBottom: '1px solid rgba(198, 168, 120, 0.2)',
                    marginBottom: '1.5rem',
                    fontSize: '0.76rem',
                    color: 'var(--color-taupe-muted)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Users size={14} color="var(--color-gold-dark)" />
                    <span>{room.capacity}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Bed size={14} color="var(--color-gold-dark)" />
                    <span>{room.bedType.split(' ')[0]}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Maximize2 size={14} color="var(--color-gold-dark)" />
                    <span>{room.size.split('/')[0].trim()}</span>
                  </div>
                </div>

                {/* Price and CTA footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>
                      FROM
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: 'var(--color-charcoal)'
                        }}
                      >
                        {formatPrice(room.priceINR, room.priceUSD)}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe-muted)' }}>
                        / night
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectRoom(room)}
                    className="btn-outline-dark"
                    style={{
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.72rem'
                    }}
                  >
                    <span>EXPLORE ROOM</span>
                    <ArrowRight size={13} />
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
