import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    // Create audio instance
    // A soft, breathtaking Tamil wedding flute cover of "Kannalane" (AR Rahman classic)
    const audio = new Audio('https://archive.org/download/kannalane-flute-instrumental/Kannalane%20-%20Flute%20-%20Instrumental.mp3');
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.log('Audio autoplay prevented, waiting for click', err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 cursor-pointer ${
          isPlaying
            ? 'bg-primary-olive text-cream-bg scale-110 rotate-360'
            : 'bg-white text-primary-olive hover:bg-cream-bg'
        } border border-gold-accent/40`}
        aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
        id="music-toggle-btn"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 absolute animate-ping opacity-20" />
              <Volume2 className="w-5 h-5 z-10" />
            </>
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-accent"></span>
            </span>
          )}
        </div>
      </button>

      {/* Floating Small Music Visualizer Label */}
      {isPlaying && (
        <div className="absolute right-14 bottom-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-primary-olive border border-gold-accent/20 flex items-center gap-1.5 shadow-sm">
          <Music className="w-3 h-3 text-gold-accent animate-bounce" />
          <span>TAMIL ROMANCE ON</span>
        </div>
      )}
    </div>
  );
}
