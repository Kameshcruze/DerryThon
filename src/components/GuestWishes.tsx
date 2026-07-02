import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Sparkles, MessageSquareHeart, User } from 'lucide-react';
import { getStoredWishes, saveWish } from '../utils/storage';
import { GuestWish } from '../types';

export default function GuestWishes() {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState<'bride' | 'groom' | 'friend' | 'family'>('friend');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    setWishes(getStoredWishes());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setValidationError('Please tell us your name.');
      return;
    }
    if (!message.trim()) {
      setValidationError('Please write a blessing or message.');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const newWish = saveWish({ name, relation, message });
      setWishes((prev) => [newWish, ...prev]);
      
      // Reset inputs
      setName('');
      setRelation('friend');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  const getRelationBadge = (rel: GuestWish['relation']) => {
    switch (rel) {
      case 'bride':
        return <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase font-semibold bg-pink-100 text-pink-700">Team Bride</span>;
      case 'groom':
        return <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase font-semibold bg-sky-100 text-sky-700">Team Groom</span>;
      case 'family':
        return <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase font-semibold bg-emerald-100 text-emerald-800">Family</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase font-semibold bg-amber-100 text-amber-800">Friend</span>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4" id="guest-wishes-root">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Write Wish Column */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 border border-white/60 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

            <div className="flex items-center gap-2 text-gold-accent uppercase tracking-widest text-[11px] font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>GUEST BOOK</span>
            </div>

            <h3 className="text-2xl font-display font-medium text-primary-olive mb-2">
              Send Your Blessings
            </h3>
            <p className="text-xs text-dark-charcoal/70 mb-6">
              Your warm words mean the world to us. Please share a wish, advice, or memory to bless our marriage.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="wishName" className="text-[10px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="wishName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Grandma Rose"
                  className="w-full px-4 py-2.5 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal"
                />
              </div>

              {/* Relationship Badge Picker */}
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-primary-olive mb-2 font-medium">
                  Relationship to Couple
                </label>
                <div className="flex flex-wrap gap-2">
                  {([
                    { key: 'bride', label: 'Bride Side' },
                    { key: 'groom', label: 'Groom Side' },
                    { key: 'friend', label: 'Friend' },
                    { key: 'family', label: 'Family' },
                  ] as const).map((r) => (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => setRelation(r.key)}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                        relation === r.key
                          ? 'bg-primary-olive text-cream-bg border-primary-olive'
                          : 'bg-white text-primary-olive border-gold-accent/15 hover:bg-cream-bg'
                      }`}
                      id={`relation-picker-${r.key}`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blessing Message */}
              <div className="flex flex-col">
                <label htmlFor="wishMessage" className="text-[10px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                  Your Blessing
                </label>
                <textarea
                  id="wishMessage"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="May your journey be beautiful and filled with joy..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal resize-none"
                />
              </div>

              {validationError && (
                <p className="text-red-600 text-[11px] font-sans flex items-center gap-1">
                  <span>⚠️</span> {validationError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-primary-olive hover:bg-secondary-olive text-cream-bg text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all duration-300 cursor-pointer disabled:opacity-50"
                id="wish-submit-btn"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending Blessing...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-gold-light" />
                    <span>Send Blessing</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Wishes Display Column */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-olive font-semibold flex items-center gap-1.5">
              <MessageSquareHeart className="w-4 h-4 text-gold-accent" />
              <span>{wishes.length} Warm Wishes</span>
            </span>
          </div>

          {/* List display with fade additions */}
          <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar" id="wishes-list-scroller">
            <AnimatePresence initial={false}>
              {wishes.map((w, idx) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="glass-card p-5 border border-white/50 shadow-sm relative group hover:border-gold-accent/30 transition-colors duration-300"
                >
                  {/* Heart decoration in corner on hover */}
                  <div className="absolute top-4 right-4 text-pink-500/10 group-hover:text-pink-500/30 transition-colors duration-300">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-full bg-primary-olive/10 flex items-center justify-center text-primary-olive shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <h5 className="text-sm font-display font-medium text-primary-olive">
                      {w.name}
                    </h5>
                    {getRelationBadge(w.relation)}
                    <span className="text-[10px] font-mono text-dark-charcoal/40 ml-auto">
                      {new Date(w.timestamp).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-dark-charcoal/85 leading-relaxed font-sans italic pl-8">
                    "{w.message}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
