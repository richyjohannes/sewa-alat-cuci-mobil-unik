
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Service', path: '/service' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm py-2`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="MaxClean Logo" className="h-14 w-14 mr-2" />
            <div className="text-blue-dark font-bold text-xl md:text-2xl">
              <span className="text-gradient">MaxClean</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors px-2 py-1
                  ${isActive(link.path) 
                    ? 'text-blue-dark font-semibold' 
                    : 'text-slate-600 hover:text-blue-dark'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow"></span>
                )}
              </Link>
            ))}
            
            <Link 
              to="/cart" 
              className={`relative ml-3 p-2 rounded-full transition-colors
                ${location.pathname === '/cart'
                  ? 'bg-blue-light bg-opacity-10 text-blue-dark'
                  : 'hover:bg-blue-light hover:bg-opacity-10 text-blue-medium'
                }`}
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow text-blue-dark text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>
          
          <div className="flex items-center md:hidden">
            <Link 
              to="/cart" 
              className="relative mr-4 text-blue-dark"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow text-blue-dark text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-dark focus:outline-none"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 border-b border-gray-100 ${
                  isActive(link.path) ? 'text-blue-dark font-semibold' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
