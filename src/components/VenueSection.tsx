import { motion } from 'motion/react';
import { MapPin, Map, Navigation, Compass } from 'lucide-react';

export default function VenueSection() {
  const addressQuery = "Vivekanandapuram, Kanyakumari, Tamil Nadu, India - 629702";
  const mapUrl = `https://maps.google.com/maps?q=Vivekanandapuram,%20Kanyakumari,%20Tamil%20Nadu,%20India%20629702&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Vivekanandapuram,Kanyakumari,TamilNadu,India`;
  const viewMapUrl = `https://www.google.com/maps/place/Vivekanandapuram,+Kanyakumari,+Tamil+Nadu+629702`;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Venue Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 glass-card p-6 sm:p-8 border border-white/60 shadow-lg flex flex-col justify-between relative overflow-hidden"
          id="venue-details-card"
        >
          {/* Subtle floral watermark outline */}
          <div className="absolute -bottom-8 -right-8 text-gold-accent/5 pointer-events-none">
            <Compass className="w-48 h-48 rotate-45" />
          </div>

          <div>
            <div className="flex items-center gap-2 text-gold-accent uppercase tracking-widest text-xs font-semibold mb-4">
              <span className="w-6 h-[1px] bg-gold-accent" />
              <span>THE DESTINATION</span>
            </div>

            <h3 className="text-3xl font-display font-medium text-primary-olive mb-4">
              Vivekanandapuram
            </h3>

            <p className="text-sm font-sans text-dark-charcoal/85 leading-relaxed mb-6">
              A serene, magnificent sanctuary located at the southern tip of India, where the Bay of Bengal, the Indian Ocean, and the Arabian Sea meet. Surrounded by lush greenery and the rhythmic music of the ocean waves, it is the perfect sanctuary to begin our sacred journey.
            </p>

            <div className="space-y-4 border-t border-gold-accent/10 pt-5 mb-8">
              <div className="flex items-start">
                <div>
                  <h5 className="text-xs uppercase font-semibold text-primary-olive tracking-wider mb-0.5">ADDRESS</h5>
                  <p className="text-sm text-dark-charcoal/80">
                    Vivekanandapuram, Kanyakumari, Tamil Nadu, India – 629702
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h5 className="text-xs uppercase font-semibold text-primary-olive tracking-wider mb-0.5">LANDMARK</h5>
                  <p className="text-sm text-dark-charcoal/80">
                    Near Kanyakumari Beach & Vivekananda Memorial Ferry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={viewMapUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-olive hover:bg-secondary-olive text-cream-bg shadow-sm transition-all duration-300 border border-primary-olive"
              id="open-in-google-maps"
            >
              <Map className="w-4 h-4" />
              <span>Open in Maps</span>
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white hover:bg-cream-bg text-primary-olive shadow-sm transition-all duration-300 border border-gold-accent/40"
              id="get-directions-btn"
            >
              <Navigation className="w-4 h-4 text-gold-accent" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

        {/* Embedded Map Frame */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 rounded-[24px] overflow-hidden border border-gold-accent/20 shadow-lg min-h-[350px] lg:min-h-[450px] relative bg-cream-bg"
          id="google-maps-frame"
        >
          {/* Subtle loading screen backplate */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-cream-bg">
            <span className="text-xs font-mono text-gold-accent uppercase tracking-widest animate-pulse">Loading Live Map...</span>
          </div>

          <iframe
            src={mapUrl}
            className="w-full h-full border-0 rounded-[24px]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
            title="Vivekanandapuram, Kanyakumari Venue Location"
          />
        </motion.div>
        
      </div>
    </div>
  );
}
