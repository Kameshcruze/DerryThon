import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { saveRSVP } from '../utils/storage';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    guestsCount: 1,
    attending: 'yes' as 'yes' | 'no',
    foodPreference: 'veg' as 'veg' | 'non-veg' | 'both',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Please enter your phone number.';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    if (formData.guestsCount < 1 || formData.guestsCount > 20) {
      tempErrors.guestsCount = 'Guest count must be between 1 and 20.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guestsCount' ? parseInt(value, 10) || 1 : value,
    }));
    // Clear individual error as they type
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleAttendingChange = (status: 'yes' | 'no') => {
    setFormData((prev) => ({ ...prev, attending: status }));
  };

  const handleFoodChange = (pref: 'veg' | 'non-veg' | 'both') => {
    setFormData((prev) => ({ ...prev, foodPreference: pref }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      saveRSVP(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        guestsCount: 1,
        attending: 'yes',
        foodPreference: 'veg',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4" id="rsvp-form-root">
      <AnimatePresence mode="wait">
        {!submitSuccess ? (
          <motion.form
            key="rsvp-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-10 border border-white/60 shadow-xl relative overflow-hidden"
          >
            {/* Soft decorative golden line across the top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-accent block mb-2">RSVP REGISTRY</span>
              <h4 className="text-2xl sm:text-3xl font-display font-medium text-primary-olive mb-1">
                Will You Attend?
              </h4>
              <p className="text-xs sm:text-sm text-dark-charcoal/70">
                Kindly respond by February 5th, 2027 to help us curate the perfect dining experience.
              </p>
            </div>

            <div className="space-y-6">
              {/* Attendance Toggle */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-primary-olive mb-3 text-center">
                  YOUR RESPONSE
                </label>
                <div className="flex gap-4 max-w-sm mx-auto">
                  <button
                    type="button"
                    onClick={() => handleAttendingChange('yes')}
                    className={`flex-1 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                      formData.attending === 'yes'
                        ? 'bg-primary-olive text-cream-bg border-primary-olive shadow-sm'
                        : 'bg-white text-primary-olive border-gold-accent/20 hover:bg-cream-bg'
                    }`}
                    id="rsvp-attend-yes"
                  >
                    Joyfully Attend
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAttendingChange('no')}
                    className={`flex-1 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                      formData.attending === 'no'
                        ? 'bg-dark-charcoal/80 text-cream-bg border-dark-charcoal/80 shadow-sm'
                        : 'bg-white text-dark-charcoal/80 border-gold-accent/20 hover:bg-cream-bg'
                    }`}
                    id="rsvp-attend-no"
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {/* Attendance Details Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col">
                  <label htmlFor="guestsCount" className="text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guestsCount"
                    name="guestsCount"
                    min="1"
                    max="20"
                    value={formData.guestsCount}
                    onChange={handleChange}
                    disabled={formData.attending === 'no'}
                    className="w-full px-4 py-3 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal disabled:opacity-50 disabled:bg-gray-100"
                  />
                  {errors.guestsCount && (
                    <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1 font-sans">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.guestsCount}
                    </span>
                  )}
                </div>
              </div>

              {/* Food Preference (only active if attending) */}
              <div className={`${formData.attending === 'no' ? 'opacity-40 pointer-events-none' : ''} transition-opacity duration-300`}>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-2.5 font-medium">
                  Food Preference
                </label>
                <div className="flex flex-wrap gap-3">
                  {(['veg', 'non-veg', 'both'] as const).map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => handleFoodChange(pref)}
                      className={`px-4 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                        formData.foodPreference === pref
                          ? 'bg-gold-accent text-white border-gold-accent'
                          : 'bg-white text-primary-olive border-gold-accent/15 hover:bg-cream-bg'
                      }`}
                      id={`food-pref-${pref}`}
                    >
                      {pref === 'veg' ? '🌿 Pure Vegetarian' : pref === 'non-veg' ? '🍖 Non-Vegetarian' : '🍽️ Both'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Blessings */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-primary-olive mb-1.5 font-medium">
                  Message or Wishes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a lovely message for Derry & Thon..."
                  className="w-full px-4 py-3 rounded-xl border border-gold-accent/20 bg-white/70 focus:bg-white focus:border-gold-accent focus:outline-none text-sm transition-colors text-dark-charcoal resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-primary-olive hover:bg-secondary-olive text-cream-bg text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed border border-primary-olive"
                id="rsvp-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting RSVP...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-gold-light" />
                    <span>Joyfully Send RSVP</span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-screen"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card p-10 border border-white/60 shadow-2xl text-center flex flex-col items-center justify-center py-16 relative"
          >
            {/* Soft decorative ring */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

            <div className="w-16 h-16 rounded-full bg-primary-olive/10 flex items-center justify-center text-primary-olive mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl sm:text-3xl font-display font-medium text-primary-olive mb-2">
              RSVP Received with Joy!
            </h4>
            <p className="text-sm text-dark-charcoal/80 max-w-md mb-8 leading-relaxed font-sans">
              Thank you so much for responding. Your details have been recorded. We are extremely delighted to share our special days with you!
            </p>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white hover:bg-cream-bg text-primary-olive border border-gold-accent/40 shadow-sm transition-all duration-300 cursor-pointer"
              id="rsvp-another-response-btn"
            >
              Update or Send Another Response
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
