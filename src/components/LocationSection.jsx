import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Compass, ExternalLink, Car } from 'lucide-react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';

export default function LocationSection() {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  return (
    <section id="location" className="section-padding bg-ivory" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">DESTINATION &amp; ACCESS</span>
          <h2 className="section-title">
            AN ENVIABLE SANCTUARY
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
            Positioned within the quiet heritage perimeter of the Royal Civil Enclave, offering discrete privacy minutes from cultural landmarks and diplomatic quarters.
          </p>
        </div>

        {/* Location Details & Map Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Address, Timing, Nearby Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Hotel Address Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-ivory-warm)',
                  border: '1px solid rgba(198, 168, 120, 0.3)',
                  borderRadius: '2px',
                  padding: '2rem',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <MapPin size={22} color="var(--color-gold-dark)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>
                      ESTATE ADDRESS (SAMPLE CONTENT)
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-charcoal)', margin: '0.2rem 0 0.5rem' }}>
                      {HOTEL_INFO.address}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-taupe-muted)' }}>
                      Private gated entrance via the North Gate security pavilion. Valet parking on arrival.
                    </p>
                  </div>
                </div>

                {/* Timings & Airport Transit */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    borderTop: '1px solid rgba(198, 168, 120, 0.2)',
                    paddingTop: '1.25rem'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>
                      CHECK-IN TIME
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-charcoal)', marginTop: '2px' }}>
                      {HOTEL_INFO.checkInTime}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}>
                      CHECK-OUT TIME
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--color-charcoal)', marginTop: '2px' }}>
                      {HOTEL_INFO.checkOutTime}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(198, 168, 120, 0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-charcoal)' }}>
                  <Car size={15} color="var(--color-gold-dark)" />
                  <span><strong>Airport Chauffeur:</strong> {HOTEL_INFO.airportDistance}</span>
                </div>
              </div>

              {/* Nearby Cultural Attractions */}
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: 'var(--color-charcoal)',
                    marginBottom: '1rem'
                  }}
                >
                  Illustrative Nearby Attractions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {NEARBY_ATTRACTIONS.map((att, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: 'var(--color-white)',
                        border: '1px solid rgba(198, 168, 120, 0.2)',
                        borderRadius: '2px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.86rem', color: 'var(--color-charcoal)' }}>
                          {att.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-taupe-muted)' }}>
                          {att.desc}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-gold-dark)' }}>
                          {att.distance}
                        </span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-taupe)' }}>
                          {att.driveTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Directions Action */}
            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://maps.google.com/?q=New+Delhi+Luxury+Hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <Navigation size={15} />
                <span>OPEN NAVIGATION IN GOOGLE MAPS</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Luxury Map View & Estate Grounds */}
          <div
            style={{
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(198, 168, 120, 0.3)',
              backgroundColor: 'var(--color-charcoal-dark)',
              position: 'relative',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Map Header */}
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(21, 23, 20, 0.95)',
                borderBottom: '1px solid rgba(198, 168, 120, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--color-ivory)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={16} color="var(--color-gold)" />
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  ESTATE GROUNDS &amp; PERIMETER
                </span>
              </div>
              <span className="demo-pill">SAMPLE MAP COORDINATES</span>
            </div>

            {/* Stylized Visual Map Representation */}
            <div
              style={{
                flexGrow: 1,
                position: 'relative',
                background: 'radial-gradient(circle at 50% 50%, #2b2e29 0%, #171916 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '2rem'
              }}
            >
              {/* Map Graphic Simulation */}
              <svg width="100%" height="320" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.85 }}>
                {/* Grid Lines */}
                <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="500" y2="160" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                <line x1="0" y1="240" x2="500" y2="240" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                <line x1="120" y1="0" x2="120" y2="320" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                <line x1="260" y1="0" x2="260" y2="320" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                <line x1="400" y1="0" x2="400" y2="320" stroke="rgba(198, 168, 120, 0.12)" strokeDasharray="4 4" />
                
                {/* Roads / Avenues */}
                <path d="M 20 280 C 120 270, 220 220, 260 160 C 300 100, 380 60, 480 50" stroke="rgba(198, 168, 120, 0.3)" strokeWidth="8" strokeLinecap="round" />
                <path d="M 60 40 C 140 100, 260 160, 360 200 C 420 220, 460 280, 490 300" stroke="rgba(198, 168, 120, 0.2)" strokeWidth="5" strokeLinecap="round" />
                
                {/* Surrounding Park Greenery */}
                <circle cx="100" cy="110" r="45" fill="rgba(80, 100, 70, 0.2)" stroke="rgba(198, 168, 120, 0.2)" />
                <text x="75" y="115" fill="rgba(247, 244, 238, 0.4)" fontSize="10" letterSpacing="1">ROYAL PARK</text>

                <circle cx="390" cy="220" r="50" fill="rgba(80, 100, 70, 0.2)" stroke="rgba(198, 168, 120, 0.2)" />
                <text x="360" y="225" fill="rgba(247, 244, 238, 0.4)" fontSize="10" letterSpacing="1">GARDENS</text>

                {/* Aurelia Grand Center Pin */}
                <circle cx="260" cy="160" r="32" fill="rgba(198, 168, 120, 0.15)" stroke="var(--color-gold)" strokeWidth="1" />
                <circle cx="260" cy="160" r="10" fill="var(--color-gold)" />
                <circle cx="260" cy="160" r="4" fill="#1C1E1A" />
              </svg>

              {/* Pin Callout Box */}
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '52%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(21, 23, 20, 0.94)',
                  border: '1px solid var(--color-gold)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-lg)',
                  color: 'var(--color-ivory)',
                  textAlign: 'center',
                  minWidth: '220px'
                }}
              >
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                  SANCTUARY LOCATION
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '2px' }}>
                  AURELIA GRAND
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-taupe-light)', marginTop: '4px' }}>
                  28° 36' N, 77° 12' E
                </div>
              </div>
            </div>

            {/* Bottom Map Note */}
            <div
              style={{
                padding: '0.85rem 1.25rem',
                backgroundColor: 'rgba(21, 23, 20, 0.95)',
                borderTop: '1px solid rgba(198, 168, 120, 0.2)',
                fontSize: '0.75rem',
                color: 'var(--color-taupe)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>Complimentary private chauffeur transfer upon arrival at DEL Terminal 3</span>
              <span style={{ color: 'var(--color-gold-light)' }}>Concierge: 24/7 Available</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
