import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Check, 
  ShoppingBag, 
  Clock, 
  Tag, 
  ChevronRight, 
  Home, 
  Package, 
  Info, 
  Wrench, 
  Truck 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard, { ProductType } from '../components/ProductCard';
import CtaSection from '../components/CtaSection';

interface ProductDetailType extends ProductType {
  description: string;
  specifications: { label: string; value: string }[];
  features: string[];
  includes: string[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'features'>('description');
  const [activeImage, setActiveImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const productsData: ProductDetailType[] = [
    {
      id: 1,
      name: "Pressure Washer Pro X2000",
      image: "https://images.unsplash.com/photo-1674468576904-c5a6c6367e0f?q=80&w=3347&auto=format&fit=crop",
      category: "Pressure Washer",
      rentalPrice: "Rp 250.000",
      salesPrice: "Rp 5.500.000",
      isNew: true,
      isPopular: true,
      isAvailable: true,
      description: "Pressure Washer Pro X2000 adalah mesin cuci tekanan tinggi yang dirancang untuk memberikan hasil pembersihan maksimal. Dengan daya 2000 Watt dan tekanan hingga 160 bar, mesin ini mampu menghilangkan kotoran membandel dari berbagai permukaan, termasuk mobil, lantai, dinding, dan halaman. Dilengkapi dengan berbagai nosel dan aksesori, Pressure Washer Pro X2000 adalah pilihan tepat untuk bisnis cuci mobil profesional maupun penggunaan pribadi.",
      specifications: [
        { label: "Daya", value: "2000 Watt" },
        { label: "Tekanan Maksimal", value: "160 bar" },
        { label: "Aliran Air", value: "420 L/jam" },
        { label: "Panjang Selang", value: "10 meter" },
        { label: "Voltase", value: "220-240V" },
        { label: "Berat", value: "12 kg" },
        { label: "Dimensi", value: "40 x 25 x 50 cm" },
        { label: "Garansi", value: "1 Tahun" },
      ],
      features: [
        "Tekanan tinggi hingga 160 bar untuk pembersihan maksimal",
        "Sistem Total Stop yang menghemat energi dan air",
        "Dilengkapi dengan berbagai nosel untuk kebutuhan yang berbeda",
        "Handle yang ergonomis untuk kenyamanan penggunaan",
        "Pompa baja tahan lama dengan perlindungan termal",
        "Mudah disimpan dengan penahan kabel dan selang",
        "Roda besar untuk mobilitas yang mudah",
        "Filter air yang dapat dibersihkan untuk melindungi pompa",
      ],
      includes: [
        "1 x Pressure Washer Pro X2000",
        "1 x Selang tekanan tinggi 10 meter",
        "1 x Lance spray",
        "5 x Nosel berbeda",
        "1 x Botol sabun",
        "1 x Adapter koneksi air",
        "1 x Manual pengguna",
        "1 x Kartu garansi",
      ]
    },
    {
      id: 2,
      name: "Foam Cannon Deluxe Gold",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=3387&auto=format&fit=crop",
      category: "Foam Cannon",
      rentalPrice: "Rp 100.000",
      salesPrice: "Rp 1.200.000",
      isPopular: true,
      isAvailable: true,
      description: "Foam Cannon Deluxe Gold adalah alat profesional untuk menghasilkan busa tebal yang sempurna untuk mencuci mobil. Dirancang dengan bahan berkualitas tinggi dan dilengkapi dengan nosel penyesuai, alat ini memungkinkan Anda mengontrol ketebalan busa sesuai kebutuhan. Sempurna untuk penggunaan dengan pressure washer, Foam Cannon Deluxe Gold akan membuat proses mencuci mobil menjadi lebih efisien dan hasil yang maksimal.",
      specifications: [
        { label: "Kapasitas Tabung", value: "1 Liter" },
        { label: "Material", value: "Kuningan & Stainless Steel" },
        { label: "Tekanan Kerja", value: "80-160 bar" },
        { label: "Koneksi", value: "1/4'' Quick Connect" },
        { label: "Berat", value: "0.8 kg" },
        { label: "Dimensi", value: "15 x 10 x 25 cm" },
        { label: "Garansi", value: "6 Bulan" },
      ],
      features: [
        "Menghasilkan busa tebal dan creamy untuk mencuci mobil",
        "Kontrol ketebalan busa yang dapat disesuaikan",
        "Tabung transparan untuk melihat level sabun",
        "Konstruksi kuningan premium yang tahan lama",
        "Kompatibel dengan berbagai merek pressure washer",
        "Sistem quick-connect untuk pemasangan cepat",
        "Nosel penyesuai untuk hasil optimal",
      ],
      includes: [
        "1 x Foam Cannon Deluxe Gold",
        "1 x Adapter quick connect",
        "1 x Set O-ring cadangan",
        "1 x Manual pengguna",
        "1 x Kartu garansi",
      ]
    },
    {
      id: 3,
      name: "Vacuum Cleaner Industrial",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=3456&auto=format&fit=crop",
      category: "Vacuum Cleaner",
      rentalPrice: "Rp 150.000",
      salesPrice: "Rp 3.800.000",
      isAvailable: true,
      description: "Vacuum Cleaner Industrial adalah vacuum cleaner bertenaga tinggi yang dirancang khusus untuk kebutuhan bisnis cuci mobil. Dengan daya hisap yang kuat dan kapasitas tangki besar, alat ini mampu membersihkan kotoran, debu, dan cairan dari interior mobil dengan efisien. Dilengkapi dengan berbagai attachment untuk menjangkau sudut-sudut sulit, Vacuum Cleaner Industrial adalah investasi berharga untuk bisnis detailing mobil.",
      specifications: [
        { label: "Daya", value: "1400 Watt" },
        { label: "Kapasitas Tangki", value: "30 Liter" },
        { label: "Daya Hisap", value: "25 kPa" },
        { label: "Panjang Kabel", value: "8 meter" },
        { label: "Material Tangki", value: "Stainless Steel" },
        { label: "Berat", value: "10 kg" },
        { label: "Dimensi", value: "40 x 40 x 60 cm" },
        { label: "Garansi", value: "1 Tahun" },
      ],
      features: [
        "Daya hisap kuat untuk membersihkan kotoran dan debu",
        "Fungsi basah dan kering dalam satu alat",
        "Tangki stainless steel yang tahan lama",
        "Filter HEPA untuk udara bersih",
        "Roda 360° untuk mobilitas mudah",
        "Sistem dual motor untuk performa maksimal",
        "Mode operasi yang tenang",
        "Penyimpanan aksesoris terintegrasi",
      ],
      includes: [
        "1 x Vacuum Cleaner Industrial",
        "1 x Selang fleksibel 3 meter",
        "3 x Berbagai nosel dan sikat",
        "1 x Extension wand",
        "2 x Filter (standar & HEPA)",
        "1 x Manual pengguna",
        "1 x Kartu garansi",
      ]
    },
    {
      id: 4,
      name: "Polisher Machine Pro",
      image: "https://images.unsplash.com/photo-1614977294886-2def7e8dbcd5?q=80&w=3426&auto=format&fit=crop",
      category: "Polisher",
      rentalPrice: "Rp 200.000",
      salesPrice: "Rp 4.500.000",
      isNew: true,
      isAvailable: false,
      description: "Polisher Machine Pro adalah mesin poles mobil profesional yang dirancang untuk memberikan hasil mengkilap sempurna pada kendaraan. Dengan kecepatan yang dapat disesuaikan dan desain ergonomis, mesin ini memudahkan proses polishing dan menghilangkan goresan halus pada permukaan cat. Ideal untuk detailer profesional maupun penghobi yang menginginkan hasil detailing terbaik.",
      specifications: [
        { label: "Daya", value: "1200 Watt" },
        { label: "Kecepatan", value: "600-3000 RPM" },
        { label: "Diameter Pad", value: "6 inch (150mm)" },
        { label: "Panjang Kabel", value: "5 meter" },
        { label: "Berat", value: "3.5 kg" },
        { label: "Dimensi", value: "35 x 15 x 25 cm" },
        { label: "Garansi", value: "1 Tahun" },
      ],
      features: [
        "Kecepatan variabel untuk kontrol maksimal",
        "Sistem pendingin motor yang efisien",
        "Desain ergonomis untuk kenyamanan penggunaan",
        "Lock-on switch untuk penggunaan berkelanjutan",
        "Kontrol torsi elektronik untuk kinerja stabil",
        "Soft start untuk mencegah splash compound",
        "Konstruksi ringan namun kuat",
      ],
      includes: [
        "1 x Polisher Machine Pro",
        "3 x Pad polishing berbeda",
        "1 x Backing plate",
        "1 x Handle samping",
        "1 x Set sikat karbon cadangan",
        "1 x Tas penyimpanan",
        "1 x Manual pengguna",
        "1 x Kartu garansi",
      ]
    },
  ];
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (id) {
        const foundProduct = productsData.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          setActiveImage(foundProduct.image);
          
          const related = productsData
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 3);
          setRelatedProducts(related);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  const productImages = product ? [
    product.image,
    "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=3270&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602337442860-62df41f73c36?q=80&w=3432&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1664911979855-ec4146b7ca40?q=80&w=3270&auto=format&fit=crop",
  ] : [];
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse-subtle text-blue-medium">
            <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container-custom py-24">
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-dark mb-4">Produk Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-6">Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.</p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Kembali ke Katalog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-medium flex items-center">
              <Home size={14} />
              <span className="ml-1">Beranda</span>
            </Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-blue-medium">
              Produk
            </Link>
            <ChevronRight size={14} />
            <Link to={`/products?category=${product.category}`} className="hover:text-blue-medium">
              {product.category}
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-800 font-medium truncate">{product.name}</span>
          </div>
        </div>
        
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="mb-4 rounded-xl overflow-hidden border border-gray-100">
                  <img 
                    src={activeImage} 
                    alt={product.name} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((img, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                        activeImage === img ? 'border-blue-medium' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`} 
                        className="w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  {product.isNew && (
                    <span className="inline-block bg-yellow bg-opacity-10 text-yellow px-3 py-1 rounded-full text-xs font-medium">
                      Baru
                    </span>
                  )}
                  {product.isPopular && (
                    <span className="inline-block bg-blue-medium bg-opacity-10 text-blue-medium px-3 py-1 rounded-full text-xs font-medium">
                      Populer
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-blue-dark mb-4">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={18} 
                        className={`${star <= 4 ? 'text-yellow fill-yellow' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">(12 ulasan)</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Tag size={18} className="mr-2 text-blue-medium" />
                      <span className="mr-2">Harga Sewa:</span>
                      <span className="font-semibold text-blue-dark text-xl">{product.rentalPrice}</span>
                      <span className="text-gray-600 ml-1 text-sm">/ hari</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ShoppingBag size={18} className="mr-2 text-blue-medium" />
                      <span className="mr-2">Harga Beli:</span>
                      <span className="font-semibold text-blue-dark text-xl">{product.salesPrice}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                    product.isAvailable 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <Clock size={14} className="mr-1" />
                    <span>{product.isAvailable ? 'Tersedia' : 'Tidak Tersedia'}</span>
                  </div>
                </div>
                
                <div className="border-t border-b border-gray-200 py-6 my-6">
                  <p className="text-gray-700 mb-4">
                    {product.description.split('.')[0]}. {product.description.split('.')[1]}.
                  </p>
                  
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${product.name}%20untuk%20${product.isAvailable ? 'disewa' : 'dibeli'}.%20Mohon%20informasi%20lebih%20lanjut.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center"
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    <span>{product.isAvailable ? 'Pesan Sekarang' : 'Tanya Ketersediaan'}</span>
                  </a>
                  
                  <a 
                    href="tel:+6281234567890" 
                    className="btn-outline flex-1 flex items-center justify-center"
                  >
                    <Clock size={18} className="mr-2" />
                    <span>Konsultasi Cepat</span>
                  </a>
                </div>
                
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Package size={16} className="mr-2 text-blue-medium" />
                    <span>Gratis pengiriman untuk area Yogyakarta</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Info size={16} className="mr-2 text-blue-medium" />
                    <span>Tersedia bantuan teknis untuk setup dan penggunaan</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Wrench size={16} className="mr-2 text-blue-medium" />
                    <span>Garansi resmi selama 1 tahun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'description' 
                      ? 'border-b-2 border-blue-medium text-blue-dark' 
                      : 'text-gray-600 hover:text-blue-dark'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Deskripsi
                </button>
                <button 
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'specifications' 
                      ? 'border-b-2 border-blue-medium text-blue-dark' 
                      : 'text-gray-600 hover:text-blue-dark'
                  }`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Spesifikasi
                </button>
                <button 
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'features' 
                      ? 'border-b-2 border-blue-medium text-blue-dark' 
                      : 'text-gray-600 hover:text-blue-dark'
                  }`}
                  onClick={() => setActiveTab('features')}
                >
                  Fitur & Kelengkapan
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-4">Tentang {product.name}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-700">
                      MaxClean menyediakan {product.name} untuk disewa harian atau mingguan, serta tersedia untuk pembelian. 
                      Semua peralatan yang kami sediakan telah melalui proses quality control yang ketat untuk memastikan kualitas terbaik.
                    </p>
                  </div>
                )}
                
                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-xl font-semibold text-blue-dark mb-4">Spesifikasi Teknis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, index) => (
                        <div 
                          key={index} 
                          className="flex justify-between border-b border-gray-100 py-3"
                        >
                          <span className="text-gray-600">{spec.label}</span>
                          <span className="font-medium text-blue-dark">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-blue-dark mb-4">Fitur Utama</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-blue-dark mb-4">Kelengkapan Paket</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Package size={18} className="text-blue-medium mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                  <Truck size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-dark mb-2">Pengiriman & Pengambilan</h3>
                <p className="text-gray-600">
                  Kami menyediakan layanan pengiriman dan pengambilan peralatan dalam area Yogyakarta. 
                  Untuk area lain, biaya tambahan mungkin berlaku.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-dark mb-2">Durasi Penyewaan</h3>
                <p className="text-gray-600">
                  Durasi penyewaan minimum adalah 1 hari. Untuk penyewaan lebih dari 7 hari, 
                  kami menawarkan harga spesial.
                </p>
              </div>
              
              <div className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-light bg-opacity-10 text-blue-medium mb-4">
                  <Info size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-dark mb-2">Syarat & Deposit</h3>
                <p className="text-gray-600">
                  Sewa memerlukan KTP dan deposit yang akan dikembalikan setelah peralatan dikembalikan dalam kondisi baik.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-blue-dark mb-8">Produk Terkait</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
            
            {relatedProducts.length === 0 && (
              <div className="glass-card p-8 text-center">
                <p className="text-gray-600">Tidak ada produk terkait saat ini.</p>
              </div>
            )}
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
