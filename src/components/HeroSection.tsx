
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-10 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h5 className="inline-block bg-blue-light bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Solusi Peralatan Cuci Mobil Profesional
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Peralatan Cuci Mobil <span className="text-yellow">Berkualitas Tinggi</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-lg">
              Sewa atau beli peralatan cuci mobil terbaik dengan harga terjangkau. Solusi lengkap untuk bisnis atau penggunaan pribadi Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="btn-primary flex items-center justify-center space-x-2">
                <span>Lihat Produk</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center space-x-2">
                <span>Hubungi Kami</span>
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="text-yellow text-3xl font-bold">5+</h4>
                <p className="text-gray-300 text-sm">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <h4 className="text-yellow text-3xl font-bold">500+</h4>
                <p className="text-gray-300 text-sm">Pelanggan Puas</p>
              </div>
              <div className="text-center">
                <h4 className="text-yellow text-3xl font-bold">100+</h4>
                <p className="text-gray-300 text-sm">Produk Tersedia</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-fade-in">
            <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl border border-white border-opacity-20 shadow-glass overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow to-yellow-light opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <h3 className="text-white text-xl font-semibold mb-4">Produk Unggulan</h3>
              
              <div className="space-y-4">
                <div className="flex space-x-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1601034913685-15aaef7ba75b?q=80&w=3387&auto=format&fit=crop" 
                      alt="Pressure Washer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Pressure Washer Pro</h4>
                    <p className="text-gray-300 text-sm">Mulai dari Rp 250.000/hari</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1621510456686-1865883fad0c?q=80&w=2000&auto=format&fit=crop" 
                      alt="Foam Cannon" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Foam Cannon Deluxe</h4>
                    <p className="text-gray-300 text-sm">Mulai dari Rp 100.000/hari</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2000&auto=format&fit=crop" 
                      alt="Vacuum Cleaner" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Vacuum Cleaner Industrial</h4>
                    <p className="text-gray-300 text-sm">Mulai dari Rp 150.000/hari</p>
                  </div>
                </div>
                
                <Link 
                  to="/products" 
                  className="inline-block w-full bg-yellow bg-opacity-20 hover:bg-opacity-30 text-white text-center py-2 rounded-lg transition-colors"
                >
                  Lihat Semua Produk
                </Link>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-light opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
