import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Navigation, Gift, PhoneCall } from 'lucide-react';

// Import our beautiful custom components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloralBackground from './components/FloralBackground';
import MusicPlayer from './components/MusicPlayer';
import Countdown from './components/Countdown';
import BrideGroom from './components/BrideGroom';
import Timeline from './components/Timeline';
import EventCards from './components/EventCards';
import VenueSection from './components/VenueSection';
import Gallery from './components/Gallery';
import WeddingDayTimeline from './components/WeddingDayTimeline';
import RSVPForm from './components/RSVPForm';
import GuestWishes from './components/GuestWishes';
import GiftRegistry from './components/GiftRegistry';
import ContactSection from './components/ContactSection';
import TamilDivider from './components/TamilDivider';

export default function App() {
  const [onEnterClicked, setOnEnterClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnterInvitation = () => {
    setOnEnterClicked(true);
    setIsPlaying(true); // activate background classical music on click
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-cream-bg selection:bg-primary-olive selection:text-cream-bg">
      <AnimatePresence mode="wait">
        {!onEnterClicked ? (
          <LoadingScreen key="loading" onEnter={handleEnterInvitation} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Ambient Falling Floral & Particles Background (No lag, pure CSS animations) */}
            <FloralBackground />

            {/* Sticky transparent header menu */}
            <Navbar onEnterClicked={onEnterClicked} />

            {/* Interactive Background Music Controller */}
            <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

            {/* SECTION 1: HERO SECTION */}
            <Hero
              onRsvpClick={() => handleScrollToSection('rsvp')}
              onExploreClick={() => handleScrollToSection('countdown-section')}
            />

            {/* SECTION 2: INTRO & COUNTDOWN TIMER */}
            <section
              id="countdown-section"
              className="py-20 sm:py-28 px-4 text-center relative overflow-hidden"
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-10"
                >
                  <span className="text-[11px] font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                    THE COMMENCEMENT
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive mb-4">
                    Counting Down to Forever
                  </h2>
                  <TamilDivider className="max-w-xs mx-auto -my-1" />
                  <p className="text-sm font-sans text-dark-charcoal/80 max-w-lg mx-auto leading-relaxed">
                    Join us as we stand beneath the canopy, pledge our eternal devotion, and step into our beautiful tomorrow.
                  </p>
                </motion.div>

                {/* Countdown Cards */}
                <Countdown />
              </div>
            </section>

            {/* SECTION 3: BRIDE & GROOM */}
            <section
              id="couple"
              className="py-16 sm:py-24 px-4 bg-white/40 border-t border-b border-gold-accent/10 relative"
            >
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  THE HAPPY COUPLE
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  Derry & Thon
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <BrideGroom />
            </section>

            {/* SECTION 4: OUR STORY TIMELINE */}
            <section id="story" className="py-20 sm:py-28 px-4 relative">
              <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  OUR ROAD TO FOREVER
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive mb-2">
                  Our Love Story
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
                <p className="text-xs sm:text-sm font-sans text-dark-charcoal/75 max-w-md mx-auto italic">
                  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                </p>
              </div>

              <Timeline />
            </section>

            {/* SECTION 5: WEDDING EVENTS */}
            <section
              id="events"
              className="py-20 sm:py-28 px-4 bg-white/50 border-t border-b border-gold-accent/10 relative"
            >
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  CELEBRATION SCHEDULE
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  The Wedding Events
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <EventCards />
            </section>

            {/* SECTION 6: VENUE LOCATION MAPS */}
            <section id="venue" className="py-20 sm:py-28 px-4 relative">
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  LOCATION & DIRECTIONS
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  The Sanctuary
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <VenueSection />
            </section>

            {/* SECTION 7: PHOTO GALLERY */}
            <section
              id="gallery"
              className="py-20 sm:py-28 px-4 bg-white/40 border-t border-b border-gold-accent/10 relative"
            >
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  OUR CAPTURED MOMENTS
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  The Memory Gallery
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <Gallery />
            </section>

            {/* SECTION 8: DETAILED DAY SCHEDULE */}
            <section id="timeline" className="py-20 sm:py-28 px-4 relative">
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  HOURLY ITINERARY
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  The Celebration Timeline
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <WeddingDayTimeline />
            </section>

            {/* SECTION 9: RSVP REGISTRY */}
            <section
              id="rsvp"
              className="py-20 sm:py-28 px-4 bg-white/50 border-t border-b border-gold-accent/10 relative"
            >
              <RSVPForm />
            </section>

            {/* SECTION 10: GUEST BOOK WISHES */}
            <section id="wishes" className="py-20 sm:py-28 px-4 relative">
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  CONGRATULATIONS WALL
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  Wishes from Beloved Guests
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <GuestWishes />
            </section>

            {/* SECTION 11: GIFT REGISTRY */}
            <section
              id="gift"
              className="py-16 sm:py-24 px-4 bg-white/40 border-t border-b border-gold-accent/10 relative"
            >
              <GiftRegistry />
            </section>

            {/* SECTION 12: CONTACTS */}
            <section id="contact" className="py-20 sm:py-28 px-4 relative">
              <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                <span className="text-xs font-mono tracking-[0.2em] text-gold-accent font-semibold uppercase block mb-3">
                  REACH OUT TO US
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary-olive">
                  Helplines & Contacts
                </h2>
                <TamilDivider className="max-w-xs mx-auto -my-1" />
              </div>

              <ContactSection />
            </section>

            {/* SECTION 13: LUXURIOUS FOOTER */}
            <footer className="bg-primary-olive text-cream-bg py-16 px-6 text-center border-t-2 border-gold-accent relative overflow-hidden">
              {/* Subtle visual leaf shapes */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-accent to-transparent" />
              
              <div className="max-w-xl mx-auto flex flex-col items-center">
                {/* Script logo */}
                <h4 className="font-script text-5xl sm:text-6xl text-gold-light tracking-wider mb-6">
                  Derry & Thon
                </h4>

                {/* Classic Wedding Quote */}
                <p className="font-display text-lg sm:text-xl text-cream-bg/90 italic leading-relaxed max-w-sm mb-6">
                  "Two Hearts, One Journey, Forever Together."
                </p>

                <div className="w-12 h-[1px] bg-gold-accent/40 my-2" />

                {/* Info details */}
                <p className="text-xs font-mono tracking-widest text-gold-accent font-semibold uppercase mb-4">
                  19th – 21st February 2027 | Kanyakumari, Tamil Nadu
                </p>

                <p className="text-[10px] font-mono text-cream-bg/50 tracking-wider">
                  &copy; {new Date().getFullYear()} Derry & Thon Wedding Invitation. Built with love and blessings.
                </p>
                <p className="text-xs font-sans tracking-wide text-gold-accent/80 mt-3">
                  Designed by <a href="https://elitewebdevelopers.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light underline transition-colors font-medium">Elite</a>
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
