
import React, { useState } from 'react';
import { ArrowRight, Info, Clock, Check, ShoppingBag, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard, { ProductType } from '../components/ProductCard';
import Testimonial, { TestimonialType } from '../components/Testimonial';
import CtaSection from '../components/CtaSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackageCard from '../components/PackageCard';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const isMobileSmall = typeof window !== 'undefined' ? window.innerWidth <= 450 : false;
  
  // Featured products data
  const featuredProducts: ProductType[] = [
    {
      id: 1,
      name: "Pressure Washer Pro X2000",
      image: "https://images.unsplash.com/photo-1674468576904-c5a6c6367e0f?q=80&w=3347&auto=format&fit=crop",
      category: "Pressure Washer",
      rentalPrice: "Rp 250.000",
      salesPrice: "Rp 5.500.000",
      isAvailable: true
    },
    {
      id: 2,
      name: "Foam Cannon Deluxe Gold",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3387&auto=format&fit=crop",
      category: "Foam Cannon",
      rentalPrice: "Rp 100.000",
      salesPrice: "Rp 1.200.000",
      isAvailable: true
    },
    {
      id: 3,
      name: "Vacuum Cleaner Industrial",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=3456&auto=format&fit=crop",
      category: "Vacuum Cleaner",
      rentalPrice: "Rp 150.000",
      salesPrice: "Rp 3.800.000",
      isAvailable: true
    },
    {
      id: 4,
      name: "Polisher Machine Pro",
      image: "https://images.unsplash.com/photo-1614977294886-2def7e8dbcd5?q=80&w=3426&auto=format&fit=crop",
      category: "Polisher",
      rentalPrice: "Rp 200.000",
      salesPrice: "Rp 4.500.000",
      isAvailable: false
    }
  ];

  // Service packages
  const servicePackages = [
    {
      title: "Paket Basic",
      price: "Rp 499.000",
      features: [
        { name: "Pressure Washer Standar", included: true },
        { name: "Foam Cannon Basic", included: true },
        { name: "Microfiber Cloth (2 pcs)", included: true },
        { name: "Car Shampoo 250ml", included: true },
        { name: "Quick Detailer 100ml", included: false },
        { name: "Interior Cleaner", included: false },
        { name: "Tire Shine", included: false },
        { name: "Premium Wax", included: false },
      ],
      popular: false,
      ctaText: "Pilih Paket Basic"
    },
    {
      title: "Paket Premium",
      price: "Rp 899.000",
      features: [
        { name: "Pressure Washer Pro", included: true },
        { name: "Foam Cannon Deluxe", included: true },
        { name: "Microfiber Cloth (5 pcs)", included: true },
        { name: "Car Shampoo 500ml", included: true },
        { name: "Quick Detailer 250ml", included: true },
        { name: "Interior Cleaner", included: true },
        { name: "Tire Shine", included: false },
        { name: "Premium Wax", included: false },
      ],
      popular: true,
      ctaText: "Pilih Paket Premium"
    },
    {
      title: "Paket Professional",
      price: "Rp 1.499.000",
      features: [
        { name: "Pressure Washer Pro X2000", included: true },
        { name: "Foam Cannon Deluxe Gold", included: true },
        { name: "Microfiber Cloth (10 pcs)", included: true },
        { name: "Car Shampoo 1L", included: true },
        { name: "Quick Detailer 500ml", included: true },
        { name: "Interior Cleaner", included: true },
        { name: "Tire Shine", included: true },
        { name: "Premium Wax", included: true },
      ],
      popular: false,
      ctaText: "Pilih Paket Pro"
    }
  ];

  // Testimonials data
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik",
      company: "Budi Car Wash",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=3000&auto=format&fit=crop",
      rating: 5,
      content: "Saya sudah menggunakan peralatan dari MaxClean selama 2 tahun dan sangat puas dengan kualitasnya. Pelayanan mereka juga sangat profesional dan responsif."
    },
    {
      id: 2,
      name: "Dewi Anggraini",
      role: "Manajer",
      company: "Clean & Shine",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
      rating: 4,
      content: "Layanan penyewaan mereka sangat membantu bisnis kami saat kami baru memulai. Sekarang kami telah membeli peralatan sendiri dari MaxClean karena kualitasnya terjamin."
    },
    {
      id: 3,
      name: "Ahmad Rizal",
      role: "Pemilik",
      company: "Premium Auto Care",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=3387&auto=format&fit=crop",
      rating: 5,
      content: "Pressure washer yang saya beli dari MaxClean sangat awet dan mudah digunakan. Sudah 3 tahun berjalan dan masih berfungsi dengan baik. Sangat direkomendasikan!"
    }
  ];
  
  // Function to render the package section
  const renderPackageSection = () => {
    if (isMobileSmall) {
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {servicePackages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PackageCard 
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  popular={pkg.popular}
                  ctaText={pkg.ctaText}
                  onClick={() => window.location.href = "/products"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicePackages.map((pkg, index) => (
            <PackageCard 
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              popular={pkg.popular}
              ctaText={pkg.ctaText}
              onClick={() => window.location.href = "/products"}
            />
          ))}
        </div>
      );
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Package Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Paket Cuci Mobil
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
              Pilih Paket Yang Tepat Untuk Anda
            </h2>
            <p className="text-gray-600 text-sm">
              Kami menyediakan berbagai paket peralatan cuci mobil untuk kebutuhan Anda.
              Dari paket basic hingga professional, semua dengan kualitas terbaik.
            </p>
          </div>
          
          {renderPackageSection()}
          
          <div className="text-center mt-6">
            <Link to="/contact" className="inline-flex items-center text-blue-medium hover:text-blue-dark transition-colors text-sm">
              <span className="mr-2">Butuh paket khusus? Hubungi kami</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
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
      
      {/* Featured Products Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-3">
                Produk Unggulan
              </h5>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-dark">
                Peralatan Terbaik Untuk Anda
              </h2>
            </div>
            <Link to="/products" className="mt-3 md:mt-0 flex items-center text-blue-medium hover:text-blue-dark transition-colors text-sm">
              <span className="font-medium">Lihat Semua Produk</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
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
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-3">
              Testimonial
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600 text-sm">
              Pendapat jujur dari pelanggan yang telah menggunakan layanan kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CtaSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
