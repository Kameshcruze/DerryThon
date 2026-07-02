import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1541949001168-91fb5596e1ec?auto=format&fit=crop&q=80&w=800',
    title: 'Eucalyptus & Soft Blooms',
    category: 'Botanicals',
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
    title: 'Sacred Promises',
    category: 'Details',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800',
    title: 'The Banquet Setting',
    category: 'Ceremony',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800',
    title: 'Golden Bands of Love',
    category: 'Details',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    title: 'Ocean Whispers',
    category: 'Venue',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800',
    title: 'Fine Linen Stationary',
    category: 'Invitations',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    title: 'Walking Together',
    category: 'Companionship',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800',
    title: 'Olive Garden Celebration',
    category: 'Ceremony',
  },
];

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIdx(index);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4" id="gallery-root">
      {/* Decorative intro */}
      <div className="flex items-center justify-center gap-2 mb-10 text-xs text-gold-accent font-semibold tracking-widest uppercase">
        <ImageIcon className="w-4 h-4" />
        <span>CHERISHED MEMORIES</span>
      </div>

      {/* Masonry-Style Responsive Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            onClick={() => openLightbox(idx)}
            className="break-inside-avoid overflow-hidden rounded-[20px] bg-white border border-gold-accent/15 cursor-pointer relative group shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Aspect ratios can vary to give the organic masonry flow */}
            <div className="overflow-hidden relative">
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Golden Hover Overlay */}
              <div className="absolute inset-0 bg-primary-olive/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInHover={{ scale: 1 }}
                  className="w-10 h-10 rounded-full bg-cream-bg/90 flex items-center justify-center text-primary-olive shadow-md mb-2"
                >
                  <Eye className="w-5 h-5" />
                </motion.div>
                <span className="text-white font-display text-sm tracking-wide text-center">
                  {img.title}
                </span>
                <span className="text-gold-light font-sans text-[10px] uppercase tracking-widest mt-1">
                  {img.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-dark-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            id="lightbox-overlay"
          >
            {/* Top Bar Utilities */}
            <div className="absolute top-4 inset-x-0 px-6 flex justify-between items-center text-white/80">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-accent">
                {activeImageIdx + 1} / {GALLERY_IMAGES.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Left */}
            <button
              onClick={showPrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
              aria-label="Previous Image"
              id="lightbox-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image View */}
            <motion.div
              key={activeImageIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] relative flex flex-col items-center"
            >
              <img
                src={GALLERY_IMAGES[activeImageIdx].url}
                alt={GALLERY_IMAGES[activeImageIdx].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <div className="text-center mt-4">
                <h5 className="text-white font-display text-lg tracking-wide">
                  {GALLERY_IMAGES[activeImageIdx].title}
                </h5>
                <p className="text-gold-accent font-mono text-xs uppercase tracking-widest mt-1">
                  {GALLERY_IMAGES[activeImageIdx].category}
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={showNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
              aria-label="Next Image"
              id="lightbox-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
