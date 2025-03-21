
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-3">
            Cara Kerja
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
            Sewa Peralatan Dengan Mudah
          </h2>
          <p className="text-gray-600 text-sm">
            Proses penyewaan peralatan cuci mobil dari kami sangat mudah dan cepat. 
            Ikuti langkah-langkah sederhana di bawah ini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="glass-card p-4 relative animate-fade-in">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg text-sm">
              1
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-blue-dark mb-2">Pilih Peralatan</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Pilih peralatan yang Anda butuhkan dari katalog kami. Tentukan juga durasi penyewaan.
              </p>
              <Link to="/products" className="text-blue-medium hover:text-blue-dark transition-colors flex items-center text-sm">
                <span>Lihat Katalog</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-4 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg text-sm">
              2
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-blue-dark mb-2">Hubungi Kami</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Hubungi kami melalui telepon, WhatsApp, atau email untuk konfirmasi ketersediaan.
              </p>
              <Link to="/contact" className="text-blue-medium hover:text-blue-dark transition-colors flex items-center text-sm">
                <span>Kontak Kami</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card p-4 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg text-sm">
              3
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-blue-dark mb-2">Terima Peralatan</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Kami akan mengirimkan peralatan ke lokasi Anda atau Anda dapat mengambilnya.
              </p>
              <div className="text-blue-medium hover:text-blue-dark transition-colors flex items-center text-sm">
                <Info size={14} className="mr-1" />
                <span>Syarat & Ketentuan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
