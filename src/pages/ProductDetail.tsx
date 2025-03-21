import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Wrench, Tag, Clock, Truck, Shield, Home, ChevronRight, Check, Minus, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProductType } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { toast } from "sonner";

const dummyProducts: ProductType[] = [
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    const foundProduct = dummyProducts.find(p => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`${product.name} ditambahkan ke keranjang`);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h5 className="inline-block bg-blue-light bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Detail Produk
            </h5>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {product.name}
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mt-4 text-gray-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/" className="hover:text-white flex items-center">
                <Home size={14} />
                <span className="ml-1">Beranda</span>
              </Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-white">
                Produk
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{product.name}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-blue-medium hover:text-blue-dark transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Produk
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="glass-card overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="glass-card p-6">
                <span className="text-sm text-blue-medium bg-blue-light bg-opacity-10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                
                <h1 className="text-2xl md:text-3xl font-bold text-blue-dark mt-3 mb-4">
                  {product.name}
                </h1>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-dark">
                    {product.salesPrice}
                  </h2>
                </div>
                
                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Jumlah</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={decrementQuantity}
                      className="p-2 rounded-l-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                      className="w-16 p-2 text-center border-t border-b border-gray-300"
                    />
                    <button 
                      onClick={incrementQuantity}
                      className="p-2 rounded-r-md border border-gray-300 text-gray-600 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Tambah ke Keranjang
                  </button>
                  <Link
                    to="/cart"
                    className="btn-secondary flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Lihat Keranjang
                  </Link>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Fitur Utama</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <Wrench size={16} className="mr-2 text-blue-medium" />
                      Perawatan Mudah
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Tag size={16} className="mr-2 text-blue-medium" />
                      Harga Terjangkau
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-blue-medium" />
                      Garansi 1 Tahun
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Truck size={16} className="mr-2 text-blue-medium" />
                      Pengiriman Cepat
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Shield size={16} className="mr-2 text-blue-medium" />
                      Kualitas Terjamin
                    </li>
                  </ul>
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Deskripsi Produk</h3>
                  <p className="text-gray-600">
                    {product.name} adalah solusi sempurna untuk kebutuhan kebersihan mobil Anda.
                    Dengan fitur-fitur canggih dan desain yang ergonomis, produk ini akan membuat
                    mobil Anda selalu terlihat seperti baru.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Sections */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-blue-dark mb-4">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyProducts.slice(0, 3).map(relatedProduct => (
                <div key={relatedProduct.id} className="glass-card p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      className="w-full h-32 object-cover rounded-md mb-3" 
                    />
                    <h3 className="text-blue-dark font-medium">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm">{relatedProduct.salesPrice}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-blue-dark mb-4">
              Jaminan Kualitas
            </h2>
            <div className="glass-card p-6 flex items-center space-x-4">
              <Check size={48} className="text-green-500" />
              <div>
                <h3 className="font-medium text-blue-dark">Produk Original</h3>
                <p className="text-gray-600">
                  Kami hanya menjual produk original dengan kualitas terjamin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
