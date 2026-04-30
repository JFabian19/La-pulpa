import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import OrderPanel from './components/OrderPanel';
import FloatingOrderButton from './components/FloatingOrderButton';
import { OrderProvider } from './context/OrderContext';
import { menuData as initialMenuData } from './data/menu';
import type { MenuCategory } from './types';

function App() {
  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [orderOpen, setOrderOpen] = useState(false);

  // Load from local storage or use initial data
  useEffect(() => {
    const savedMenu = localStorage.getItem('laPulpaMenu');
    if (savedMenu) {
      setMenu(JSON.parse(savedMenu));
    } else {
      setMenu(initialMenuData.menu);
    }
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
          <Menu menuData={menu} />
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
