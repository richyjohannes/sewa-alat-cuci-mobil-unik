
import React from 'react';
import { ArrowRight, Info, Clock, Check, ShoppingBag, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard, { ProductType } from '../components/ProductCard';
import Testimonial, { TestimonialType } from '../components/Testimonial';
import CtaSection from '../components/CtaSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  // Featured products data
  const featuredProducts: ProductType[] = [
    {
      id: 1,
      name: "Pressure Washer Pro X2000",
      image: "https://images.unsplash.com/photo-1674468576904-c5a6c6367e0f?q=80&w=3347&auto=format&fit=crop",
      category: "Pressure Washer",
      rentalPrice: "Rp 250.000",
      salesPrice: "Rp 5.500.000",
      isNew: true,
      isPopular: true,
      isAvailable: true
    },
    {
      id: 2,
      name: "Foam Cannon Deluxe Gold",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3387&auto=format&fit=crop",
      category: "Foam Cannon",
      rentalPrice: "Rp 100.000",
      salesPrice: "Rp 1.200.000",
      isPopular: true,
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
      isNew: true,
      isAvailable: false
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Mengapa Memilih Kami
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Solusi Peralatan Cuci Mobil Terlengkap
            </h2>
            <p className="text-gray-600">
              Kami menyediakan berbagai peralatan cuci mobil berkualitas tinggi untuk sewa atau beli. 
              Didukung oleh tim profesional yang siap membantu Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Berbagai Pilihan</h3>
              <p className="text-gray-600">
                Menyediakan berbagai pilihan merek dan tipe peralatan cuci mobil untuk kebutuhan Anda.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Semua peralatan yang kami sediakan telah melalui pengecekan kualitas yang ketat.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">
                Pengiriman dan pengambilan peralatan yang cepat dan tepat waktu.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Dukungan Teknis</h3>
              <p className="text-gray-600">
                Tim teknisi kami siap membantu jika ada masalah dengan peralatan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
                Produk Unggulan
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark">
                Peralatan Terbaik Untuk Anda
              </h2>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 flex items-center text-blue-medium hover:text-blue-dark transition-colors">
              <span className="font-medium">Lihat Semua Produk</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Cara Kerja
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Sewa Peralatan Dengan Mudah
            </h2>
            <p className="text-gray-600">
              Proses penyewaan peralatan cuci mobil dari kami sangat mudah dan cepat. 
              Ikuti langkah-langkah sederhana di bawah ini.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="glass-card p-6 relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-blue-dark mb-4">Pilih Peralatan</h3>
                <p className="text-gray-600 mb-4">
                  Pilih peralatan yang Anda butuhkan dari katalog kami. Tentukan juga durasi penyewaan yang diinginkan.
                </p>
                <Link to="/products" className="text-blue-medium hover:text-blue-dark transition-colors flex items-center">
                  <span>Lihat Katalog</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="glass-card p-6 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-blue-dark mb-4">Hubungi Kami</h3>
                <p className="text-gray-600 mb-4">
                  Hubungi kami melalui telepon, WhatsApp, atau email untuk mengkonfirmasi ketersediaan peralatan.
                </p>
                <Link to="/contact" className="text-blue-medium hover:text-blue-dark transition-colors flex items-center">
                  <span>Kontak Kami</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="glass-card p-6 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-blue-dark font-bold shadow-lg">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-blue-dark mb-4">Terima Peralatan</h3>
                <p className="text-gray-600 mb-4">
                  Kami akan mengirimkan peralatan ke lokasi Anda atau Anda dapat mengambilnya di toko kami.
                </p>
                <div className="text-blue-medium hover:text-blue-dark transition-colors flex items-center">
                  <Info size={16} className="mr-1" />
                  <span>Syarat & Ketentuan Berlaku</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonial
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600">
              Pendapat jujur dari pelanggan yang telah menggunakan layanan kami. 
              Kami bangga dengan tingkat kepuasan pelanggan yang tinggi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
