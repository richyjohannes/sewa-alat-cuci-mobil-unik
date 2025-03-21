import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Home, ChevronRight, Tag, ShoppingBag, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard, { ProductType } from '../components/ProductCard';

const Products = () => {
  // All products data
  const allProducts: ProductType[] = [
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
    },
    {
      id: 5,
      name: "High Pressure Washer Compact",
      image: "https://images.unsplash.com/photo-1620990595250-0162c6cce203?q=80&w=2000&auto=format&fit=crop",
      category: "Pressure Washer",
      rentalPrice: "Rp 180.000",
      salesPrice: "Rp 3.200.000",
      isAvailable: true
    },
    {
      id: 6,
      name: "Snow Foam Lance Premium",
      image: "https://images.unsplash.com/photo-1503516459261-40c66117780a?q=80&w=3269&auto=format&fit=crop",
      category: "Foam Cannon",
      rentalPrice: "Rp 80.000",
      salesPrice: "Rp 900.000",
      isPopular: true,
      isAvailable: true
    },
    {
      id: 7,
      name: "Car Dryer Blower Professional",
      image: "https://images.unsplash.com/photo-1635274359662-eea591cc2c25?q=80&w=3870&auto=format&fit=crop",
      category: "Dryer",
      rentalPrice: "Rp 120.000",
      salesPrice: "Rp 2.800.000",
      isNew: true,
      isAvailable: true
    },
    {
      id: 8,
      name: "Steam Cleaner All-in-One",
      image: "https://images.unsplash.com/photo-1636919831332-d041a2a22948?q=80&w=2000&auto=format&fit=crop",
      category: "Steam Cleaner",
      rentalPrice: "Rp 220.000",
      salesPrice: "Rp 4.900.000",
      isAvailable: true
    },
    {
      id: 9,
      name: "Interior Vacuum Mini",
      image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?q=80&w=3456&auto=format&fit=crop",
      category: "Vacuum Cleaner",
      rentalPrice: "Rp 90.000",
      salesPrice: "Rp 1.500.000",
      isAvailable: true
    },
    {
      id: 10,
      name: "Dual Action Polisher",
      image: "https://images.unsplash.com/photo-1621309073282-78c2c85b36bd?q=80&w=3442&auto=format&fit=crop",
      category: "Polisher",
      rentalPrice: "Rp 180.000",
      salesPrice: "Rp 3.800.000",
      isPopular: true,
      isAvailable: true
    },
    {
      id: 11,
      name: "Carpet Extractor Heavy Duty",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=3474&auto=format&fit=crop",
      category: "Carpet Cleaner",
      rentalPrice: "Rp 200.000",
      salesPrice: "Rp 5.200.000",
      isAvailable: false
    },
    {
      id: 12,
      name: "Portable Generator 2000W",
      image: "https://images.unsplash.com/photo-1597068398551-87b05db4aba7?q=80&w=3456&auto=format&fit=crop",
      category: "Generator",
      rentalPrice: "Rp 250.000",
      salesPrice: "Rp 6.500.000",
      isAvailable: true
    }
  ];
  
  // Define categories
  const categories = [
    'All',
    'Pressure Washer',
    'Foam Cannon',
    'Vacuum Cleaner',
    'Polisher',
    'Steam Cleaner',
    'Dryer',
    'Carpet Cleaner', 
    'Generator'
  ];
  
  // States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRentalOnly, setShowRentalOnly] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  // Filter products
  const filteredProducts = allProducts.filter(product => {
    // Filter by search term
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    // Filter by availability
    const matchesAvailability = !showAvailableOnly || product.isAvailable;
    
    return matchesSearchTerm && matchesCategory && matchesAvailability;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h5 className="inline-block bg-blue-light bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Katalog Produk
            </h5>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Peralatan Cuci Mobil <span className="text-yellow">Profesional</span>
            </h1>
            <p className="text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Pilih dari berbagai peralatan cuci mobil berkualitas tinggi. Tersedia untuk sewa harian atau pembelian.
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mt-6 text-gray-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/" className="hover:text-white flex items-center">
                <Home size={14} />
                <span className="ml-1">Beranda</span>
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Produk</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow md:max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-light"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="availableOnly"
                    className="mr-2"
                    checked={showAvailableOnly}
                    onChange={() => setShowAvailableOnly(!showAvailableOnly)}
                  />
                  <label htmlFor="availableOnly" className="text-sm text-gray-700">Tersedia Saja</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="glass-card p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter size={18} className="text-blue-medium" />
                  <h3 className="font-semibold text-blue-dark">Kategori</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-light bg-opacity-10 text-blue-medium font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag size={18} className="text-blue-medium" />
                    <h3 className="font-semibold text-blue-dark">Jenis</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rentalOnly"
                        className="mr-3"
                        checked={showRentalOnly}
                        onChange={() => setShowRentalOnly(!showRentalOnly)}
                      />
                      <label htmlFor="rentalOnly" className="text-sm text-gray-700">Sewa</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="salesOnly"
                        className="mr-3"
                      />
                      <label htmlFor="salesOnly" className="text-sm text-gray-700">Penjualan</label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">Butuh bantuan mencari produk?</p>
                    <Link 
                      to="/contact" 
                      className="btn-outline w-full justify-center"
                    >
                      Hubungi Kami
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-blue-dark">
                    {selectedCategory === 'All' ? 'Semua Produk' : selectedCategory}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Menampilkan {filteredProducts.length} produk
                  </p>
                </div>
                
                <div className="mt-3 sm:mt-0 flex items-center space-x-2 text-sm">
                  <span className="text-gray-600">Urutkan:</span>
                  <select className="border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-light">
                    <option>Terbaru</option>
                    <option>Harga: Rendah ke Tinggi</option>
                    <option>Harga: Tinggi ke Rendah</option>
                    <option>Nama: A-Z</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="glass-card p-8 text-center">
                  <h3 className="text-xl font-semibold text-blue-dark mb-2">Produk Tidak Ditemukan</h3>
                  <p className="text-gray-600 mb-4">
                    Maaf, kami tidak dapat menemukan produk yang sesuai dengan kriteria pencarian Anda.
                  </p>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setShowAvailableOnly(false);
                      setShowRentalOnly(false);
                    }}
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="glass-card p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-dark mb-4">
                Tidak Menemukan yang Anda Cari?
              </h2>
              <p className="text-gray-600 mb-6">
                Kami memiliki lebih banyak produk yang mungkin tidak tercantum di sini. 
                Hubungi tim kami untuk mengetahui ketersediaan produk spesifik yang Anda butuhkan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center">
                  <ShoppingBag size={18} className="mr-2" />
                  Hubungi Kami
                </Link>
                <a href="tel:+6281573635143" className="btn-outline flex items-center justify-center">
                  <Clock size={18} className="mr-2" />
                  Konsultasi Cepat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
