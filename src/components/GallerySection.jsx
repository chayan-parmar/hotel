import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/hotelData';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'architecture', label: 'Architecture & Grounds' },
    { id: 'rooms', label: 'Suites & Interiors' },
    { id: 'dining', label: 'Dining' },
    { id: 'wellness', label: 'Wellness & Pools' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="section-padding bg-ivory" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">VISUAL PORTFOLIO</span>
          <h2 className="section-title">
            MOMENTS IN FOCUS
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginTop: '1.25rem' }}>
            A curated visual narrative of our architectural lines, bespoke living salons, private gardens, and evening atmospheres.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null);
                }}
                style={{
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'transparent',
                  color: selectedCategory === cat.id ? 'var(--color-ivory)' : 'var(--color-charcoal)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'rgba(198, 168, 120, 0.4)',
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                height: index % 3 === 0 ? '380px' : '300px',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-charcoal-dark)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(198, 168, 120, 0.2)'
              }}
              className="gallery-item-card"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(21, 23, 20, 0.88) 0%, rgba(21, 23, 20, 0.3) 60%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  color: 'var(--color-ivory)'
                }}
                className="gallery-hover-overlay"
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(198, 168, 120, 0.2)',
                      border: '1px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold)'
                    }}
                  >
                    <Eye size={16} />
                  </div>
                </div>

                <div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)'
                    }}
                  >
                    {item.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: 'var(--color-ivory)',
                      margin: '0.2rem 0 0.35rem'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(247, 244, 238, 0.8)' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="modal-backdrop"
          onClick={() => setLightboxIndex(null)}
          style={{ padding: '1rem' }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1080px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter & Close */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                color: 'var(--color-ivory)',
                marginBottom: '0.5rem'
              }}
            >
              <div style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
                IMAGE {lightboxIndex + 1} OF {filteredItems.length}
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(198, 168, 120, 0.4)',
                  color: 'var(--color-ivory)',
                  padding: '0.4rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Lightbox Image with Arrows */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  maxHeight: '70vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '2px',
                  boxShadow: 'var(--shadow-dark)',
                  border: '1px solid rgba(198, 168, 120, 0.3)'
                }}
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(21, 23, 20, 0.75)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-ivory)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} color="var(--color-gold)" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(21, 23, 20, 0.75)',
                  border: '1px solid var(--color-gold)',
                  color: 'var(--color-ivory)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
                aria-label="Next image"
              >
                <ChevronRight size={22} color="var(--color-gold)" />
              </button>
            </div>

            {/* Caption & Title Footer */}
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '1rem',
                color: 'var(--color-ivory)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: 0, color: 'var(--color-ivory)' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-taupe-light)', marginTop: '0.35rem' }}>
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Gallery CSS for hover */}
      <style>{`
        .gallery-item-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>
  );
}
