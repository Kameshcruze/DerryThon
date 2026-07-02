import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

interface LoadingScreenProps {
  onEnter: () => void;
  key?: string;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream-bg marble-bg px-6 overflow-hidden">
      {/* Outer borders */}
      <div className="absolute inset-6 border border-gold-accent/15 rounded-[24px] pointer-events-none" />
      
      {/* Decorative center logo design */}
      <div className="text-center relative z-10 max-w-md flex flex-col items-center">
        
        {/* Soft floating botanical logo emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-24 h-24 rounded-full border border-gold-accent/20 flex items-center justify-center bg-white/60 backdrop-blur-sm relative mb-8 shadow-sm"
        >
          {/* Floral vectors in background */}
          <div className="absolute inset-1.5 rounded-full border border-gold-accent/5" />
          <svg className="absolute w-20 h-20 text-gold-accent/10 rotate-12" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 15 Q 40 40 15 50 Q 40 60 50 85 Q 60 60 85 50 Q 60 40 50 15 Z" />
          </svg>
          <span className="font-display font-medium text-2xl text-primary-olive tracking-widest relative">
            D&T
          </span>
        </motion.div>

        {/* Elegant Couple Names with fine fade-in revealed transitions */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="font-script text-5xl sm:text-6xl text-primary-olive tracking-wide"
          >
            Derry
          </motion.h2>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-3 flex items-center justify-center gap-3 text-gold-accent"
          >
            <div className="w-8 h-[1px] bg-gold-accent/30" />
            <Heart className="w-4 h-4 fill-current text-gold-accent" />
            <div className="w-8 h-[1px] bg-gold-accent/30" />
          </motion.div>

          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="font-script text-5xl sm:text-6xl text-primary-olive tracking-wide"
          >
            Thon
          </motion.h2>
        </div>

        {/* Traditional Invitation Header text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gold-accent mb-8 font-semibold"
        >
          THE SACRED INVITATION
        </motion.p>

        {/* Golden Enter Invitation CTA with soft background animations */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          onClick={onEnter}
          className="group relative px-8 py-4 sm:px-10 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-olive hover:bg-secondary-olive text-cream-bg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-primary-olive flex items-center gap-2"
          id="enter-invitation-btn"
        >
          {/* Subtle overlay shine effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:animate-shine" />
          
          <BookOpen className="w-4 h-4 text-gold-light" />
          <span>Enter Invitation</span>
        </motion.button>
        
        {/* Playback Consent Note */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-[9px] font-sans text-dark-charcoal/80 mt-4 tracking-wider uppercase font-medium"
        >
          *Music will play automatically upon entry
        </motion.span>

      </div>
    </div>
  );
}
