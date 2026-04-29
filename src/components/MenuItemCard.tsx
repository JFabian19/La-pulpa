import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { MenuItem } from '../types';
import { getCategoryColor } from '../utils/colors';
import { useOrder } from '../context/OrderContext';

interface MenuItemCardProps {
  item: MenuItem;
  categoria: string;
}

export default function MenuItemCard({ item, categoria }: MenuItemCardProps) {
  const colors = getCategoryColor(categoria);
  const { addItem, removeItem, getItemQuantity } = useOrder();
  const qty = getItemQuantity(item.id);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100 relative flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 style={{ fontFamily: 'var(--font-robot)' }} className={`text-xl font-medium ${colors.text} leading-tight`}>
            {item.nombre}
          </h3>
          <span style={{ fontFamily: 'var(--font-robot)' }} className={`font-medium whitespace-nowrap text-lg ${colors.text}`}>
            S/ {item.precio.toFixed(2)}
          </span>
        </div>
        
        {item.descripcion && (
          <p className="text-gray-500 text-sm">
            {item.descripcion}
          </p>
        )}
      </div>

      {/* Add to order controls */}
      <div className="flex items-center justify-end mt-3 gap-2">
        {qty > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => removeItem(item.id)}
              className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors active:scale-90"
            >
              <Minus size={16} />
            </button>
            <motion.span
              key={qty}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              style={{ fontFamily: 'var(--font-robot)' }}
              className="w-6 text-center font-bold text-gray-800"
            >
              {qty}
            </motion.span>
          </motion.div>
        )}
        <button
          onClick={() => addItem(item, categoria)}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-sm ${
            qty > 0
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-green-50 text-green-600 hover:bg-green-100'
          }`}
        >
          <Plus size={18} />
        </button>
      </div>
    </motion.div>
  );
}
