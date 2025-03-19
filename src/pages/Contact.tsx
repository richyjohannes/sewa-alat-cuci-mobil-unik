
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h5 className="inline-block bg-blue-light bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Kontak Kami
            </h5>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Butuh Bantuan? <span className="text-yellow">Hubungi Kami</span>
            </h1>
            <p className="text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Tim kami siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan.
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mt-6 text-gray-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/" className="hover:text-white flex items-center">
                <Home size={14} />
                <span className="ml-1">Beranda</span>
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Kontak</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Contact Card 1 */}
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Telepon Kami</h3>
              <p className="text-gray-600 mb-4">
                Tim layanan pelanggan kami siap membantu Anda dengan pertanyaan atau pesanan
              </p>
              <a href="tel:+6281234567890" className="text-blue-medium font-medium hover:text-blue-dark transition-colors">
                +62 812 3456 7890
              </a>
            </div>
            
            {/* Contact Card 2 */}
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Email Kami</h3>
              <p className="text-gray-600 mb-4">
                Kirim email kepada kami untuk pertanyaan atau informasi lebih lanjut
              </p>
              <a href="mailto:info@maxclean.co.id" className="text-blue-medium font-medium hover:text-blue-dark transition-colors">
                info@maxclean.co.id
              </a>
            </div>
            
            {/* Contact Card 3 */}
            <div className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Kunjungi Kami</h3>
              <p className="text-gray-600 mb-4">
                Kunjungi showroom kami untuk melihat produk-produk secara langsung
              </p>
              <address className="not-italic text-blue-medium font-medium">
                Jl. Malioboro No. 123, Yogyakarta
              </address>
            </div>
          </div>
          
          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-blue-dark mb-6">Kirim Pesan</h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-dark mb-2">Terima Kasih!</h3>
                  <p className="text-gray-600">
                    Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                        Nama Lengkap*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                        placeholder="Masukkan nama lengkap"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                        placeholder="Masukkan alamat email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                        placeholder="Masukkan nomor telepon"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                        Subjek*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Pilih subjek</option>
                        <option value="Penyewaan Peralatan">Penyewaan Peralatan</option>
                        <option value="Pembelian Peralatan">Pembelian Peralatan</option>
                        <option value="Informasi Produk">Informasi Produk</option>
                        <option value="Layanan Teknis">Layanan Teknis</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                      Pesan*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                      placeholder="Tulis pesan Anda di sini"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-blue-dark mb-6">Lokasi Kami</h2>
                
                <div className="rounded-lg overflow-hidden mb-6 flex-grow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.122126844007!2d110.36307387579761!3d-7.782755676908138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5834f2b58fe1%3A0x8ba75acf44671b4e!2sMalioboro%2C%20Sosromenduran%2C%20Gedong%20Tengen%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700234012572!5m2!1sen!2sid" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MaxClean Location"
                  ></iframe>
                </div>
                
                {/* Business Hours */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-dark mb-4 flex items-center">
                    <Clock size={18} className="mr-2 text-blue-medium" />
                    Jam Operasional
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Senin - Jumat</span>
                      <span className="text-blue-dark font-medium">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Sabtu</span>
                      <span className="text-blue-dark font-medium">08:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Minggu</span>
                      <span className="text-blue-dark font-medium">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Alternatives */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-blue-dark mb-4">
              Cara Lain Untuk Menghubungi Kami
            </h2>
            <p className="text-gray-600">
              Anda juga dapat menghubungi kami melalui platform berikut
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-4">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Dapatkan respons cepat dari tim kami melalui WhatsApp
              </p>
              <span className="text-blue-medium font-medium">
                +62 812 3456 7890
              </span>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://instagram.com/maxclean"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">
                Ikuti kami di Instagram untuk update produk terbaru
              </p>
              <span className="text-blue-medium font-medium">
                @maxclean
              </span>
            </a>
            
            {/* Facebook */}
            <a 
              href="https://facebook.com/maxclean"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center transform transition-all hover:-translate-y-2 duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-dark mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4">
                Kunjungi halaman Facebook kami untuk informasi terbaru
              </p>
              <span className="text-blue-medium font-medium">
                MaxClean
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Butuh Solusi Peralatan Cuci Mobil?
            </h2>
            <p className="text-gray-200 mb-8">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda menemukan peralatan yang tepat untuk kebutuhan Anda.
            </p>
            <a 
              href="tel:+6281234567890" 
              className="btn-primary inline-flex items-center"
            >
              <Phone size={18} className="mr-2" />
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
