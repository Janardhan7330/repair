import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Quote, CheckCircle, MapPin, Phone, MessageSquare, Wrench } from 'lucide-react';

const faqs = [
  { q: "What appliances do you repair?", a: "We repair AC, refrigerator, washing machine, microwave, dishwasher, and air coolers of all major brands." },
  { q: "Do you provide doorstep service?", a: "Yes, we provide fast doorstep service across all areas in Tirupati." },
  { q: "Do you use genuine spare parts?", a: "Yes, we use high-quality and genuine spare parts for all our repairs." },
  { q: "What are the service charges?", a: "Inspection charges start from just ₹199. The final cost depends on the specific repair required." }
];

const TrustAndBooking = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, service, address, message } = formData;
    
    if (!name || !phone || !service || !address) {
      alert("Please fill all required fields (Name, Phone, Service, and Address).");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    const waMessage = `New Service Booking:
Name: ${name}
Phone: ${phone}
Service: ${service}
Area: ${address}
${message ? `Message: ${message}` : ''}`;

    const encodedMessage = encodeURIComponent(waMessage.trim());
    const whatsappUrl = `https://wa.me/919182763811?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success UI locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({ name: '', phone: '', service: '', address: '', message: '' });
    }, 1000);
  };

  return (
    <div>
      {/* ... existing About and Reviews sections ... */}
      <section id="about" className="py-16 sm:py-24 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Image Section - order 1 on mobile, 2 on desktop */}
            <div className="order-1 md:order-2 shrink-0 flex justify-center w-full md:w-auto">
              <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden shadow-xl shadow-black/5 ring-1 ring-border bg-white flex items-center justify-center">
                <img 
                  src="/image.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Text Section - order 2 on mobile, 1 on desktop */}
            <div className="order-2 md:order-1 flex-1 text-center md:text-left">
              <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">About Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight mb-4 sm:mb-5">Sri Venkateswara Service Centre</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
                The leading provider of AC repair in Tirupati and refrigerator repair near me. Sri Venkateswara Service Centre is committed to delivering fast, reliable, and affordable doorstep appliance repair in Tirupati. With skilled technicians and years of experience, we ensure quality washing machine service and customer satisfaction every time.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "20k+", label: "Happy Customers" },
                  { value: "6+", label: "Appliance Types" },
                  { value: "30m", label: "Avg Response" }
                ].map((stat, i) => (
                  <div key={i} className="card p-4 sm:p-5 text-center sm:text-left">
                    <p className="text-xl sm:text-2xl font-bold text-text mb-0.5">{stat.value}</p>
                    <p className="text-text-tertiary text-[11px] sm:text-[12px] font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 sm:py-24 md:py-32 bg-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">Testimonials</p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight">What Our Customers Say</h2>
            </div>
            <div className="flex items-center gap-1 text-accent">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={13} fill="currentColor" />)}
              <span className="ml-1.5 text-sm font-semibold text-text">5.0</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { name: "Ramesh S.", text: "Quick service and very professional technician. My AC was fixed within a few hours!" },
              { name: "Lakshmi P.", text: "Affordable pricing and genuine service. Highly recommended for any appliance repair." },
              { name: "Venkat R.", text: "Very responsive and reliable. Best appliance service in Tirupati." }
            ].map((rev, i) => (
              <div key={i} className="card p-5 sm:p-6 relative">
                <Quote className="absolute top-4 right-4 sm:top-5 sm:right-5 text-border" size={24} />
                <p className="text-text-secondary text-sm leading-relaxed mb-4 sm:mb-5 pr-8">"{rev.text}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[12px] font-bold shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{rev.name}</p>
                    <p className="text-text-tertiary text-[11px]">Tirupati</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & BOOKING */}
      <section id="booking" className="py-16 sm:py-24 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* FAQ */}
          <div>
            <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">FAQ</p>
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight mb-6 sm:mb-8">Common Questions</h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-4 sm:py-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-[14px] sm:text-[15px] font-medium text-text group-hover:text-primary transition-colors pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`text-text-tertiary transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 sm:pb-5 text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="card p-6 sm:p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-1.5">Book Your Service</h3>
                  <p className="text-text-secondary text-sm mb-6 sm:mb-7">Get fast and reliable repair at your doorstep.</p>
                  <form onSubmit={handleBooking} className="space-y-3">
                    <input
                      id="booking-name" name="name" type="text" required placeholder="Full Name"
                      value={formData.name} onChange={handleChange}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <input
                      id="booking-phone" name="phone" type="tel" required pattern="[0-9]{10}" placeholder="Phone Number (10 digits)"
                      value={formData.phone} onChange={handleChange}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <select
                      id="booking-service" name="service" required
                      value={formData.service} onChange={handleChange}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-sm text-text focus:outline-none focus:border-primary/40 transition-colors"
                    >
                      <option value="">Select Service</option>
                      <option>Air Conditioner</option>
                      <option>Refrigerator</option>
                      <option>Washing Machine</option>
                      <option>Microwave Oven</option>
                      <option>Dishwasher</option>
                      <option>Air Cooler</option>
                    </select>
                    <input
                      id="booking-address" name="address" type="text" required placeholder="Your area in Tirupati"
                      value={formData.address} onChange={handleChange}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 transition-colors"
                    />
                    <textarea
                      id="booking-message" name="message" placeholder="Message (Optional)" rows={2}
                      value={formData.message} onChange={handleChange}
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    />
                    <button
                      id="booking-submit" type="submit" disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Opening WhatsApp...' : 'Book via WhatsApp'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 sm:py-14">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Request Sent!</h3>
                  <p className="text-text-secondary text-sm mb-5">Our technician will call you within 15 minutes.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-primary text-sm font-semibold hover:underline">
                    Book another service
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 sm:py-16 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="SV Service Centre" className="w-full h-full object-contain" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-semibold text-text">Sri Venkateswara Service Centre</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Trusted home appliance repair in Tirupati. Fast, reliable, and affordable.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-text mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-primary transition-colors">Book Repair</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-text mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <MapPin className="text-text-tertiary shrink-0 mt-0.5" size={14} />
                <span>Old Maternity Hospital Road, Tirupati – 517501</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-text-tertiary" size={14} />
                <div className="flex flex-col">
                  <a href="tel:9182763811" className="hover:text-primary transition-colors">9182763811</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="text-text-tertiary" size={14} />
                <span>Call or WhatsApp</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-text mb-3 sm:mb-4">Location</h4>
            <div className="w-full h-32 sm:h-36 rounded-xl border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62059.43125195156!2d79.37683935!3d13.6287557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f3219293d%3A0x28e1c7b1675438b4!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1713950000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-10 sm:mt-12 pt-5 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-text-tertiary text-[11px] sm:text-[12px]">
          <p>© 2026 Sri Venkateswara Service Centre, Tirupati.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrustAndBooking;
