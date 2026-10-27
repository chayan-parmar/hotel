import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingSearch from './components/BookingSearch';
import WelcomeSection from './components/WelcomeSection';
import RoomsSuites from './components/RoomsSuites';
import RoomModal from './components/RoomModal';
import Experiences from './components/Experiences';
import DiningSection from './components/DiningSection';
import AmenitiesSection from './components/AmenitiesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import SpecialOffers from './components/SpecialOffers';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function App() {
  const [activeCurrency, setActiveCurrency] = useState('INR');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [inquiryTopic, setInquiryTopic] = useState('');
  const [offerCodeForSearch, setOfferCodeForSearch] = useState('');
  
  // Ambient Audio Simulation using Web Audio API (subtle soothing luxury harmonic chime)
  const [isAmbiancePlaying, setIsAmbiancePlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  // Unified Modal Management
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'availability' | 'story' | 'dining' | 'inquiry'
    data: null
  });

  const toggleCurrency = () => {
    setActiveCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const handleOpenBookingModal = (searchParams = null) => {
    // If searchParams provided, use them; otherwise defaults
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkoutDate = new Date(tomorrow);
    checkoutDate.setDate(checkoutDate.getDate() + 3);

    const defaultParams = {
      checkIn: tomorrow.toISOString().split('T')[0],
      checkOut: checkoutDate.toISOString().split('T')[0],
      nights: 3,
      guests: 2,
      rooms: 1,
      promoCode: offerCodeForSearch || ''
    };

    setModalState({
      isOpen: true,
      type: 'availability',
      data: searchParams || defaultParams
    });
  };

  const handleSearchStays = (searchParams) => {
    setModalState({
      isOpen: true,
      type: 'availability',
      data: searchParams
    });
  };

  const handleSelectOffer = (offer) => {
    setOfferCodeForSearch(offer.code);
    handleOpenBookingModal({
      checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      nights: 3,
      guests: 2,
      rooms: 1,
      promoCode: offer.code
    });
  };

  const handleBookFromRoomModal = (room) => {
    handleOpenBookingModal({
      checkIn: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0],
      nights: 3,
      guests: 2,
      rooms: 1,
      selectedSuite: room
    });
  };

  const handleOpenStoryModal = () => {
    setModalState({
      isOpen: true,
      type: 'story',
      data: null
    });
  };

  const handleOpenTableReservation = () => {
    setModalState({
      isOpen: true,
      type: 'dining',
      data: null
    });
  };

  const handleInquirySuccess = (inquiryData) => {
    setModalState({
      isOpen: true,
      type: 'inquiry',
      data: inquiryData
    });
  };

  const handleOpenInquiryWithTopic = (topic) => {
    setInquiryTopic(`Experience Inquiry: ${topic}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null
    });
  };

  // Subtle Luxury Zen Ambiance Chime using Web Audio API
  const toggleAmbientSound = () => {
    if (isAmbiancePlaying) {
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
      setIsAmbiancePlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Gentle harmonic soothing chords (Cmaj9 frequencies: C, G, B, D, E)
        const notes = [261.63, 392.00, 493.88, 587.33, 659.25];
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const noteGain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          // Subtle LFO modulation
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.2 + i * 0.05, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(noteGain.gain);
          lfo.start();

          noteGain.gain.setValueAtTime(0.03, ctx.currentTime);
          osc.connect(noteGain);
          noteGain.connect(masterGain);
          osc.start();
        });

        setAudioContext(ctx);
        setIsAmbiancePlaying(true);
      } catch (err) {
        console.warn('Web Audio not allowed or supported', err);
      }
    }
  };

  return (
    <div className="aurelia-app">
      {/* Top Luxury Navigation */}
      <Navbar
        onOpenBookingModal={() => handleOpenBookingModal()}
        activeCurrency={activeCurrency}
        onToggleCurrency={toggleCurrency}
      />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* Section B: Cinematic Hero */}
        <Hero />

        {/* Section C: Booking Search Panel */}
        <BookingSearch
          onSearchStays={handleSearchStays}
          initialOfferCode={offerCodeForSearch}
        />

        {/* Section D: Welcome Section */}
        <WelcomeSection onOpenStoryModal={handleOpenStoryModal} />

        {/* Section E: Rooms & Suites */}
        <RoomsSuites
          onSelectRoom={(room) => setSelectedRoom(room)}
          activeCurrency={activeCurrency}
        />

        {/* Section F: Signature Experiences */}
        <Experiences onOpenInquiryWithTopic={handleOpenInquiryWithTopic} />

        {/* Section G: Dining */}
        <DiningSection onOpenTableReservation={handleOpenTableReservation} />

        {/* Section H: Amenities */}
        <AmenitiesSection />

        {/* Section I: Gallery with Lightbox */}
        <GallerySection />

        {/* Section J: Guest Testimonials */}
        <TestimonialsSection />

        {/* Section K: Special Offers */}
        <SpecialOffers onSelectOffer={handleSelectOffer} />

        {/* Section L: Location & Destination */}
        <LocationSection />

        {/* Section M: Contact & Inquiry Form */}
        <ContactSection
          onInquirySuccess={handleInquirySuccess}
          prefilledTopic={inquiryTopic}
        />
      </main>

      {/* Section N: Footer */}
      <Footer />

      {/* Room Details Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookRoom={handleBookFromRoomModal}
          activeCurrency={activeCurrency}
        />
      )}

      {/* Unified Interactive Demo Modals (Availability, Story, Dining, Inquiry) */}
      <DemoModal
        modalState={modalState}
        onClose={closeModal}
        activeCurrency={activeCurrency}
      />

      {/* Floating Audio Ambiance Toggle */}
      <button
        onClick={toggleAmbientSound}
        title={isAmbiancePlaying ? 'Mute serene sanctuary ambiance' : 'Play serene sanctuary ambient chime'}
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 800,
          backgroundColor: isAmbiancePlaying ? 'var(--color-gold)' : 'rgba(21, 23, 20, 0.88)',
          color: isAmbiancePlaying ? 'var(--color-charcoal-deep)' : 'var(--color-gold)',
          border: '1px solid var(--color-gold)',
          borderRadius: '50px',
          padding: '0.65rem 1.15rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-md)',
          backdropFilter: 'blur(8px)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 600,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        id="ambiance-audio-toggle"
      >
        {isAmbiancePlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
        <span className="ambiance-text">
          {isAmbiancePlaying ? 'AMBIANCE ON' : 'AMBIANCE'}
        </span>
      </button>

      {/* Floating Style Tweaks */}
      <style>{`
        @media (max-width: 600px) {
          .ambiance-text {
            display: none;
          }
          #ambiance-audio-toggle {
            padding: 0.65rem;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
