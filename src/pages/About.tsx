
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Users,
  BarChart,
  Clock,
  Award,
  CheckCircle,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h5 className="inline-block bg-blue-light bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Tentang Kami
            </h5>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Solusi <span className="text-yellow">Peralatan Cuci Mobil</span> Terlengkap
            </h1>
            <p className="text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Kami adalah penyedia peralatan cuci mobil terlengkap di Yogyakarta dengan pengalaman lebih dari 5 tahun melayani bisnis dan perorangan.
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mt-6 text-gray-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/" className="hover:text-white flex items-center">
                <Home size={14} />
                <span className="ml-1">Beranda</span>
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Tentang Kami</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
                Selamat Datang di MaxClean
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6">
                Mitra Terpercaya untuk Peralatan Cuci Mobil Anda
              </h2>
              
              <p className="text-gray-700 mb-6">
                MaxClean didirikan pada tahun 2018 dengan visi menjadi penyedia solusi peralatan cuci mobil terlengkap di Yogyakarta. Kami memahami tantangan yang dihadapi oleh pemilik bisnis cuci mobil maupun individu dalam mencari peralatan berkualitas dengan harga terjangkau.
              </p>
              
              <p className="text-gray-700 mb-6">
                Itulah mengapa kami menyediakan layanan penjualan dan penyewaan peralatan cuci mobil berkualitas tinggi untuk memenuhi kebutuhan Anda. Tim profesional kami siap memberikan bantuan dan saran terbaik untuk memastikan Anda mendapatkan peralatan yang tepat.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Berpengalaman 5+ tahun</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Produk berkualitas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Pelayanan profesional</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Solusi terpadu</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Hubungi Kami
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=3431&auto=format&fit=crop" 
                  alt="MaxClean Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-light opacity-20 rounded-full blur-3xl -mt-10 -mr-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow opacity-20 rounded-full blur-3xl -mb-10 -ml-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Misi & Visi Kami
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Apa yang Kami Perjuangkan
            </h2>
            <p className="text-gray-600">
              Kami berkomitmen untuk menyediakan peralatan cuci mobil terbaik dengan layanan yang memuaskan kepada semua pelanggan kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-dark mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Menyediakan peralatan cuci mobil berkualitas tinggi dengan harga terjangkau</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Memberikan layanan pelanggan terbaik dengan pendekatan personal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Membantu bisnis cuci mobil dan individu mendapatkan peralatan yang tepat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Menjadi mitra tepercaya bagi semua kebutuhan peralatan cuci mobil</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-6">
                <BarChart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-dark mb-4">Visi Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Menjadi penyedia solusi peralatan cuci mobil terkemuka di Indonesia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Mendorong inovasi dalam industri perawatan kendaraan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Berkontribusi pada peningkatan standar layanan cuci mobil di Indonesia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-blue-medium mr-2 mt-0.5" />
                  <span className="text-gray-700">Menciptakan dampak positif bagi lingkungan melalui peralatan hemat air</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Keunggulan Kami
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Mengapa Memilih MaxClean?
            </h2>
            <p className="text-gray-600">
              Kami menawarkan berbagai keunggulan yang membedakan kami dari kompetitor. Berikut adalah alasan mengapa pelanggan mempercayai kami.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Produk Berkualitas</h3>
              <p className="text-gray-600">
                Kami hanya menyediakan peralatan cuci mobil berkualitas tinggi dari merek terpercaya yang telah teruji performanya.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Layanan Cepat</h3>
              <p className="text-gray-600">
                Kami memahami pentingnya waktu bagi bisnis Anda, sehingga kami selalu berusaha memberikan layanan yang cepat dan efisien.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Tim Ahli</h3>
              <p className="text-gray-600">
                Tim kami terdiri dari profesional berpengalaman yang siap memberikan saran dan bantuan teknis untuk kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              Tim Kami
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Bertemu dengan Para Ahli
            </h2>
            <p className="text-gray-600">
              Tim MaxClean terdiri dari profesional berpengalaman yang berkomitmen untuk memberikan layanan terbaik kepada Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="glass-card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop" 
                  alt="Ahmad Santoso" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-dark">Ahmad Santoso</h3>
                <p className="text-blue-medium mb-3">Direktur</p>
                <p className="text-gray-600 text-sm">
                  Memiliki pengalaman 10+ tahun di industri perawatan kendaraan dan perlengkapan cuci mobil.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="glass-card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop" 
                  alt="Dewi Anggraini" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-dark">Dewi Anggraini</h3>
                <p className="text-blue-medium mb-3">Manajer Operasional</p>
                <p className="text-gray-600 text-sm">
                  Ahli dalam manajemen persediaan dan pengiriman peralatan cuci mobil dengan tepat waktu.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="glass-card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2f9e946?q=80&w=3270&auto=format&fit=crop" 
                  alt="Budi Widodo" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-dark">Budi Widodo</h3>
                <p className="text-blue-medium mb-3">Teknisi Kepala</p>
                <p className="text-gray-600 text-sm">
                  Berpengalaman dalam perawatan dan perbaikan berbagai jenis peralatan cuci mobil.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="glass-card overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3361&auto=format&fit=crop" 
                  alt="Siti Rahma" 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-dark">Siti Rahma</h3>
                <p className="text-blue-medium mb-3">Layanan Pelanggan</p>
                <p className="text-gray-600 text-sm">
                  Selalu siap membantu dengan pertanyaan dan kebutuhan pelanggan dengan ramah dan profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
              FAQ
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan dan produk kami.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-dark">Bagaimana cara menyewa peralatan cuci mobil?</h3>
                    <div className="transition-transform group-open:rotate-180">
                      <ChevronDown size={20} className="text-blue-medium" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0">
                    <p className="text-gray-700">
                      Untuk menyewa peralatan cuci mobil, Anda dapat menghubungi kami melalui telepon, WhatsApp, atau mengunjungi toko kami. Kami akan meminta kartu identitas dan deposit sebagai jaminan. Setelah itu, Anda dapat mengambil peralatan atau kami dapat mengirimkannya ke lokasi Anda.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-dark">Berapa lama saya bisa menyewa peralatan?</h3>
                    <div className="transition-transform group-open:rotate-180">
                      <ChevronDown size={20} className="text-blue-medium" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0">
                    <p className="text-gray-700">
                      Durasi penyewaan minimum adalah 1 hari (24 jam). Kami juga menawarkan paket penyewaan mingguan dan bulanan dengan harga yang lebih menguntungkan. Untuk informasi lebih lanjut, silakan hubungi tim layanan pelanggan kami.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-dark">Apakah ada deposit yang diperlukan?</h3>
                    <div className="transition-transform group-open:rotate-180">
                      <ChevronDown size={20} className="text-blue-medium" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0">
                    <p className="text-gray-700">
                      Ya, kami memerlukan deposit untuk penyewaan peralatan. Jumlah deposit bervariasi tergantung pada jenis peralatan yang disewa. Deposit akan dikembalikan setelah peralatan dikembalikan dalam kondisi baik.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-dark">Apakah ada pengiriman untuk peralatan yang disewa atau dibeli?</h3>
                    <div className="transition-transform group-open:rotate-180">
                      <ChevronDown size={20} className="text-blue-medium" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0">
                    <p className="text-gray-700">
                      Ya, kami menyediakan layanan pengiriman untuk area Yogyakarta dan sekitarnya. Untuk pengiriman dalam kota Yogyakarta, kami tidak mengenakan biaya tambahan. Untuk area di luar kota, biaya pengiriman akan dihitung berdasarkan jarak.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-blue-dark">Bagaimana jika peralatan rusak saat digunakan?</h3>
                    <div className="transition-transform group-open:rotate-180">
                      <ChevronDown size={20} className="text-blue-medium" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0">
                    <p className="text-gray-700">
                      Jika terjadi kerusakan pada peralatan saat digunakan, segera hubungi tim kami. Kami akan mengirimkan teknisi untuk memeriksa dan memperbaiki jika memungkinkan. Untuk kerusakan yang disebabkan oleh kesalahan penggunaan, biaya perbaikan akan dibebankan kepada penyewa.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Untuk Bekerja Sama Dengan Kami?
            </h2>
            <p className="text-gray-200 mb-8">
              Kami siap membantu Anda menemukan peralatan cuci mobil yang tepat untuk kebutuhan Anda. 
              Hubungi kami sekarang untuk konsultasi gratis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Hubungi Kami
              </Link>
              <Link to="/products" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                Lihat Produk Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
