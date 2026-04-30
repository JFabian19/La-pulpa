import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-green-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'url("/fondo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
        {/* Logo Image */}
        <motion.img
          src="/logo.png"
          alt="La Pulpa Juguería"
          className="w-48 md:w-64 h-auto mb-6 drop-shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <p className="text-gray-800 text-lg md:text-xl font-label tracking-wider mb-6 text-center px-4 font-bold drop-shadow-md">
          FRESCO, ALEGRE Y MATUTINO
        </p>

        {/* Social and Info Section */}
        <div className="flex gap-4">
          <a 
            href="https://wa.me/51955053184" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-3 rounded-full text-[#25D366] shadow-md hover:shadow-lg transition-all hover:scale-105"
            title="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.004 2C6.48 2 2.004 6.477 2.004 12c0 1.765.46 3.423 1.257 4.876L2 22l5.25-1.378A9.954 9.954 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.333a8.306 8.306 0 0 1-4.237-1.153l-.303-.18-3.146.825.839-3.068-.198-.314a8.306 8.306 0 0 1-1.286-4.443c0-4.595 3.738-8.333 8.333-8.333 4.595 0 8.333 3.738 8.333 8.333 0 4.595-3.738 8.333-8.333 8.333zm4.576-6.233c-.25-.125-1.477-.729-1.706-.813-.229-.083-.396-.125-.563.125-.166.25-.646.813-.792.979-.146.167-.292.188-.542.063-.25-.125-1.057-.39-2.012-1.242-.744-.663-1.245-1.48-1.391-1.73-.146-.25-.016-.385.109-.51.113-.113.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.563-1.354-.771-1.854-.203-.489-.408-.423-.563-.43-.145-.007-.312-.007-.479-.007-.167 0-.438.062-.667.312-.229.25-.875.854-.875 2.083 0 1.229.896 2.417.99 2.542.094.125 1.76 2.687 4.26 3.77 2.5 1.084 2.5 1.375 2.959 1.334.458-.041 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.166-.479-.291z"/>
            </svg>
          </a>
          <a 
            href="tel:955053184" 
            className="bg-white p-3 rounded-full text-blue-600 shadow-md hover:shadow-lg transition-all hover:scale-105"
            title="Llamar"
          >
            <Phone size={24} />
          </a>
          <a 
            href="https://maps.app.goo.gl/nNvt633evPkKGbaW6" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
            title="Ubicación"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
              <circle cx="12" cy="9" r="3" fill="#4285F4" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
