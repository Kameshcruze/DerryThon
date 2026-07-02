import { motion } from 'motion/react';
import { Gift, QrCode, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);
  const upiId = 'derryandthon@upi';

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-4" id="gift-registry-root">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-6 sm:p-10 border border-white/60 shadow-xl text-center relative overflow-hidden"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-4 right-4 text-gold-accent/10">
          <Gift className="w-16 h-16" />
        </div>

        <div className="flex items-center justify-center gap-2 text-gold-accent uppercase tracking-widest text-[11px] font-semibold mb-3">
          <Sparkles className="w-4 h-4" />
          <span>LOVE & BLESSINGS</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display font-medium text-primary-olive mb-4">
          Your Presence Is Our Greatest Gift
        </h3>

        <p className="text-sm font-sans text-dark-charcoal/80 leading-relaxed max-w-md mx-auto mb-8">
          The joy of having you celebrate with us on our wedding days is more than we could ever ask for. However, if you would still like to bless our union with a gift, you may scan the QR code or use the UPI detail below.
        </p>

        {/* Scan & Details Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-b border-gold-accent/10 py-8 mb-6">
          
          {/* QR Code Container */}
          <div className="relative group p-4 bg-white rounded-2xl border border-gold-accent/25 shadow-sm">
            <div className="w-40 h-40 bg-cream-bg flex items-center justify-center rounded-xl relative overflow-hidden">
              {/* Luxury Styled SVG Vector QR code */}
              <svg
                className="w-32 h-32 text-primary-olive"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* QR corner blocks */}
                <rect x="5" y="5" width="25" height="25" rx="2" strokeWidth="3" />
                <rect x="10" y="10" width="15" height="15" fill="currentColor" opacity="0.15" />
                <rect x="15" y="15" width="5" height="5" fill="currentColor" />

                <rect x="70" y="5" width="25" height="25" rx="2" strokeWidth="3" />
                <rect x="75" y="10" width="15" height="15" fill="currentColor" opacity="0.15" />
                <rect x="80" y="15" width="5" height="5" fill="currentColor" />

                <rect x="5" y="70" width="25" height="25" rx="2" strokeWidth="3" />
                <rect x="10" y="75" width="15" height="15" fill="currentColor" opacity="0.15" />
                <rect x="15" y="80" width="5" height="5" fill="currentColor" />

                {/* Simulated random QR pixel dust dots to look real */}
                <circle cx="45" cy="15" r="2" fill="currentColor" />
                <circle cx="55" cy="15" r="2.5" fill="currentColor" />
                <circle cx="45" cy="25" r="3" fill="currentColor" />
                <circle cx="55" cy="25" r="2" fill="currentColor" />
                
                <circle cx="15" cy="45" r="2" fill="currentColor" />
                <circle cx="15" cy="55" r="3.5" fill="currentColor" />
                <circle cx="25" cy="45" r="2.5" fill="currentColor" />
                <circle cx="25" cy="55" r="2" fill="currentColor" />

                <circle cx="45" cy="45" r="3" fill="currentColor" />
                <circle cx="55" cy="45" r="2" fill="currentColor" />
                <circle cx="45" cy="55" r="2" fill="currentColor" />
                <circle cx="55" cy="55" r="3" fill="currentColor" />

                <circle cx="80" cy="45" r="2.5" fill="currentColor" />
                <circle cx="85" cy="55" r="2" fill="currentColor" />
                <circle cx="75" cy="55" r="3" fill="currentColor" />

                <circle cx="45" cy="80" r="2" fill="currentColor" />
                <circle cx="55" cy="85" r="3" fill="currentColor" />
                <circle cx="45" cy="85" r="2.5" fill="currentColor" />
                <circle cx="55" cy="80" r="2" fill="currentColor" />

                {/* A tiny gold heart in the very center */}
                <path d="M50 47.5c-1-1.5-2.5-2-3.5-1.5-1.5.8-1.5 2.5 0 4l3.5 3.5 3.5-3.5c1.5-1.5 1.5-3.2 0-4-1-.5-2.5 0-3.5 1.5z" fill="#C8A45D" stroke="#C8A45D" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent/40 rounded-2xl transition-all duration-500 pointer-events-none" />
          </div>

          {/* Details Column */}
          <div className="text-left space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-accent block mb-1">UPI ADDRESS</span>
              <div className="flex items-center gap-2 bg-cream-bg border border-gold-accent/15 px-4 py-2.5 rounded-xl">
                <span className="text-sm font-mono text-primary-olive font-semibold">{upiId}</span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-gold-accent/10 text-gold-accent hover:text-primary-olive transition-colors cursor-pointer"
                  title="Copy UPI ID"
                  id="copy-upi-btn"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <QrCode className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-[10px] font-sans text-emerald-600 block mt-1">Copied successfully!</span>
              )}
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-accent block mb-1">ACCOUNT DETAIL</span>
              <p className="text-xs text-dark-charcoal/80 leading-relaxed">
                Bank: Federal Bank Kanyakumari<br />
                A/C Holder: Derry Smith<br />
                IFS Code: FDRL0001243
              </p>
            </div>
          </div>

        </div>

        <span className="text-[10px] font-mono tracking-wider text-gold-accent uppercase block">
          💐 THANK YOU FOR BLESSING US 💐
        </span>
      </motion.div>
    </div>
  );
}
