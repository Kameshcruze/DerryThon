import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, MessageCircle, Gem } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  icon: ReactNode;
  isLeft: boolean;
  index: number;
  key?: string;
}

function TimelineItem({ title, date, description, icon, isLeft, index }: TimelineItemProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center mb-12 md:mb-20 last:mb-0">
      {/* Icon Node */}
      <div className="absolute z-20 w-12 h-12 rounded-full bg-cream-bg border-2 border-gold-accent flex items-center justify-center text-primary-olive shadow-md">
        {icon}
      </div>

      {/* Content wrapper */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Empty on Right-aligned items on Desktop) */}
        <div className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:order-last'}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/40 shadow-sm relative"
          >
            {/* Soft background decor */}
            <span className="absolute -top-3 -right-3 text-gold-accent/10 font-display text-7xl font-semibold select-none">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="text-xs font-mono uppercase tracking-widest text-gold-accent font-semibold block mb-2">
              {date}
            </span>
            <h4 className="text-xl font-display font-medium text-primary-olive mb-2">
              {title}
            </h4>
            <p className="text-sm text-dark-charcoal/80 leading-relaxed font-sans">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Center line spacer */}
        <div className="w-16 h-16 md:h-0" />

        {/* Right Side (Empty on Left-aligned items on Desktop) */}
        <div className="w-full md:w-[45%] hidden md:block" />
      </div>
    </div>
  );
}

export default function Timeline() {
  const items = [
    {
      title: 'Our First Encounter',
      date: 'Autumn 2021',
      description: 'Under the shade of the ancient Banyan tree, our paths crossed for the very first time. What started as a simple conversation about books quickly blossomed into an evening of shared laughter.',
      icon: <Sparkles className="w-5 h-5" />,
      isLeft: true,
    },
    {
      title: 'Growing Friendship',
      date: 'Summer 2023',
      description: 'Days turned to weeks, and weeks to beautiful memories. We became inseparable confidants, sharing late-night coffees, starry night walks, and silent understanding.',
      icon: <MessageCircle className="w-5 h-5" />,
      isLeft: false,
    },
    {
      title: 'The Engagement',
      date: 'Spring 2026',
      description: 'At the pristine shores of Kanyakumari, as the sun dipped below the horizon where three seas meet, Thon knelt down and Derry said a tearful, joyful "Yes!" to forever.',
      icon: <Gem className="w-5 h-5" />,
      isLeft: true,
    },
    {
      title: 'The Wedding Bells',
      date: '19th February 2027',
      description: 'Together with our families, we take the ultimate step. We embark on a journey of companionship, trust, and beautiful devotion, surrounded by our loved ones.',
      icon: <Heart className="w-5 h-5" />,
      isLeft: false,
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-8">
      {/* Central Connecting Timeline Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-accent/20 via-primary-olive/30 to-gold-accent/20 hidden md:block" />

      {/* Animated Growing Indicator on scroll */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold-accent via-gold-light to-gold-accent origin-top hidden md:block"
        style={{ height: '100%' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Timeline items wrapper */}
      <div className="flex flex-col relative">
        {items.map((item, index) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            date={item.date}
            description={item.description}
            icon={item.icon}
            isLeft={item.isLeft}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
