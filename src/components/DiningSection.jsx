import React, { useState } from 'react';
import { Utensils, Wine, Clock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DINING_MENUS } from '../data/hotelData';

export default function DiningSection({ onOpenTableReservation }) {
  const [activeTab, setActiveTab] = useState('tasting');

  const menuTabs = [
    { id: 'breakfast', label: 'Morning & Boulangerie' },
    { id: 'tasting', label: 'Signature Tasting Menu' },
    { id: 'evening', label: 'Evening A La Carte' },
    { id: 'cellar', label: 'The Reserve Cellar' },
  ];

  const diningPhoto1 = "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85";
  const diningPhoto2 = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85";

  return (
    <section id="dining" className="section-padding bg-ivory" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">GASTRONOMIC MASTERY</span>
          <h2 className="section-title">
            EXCEPTIONAL TASTE. BEAUTIFULLY PRESENTED.
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
            At L'Aurelia, culinary heritage merges with contemporary mastery. From organic sunlit breakfasts to candlelit seven-course symphonies paired with premier crus.
          </p>
        </div>

        {/* Narrative & Visuals Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          {/* Dual Staggered Visual Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(198, 168, 120, 0.3)',
                height: '420px'
              }}
            >
              <img
                src={diningPhoto1}
                alt="L'Aurelia Grand Dining Room"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Overlapping Plated Dish Inset */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-1.5rem',
                width: '55%',
                maxWidth: '280px',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-dark)',
                border: '3px solid var(--color-ivory)'
              }}
            >
              <img
                src={diningPhoto2}
                alt="Artisan culinary dish"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Gastronomy Pillars Text */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Breakfast Pillar */}
              <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                  07:00 — 10:30
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: '0.25rem 0 0.5rem', color: 'var(--color-charcoal)' }}>
                  The Morning Harvest &amp; Boulangerie
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-charcoal-light)' }}>
                  Wake to warm hand-laminated saffron brioche, cold-pressed estate juices, single-origin Assam teas, and farm-fresh organic truffled eggs served in our sunlit courtyard conservatory.
                </p>
              </div>

              {/* Signature Dishes Pillar */}
              <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                  ALL-DAY &amp; LUNCH
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: '0.25rem 0 0.5rem', color: 'var(--color-charcoal)' }}>
                  Signature Heritage Creations
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-charcoal-light)' }}>
                  Celebrated culinary signatures honoring ancient culinary manuscripts: Dum Pukht slow-cooked aromatic biryanis, handmade white truffle tagliolini, and delicate Valrhona grand cru confectionery.
                </p>
              </div>

              {/* Evening Dining Pillar */}
              <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                  19:00 — 23:30
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: '0.25rem 0 0.5rem', color: 'var(--color-charcoal)' }}>
                  Candlelit Evening Gastronomy
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-charcoal-light)' }}>
                  A multisensory twilight journey accompanied by soft live acoustic strings, bespoke tableside flambé preparations, and pairings from our subterranean temperature-controlled cellar.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenTableReservation}
                  className="btn-primary"
                  style={{ marginTop: '0.5rem' }}
                >
                  <Utensils size={15} />
                  <span>RESERVE A DINING TABLE</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Sample Menus Showcase */}
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid rgba(198, 168, 120, 0.25)',
            borderRadius: '2px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(198, 168, 120, 0.2)',
              paddingBottom: '1.5rem'
            }}
          >
            <div>
              <span className="eyebrow eyebrow-dark">SAMPLE TASTING PORTFOLIO</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-charcoal)' }}>
                Curated Culinary Selections
              </h3>
            </div>

            {/* Menu Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    backgroundColor: activeTab === tab.id ? 'var(--color-charcoal)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                    border: '1px solid',
                    borderColor: activeTab === tab.id ? 'var(--color-charcoal)' : 'rgba(198, 168, 120, 0.35)',
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {DINING_MENUS[activeTab]?.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-ivory-soft)',
                  border: '1px solid rgba(198, 168, 120, 0.15)',
                  borderRadius: '2px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
                    {item.name}
                  </h4>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold-dark)', fontWeight: 600, flexShrink: 0 }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-charcoal-light)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sample Disclaimer Footer */}
          <div
            style={{
              marginTop: '2rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(198, 168, 120, 0.15)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.75rem',
              color: 'var(--color-taupe)'
            }}
          >
            <span>* Editable sample menus. Dietary accommodations &amp; private wine cellaring available upon request.</span>
            <span className="demo-pill">DEMONSTRATION DINING CARD</span>
          </div>

        </div>

      </div>
    </section>
  );
}
