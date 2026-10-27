import React, { useState } from 'react';
import { X, Users, Bed, Maximize2, Compass, Check, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function RoomModal({ room, onClose, onBookRoom, activeCurrency }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const formatPrice = (priceINR, priceUSD) => {
    if (activeCurrency === 'USD') {
      return `$${priceUSD.toLocaleString()}`;
    }
    return `₹${priceINR.toLocaleString('en-IN')}`;
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
        style={{ maxWidth: '860px', padding: 0, overflow: 'hidden' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close suite details"
        >
          <X size={18} />
        </button>

        {/* Gallery Carousel Header */}
        <div style={{ position: 'relative', height: '380px', backgroundColor: 'var(--color-charcoal-dark)' }}>
          <img
            src={room.gallery[activeImageIndex] || room.image}
            alt={room.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Dark Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(21, 23, 20, 0.85) 0%, transparent 60%)'
            }}
          />

          {/* Header Info Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '2rem',
              right: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1rem',
              color: 'var(--color-ivory)'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)'
                }}
              >
                {room.tagline}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.2rem',
                  lineHeight: 1.15,
                  margin: '0.2rem 0 0'
                }}
              >
                {room.name}
              </h2>
            </div>

            {/* Thumbnail Selector */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {room.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '48px',
                    height: '36px',
                    padding: 0,
                    border: activeImageIndex === idx ? '2px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: activeImageIndex === idx ? 1 : 0.65
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem 2.25rem', backgroundColor: 'var(--color-ivory)' }}>
          
          {/* Key Specifications Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--color-ivory-warm)',
              border: '1px solid rgba(198, 168, 120, 0.3)',
              borderRadius: '2px',
              marginBottom: '1.75rem',
              fontSize: '0.8rem'
            }}
          >
            <div>
              <div style={{ color: 'var(--color-taupe)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>CAPACITY</div>
              <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                <Users size={14} color="var(--color-gold-dark)" />
                {room.capacity}
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--color-taupe)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>BEDDING</div>
              <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                <Bed size={14} color="var(--color-gold-dark)" />
                {room.bedType}
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--color-taupe)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>DIMENSIONS</div>
              <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                <Maximize2 size={14} color="var(--color-gold-dark)" />
                {room.size}
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--color-taupe)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>OUTLOOK</div>
              <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '2px' }}>
                <Compass size={14} color="var(--color-gold-dark)" />
                {room.view}
              </div>
            </div>
          </div>

          {/* Full Narrative */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                marginBottom: '0.65rem',
                color: 'var(--color-charcoal)'
              }}
            >
              The Experience
            </h4>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.8, color: 'var(--color-charcoal-light)' }}>
              {room.fullDescription}
            </p>
          </div>

          {/* Included Privileges & Amenities */}
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                marginBottom: '0.85rem',
                color: 'var(--color-charcoal)'
              }}
            >
              Curated Suite Privileges
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '0.75rem'
              }}
            >
              {room.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.86rem',
                    color: 'var(--color-charcoal-light)'
                  }}
                >
                  <Check size={16} color="var(--color-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Reservation Action */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(198, 168, 120, 0.3)'
            }}
          >
            <div>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>
                SAMPLE RATE (DEMONSTRATION ONLY)
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: 'var(--color-charcoal)'
                  }}
                >
                  {formatPrice(room.priceINR, room.priceUSD)}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-taupe-muted)' }}>
                  per night + sample luxury tax
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room);
              }}
              className="btn-primary"
              style={{ padding: '0.9rem 2.2rem' }}
            >
              <Calendar size={15} />
              <span>CHECK DATES FOR THIS SUITE</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
