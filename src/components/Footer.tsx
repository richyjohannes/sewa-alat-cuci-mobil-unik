
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-2xl text-white">
              <span className="text-yellow">Max</span>Clean
            </div>
            <p className="text-gray-300 text-sm">
              Solusi terlengkap untuk kebutuhan peralatan cuci mobil Anda. Kami menyediakan peralatan berkualitas tinggi dengan harga terjangkau.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-yellow transition-colors text-sm">
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan Kami</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-yellow transition-colors text-sm">
                <Link to="/products">Penjualan Peralatan</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow transition-colors text-sm">
                <Link to="/products">Sewa Peralatan</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow transition-colors text-sm">
                <Link to="/products">Konsultasi Peralatan</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow transition-colors text-sm">
                <Link to="/products">Servis & Maintenance</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow transition-colors text-sm">
                <Link to="/products">Spare Parts</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Malioboro No. 123, Yogyakarta, Indonesia 55271
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-yellow flex-shrink-0" />
                <span className="text-gray-300">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-yellow flex-shrink-0" />
                <span className="text-gray-300">info@maxclean.co.id</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Senin - Jumat: 08.00 - 17.00<br />
                  Sabtu: 08.00 - 15.00<br />
                  Minggu: Tutup
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MaxClean. Hak Cipta Dilindungi.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-yellow">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
