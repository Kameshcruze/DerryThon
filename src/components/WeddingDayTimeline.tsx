import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Flame, Waves, MessageSquareHeart, Heart, Award, Utensils, Camera, PartyPopper } from 'lucide-react';

interface DaySchedule {
  date: string;
  dayName: string;
  items: {
    time: string;
    title: string;
    description: string;
    icon: ReactNode;
  }[];
}

const SCHEDULE_DATA: DaySchedule[] = [
  {
    date: '19th February 2027',
    dayName: 'Day 01 — Blessings & Welcomes',
    items: [
      {
        time: '11:00 AM',
        title: 'Haldi Ceremony',
        description: 'Bathing the bride and groom in turmeric paste and love, accompanied by cheerful folksongs and laughter.',
        icon: <Flame className="w-4 h-4 text-gold-accent" />,
      },
      {
        time: '04:30 PM',
        title: 'Welcome Ceremony',
        description: 'Greeting all esteemed guests with traditional garlands, rose water, and delicious local refreshments.',
        icon: <PartyPopper className="w-4 h-4 text-gold-accent" />,
      },
      {
        time: '07:30 PM',
        title: 'Welcome Dinner Banquet',
        description: 'Gathering around the grand long tables under fairy lights for our first celebratory family feast.',
        icon: <Utensils className="w-4 h-4 text-gold-accent" />,
      },
    ],
  },
  {
    date: '20th February 2027',
    dayName: 'Day 02 — The Sacred Union',
    items: [
      {
        time: '11:00 AM',
        title: 'The Wedding Muhurtham',
        description: 'The core sacred wedding ceremony with flower petals shower, tying the holy thread, and taking the seven sacred steps.',
        icon: <Heart className="w-4 h-4 text-gold-accent" />,
      },
      {
        time: '01:30 PM',
        title: 'Grand Wedding Lunch',
        description: 'A traditional, gourmet feast served on plantain leaves, celebrating the culinary heritage of Tamil Nadu.',
        icon: <Utensils className="w-4 h-4 text-gold-accent" />,
      },
      {
        time: '04:00 PM',
        title: 'Sunset Photography Session',
        description: 'Capturing memories with all family and friends against the spectacular ocean sunset backdrop of Kanyakumari.',
        icon: <Camera className="w-4 h-4 text-gold-accent" />,
      },
    ],
  },
  {
    date: '21st February 2027',
    dayName: 'Day 03 — Joy & Celebration',
    items: [
      {
        time: '06:30 PM Onwards',
        title: 'The Grand Reception Party',
        description: 'An evening of celebration, live string music, heartfelt family speeches, cutting the botanical cake, and ballroom dancing.',
        icon: <Award className="w-4 h-4 text-gold-accent" />,
      },
    ],
  },
];

export default function WeddingDayTimeline() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4" id="wedding-timeline-root">
      {/* Day Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {SCHEDULE_DATA.map((day, idx) => (
          <button
            key={day.date}
            onClick={() => setActiveDayIdx(idx)}
            className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all duration-300 border ${
              activeDayIdx === idx
                ? 'bg-primary-olive text-cream-bg border-primary-olive shadow-sm'
                : 'bg-white hover:bg-cream-bg text-primary-olive border-gold-accent/20'
            }`}
            id={`timeline-tab-${idx}`}
          >
            {day.date.split(' ')[0]} {day.date.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* Tab Panel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDayIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6 sm:p-10 border border-white/40 shadow-md relative overflow-hidden"
          >
            {/* Header */}
            <div className="text-center mb-10 border-b border-gold-accent/10 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-accent block mb-2">
                {SCHEDULE_DATA[activeDayIdx].date}
              </span>
              <h4 className="text-xl sm:text-2xl font-display font-medium text-primary-olive">
                {SCHEDULE_DATA[activeDayIdx].dayName}
              </h4>
            </div>

            {/* Vertical timeline inside card */}
            <div className="relative">
              {/* Connecting vertical line */}
              <div className="absolute top-2 bottom-2 left-6 sm:left-8 w-[1px] bg-gold-accent/20" />

              <div className="space-y-8 relative">
                {SCHEDULE_DATA[activeDayIdx].items.map((item, itemIdx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="flex gap-4 sm:gap-6 items-start relative group"
                  >
                    {/* Time Node Indicator */}
                    <div className="w-12 sm:w-16 shrink-0 pt-1 text-right">
                      <span className="text-[11px] sm:text-xs font-mono font-semibold text-gold-accent group-hover:text-primary-olive transition-colors duration-300">
                        {item.time}
                      </span>
                    </div>

                    {/* Dot Icon */}
                    <div className="w-12 h-12 rounded-full bg-cream-bg border border-gold-accent/40 flex items-center justify-center text-primary-olive shrink-0 z-10 group-hover:bg-primary-olive group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>

                    {/* Details content */}
                    <div className="pt-1.5 flex-1">
                      <h5 className="text-base sm:text-lg font-display font-medium text-primary-olive mb-1 group-hover:text-gold-accent transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
