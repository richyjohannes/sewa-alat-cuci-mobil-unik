
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag, Eye } from 'lucide-react';

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
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-card card-hover h-full flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Status badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-yellow text-blue-dark text-xs font-semibold px-2 py-1 rounded-full">
              Baru
            </span>
          )}
          {product.isPopular && (
            <span className="bg-blue-medium text-white text-xs font-semibold px-2 py-1 rounded-full">
              Populer
            </span>
          )}
        </div>
        
        {/* Availability badge */}
        <div className="absolute bottom-3 left-3">
          {product.isAvailable ? (
            <span className="bg-green-500 bg-opacity-90 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
              <Clock size={12} className="mr-1" />
              Tersedia
            </span>
          ) : (
            <span className="bg-red-500 bg-opacity-90 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
              <Clock size={12} className="mr-1" />
              Tidak Tersedia
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-xs text-blue-medium bg-blue-light bg-opacity-10 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-blue-dark mb-1">{product.name}</h3>
        
        <div className="mt-auto space-y-2">
          {/* Prices */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-gray-600">
              <Tag size={14} className="mr-1 text-blue-medium" />
              <span className="text-sm">Sewa: </span>
              <span className="font-semibold text-blue-dark ml-1">{product.rentalPrice}/hari</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag size={14} className="mr-1 text-blue-medium" />
              <span className="text-sm">Beli: </span>
              <span className="font-semibold text-blue-dark ml-1">{product.salesPrice}</span>
            </div>
          </div>
          
          {/* Call to action */}
          <Link 
            to={`/product/${product.id}`} 
            className="mt-3 inline-block w-full text-center bg-blue-medium hover:bg-blue-dark text-white py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <Eye size={16} className="mr-2" />
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
