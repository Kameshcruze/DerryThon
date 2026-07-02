import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  rotation: string;
}

export default function FloralBackground() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate a fixed number of falling elements
    const elements: Petal[] = Array.from({ length: 15 }).map((_, i) => {
      const sizeNum = Math.floor(Math.random() * 20) + 12; // 12px to 32px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * -12}s`, // start partway through animation
        duration: `${10 + Math.random() * 10}s`, // 10s to 20s
        size: `${sizeNum}px`,
        opacity: 0.3 + Math.random() * 0.5,
        rotation: `${Math.random() * 360}deg`,
      };
    });
    setPetals(elements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Falling Flower Petals */}
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute text-gold-accent animate-petal opacity-0"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `rotate(${petal.rotation})`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A lovely petal outline */}
          <path d="M12 21.5c-4.5-3.5-7-7-7-10.5C5 6.5 8 4 12 2c4 2 7 4.5 7 9c0 3.5-2.5 7-7 10.5z" opacity={petal.opacity} />
        </svg>
      ))}

      {/* Floating Olive/Eucalyptus Green Leaves (gentle parallax feel) */}
      {petals.slice(0, 6).map((leaf, index) => (
        <svg
          key={`leaf-${index}`}
          className="absolute text-primary-olive/20 animate-petal opacity-0"
          style={{
            left: `${(index * 18 + 7) % 100}%`,
            width: `24px`,
            height: `24px`,
            animationDelay: `${index * -3}s`,
            animationDuration: `${14 + index * 2}s`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* An organic leaf shape */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c-3-1.5-4-4.5-4-7.5s1-4 4-4 4 1 4 4-1 6-4 7.5z" />
        </svg>
      ))}

      {/* Glowing Gold Dust Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-gold-accent/40 blur-[1px] animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
