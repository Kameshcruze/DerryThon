import { motion } from 'motion/react';
import { Heart, Calendar, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onRsvpClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onRsvpClick, onExploreClick }: HeroProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden marble-bg py-16 px-4" id="home">
      
      {/* Decorative Golden Outer Frame */}
      <div className="absolute inset-4 sm:inset-8 border border-gold-accent/20 pointer-events-none rounded-[28px] z-20">
        <div className="absolute inset-1 border border-gold-accent/5 rounded-[24px]" />
      </div>

      {/* Decorative Eucalyptus Botanical Corner SVGs - Pristine Hand-drawn Leaf SVGs */}
      {/* Top Left Leaves */}
      <div className="absolute top-6 left-6 sm:top-12 sm:left-12 w-24 h-24 sm:w-48 sm:h-48 text-primary-olive/20 pointer-events-none z-10 select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform -rotate-45">
          <path d="M10 90 Q 50 50 90 10 M 90 10 Q 75 35 50 40 M 50 40 Q 35 65 10 90 M 90 10 Q 60 20 45 45 M 45 45 Q 15 55 10 90" />
          <path d="M30 70 Q 15 45 35 35 Q 55 25 50 60 Z" opacity="0.6" />
          <path d="M60 40 Q 45 15 65 5 Q 85 -5 80 30 Z" opacity="0.4" fill="#798C4B" />
          <circle cx="50" cy="50" r="2" fill="#C8A45D" />
        </svg>
      </div>

      {/* Bottom Right Leaves */}
      <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-24 h-24 sm:w-48 sm:h-48 text-primary-olive/20 pointer-events-none z-10 select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform rotate-135">
          <path d="M10 90 Q 50 50 90 10 M 90 10 Q 75 35 50 40 M 50 40 Q 35 65 10 90 M 90 10 Q 60 20 45 45 M 45 45 Q 15 55 10 90" />
          <path d="M30 70 Q 15 45 35 35 Q 55 25 50 60 Z" opacity="0.6" />
          <path d="M60 40 Q 45 15 65 5 Q 85 -5 80 30 Z" opacity="0.4" fill="#798C4B" />
        </svg>
      </div>

      {/* Golden Central Dividers & Content Card */}
      <div className="relative z-30 max-w-3xl text-center flex flex-col items-center">
        
        {/* Hosted By Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-gold-accent font-semibold block">
            SMITH FAMILY PRESENTS
          </span>
          <div className="w-8 h-[1px] bg-gold-accent mx-auto mt-2" />
        </motion.div>

        {/* Traditional Invitation Opening Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs sm:text-sm font-sans text-dark-charcoal/80 uppercase tracking-widest max-w-md mx-auto mb-4 px-4 font-medium"
        >
          Together with our Families, We Cordially Invite You to Celebrate the Wedding Ceremony of
        </motion.p>

        {/* Elegant Golden Floral Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-gold-accent to-transparent my-2"
        />

        {/* Beautiful Couple Names Heading */}
        <div className="my-6 sm:my-10 px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-script text-6xl sm:text-8xl md:text-9xl text-primary-olive tracking-wide leading-none"
          >
            Derry
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-3 flex items-center justify-center gap-4 text-gold-accent"
          >
            <div className="w-8 sm:w-16 h-[1px] bg-gold-accent/40" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-gold-accent animate-pulse" />
            <div className="w-8 sm:w-16 h-[1px] bg-gold-accent/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="font-script text-6xl sm:text-8xl md:text-9xl text-primary-olive tracking-wide leading-none"
          >
            Thon
          </motion.h1>
        </div>

        {/* Elegant Golden Floral Divider Bottom */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-gold-accent to-transparent my-2"
        />

        {/* Wedding Date Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 sm:mt-6 mb-8 text-center"
        >
          <span className="text-lg sm:text-2xl font-display font-medium text-primary-olive tracking-wide block">
            19th & 20th February 2027
          </span>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold block mt-1.5">
            11:00 AM ONWARDS | KANYAKUMARI, TAMIL NADU
          </span>
        </motion.div>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm px-6"
        >
          <button
            onClick={onExploreClick}
            className="flex-1 py-4 sm:py-4.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-olive hover:bg-secondary-olive text-cream-bg transition-all duration-300 shadow-md hover:shadow-lg border border-primary-olive cursor-pointer"
            id="hero-view-invitation"
          >
            View Details
          </button>
          <button
            onClick={onRsvpClick}
            className="flex-1 py-4 sm:py-4.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white hover:bg-cream-bg text-primary-olive transition-all duration-300 shadow-sm border border-gold-accent/40 cursor-pointer"
            id="hero-rsvp"
          >
            Send RSVP
          </button>
        </motion.div>

        {/* Pulsing Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-[-10px] sm:bottom-[-20px] left-1/2 -translate-x-1/2 cursor-pointer text-primary-olive/60 hover:text-primary-olive transition-colors"
          onClick={onExploreClick}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-mono tracking-widest uppercase font-semibold">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
