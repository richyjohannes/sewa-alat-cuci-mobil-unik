
import React from 'react';
import { ShoppingBag, Check, Clock, Settings } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
            Mengapa Memilih Kami
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
            Solusi Peralatan Cuci Mobil Terlengkap
          </h2>
          <p className="text-gray-600 text-sm">
            Kami menyediakan berbagai peralatan cuci mobil berkualitas tinggi untuk kebutuhan Anda. 
            Didukung oleh tim profesional yang siap membantu Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Feature 1 */}
          <div className="glass-card p-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-3">
              <ShoppingBag size={20} />
            </div>
            <h3 className="text-base font-semibold text-blue-dark mb-2">Berbagai Pilihan</h3>
            <p className="text-gray-600 text-xs">
              Berbagai pilihan merek dan tipe peralatan cuci mobil.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-card p-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-3">
              <Check size={20} />
            </div>
            <h3 className="text-base font-semibold text-blue-dark mb-2">Kualitas Terjamin</h3>
            <p className="text-gray-600 text-xs">
              Semua peralatan telah melalui pengecekan kualitas yang ketat.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-card p-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-3">
              <Clock size={20} />
            </div>
            <h3 className="text-base font-semibold text-blue-dark mb-2">Pengiriman Cepat</h3>
            <p className="text-gray-600 text-xs">
              Pengiriman dan pengambilan peralatan yang cepat.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="glass-card p-4 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-3">
              <Settings size={20} />
            </div>
            <h3 className="text-base font-semibold text-blue-dark mb-2">Dukungan Teknis</h3>
            <p className="text-gray-600 text-xs">
              Tim teknisi kami siap membantu jika ada masalah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
