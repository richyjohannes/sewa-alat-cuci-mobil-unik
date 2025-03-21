
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ChevronLeft, Plus, Minus, ArrowRight, Home, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const handleWhatsAppCheckout = () => {
    // Format cart items for WhatsApp message
    let message = `Halo, saya ingin melakukan pembelian produk berikut:\n\n`;
    
    cart.forEach((item, index) => {
      const priceStr = item.salesPrice.replace(/Rp |\.|\,/g, '');
      const price = parseInt(priceStr, 10);
      const itemTotal = price * item.quantity;
      
      message += `${index + 1}. *${item.name}*\n`;
      message += `   - Jumlah: ${item.quantity}\n`;
      message += `   - Harga: ${item.salesPrice} x ${item.quantity} = ${formatPrice(itemTotal)}\n\n`;
    });
    
    message += `Total Pembelian: *${formatPrice(getTotalPrice())}*\n\n`;
    message += `Detail Pengiriman:\n`;
    message += `Nama: ${name}\n`;
    message += `Alamat: ${address}\n\n`;
    message += `Mohon konfirmasi pesanan saya. Terima kasih.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281573635143?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Keranjang <span className="text-yellow">Belanja</span>
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 mt-4 text-gray-300 text-sm">
              <Link to="/" className="hover:text-white flex items-center">
                <Home size={14} />
                <span className="ml-1">Beranda</span>
              </Link>
              <ChevronRight size={14} />
              <Link to="/products" className="hover:text-white">
                Produk
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Keranjang</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cart Section */}
      <section className="py-10 flex-grow">
        <div className="container-custom">
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="glass-card p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-blue-dark">Produk dalam Keranjang</h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-red-500 flex items-center hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Kosongkan
                    </button>
                  </div>
                  
                  <div className="divide-y">
                    {cart.map((item) => (
                      <div key={item.id} className="py-4 flex gap-4">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md" 
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium text-blue-dark">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-blue-dark">{item.salesPrice}</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end mt-2">
                            {/* Quantity controls */}
                            <div className="flex items-center border rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-gray-600 hover:text-blue-dark"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-gray-600 hover:text-blue-dark"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            {/* Remove button */}
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm flex items-center"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Link 
                    to="/products" 
                    className="flex items-center text-blue-medium hover:text-blue-dark transition-colors"
                  >
                    <ChevronLeft size={16} />
                    <span>Lanjutkan Belanja</span>
                  </Link>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="glass-card p-6 sticky top-24">
                  <h2 className="text-xl font-semibold text-blue-dark mb-4">Ringkasan Pesanan</h2>
                  
                  <div className="space-y-3 pb-4 border-b">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jumlah Item</span>
                      <span className="font-medium">{getTotalItems()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total</span>
                      <span className="font-semibold text-blue-dark">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium text-blue-dark">Informasi Pengiriman</h3>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Alamat Lengkap</label>
                      <textarea
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-light"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Masukkan alamat lengkap"
                        rows={3}
                      />
                    </div>
                    <button
                      onClick={handleWhatsAppCheckout}
                      disabled={cart.length === 0 || !name || !address}
                      className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
                        cart.length === 0 || !name || !address
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-yellow hover:bg-yellow-light text-blue-dark font-medium'
                      }`}
                    >
                      <ShoppingCart size={18} />
                      <span>Pesan via WhatsApp</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <div className="flex flex-col items-center max-w-md mx-auto">
                <ShoppingCart size={64} className="text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-blue-dark mb-2">Keranjang Kosong</h2>
                <p className="text-gray-600 mb-6">
                  Anda belum menambahkan produk apapun ke dalam keranjang belanja.
                </p>
                <Link 
                  to="/products" 
                  className="btn-primary flex items-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Mulai Belanja
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;
