import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Clock, MapPin, Gift } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  host: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

function EventCard({ title, date, time, venue, host, description, icon, delay }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -8 }}
      className="glass-card p-6 sm:p-8 border border-white/60 shadow-md relative overflow-hidden group flex flex-col justify-between h-full"
    >
      {/* Golden Corner Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="absolute top-3 right-3 w-10 h-[1px] bg-gold-accent" />
        <div className="absolute top-3 right-3 w-[1px] h-10 bg-gold-accent" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="absolute bottom-3 left-3 w-10 h-[1px] bg-gold-accent" />
        <div className="absolute bottom-3 left-3 w-[1px] h-10 bg-gold-accent" />
      </div>

      <div>
        {/* Event Icon Banner */}
        <div className="w-14 h-14 rounded-full bg-primary-olive/10 flex items-center justify-center text-primary-olive mb-6 group-hover:bg-primary-olive group-hover:text-cream-bg transition-colors duration-500">
          {icon}
        </div>

        {/* Header */}
        <h4 className="text-2xl font-display font-medium text-primary-olive mb-3 group-hover:text-gold-accent transition-colors duration-300">
          {title}
        </h4>

        {/* Separator */}
        <div className="w-12 h-[1px] bg-gold-accent mb-5 group-hover:w-20 transition-all duration-500" />

        {/* Info Rows */}
        <div className="space-y-3.5 mb-6 text-sm text-dark-charcoal/90">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-gold-accent shrink-0" />
            <span className="font-sans font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-gold-accent shrink-0" />
            <span className="font-sans">{time}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
            <span className="font-sans leading-tight">{venue}</span>
          </div>
        </div>

        <p className="text-xs text-dark-charcoal/70 leading-relaxed italic border-t border-gold-accent/10 pt-4 mb-4">
          {description}
        </p>
      </div>

      <div className="text-[11px] font-mono tracking-widest text-gold-accent/90 uppercase font-medium">
        Hosted By: {host}
      </div>
    </motion.div>
  );
}

export default function EventCards() {
  const events = [
    {
      title: 'Wedding Ceremony',
      date: '19th February 2027',
      time: '11:00 AM Onwards',
      venue: 'Main Hall, Vivekanandapuram, Kanyakumari, Tamil Nadu',
      host: 'Smith Family',
      description: 'The union of Derry and Thon. A sacred, beautiful event witnessing traditional vows and floral blessings under the morning sun.',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Traditional Rituals',
      date: '20th February 2027',
      time: '11:00 AM Onwards',
      venue: 'Saraswati Mandapam, Vivekanandapuram, Kanyakumari',
      host: 'Smith Family',
      description: 'Honoring heritage with traditional prayers, holy fire rituals, and ancient songs surrounded by vibrant drapes and local blooms.',
      icon: <Gift className="w-6 h-6" />,
    },
    {
      title: 'The Grand Reception',
      date: '21st February 2027',
      time: '06:30 PM Onwards',
      venue: 'Seaside Lawn, Vivekanandapuram, Kanyakumari',
      host: 'Smith Family',
      description: 'Celebrate our first steps together with dining, string music, and speeches under a canopy of sparkling lights next to the ocean waves.',
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
      {events.map((event, index) => (
        <div key={event.title} className="h-full">
          <EventCard
            title={event.title}
            date={event.date}
            time={event.time}
            venue={event.venue}
            host={event.host}
            description={event.description}
            icon={event.icon}
            delay={index * 0.15}
          />
        </div>
      ))}
    </div>
  );
}
