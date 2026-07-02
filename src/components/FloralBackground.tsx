import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FallingItem {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  rotation: string;
  type: 'petal' | 'leaf';
}

export default function FloralBackground() {
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    // Generate organic falling petals and floating leaves
    const generated: FallingItem[] = Array.from({ length: 25 }).map((_, i) => {
      const isLeaf = i % 3 === 0;
      const sizeNum = isLeaf 
        ? Math.floor(Math.random() * 14) + 12 // 12px to 26px
        : Math.floor(Math.random() * 18) + 10; // 10px to 28px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * -15}s`,
        duration: `${12 + Math.random() * 12}s`,
        size: `${sizeNum}px`,
        opacity: 0.25 + Math.random() * 0.45,
        rotation: `${Math.random() * 360}deg`,
        type: isLeaf ? 'leaf' : 'petal',
      };
    });
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* 1. Subtle Radial Golden Vignette Overlay */}
      <div className="absolute inset-0 invitation-vignette opacity-80 pointer-events-none" />

      {/* 2. LIVING BOTANICAL EDGE GARLANDS (FOUR EDGES & CORNERS) */}
      
      {/* TOP LEFT: Majestic Eucalyptus Garland + Baby's Breath */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 text-primary-olive/30 origin-top-left animate-sway-slow select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          {/* Main Vine */}
          <path d="M0,0 Q60,30 110,90 T180,180" fill="none" stroke="#798C4B" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Eucalyptus Leaf Pairs (Generous sizing) */}
          <path d="M30,15 C10,30 20,50 40,40 C60,30 50,10 30,15 Z" fill="#566B2F" fillOpacity="0.25" />
          <path d="M60,40 C45,60 60,80 75,70 C90,60 75,40 60,40 Z" fill="#798C4B" fillOpacity="0.2" />
          <path d="M100,75 C85,100 110,115 120,100 C130,85 115,70 100,75 Z" fill="#566B2F" fillOpacity="0.22" />
          <path d="M140,120 C125,145 150,155 160,140 C170,125 155,110 140,120 Z" fill="#798C4B" fillOpacity="0.18" />
          {/* Baby's Breath Sprigs (Delicate Gold & White Buds) */}
          <circle cx="45" cy="25" r="3" fill="#C8A45D" fillOpacity="0.6" />
          <circle cx="52" cy="20" r="2.5" fill="#FAFAF8" fillOpacity="0.8" />
          <circle cx="80" cy="55" r="3.5" fill="#C8A45D" fillOpacity="0.5" />
          <circle cx="85" cy="48" r="2.5" fill="#FAFAF8" fillOpacity="0.9" />
          <circle cx="115" cy="85" r="3" fill="#C8A45D" fillOpacity="0.6" />
          <circle cx="122" cy="78" r="2.5" fill="#FAFAF8" fillOpacity="0.8" />
        </svg>
      </div>

      {/* TOP RIGHT: Swaying Garland + Baby's Breath */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 text-primary-olive/30 origin-top-right animate-sway-opposite select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full transform scale-x-[-1]">
          {/* Main Vine */}
          <path d="M0,0 Q60,30 110,90 T180,180" fill="none" stroke="#798C4B" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Eucalyptus Leaves */}
          <path d="M30,15 C10,30 20,50 40,40 C60,30 50,10 30,15 Z" fill="#566B2F" fillOpacity="0.25" />
          <path d="M60,40 C45,60 60,80 75,70 C90,60 75,40 60,40 Z" fill="#798C4B" fillOpacity="0.2" />
          <path d="M100,75 C85,100 110,115 120,100 C130,85 115,70 100,75 Z" fill="#566B2F" fillOpacity="0.22" />
          {/* Buds */}
          <circle cx="45" cy="25" r="3" fill="#C8A45D" fillOpacity="0.6" />
          <circle cx="52" cy="20" r="2.5" fill="#FAFAF8" fillOpacity="0.8" />
          <circle cx="80" cy="55" r="3.5" fill="#C8A45D" fillOpacity="0.5" />
        </svg>
      </div>

      {/* BOTTOM LEFT: Delicate Swaying Foliage Upwards */}
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 text-primary-olive/25 origin-bottom-left animate-sway-opposite select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full transform scale-y-[-1]">
          {/* Main Vine */}
          <path d="M0,0 Q50,40 100,90 T170,175" fill="none" stroke="#798C4B" strokeWidth="1.2" strokeOpacity="0.3" />
          {/* Leaves */}
          <path d="M40,25 C20,40 30,60 50,50 C70,40 60,20 40,25 Z" fill="#798C4B" fillOpacity="0.2" />
          <path d="M80,60 C65,80 80,100 95,90 C110,80 95,60 80,60 Z" fill="#566B2F" fillOpacity="0.18" />
          {/* Buds */}
          <circle cx="55" cy="35" r="3" fill="#C8A45D" fillOpacity="0.5" />
          <circle cx="90" cy="75" r="2.5" fill="#FAFAF8" fillOpacity="0.8" />
        </svg>
      </div>

      {/* BOTTOM RIGHT: Lush Branch sways */}
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 text-primary-olive/30 origin-bottom-right animate-sway-slow select-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full transform scale-x-[-1] scale-y-[-1]">
          {/* Main Vine */}
          <path d="M0,0 Q60,30 110,90 T180,180" fill="none" stroke="#798C4B" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Leaves */}
          <path d="M30,15 C10,30 20,50 40,40 C60,30 50,10 30,15 Z" fill="#566B2F" fillOpacity="0.24" />
          <path d="M60,40 C45,60 60,80 75,70 C90,60 75,40 60,40 Z" fill="#798C4B" fillOpacity="0.2" />
          <path d="M100,75 C85,100 110,115 120,100 C130,85 115,70 100,75 Z" fill="#566B2F" fillOpacity="0.2" />
          {/* Buds */}
          <circle cx="45" cy="25" r="3" fill="#C8A45D" fillOpacity="0.6" />
          <circle cx="52" cy="20" r="2.5" fill="#FAFAF8" fillOpacity="0.8" />
        </svg>
      </div>

      {/* LEFT & RIGHT EDGES: Elegant Eucalyptus Vines Swaying in the Breeze */}
      <div className="absolute top-1/4 left-0 h-1/2 w-16 text-primary-olive/15 origin-left animate-sway-medium">
        <svg viewBox="0 0 50 200" fill="currentColor" className="h-full w-full">
          <path d="M10,0 C15,50 5,100 15,200" fill="none" stroke="#798C4B" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M12,40 C2,45 5,58 15,52 C25,46 22,38 12,40 Z" fill="#798C4B" fillOpacity="0.15" />
          <path d="M10,110 C0,115 3,128 13,122 C23,116 20,108 10,110 Z" fill="#566B2F" fillOpacity="0.12" />
          <circle cx="18" cy="48" r="2" fill="#C8A45D" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 h-1/2 w-16 text-primary-olive/15 origin-right animate-sway-medium transform scale-x-[-1]">
        <svg viewBox="0 0 50 200" fill="currentColor" className="h-full w-full">
          <path d="M10,0 C15,50 5,100 15,200" fill="none" stroke="#798C4B" strokeWidth="1" strokeOpacity="0.25" />
          <path d="M12,40 C2,45 5,58 15,52 C25,46 22,38 12,40 Z" fill="#798C4B" fillOpacity="0.15" />
          <path d="M10,110 C0,115 3,128 13,122 C23,116 20,108 10,110 Z" fill="#566B2F" fillOpacity="0.12" />
          <circle cx="18" cy="48" r="2" fill="#C8A45D" fillOpacity="0.4" />
        </svg>
      </div>

      {/* TOP & BOTTOM EDGES: Scattered Baby's Breath & Eucalyptus Border Elements */}
      <div className="absolute top-0 inset-x-0 h-12 flex justify-around opacity-40">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div 
            key={`top-bud-${idx}`} 
            className={`w-10 h-10 text-primary-olive/30 transform ${idx % 2 === 0 ? 'rotate-12 animate-sway-slow' : '-rotate-12 animate-sway-opposite'}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="8" cy="8" r="2.5" fill="#C8A45D" />
              <circle cx="16" cy="10" r="1.5" fill="#FAFAF8" />
              <circle cx="12" cy="16" r="2" fill="#798C4B" fillOpacity="0.3" />
            </svg>
          </div>
        ))}
      </div>

      {/* 3. CONTINUOUSLY FALLING PETALS AND DRIFTING FOLIAGE */}
      {items.map((item) => {
        if (item.type === 'petal') {
          return (
            <svg
              key={item.id}
              className="absolute text-gold-accent/40 animate-petal opacity-0"
              style={{
                left: item.left,
                width: item.size,
                height: item.size,
                animationDelay: item.delay,
                animationDuration: item.duration,
                transform: `rotate(${item.rotation})`,
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Elegant curved petal */}
              <path d="M12 21.5c-4.5-3.5-7-7-7-10.5C5 6.5 8 4 12 2c4 2 7 4.5 7 9c0 3.5-2.5 7-7 10.5z" opacity={item.opacity} />
            </svg>
          );
        } else {
          return (
            <svg
              key={item.id}
              className="absolute text-primary-olive/20 animate-petal opacity-0"
              style={{
                left: item.left,
                width: item.size,
                height: item.size,
                animationDelay: item.delay,
                animationDuration: item.duration,
                transform: `rotate(${item.rotation})`,
              }}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lightweight floating mini-eucalyptus leaf */}
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c-3-1.5-4-4.5-4-7.5s1-4 4-4 4 1 4 4-1 6-4 7.5z" opacity={item.opacity} />
            </svg>
          );
        }
      })}

      {/* 4. SUBTLE FLOATING GOLD SPARKLE PARTICLES */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-gradient-to-tr from-gold-accent via-gold-light to-white blur-[0.5px] animate-sparkle-float"
            style={{
              top: `${5 + Math.random() * 90}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${Math.random() * 4.5 + 2}px`,
              height: `${Math.random() * 4.5 + 2}px`,
              animationDelay: `${Math.random() * -6}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
