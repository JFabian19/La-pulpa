import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import { menuData as initialMenuData } from './data/menu';
import type { MenuCategory } from './types';

function App() {
  const [menu, setMenu] = useState<MenuCategory[]>([]);

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
    <div className="min-h-screen relative font-body text-gray-800">
      <Hero />
      <Menu menuData={menu} />
    </div>
  );
}

export default App;
