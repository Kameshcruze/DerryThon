import React from 'react';

interface TamilDividerProps {
  className?: string;
}

export default function TamilDivider({ className = "my-4" }: TamilDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 w-full ${className} select-none pointer-events-none`}>
      {/* Symmetrical Left Golden Line with an elegant curl */}
      <div className="flex-1 max-w-[100px] sm:max-w-[150px] flex items-center justify-end">
        <svg viewBox="0 0 100 10" className="w-full h-2 text-gold-accent opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0,5 L85,5 Q92,5 95,2 T100,0" strokeLinecap="round" />
          <circle cx="85" cy="5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Exquisite Symmetrical Tamil Kolam / Lamp Motif (Vilakku) */}
      <div className="text-gold-accent flex items-center justify-center">
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Symmetrical traditional Pulli Kolam & Vilakku design */}
          {/* Base of the Lamp (Vilakku Base) */}
          <path d="M30,70 L70,70 Q75,70 70,75 L30,75 Q25,70 30,70 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M40,70 L60,70 L55,55 L45,55 Z" fill="currentColor" fillOpacity="0.15" />
          
          {/* Oil Cup */}
          <path d="M25,55 C25,40 75,40 75,55 C70,62 30,62 25,55 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
          
          {/* Holy Flame (Sudar / Jyothi) with a heart-shaped slow pulsation */}
          <path d="M50,25 C45,38 48,46 50,48 C52,46 55,38 50,25 Z" fill="currentColor" strokeWidth="1.5" className="animate-pulse" />
          <path d="M50,28 C47,36 49,42 50,44 C51,42 53,36 50,28 Z" fill="#FFF" fillOpacity="0.6" />

          {/* Symmetrical Kolam Loops underneath the lamp */}
          <path d="M20,78 Q50,98 80,78 Q50,88 20,78 Z" strokeWidth="1" strokeOpacity="0.8" />
          <path d="M10,75 Q50,105 90,75" strokeWidth="0.8" strokeDasharray="2,2" strokeOpacity="0.6" />

          {/* Golden Traditional Dots (Pulli) */}
          <circle cx="50" cy="12" r="1.5" fill="currentColor" />
          <circle cx="15" cy="55" r="1.5" fill="currentColor" />
          <circle cx="85" cy="55" r="1.5" fill="currentColor" />
          <circle cx="35" cy="88" r="1" fill="currentColor" />
          <circle cx="65" cy="88" r="1" fill="currentColor" />
          <circle cx="50" cy="92" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {/* Symmetrical Right Golden Line with an elegant curl */}
      <div className="flex-1 max-w-[100px] sm:max-w-[150px] flex items-center justify-start">
        <svg viewBox="0 0 100 10" className="w-full h-2 text-gold-accent opacity-70 transform scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0,5 L85,5 Q92,5 95,2 T100,0" strokeLinecap="round" />
          <circle cx="85" cy="5" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
