import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "AC Repair in Tirupati",
    description: "Best AC repair near me. Complete service including gas filling, installation, and maintenance for all brands.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_002.jpeg"
  },
  {
    title: "Fridge Repair near me",
    description: "Expert refrigerator repair in Tirupati. Fast diagnosis for cooling issues, gas leaks, and compressor problems.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_004.jpeg"
  },
  {
    title: "Washing Machine Service Tirupati",
    description: "Top-rated washing machine service near me. Expert repair for front-load and top-load machines.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_005.jpeg"
  },
  {
    title: "Microwave Repair Tirupati",
    description: "Safe and reliable microwave oven repair near me. Fixing heating issues and panel faults.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_001.jpeg"
  },
  {
    title: "Dishwasher Service Tirupati",
    description: "Professional dishwasher repair near me. Expert service for cleaning and drainage problems.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_009.jpeg"
  },
  {
    title: "Air Cooler Service Tirupati",
    description: "Efficient air cooler repair near me. Maintenance and service across all areas of Tirupati.",
    image: "/ezgif-6a30850ca2629e8d-jpg/frame_008.jpeg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-lg mb-10 sm:mb-14">
          <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">What We Fix</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight mb-3 sm:mb-4">Our Repair Services</h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Professional repair for all major home appliances with quick response and reliable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <motion.a
              href="#booking"
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="card p-5 sm:p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:border-border-hover"
            >
              {/* Appliance image / Icon style */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-border/50 overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <ArrowUpRight size={14} className="text-text-tertiary group-hover:text-primary transition-colors" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[15px] font-semibold text-text mb-1.5">{service.title}</h3>
                <p className="text-text-secondary text-[13px] leading-relaxed">{service.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
