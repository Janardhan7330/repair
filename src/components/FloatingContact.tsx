import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5">
      <motion.a
        href="https://wa.me/919182763811"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 bg-green-500 text-white rounded-full flex items-center justify-center transition-shadow hover:shadow-lg hover:shadow-green-500/20"
        title="WhatsApp"
      >
        <MessageCircle size={20} />
      </motion.a>

      <motion.a
        href="tel:9182763811"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center transition-shadow hover:shadow-lg hover:shadow-primary/20"
        title="Call"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
