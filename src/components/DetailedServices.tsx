import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const serviceList = [
  {
    id: "ac-service",
    title: "AC Repair & Service",
    image: "https://images.unsplash.com/photo-1621905252507-b35242f8969d?q=80&w=800&auto=format&fit=crop",
    description: "Complete AC repair, gas filling, installation, and maintenance for all brands. Full split and window AC servicing. Gas charging, coil cleaning, and board repairs to keep you cool in the Tirupati heat."
  },
  {
    id: "refrigerator",
    title: "Refrigerator Repair",
    image: "https://images.unsplash.com/photo-1571175432230-01c288a69984?q=80&w=800&auto=format&fit=crop",
    description: "Fast diagnosis and repair for cooling issues, gas leaks, and compressor problems. Our experts handle all double-door, side-by-side, and single-door refrigerators with same-day precision."
  },
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc61a5e0c?q=80&w=800&auto=format&fit=crop",
    description: "Expert repair for front-load and top-load machines including motor and drum issues. We repair all major brands including Samsung, LG, Whirlpool, and Bosch with fast doorstep service."
  },
  {
    id: "microwave",
    title: "Microwave Repair",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=800&auto=format&fit=crop",
    description: "Safe and reliable repair for heating issues, panel faults, and electrical problems. Magnetron replacement and circuit board repairs for all convection and solo microwave ovens."
  },
  {
    id: "dishwasher",
    title: "Dishwasher Repair",
    image: "https://images.unsplash.com/photo-1585837222722-1d6e15965440?q=80&w=800&auto=format&fit=crop",
    description: "Professional service for cleaning issues, drainage problems, and system errors. We ensure your dishwasher runs efficiently with original replacement parts."
  },
  {
    id: "air-cooler",
    title: "Air Cooler Service",
    image: "https://images.unsplash.com/photo-1591123720164-de1348028a82?q=80&w=800&auto=format&fit=crop",
    description: "Maintenance and repair to keep your air cooler running efficiently. We handle motor repairs, pump replacements, and seasonal servicing."
  }
];

const DetailedServices = () => {
  return (
    <section id="solutions" className="bg-surface-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-24 text-center tracking-tighter">
          OUR <span className="text-primary">EXPERTISE</span>
        </h2>
        
        <div className="space-y-32">
          {serviceList.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full aspect-square md:aspect-video object-cover rounded-3xl border border-white/5 relative z-10 brightness-75 group-hover:brightness-100 transition-all duration-500 shadow-2xl"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">{service.title}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                  <a href="#booking" className="btn-primary py-3 px-8 text-sm">
                    Book Now
                  </a>
                  <span className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                    <Zap size={16} /> Genuine Parts Guaranteed
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
