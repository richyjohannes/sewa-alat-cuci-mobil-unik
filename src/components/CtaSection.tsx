
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-2xl bg-gradient-blue p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="text-white md:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Butuh Konsultasi Peralatan Cuci Mobil?
              </h2>
              <p className="text-gray-100 mb-6">
                Tim ahli kami siap membantu Anda menemukan peralatan yang tepat untuk kebutuhan bisnis atau pribadi Anda. Jangan ragu untuk menghubungi kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Hubungi Kami</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="tel:+6281234567890" 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>081234567890</span>
                </a>
              </div>
            </div>
            
            <div className="hidden md:block w-1/3 relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1635274602809-15b9740e3093?q=80&w=3870&auto=format&fit=crop"
                alt="Pressure Washer"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-dark to-transparent opacity-20 rounded-lg z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
