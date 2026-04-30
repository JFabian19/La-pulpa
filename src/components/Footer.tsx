import { motion } from 'framer-motion';
import { Smartphone, Copy, Check, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "955 053 184";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#1A1110] text-[#FDFBF4] py-12 px-4 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Address Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="bg-white/10 p-3 rounded-full mb-4">
            <MapPin size={24} className="text-[#FFB800]" />
          </div>
          <p className="text-lg md:text-xl font-label max-w-md">
            Av. Garcilazo de la Vega 1251 int. 501
            <br />
            Galería compuplaza.
          </p>
        </div>

        {/* Payment Methods Section */}
        <div className="w-full max-w-md bg-white/5 rounded-[2.5rem] p-6 md:p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Smartphone size={28} className="text-[#FFB800]" />
            <h3 className="text-2xl font-display uppercase tracking-widest text-[#FFB800]">
              Método de Pago
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Visa */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-20 shadow-md border border-white/20 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiM94VhYmT8xU6PmAKaXJr9WySnjARL7CyGA&s" 
                alt="Visa" 
                className="h-10 w-auto object-contain"
              />
            </div>
            {/* Mastercard */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-20 shadow-md border border-white/20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                alt="Mastercard" 
                className="h-10 w-auto object-contain"
              />
            </div>
            {/* Plin */}
            <div className="bg-white rounded-2xl p-2 flex items-center justify-center h-20 shadow-md border border-white/20">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe960jSnK_C4yhuRAy0anRYG9ejHgcuf39-A&s" 
                alt="Plin" 
                className="h-14 w-auto object-contain"
              />
            </div>
            {/* Yape */}
            <div className="bg-white rounded-2xl p-2 flex items-center justify-center h-20 shadow-md border border-white/20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Icono_de_la_aplicaci%C3%B3n_Yape.png" 
                alt="Yape" 
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="w-full bg-[#C62828] hover:bg-[#D32F2F] text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg group relative overflow-hidden"
          >
            {copied ? (
              <Check size={24} className="text-green-400" />
            ) : (
              <Copy size={24} className="group-hover:scale-110 transition-transform" />
            )}
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              {phoneNumber}
            </span>
          </motion.button>

          <p className="text-center mt-6 text-gray-400 font-label">
            A nombre de:
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 w-full text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} La Pulpa Juguería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
