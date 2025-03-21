
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ChevronLeft, Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  
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
    message += `Alamat: ${address}\n`;
    
    if (notes.trim()) {
      message += `\nCatatan: ${notes}\n`;
    }
    
    message += `\nMohon konfirmasi pesanan saya. Terima kasih.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281573635143?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="pt-24 flex-grow">
        <div className="container-custom py-8">
          <h1 className="text-2xl font-bold text-blue-dark mb-6">Keranjang Belanja</h1>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl">Produk</CardTitle>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-red-500 flex items-center hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Kosongkan
                    </button>
                  </CardHeader>
                  <CardContent>
                    <div className="divide-y">
                      {cart.map((item) => (
                        <div key={item.id} className="py-4 flex gap-3">
                          <div className="w-16 h-16 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded-md" 
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium text-blue-dark text-sm">{item.name}</h3>
                                <p className="text-xs text-gray-500">{item.category}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-blue-dark text-sm">{item.salesPrice}</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-end mt-2">
                              {/* Quantity controls */}
                              <div className="flex items-center border rounded-md">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1 text-gray-600 hover:text-blue-dark"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="px-2 py-1 text-center w-8 text-sm">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 text-gray-600 hover:text-blue-dark"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              
                              {/* Remove button */}
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 text-xs flex items-center"
                              >
                                <Trash2 size={12} className="mr-1" />
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <Link 
                        to="/products" 
                        className="flex items-center text-blue-medium hover:text-blue-dark transition-colors text-sm"
                      >
                        <ChevronLeft size={16} />
                        <span>Lanjutkan Belanja</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl">Ringkasan Pesanan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 pb-4 border-b">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Jumlah Item</span>
                        <span className="font-medium">{getTotalItems()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total</span>
                        <span className="font-semibold text-blue-dark">{formatPrice(getTotalPrice())}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <h3 className="font-medium text-blue-dark text-sm">Informasi Pengiriman</h3>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Nama Lengkap *</label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-light text-sm"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Alamat Lengkap *</label>
                        <textarea
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-light text-sm"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Masukkan alamat lengkap"
                          rows={2}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Catatan (Opsional)</label>
                        <textarea
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-light text-sm"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tambahkan catatan untuk pesanan Anda"
                          rows={2}
                        />
                      </div>
                      <button
                        onClick={handleWhatsAppCheckout}
                        disabled={cart.length === 0 || !name || !address}
                        className={`w-full py-2.5 rounded-md flex items-center justify-center gap-2 mt-3 ${
                          cart.length === 0 || !name || !address
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-yellow hover:bg-yellow-light text-blue-dark font-medium'
                        }`}
                      >
                        <ShoppingCart size={16} />
                        <span>Pesan via WhatsApp</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex flex-col items-center max-w-md mx-auto">
                <ShoppingCart size={64} className="text-gray-300 mb-4" />
                <h2 className="text-xl font-semibold text-blue-dark mb-2">Keranjang Kosong</h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Anda belum menambahkan produk apapun ke dalam keranjang belanja.
                </p>
                <Link 
                  to="/products" 
                  className="btn-primary flex items-center py-2 px-4"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Mulai Belanja
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
