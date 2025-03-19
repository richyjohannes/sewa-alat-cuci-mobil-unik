
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-blue-dark font-bold text-xl md:text-2xl">
              <span className="text-gradient">MaxClean</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <a 
              href="tel:+6281234567890" 
              className="mr-4 bg-blue-light text-white p-2 rounded-full"
            >
              <Phone size={20} />
            </a>
            <button 
              onClick={toggleMenu} 
              className="text-blue-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-colors
                  ${isActive(link.path) 
                    ? 'text-blue-dark after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:h-[3px] after:w-full after:bg-yellow' 
                    : 'text-slate-600 hover:text-blue-dark'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Call to Action Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="tel:+6281234567890" 
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>081234567890</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
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
      </div>
    </nav>
  );
};

export default Navbar;
