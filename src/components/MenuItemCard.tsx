import { motion } from 'framer-motion';
import type { MenuItem } from '../types';
import { getCategoryColor } from '../utils/colors';

interface MenuItemCardProps {
  item: MenuItem;
  categoria: string;
}

export default function MenuItemCard({ item, categoria }: MenuItemCardProps) {
  const colors = getCategoryColor(categoria);

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
    </motion.div>
  );
}
