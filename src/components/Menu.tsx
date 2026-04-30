import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItemCard from './MenuItemCard';
import type { MenuCategory } from '../types';
import { getCategoryColor } from '../utils/colors';

interface MenuProps {
  menuData: MenuCategory[];
}

export default function Menu({ menuData }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.categoria || '');
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // ScrollSpy observer
    observerRef.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by how much of the element is visible
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = visibleEntries[0].target.getAttribute('data-category');
        if (mostVisible && mostVisible !== activeCategory) {
          setActiveCategory(mostVisible);
        }
      }
    }, {
      rootMargin: '-20% 0px -70% 0px', // Trigger when element hits top part of screen
      threshold: 0
    });

    const elements = document.querySelectorAll('.category-section');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [menuData, activeCategory]);

  // Auto-scroll the pill bar when active category changes
  useEffect(() => {
    if (categoryNavRef.current) {
      const activeBtn = categoryNavRef.current.querySelector(`button[data-active="true"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoria: string) => {
    setActiveCategory(categoria);
    const element = document.getElementById(`category-${categoria.replace(/[^a-zA-Z0-9]/g, '-')}`);
    if (element) {
      // Small offset for smooth scroll
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const filteredMenuData = menuData.filter(cat => cat.items.length > 0);

  return (
    <div 
      id="menu-section" 
      className="max-w-5xl mx-auto px-4 py-8 relative rounded-3xl my-4"
      style={{
        background: 'linear-gradient(135deg, #FF6B00 0%, #FF8C33 30%, #43A047 70%, #2E7D32 100%)',
      }}
    >
      {/* Categories Bar */}
      <div 
        ref={categoryNavRef}
        style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(12px)' }}
        className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 sticky top-0 z-50 pt-4 border-b border-white/10 shadow-lg rounded-2xl"
      >
        {menuData.map((cat) => {
          const colors = getCategoryColor(cat.categoria);
          const isActive = activeCategory === cat.categoria;
          
          return (
            <button
              key={cat.categoria}
              data-active={isActive}
              onClick={() => handleCategoryClick(cat.categoria)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-label text-sm md:text-base transition-all duration-300 font-bold border-2 ${
                isActive 
                  ? `${colors.bg} text-white border-transparent shadow-md transform scale-105` 
                  : `bg-white text-gray-500 border-gray-200 hover:border-gray-300`
              }`}
            >
              {cat.categoria}
            </button>
          );
        })}
      </div>

      {/* Categories Sections */}
      <div className="space-y-16 mt-8">
        {filteredMenuData.length > 0 ? (
          filteredMenuData.map((cat) => {
            return (
              <div 
                key={cat.categoria} 
                id={`category-${cat.categoria.replace(/[^a-zA-Z0-9]/g, '-')}`}
                className="category-section scroll-mt-32"
                data-category={cat.categoria}
              >
                {/* Header Category */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-4xl font-display text-white drop-shadow-lg">
                    {cat.categoria}
                  </h2>
                </div>

                {/* Category Image */}
                <div className="w-full h-48 md:h-64 rounded-3xl mb-8 flex items-center justify-center border-2 border-white/30 shadow-sm overflow-hidden backdrop-blur-sm relative">
                  {cat.imagen ? (
                    <img 
                      src={cat.imagen} 
                      alt={cat.categoria} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span style={{ fontFamily: 'var(--font-robot)' }} className="text-white/70 font-medium text-xl tracking-widest uppercase">
                      acá va imagen
                    </span>
                  )}
                </div>

                {/* Grid of items */}
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <AnimatePresence mode="popLayout">
                    {cat.items.map(item => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MenuItemCard
                          item={item}
                          categoria={cat.categoria}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500 font-label">
            No se encontraron productos.
          </div>
        )}
      </div>
    </div>
  );
}
