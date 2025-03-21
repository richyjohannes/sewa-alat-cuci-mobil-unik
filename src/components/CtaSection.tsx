
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-10 md:py-12 overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-xl bg-gradient-blue p-6 md:p-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow opacity-10 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-white md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Butuh Konsultasi Peralatan?
              </h2>
              <p className="text-gray-100 mb-4 text-sm">
                Tim ahli kami siap membantu Anda menemukan peralatan yang tepat untuk kebutuhan bisnis atau pribadi Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2 py-2 px-4 text-sm">
                  <span>Hubungi Kami</span>
                  <ArrowRight size={16} />
                </Link>
                <a 
                  href="tel:+6281234567890" 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 text-sm"
                >
                  <Phone size={16} />
                  <span>081234567890</span>
                </a>
              </div>
            </div>
            
            <div className="hidden md:block w-1/4 relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1635274602809-15b9740e3093?q=80&w=3870&auto=format&fit=crop"
                alt="Pressure Washer"
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-dark to-transparent opacity-20 rounded-lg z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-yellow rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
