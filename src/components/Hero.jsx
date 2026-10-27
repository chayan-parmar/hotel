import React from 'react';
import { ArrowDown, Sparkles, Compass, BedDouble } from 'lucide-react';

export default function Hero() {
  const heroImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85";

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '8rem',
      }}
    >
      {/* Background Image with Slow Luxury Pan */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          transform: 'scale(1.04)',
          transition: 'transform 10s ease-out',
          zIndex: 0
        }}
      />

      {/* Subtle Dark Luxury Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(21, 23, 20, 0.72) 0%, rgba(21, 23, 20, 0.52) 45%, rgba(21, 23, 20, 0.88) 100%)',
          zIndex: 1
        }}
      />
      
      {/* Subtle Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 120px rgba(0, 0, 0, 0.65)',
          zIndex: 1
        }}
      />

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto',
          color: 'var(--color-ivory)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Small Label / Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'rgba(21, 23, 20, 0.55)',
            border: '1px solid rgba(198, 168, 120, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '0.45rem 1.25rem',
            borderRadius: '2px',
            marginBottom: '1.75rem',
            animation: 'fadeIn 0.8s ease-out'
          }}
        >
          <Sparkles size={13} color="var(--color-gold)" />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-light)'
            }}
          >
            AN EXCEPTIONAL STAY
          </span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)' }} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-ivory)',
              opacity: 0.85
            }}
          >
            NEW DELHI
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.14,
            letterSpacing: '0.04em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            color: 'var(--color-ivory)',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)'
          }}
        >
          WHERE EVERY MOMENT <br />
          <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gold-light)' }}>
            FEELS TIMELESS.
          </span>
        </h1>

        {/* Refined Gold Rule */}
        <div 
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            marginBottom: '1.5rem'
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(247, 244, 238, 0.92)',
            maxWidth: '680px',
            marginBottom: '2.5rem',
            letterSpacing: '0.01em',
            textShadow: '0 1px 12px rgba(0, 0, 0, 0.4)'
          }}
        >
          Discover thoughtful hospitality, beautifully designed spaces, and experiences that make every stay unforgettable.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <a
            href="#story"
            className="btn-primary"
            style={{ minWidth: '200px' }}
          >
            <Compass size={15} />
            <span>DISCOVER OUR HOTEL</span>
          </a>

          <a
            href="#rooms"
            className="btn-secondary"
            style={{ minWidth: '180px' }}
          >
            <BedDouble size={15} />
            <span>EXPLORE ROOMS</span>
          </a>
        </div>

        {/* Key Features Pill Group */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.75rem',
            opacity: 0.85,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-light)',
            borderTop: '1px solid rgba(198, 168, 120, 0.2)',
            paddingTop: '1.5rem',
            maxWidth: '640px',
            width: '100%'
          }}
        >
          <span>48 Bespoke Suites</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Michelin-Craft Gastronomy</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Ayurvedic &amp; Hydro Spa</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Dedicated Butler Care</span>
        </div>

      </div>

      {/* Refined Scroll Indicator */}
      <a
        href="#booking-panel"
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.45rem',
          color: 'var(--color-gold-light)',
          textDecoration: 'none',
          opacity: 0.85,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
        aria-label="Scroll down to booking availability search"
      >
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          SCROLL TO EXPLORE
        </span>
        <div
          style={{
            width: '20px',
            height: '32px',
            borderRadius: '12px',
            border: '1px solid rgba(198, 168, 120, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px'
          }}
        >
          <div
            className="scroll-indicator-dot"
            style={{
              width: '3px',
              height: '6px',
              borderRadius: '2px',
              backgroundColor: 'var(--color-gold)'
            }}
          />
        </div>
      </a>
    </section>
  );
}
