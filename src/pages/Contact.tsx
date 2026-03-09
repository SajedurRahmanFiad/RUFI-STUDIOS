import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="pt-12 md:pt-26 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's build <br />something great.</h1>
              <p className="text-lg text-black/60 mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear about it. 
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Email us</p>
                    <p className="text-md font-medium">studios.rufi@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Call us</p>
                    <p className="text-md font-medium">+880 19482 94218</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Visit us</p>
                    <p className="text-md font-medium">Uttara, Dhaka - 1230</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-secondary p-8 md:p-12 rounded-2xl border border-black/5"
            >
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-black/60">
                    Thank you for reaching out. We'll be in touch very soon.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-sm font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-black/60 ml-1">Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your nice name"
                        className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-black/60 ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Your beautiful email"
                        className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black/60 ml-1">Service</label>
                    <select className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Graphic Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black/60 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-black/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Optional but professional) */}
      <section className="section-padding bg-brand-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
            <p className="text-black/60">Everything you need to know before we start.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Most website projects take 2-8 weeks, while complex web applications can take 1-3 months depending on requirements." },
              { q: "Do you offer maintenance after launch?", a: "Yes, we offer various maintenance packages to ensure your digital product stays secure and up-to-date." },
              { q: "What is your pricing model?", a: "We typically work on a per-project basis with a fixed quote, but we also offer hourly rates for ongoing support." }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-black/5">
                <h4 className="font-bold mb-3 flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-brand-accent" />
                  {faq.q}
                </h4>
                <p className="text-black/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
