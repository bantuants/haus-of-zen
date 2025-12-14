import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Apothecary from './pages/Apothecary';
import Blueprint from './pages/Blueprint';
import Foundation from './pages/Foundation';
import Journal from './pages/Journal';
import ComingSoon from './pages/ComingSoon';
import { CartProvider } from './context/CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col font-sans text-stone-900">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<ComingSoon />} />
              <Route path="/shop" element={<ComingSoon />} />
              <Route path="/blueprint" element={<ComingSoon />} />
              <Route path="/foundation" element={<ComingSoon />} />
              <Route path="/journal" element={<ComingSoon />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
