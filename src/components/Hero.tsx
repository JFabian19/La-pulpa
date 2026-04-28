import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-orange-100">
      {/* Background Image/Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)'
        }}
      />
      
      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,130.42,190.26,120,240.21,111.36,281.33,70.52,321.39,56.44Z" className="fill-[#FDFBF4]"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="bg-white p-6 md:p-8 rounded-full shadow-xl mb-6 border-4 border-orange-100 transform rotate-[-2deg]">
          <h1 className="text-5xl md:text-7xl text-cat-clasicos drop-shadow-sm text-center leading-tight">
            La Pulpa
            <span className="block text-3xl md:text-4xl text-gray-700 mt-2 font-display">Juguería</span>
          </h1>
        </div>

        <p className="text-gray-800 text-lg md:text-xl font-label tracking-wider mb-6 text-center px-4 font-bold drop-shadow-md">
          FRESCO, ALEGRE Y MATUTINO
        </p>

        {/* Social and Info Section replacing the button */}
        <div className="flex gap-4">
          <a href="#" className="bg-white p-3 rounded-full text-cat-clasicos shadow-md hover:shadow-lg transition-all hover:scale-105">
            <MessageCircle size={24} />
          </a>
          <a href="#" className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:shadow-lg transition-all hover:scale-105">
            <Phone size={24} />
          </a>
          <a href="#" className="bg-white p-3 rounded-full text-cat-sandwich shadow-md hover:shadow-lg transition-all hover:scale-105">
            <MapPin size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
