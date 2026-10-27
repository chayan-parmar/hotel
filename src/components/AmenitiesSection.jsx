import React from 'react';
import { 
  Wifi, 
  Dumbbell, 
  Waves, 
  Sparkles, 
  UtensilsCrossed, 
  BellRing, 
  Briefcase, 
  Car 
} from 'lucide-react';
import { AMENITIES_DATA } from '../data/hotelData';

const ICON_MAP = {
  Wifi: Wifi,
  Dumbbell: Dumbbell,
  Waves: Waves,
  Sparkles: Sparkles,
  UtensilsCrossed: UtensilsCrossed,
  BellRing: BellRing,
  Briefcase: Briefcase,
  Car: Car,
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding bg-charcoal-deep" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'var(--color-gold)' }}>THOUGHTFUL HOSPITALITY</span>
          <h2 className="section-title light">
            DISTINGUISHED AMENITIES
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle light" style={{ marginTop: '1.25rem' }}>
            Every convenience at Aurelia Grand is designed to provide effortless comfort, wellness, and peace of mind throughout your stay.
          </p>
        </div>

        {/* 8 Amenities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {AMENITIES_DATA.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(37, 39, 35, 0.55)',
                  border: '1px solid rgba(198, 168, 120, 0.22)',
                  borderRadius: '2px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = 'rgba(45, 48, 43, 0.75)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198, 168, 120, 0.22)';
                  e.currentTarget.style.backgroundColor = 'rgba(37, 39, 35, 0.55)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon in refined gold frame */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '2px',
                    border: '1px solid var(--color-gold)',
                    backgroundColor: 'rgba(198, 168, 120, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: 'var(--color-ivory)',
                    marginBottom: '0.5rem',
                    fontWeight: 400
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    lineHeight: 1.65,
                    color: 'rgba(247, 244, 238, 0.75)'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editable Sample Note */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <span className="demo-pill">
            SAMPLE HOTEL AMENITIES • ALL AMENITY PRIVILEGES ARE INCLUDED FOR RESIDENT GUESTS
          </span>
        </div>

      </div>
    </section>
  );
}
