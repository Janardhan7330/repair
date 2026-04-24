import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const technicians = [
  { name: "Rajesh Kumar", specialty: "Senior Refrigerator Expert", experience: "12+ Years", image: "/assets/tech-1.png", rating: 4.9, jobs: "2,500+" },
  { name: "Anil Varma", specialty: "Washing Machine Specialist", experience: "8+ Years", image: "/assets/tech-washing.png", rating: 4.8, jobs: "1,800+" },
  { name: "Siva Prasad", specialty: "AC & Cooling Engineer", experience: "10+ Years", image: "/assets/tech-ac.png", rating: 4.9, jobs: "2,100+" }
];

const Technicians = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-lg mb-10 sm:mb-14">
          <p className="text-primary text-[12px] sm:text-[13px] font-semibold tracking-wide mb-2">Our Team</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight mb-3 sm:mb-4">Meet Our Certified Experts</h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Every technician is background-verified, trained, and equipped with the latest diagnostic tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {technicians.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="card overflow-hidden group"
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden relative">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Award className="text-primary" size={12} />
                    <span className="text-primary text-[10px] sm:text-[11px] font-medium">{tech.specialty}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-white/70">
                    <span>{tech.experience}</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="flex items-center gap-1">
                      <Star size={10} className="text-accent" fill="currentColor" /> {tech.rating}
                    </span>
                    <span className="w-px h-3 bg-white/20" />
                    <span>{tech.jobs}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technicians;
