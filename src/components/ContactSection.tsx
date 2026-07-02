import { motion } from 'motion/react';
import { Phone, MessageCircleCode, Heart, Sparkles } from 'lucide-react';

interface ContactCardProps {
  side: 'Bride' | 'Groom';
  title: string;
  contacts: {
    name: string;
    role: string;
    phone: string;
    whatsapp: string;
  }[];
  delay: number;
}

function ContactCard({ side, title, contacts, delay }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="glass-card p-6 sm:p-8 border border-white/60 shadow-lg relative overflow-hidden flex flex-col justify-between"
    >
      {/* Absolute Side Indicator Watermark */}
      <span className="absolute -top-6 -right-6 text-gold-accent/5 font-display text-8xl font-semibold select-none">
        {side[0]}
      </span>

      <div>
        <div className="flex items-center gap-2 text-gold-accent uppercase tracking-widest text-[10px] font-semibold mb-3">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>{side} SIDE</span>
        </div>

        <h4 className="text-2xl font-display font-medium text-primary-olive mb-4">
          {title}
        </h4>

        <div className="w-10 h-[1px] bg-gold-accent mb-6" />

        <div className="space-y-6">
          {contacts.map((c) => (
            <div key={c.name} className="border-b border-gold-accent/10 pb-4 last:border-0 last:pb-0">
              <h5 className="text-base font-display font-medium text-primary-olive">
                {c.name}
              </h5>
              <span className="text-xs text-dark-charcoal/65 block mb-3">{c.role}</span>
              
              <div className="flex gap-2.5">
                <a
                  href={`tel:${c.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white hover:bg-cream-bg text-primary-olive border border-gold-accent/20 transition-all duration-300 shadow-sm cursor-pointer"
                  id={`phone-${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Phone className="w-3.5 h-3.5 text-gold-accent" />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${c.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-primary-olive hover:bg-secondary-olive text-cream-bg transition-all duration-300 shadow-sm cursor-pointer"
                  id={`whatsapp-${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <MessageCircleCode className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const brideContacts = [
    {
      name: 'Mr. Richard Smith',
      role: 'Father of the Bride',
      phone: '+919876543210',
      whatsapp: '+919876543210',
    },
    {
      name: 'Mrs. Evelyn Smith',
      role: 'Mother of the Bride',
      phone: '+919876543211',
      whatsapp: '+919876543211',
    },
  ];

  const groomContacts = [
    {
      name: 'Mr. John Thon',
      role: 'Elder Brother of the Groom',
      phone: '+919876543212',
      whatsapp: '+919876543212',
    },
    {
      name: 'Mrs. Maria Thon',
      role: 'Family Coordinator',
      phone: '+919876543213',
      whatsapp: '+919876543213',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 py-4" id="contact-section-root">
      <ContactCard
        side="Bride"
        title="Derry's Family"
        contacts={brideContacts}
        delay={0.1}
      />
      <ContactCard
        side="Groom"
        title="Thon's Family"
        contacts={groomContacts}
        delay={0.2}
      />
    </div>
  );
}
