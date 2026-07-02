import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onEnterClicked: boolean;
}

export default function Navbar({ onEnterClicked }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', targetId: 'home' },
    { label: 'Couple', targetId: 'couple' },
    { label: 'Story', targetId: 'story' },
    { label: 'Events', targetId: 'events' },
    { label: 'Venue', targetId: 'venue' },
    { label: 'Gallery', targetId: 'gallery' },
    { label: 'RSVP', targetId: 'rsvp' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!onEnterClicked) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-bg/90 backdrop-blur-md py-4 shadow-sm border-b border-gold-accent/10'
            : 'bg-transparent py-6'
        }`}
        id="navbar-nav"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Script Logo */}
          <button
            onClick={() => handleScrollTo('home')}
            className="font-script text-2xl sm:text-3xl text-primary-olive hover:text-gold-accent transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            id="navbar-logo-btn"
          >
            <span>Derry</span>
            <Heart className="w-4 h-4 text-gold-accent fill-current animate-pulse" />
            <span>Thon</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.targetId)}
                className="text-xs uppercase tracking-widest font-semibold text-dark-charcoal/80 hover:text-gold-accent transition-colors duration-300 cursor-pointer"
                id={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('rsvp')}
              className="px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-primary-olive hover:bg-secondary-olive text-cream-bg shadow-sm transition-all duration-300 border border-primary-olive cursor-pointer"
              id="nav-rsvp-btn"
            >
              RSVP Now
            </button>
          </div>

          {/* Mobile hamburger Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gold-accent/20 text-primary-olive transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="navbar-mobile-toggle"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bg-cream-bg/95 backdrop-blur-lg border-b border-gold-accent/10 z-35 shadow-xl p-6 lg:hidden"
            id="mobile-drawer-menu"
          >
            <div className="flex flex-col gap-4 text-center">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="py-2.5 text-sm uppercase tracking-widest font-semibold text-dark-charcoal/80 border-b border-gold-accent/5 last:border-0"
                  id={`nav-mobile-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleScrollTo('rsvp')}
                className="mt-2 w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary-olive text-cream-bg border border-primary-olive shadow-sm"
                id="nav-mobile-rsvp-btn"
              >
                RSVP Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
