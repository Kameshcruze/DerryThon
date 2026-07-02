import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import TamilDivider from './TamilDivider';

interface HeroProps {
  onRsvpClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onRsvpClick, onExploreClick }: HeroProps) {
  // Parallax on mouse movement setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural lag/parallax feel
  const springX = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xOffset = (clientX - window.innerWidth / 2) / 35;
      const yOffset = (clientY - window.innerHeight / 2) / 35;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Split names for elegant reveal
  const brideName = "Derry".split("");
  const groomName = "Thon".split("");

  return (
    <div 
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden marble-bg py-4 px-6 invitation-vignette" 
      id="home"
    >
      {/* 1. Subtle Parallax Decorative Background Branch Details */}
      <motion.div 
        style={{ x: springX, y: springY }} 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 flex justify-between items-center px-12 sm:px-24"
      >
        <div className="w-16 h-16 sm:w-28 sm:h-28 text-primary-olive/20 rotate-12">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M10,90 Q50,45 90,10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="4" fill="#C8A45D" />
          </svg>
        </div>
        <div className="w-16 h-16 sm:w-28 sm:h-28 text-primary-olive/20 -rotate-12">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M90,90 Q50,45 10,10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="4" fill="#C8A45D" />
          </svg>
        </div>
      </motion.div>

      {/* 2. THE CENTERED INVITATION CARD (BALANCED & SYMMETRICAL) */}
      <div className="relative z-30 max-w-4xl w-full text-center flex flex-col items-center justify-center h-full">
        
        {/* Together With Our Families */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="text-xs sm:text-sm tracking-[0.3em] text-gold-accent font-display uppercase font-semibold mb-2 sm:mb-3"
        >
          Together With Our Families
        </motion.p>

        {/* We Cordially Invite You To Celebrate */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="text-[10px] sm:text-xs tracking-[0.25em] text-dark-charcoal/70 font-sans uppercase font-medium mb-1"
        >
          We Cordially Invite You To Celebrate
        </motion.p>

        {/* The Wedding Ceremony Of */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-xs sm:text-sm tracking-[0.2em] text-dark-charcoal/70 font-display italic mb-6 sm:mb-8"
        >
          The Wedding Ceremony Of
        </motion.p>

        {/* Traditional Tamil Nadu Symmetrical Kolam/Vilakku Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-full max-w-lg mb-4"
        >
          <TamilDivider />
        </motion.div>

        {/* MAJESTIC NAMES: Derry & Thon (Gargantuan luxury cursive display) */}
        <div className="my-2 sm:my-4 flex flex-col items-center justify-center">
          {/* Derry */}
          <h1 className="font-allura text-8xl sm:text-[10.5rem] md:text-[11.5rem] text-primary-olive tracking-wide leading-[0.8] select-none flex justify-center items-center">
            {brideName.map((char, index) => (
              <motion.span
                key={`bride-${index}`}
                initial={{ opacity: 0, rotate: -15, y: 30 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6 + index * 0.1, 
                  type: 'spring', 
                  stiffness: 80 
                }}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Golden Heart Divider */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3, type: 'spring', stiffness: 120 }}
            className="my-5 sm:my-8 flex items-center justify-center gap-4 text-gold-accent"
          >
            <div className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-gold-accent to-transparent" />
            <div className="p-2 sm:p-2.5 rounded-full border border-gold-accent/30 bg-white/50 backdrop-blur-sm shadow-sm">
              <Heart className="w-5 h-5 sm:w-7 sm:h-7 fill-current text-gold-accent animate-heartbeat-slow" />
            </div>
            <div className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-gold-accent to-transparent" />
          </motion.div>

          {/* Thon */}
          <h1 className="font-allura text-8xl sm:text-[10.5rem] md:text-[11.5rem] text-primary-olive tracking-wide leading-[0.8] select-none flex justify-center items-center">
            {groomName.map((char, index) => (
              <motion.span
                key={`groom-${index}`}
                initial={{ opacity: 0, rotate: 15, y: 30 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.0 + index * 0.1, 
                  type: 'spring', 
                  stiffness: 80 
                }}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Symmetrical Traditional Tamil Nadu Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-full max-w-lg mt-4 mb-4"
        >
          <TamilDivider />
        </motion.div>

        {/* 19th & 20th February 2027 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-lg sm:text-2xl font-display font-medium text-primary-olive tracking-wider"
        >
          19th & 20th February 2027
        </motion.p>

        {/* 11:00 AM Onwards */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.95 }}
          className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-accent font-semibold mt-1"
        >
          11:00 AM Onwards
        </motion.p>

        {/* View Invitation Luxury Centered Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.15 }}
          className="mt-8 sm:mt-10"
        >
          <button
            onClick={onExploreClick}
            className="px-10 py-4.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-olive hover:bg-secondary-olive text-cream-bg shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-accent/40 cursor-pointer flex items-center gap-2 group relative overflow-hidden"
            id="hero-view-invitation"
          >
            {/* Soft gold glint hover reflection */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span>View Invitation</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
