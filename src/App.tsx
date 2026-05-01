import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import OrderPanel from './components/OrderPanel';
import FloatingOrderButton from './components/FloatingOrderButton';
import { OrderProvider } from './context/OrderContext';
import { menuData as initialMenuData } from './data/menu';
import { fetchMenuFromGoogleSheets } from './utils/googleSheets';
import type { MenuCategory } from './types';

function App() {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [orderOpen, setOrderOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Failsafe local image mapping
  const localImageMap: {[key: string]: string} = {
    "sándwiches / calientes": "/Sandwich.jpeg",
    "sandwiches / calientes": "/Sandwich.jpeg",
    "jugos clásicos": "/jugos.webp",
    "jugos clasicos": "/jugos.webp",
    "jugos especiales": "/jugos%20especiales.jpeg",
    "calientes": "/bebidas%20calientes.jpeg",
    "bebidas frías": "/bebidas%20frias.jpg",
    "bebidas frias": "/bebidas%20frias.jpg",
    "frozen": "/frozen.jpg"
  };

  useEffect(() => {
    async function loadMenu() {
      try {
        setLoading(true);
        // Try fetching from Google Sheets
        const gsMenu = await fetchMenuFromGoogleSheets();
        
        // Merge with local images if sheet doesn't have one
        const finalMenu = gsMenu.map(cat => {
          const key = cat.categoria.trim().toLowerCase();
          return {
            ...cat,
            imagen: cat.imagen || localImageMap[key]
          };
        });
        
        setMenu(finalMenu);
        localStorage.setItem('laPulpaMenu', JSON.stringify(finalMenu));
      } catch (error) {
        console.error('Failed to fetch from Google Sheets, using local data', error);
        // Fallback to local storage or initial data
        const savedMenu = localStorage.getItem('laPulpaMenu');
        if (savedMenu) {
          setMenu(JSON.parse(savedMenu));
        } else {
          setMenu(initialMenuData.menu);
        }
      } finally {
        setLoading(false);
      }
    }

    loadMenu();
  }, []);

  return (
    <OrderProvider>
      <div className="min-h-screen relative font-body text-gray-800">
        {/* Fixed Background Image */}
        <div
          className="fixed inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'url("/fondo.jpg")',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="relative z-10">
          <Hero />
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-cat-clasicos border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white font-display text-2xl drop-shadow-md">Cargando delicias...</p>
            </div>
          ) : (
            <Menu menuData={menu} />
          )}
          <Footer />
        </div>

        {/* Floating Order Button */}
        <FloatingOrderButton onClick={() => setOrderOpen(true)} />

        {/* Order Panel */}
        <OrderPanel isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
      </div>
    </OrderProvider>
  );
}

export default App;
