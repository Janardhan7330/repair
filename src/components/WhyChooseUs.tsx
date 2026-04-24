import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Gem, CircleDollarSign, Truck } from 'lucide-react';

const reasons = [
  { icon: Clock, title: "Same-Day Service", desc: "Fast doorstep service across Tirupati within hours." },
  { icon: ShieldCheck, title: "Verified Experts", desc: "Background-verified technicians you can trust." },
  { icon: Gem, title: "Genuine Parts", desc: "Only original spare parts for lasting repairs." },
  { icon: CircleDollarSign, title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges." },
  { icon: Truck, title: "Quick Response", desc: "Rapid response for all your service needs." }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
          <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">Why Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight mb-3 sm:mb-4">Why Customers Trust Us</h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Sri Venkateswara Service Centre sets the standard for reliable repairs in Tirupati.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="card p-4 sm:p-5 text-center group transition-all duration-300 hover:border-border-hover"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-[13px] sm:text-[14px] font-semibold text-text mb-1">{item.title}</h3>
              <p className="text-text-secondary text-[11px] sm:text-[12px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
