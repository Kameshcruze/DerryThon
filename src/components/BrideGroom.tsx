import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export default function BrideGroom() {
  const partners = [
    {
      role: 'Bride',
      name: 'Derry',
      quote: 'Every love story is beautiful, but ours is my favorite.',
      parents: {
        father: 'Mr. Richard Smith',
        mother: 'Mrs. Evelyn Smith',
      },
      avatar: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=400',
    },
    {
      role: 'Groom',
      name: 'Thon',
      quote: 'Two souls with but a single thought, two hearts that beat as one.',
      parents: {
        father: 'Mr. Arthur Thon',
        mother: 'Mrs. Beatrice Thon',
      },
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto px-4 py-4" id="bride-groom-root">
      {partners.map((p, idx) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="glass-card p-6 sm:p-10 border border-white/60 shadow-lg relative overflow-hidden flex flex-col items-center text-center group"
        >
          {/* Top subtle golden botanical arc decoration */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent" />
          
          {/* Circular Image Placeholder Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-gold-accent/30 p-2 mb-6 group-hover:border-gold-accent transition-colors duration-500 bg-white/40">
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
              <img
                src={p.avatar}
                alt={p.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary-olive/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Heart badge */}
            <div className="absolute -bottom-1 right-2 w-8 h-8 rounded-full bg-cream-bg border border-gold-accent/20 flex items-center justify-center text-gold-accent shadow-sm group-hover:bg-primary-olive group-hover:text-cream-bg transition-colors duration-500">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Role and Name */}
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-gold-accent font-semibold mb-2">
            THE {p.role}
          </span>
          
          <h4 className="text-3xl sm:text-4xl font-display font-medium text-primary-olive mb-4">
            {p.name}
          </h4>

          {/* Delicate visual quote block */}
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed italic max-w-xs mb-6 font-sans relative px-4">
            <span className="absolute left-0 top-[-5px] text-gold-accent/25 text-3xl font-display font-semibold select-none">“</span>
            {p.quote}
            <span className="absolute right-0 bottom-[-15px] text-gold-accent/25 text-3xl font-display font-semibold select-none">”</span>
          </p>

          {/* Parents Information */}
          <div className="w-full border-t border-gold-accent/10 pt-5 mt-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary-olive font-semibold block mb-2.5">
              Beloved Offspring Of
            </span>
            <div className="space-y-0.5 text-xs text-dark-charcoal/85">
              <p className="font-semibold">{p.parents.father}</p>
              <p className="font-semibold">{p.parents.mother}</p>
            </div>
          </div>

        </motion.div>
      ))}
    </div>
  );
}
