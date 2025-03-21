
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from "sonner";

export interface ProductType {
  id: number;
  name: string;
  image: string;
  category: string;
  rentalPrice: string;
  salesPrice: string;
  isNew?: boolean;
  isPopular?: boolean;
  isAvailable: boolean;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`${product.name} ditambahkan ke keranjang`);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      </div>
      
      <div className="p-3 flex-grow flex flex-col">
        <span className="text-xs text-gray-500">
          {product.category}
        </span>
        <h3 className="font-semibold text-blue-dark text-sm mt-1 mb-1">{product.name}</h3>
        
        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-center text-gray-900 font-semibold mb-2">
            {product.salesPrice}
          </div>
          
          {/* Call to action buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link 
              to={`/product/${product.id}`} 
              className="text-center bg-blue-medium hover:bg-blue-dark text-white py-1.5 rounded text-xs flex items-center justify-center"
            >
              <Eye size={14} className="mr-1" />
              Detail
            </Link>
            <button
              onClick={handleAddToCart}
              className="text-center bg-yellow hover:bg-yellow-light text-blue-dark font-medium py-1.5 rounded text-xs flex items-center justify-center"
            >
              <ShoppingCart size={14} className="mr-1" />
              Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
