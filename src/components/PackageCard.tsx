
import React from 'react';
import { Check } from 'lucide-react';

interface PackageFeature {
  name: string;
  included: boolean;
}

interface PackageCardProps {
  title: string;
  price: string;
  features: PackageFeature[];
  popular?: boolean;
  ctaText?: string;
  onClick?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  title, 
  price, 
  features, 
  popular = false,
  ctaText = "Pilih Paket",
  onClick 
}) => {
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
      popular 
        ? 'shadow-lg border-2 border-yellow transform hover:-translate-y-1' 
        : 'shadow-sm border border-gray-100 hover:shadow-md'
    }`}>
      {popular && (
        <div className="bg-yellow py-1 px-4 text-blue-dark text-center text-sm font-semibold">
          Paling Populer
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-blue-dark mb-2">{title}</h3>
        
        <div className="mt-2 mb-4">
          <span className="text-2xl font-bold text-blue-dark">{price}</span>
          <span className="text-gray-500 ml-1">/paket</span>
        </div>
        
        <div className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`rounded-full p-1 mr-2 ${
                feature.included 
                  ? 'text-green-500 bg-green-50' 
                  : 'text-gray-300 bg-gray-50'
              }`}>
                <Check size={12} />
              </div>
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClick}
          className={`w-full py-2 rounded-lg font-medium transition-colors ${
            popular 
              ? 'bg-yellow hover:bg-yellow-light text-blue-dark' 
              : 'bg-blue-light hover:bg-blue-medium text-white'
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
