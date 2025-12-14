import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Apothecary', path: '/shop' },
    { name: 'The Blueprint', path: '/blueprint' },
    { name: 'The Foundation', path: '/foundation' },
    { name: 'The Journal', path: '/journal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200' : 'bg-transparent'
        }`}
      >
        {/* Logo Above Nav */}
        <div className="flex justify-center pt-8 pb-4">
          <Link to="/" className="flex items-center z-50">
            <img
              src="/hoztrans.png"
              alt="Haus of Zen"
              className="h-16 w-auto md:h-20"
              onError={(e) => {
                // Fallback to text if logo doesn't exist
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <h1 className="hidden font-serif text-2xl md:text-3xl tracking-tighter text-stone-900">
              HAUS <span className="italic font-light">of</span> ZEN
            </h1>
          </Link>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 md:py-6">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-sans text-[11px] uppercase tracking-[0.15em] transition-colors hover:text-stone-500 ${isActive(link.path) ? 'text-stone-900 font-medium' : 'text-stone-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="hidden md:block text-stone-800 hover:text-stone-500">
              <User size={20} strokeWidth={1} />
            </button>
            <button 
              className="relative text-stone-800 hover:text-stone-500"
              onClick={toggleCart}
            >
              <ShoppingBag size={20} strokeWidth={1} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sage-600 text-[9px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full h-screen bg-stone-50 p-8 md:hidden flex flex-col space-y-8 border-t border-stone-200">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center pb-4 border-b border-stone-200" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/hoztrans.png"
                alt="Haus of Zen"
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <h1 className="hidden font-serif text-2xl tracking-tighter text-stone-900">
                HAUS <span className="italic font-light">of</span> ZEN
              </h1>
            </Link>

             {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-stone-900 hover:text-stone-500 hover:italic"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-stone-200 flex space-x-6">
               <button className="flex items-center space-x-2 text-stone-600">
                  <User size={20} strokeWidth={1} />
                  <span className="font-sans text-xs uppercase tracking-widest">Account</span>
               </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
