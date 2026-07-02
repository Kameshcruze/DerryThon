import React, { useEffect, useState } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onEnterClicked: boolean;
}

export default function Navbar({ onEnterClicked }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'The Invitation', targetId: 'home' },
    { label: 'The Couple', targetId: 'couple' },
    { label: 'Love Story', targetId: 'story' },
    { label: 'Wedding Events', targetId: 'events' },
    { label: 'The Sanctuary', targetId: 'venue' },
    { label: 'Memory Gallery', targetId: 'gallery' },
    { label: 'RSVP Registry', targetId: 'rsvp' },
    { label: 'Helplines', targetId: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small timeout to allow overlay close animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  };

  if (!onEnterClicked) return null;

  return (
    <>
      {/* Absolute Header with Single Premium Floating Hamburger Button */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-14 h-14 rounded-full flex flex-col items-center justify-center bg-white/90 hover:bg-white text-primary-olive shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-accent/30 cursor-pointer group"
          aria-label="Open Menu"
          id="navbar-luxury-toggle"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            {mobileOpen ? (
              <X className="w-6 h-6 text-gold-accent transition-transform duration-300 rotate-90" />
            ) : (
              <div className="flex flex-col gap-1.5 justify-center items-center">
                <span className="w-5 h-[2px] bg-primary-olive rounded-full transition-all group-hover:bg-gold-accent group-hover:w-6" />
                <span className="w-6 h-[2px] bg-primary-olive rounded-full transition-all group-hover:bg-gold-accent" />
                <span className="w-4 h-[2px] bg-primary-olive rounded-full transition-all group-hover:bg-gold-accent group-hover:w-6" />
              </div>
            )}
          </div>
        </motion.button>
      </div>

      {/* Stunning Fullscreen Luxury Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-cream-bg/98 backdrop-blur-xl z-45 flex flex-col justify-center items-center overflow-hidden invitation-vignette"
            id="fullscreen-luxury-menu"
          >
            {/* Marble background pattern inside menu */}
            <div className="absolute inset-0 marble-bg opacity-40 pointer-events-none" />

            {/* Glowing sparkle decorative accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-gold-accent/10 animate-pulse" />
              <Sparkles className="absolute bottom-1/4 right-1/4 w-12 h-12 text-gold-accent/10 animate-pulse delay-75" />
              <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gold-accent/20 animate-ping" />
              <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-primary-olive/20 animate-ping delay-150" />
            </div>

            {/* Swaying decorative eucalyptus vines inside menu */}
            <div className="absolute -top-10 -left-10 w-48 h-48 text-primary-olive/10 pointer-events-none select-none animate-sway-slow">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform -rotate-12">
                <path d="M10 90 Q 50 50 90 10 M 90 10 Q 75 35 50 40 M 50 40 Q 35 65 10 90 M 90 10 Q 60 20 45 45 M 45 45 Q 15 55 10 90" />
                <path d="M30 70 Q 15 45 35 35 Q 55 25 50 60 Z" opacity="0.6" fill="#798C4B" />
                <path d="M60 40 Q 45 15 65 5 Q 85 -5 80 30 Z" opacity="0.4" fill="#566B2F" />
              </svg>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 text-primary-olive/10 pointer-events-none select-none animate-sway-opposite">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform rotate-160">
                <path d="M10 90 Q 50 50 90 10 M 90 10 Q 75 35 50 40 M 50 40 Q 35 65 10 90 M 90 10 Q 60 20 45 45 M 45 45 Q 15 55 10 90" />
                <path d="M30 70 Q 15 45 35 35 Q 55 25 50 60 Z" opacity="0.6" fill="#798C4B" />
                <path d="M60 40 Q 45 15 65 5 Q 85 -5 80 30 Z" opacity="0.4" fill="#566B2F" />
              </svg>
            </div>

            {/* Inner Gold Frame */}
            <div className="absolute inset-6 sm:inset-10 border border-gold-accent/20 rounded-[24px] pointer-events-none z-10" />

            {/* Menu Header (Logo) */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-10 text-center z-20"
            >
              <h3 className="font-script text-4xl sm:text-5xl text-primary-olive flex items-center justify-center gap-2">
                <span>Derry</span>
                <Heart className="w-5 h-5 text-gold-accent fill-current animate-heartbeat-slow" />
                <span>Thon</span>
              </h3>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mt-2" />
              <p className="text-[10px] font-mono tracking-[0.3em] text-gold-accent uppercase mt-2">
                Digital Wedding Invitation
              </p>
            </motion.div>

            {/* Centered Navigation Links with Staggered Entrance */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 text-center z-20 max-w-md w-full px-6">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, type: 'spring', damping: 15 }}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="group py-2 text-2xl sm:text-3xl font-display font-medium text-primary-olive hover:text-gold-accent transition-colors duration-300 relative cursor-pointer"
                  id={`nav-lux-link-${item.targetId}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[1.5px] bg-gold-accent transition-all duration-300 group-hover:w-2/3" />
                </motion.button>
              ))}
            </div>

            {/* Footer inside menu */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-14 text-center z-20"
            >
              <p className="text-[10px] font-mono tracking-widest text-dark-charcoal/50">
                19th & 20th February 2027 • Kanyakumari
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

