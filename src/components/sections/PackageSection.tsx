
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PackageCard from '../PackageCard';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useSmallMobile } from '@/hooks/useSmallMobile';

interface PackageFeature {
  name: string;
  included: boolean;
}

interface ServicePackage {
  title: string;
  price: string;
  features: PackageFeature[];
  popular?: boolean;
  ctaText?: string;
}

const PackageSection = () => {
  const isSmallMobile = useSmallMobile();
  
  // Service packages
  const servicePackages: ServicePackage[] = [
    {
      title: "Paket Basic",
      price: "Rp 499.000",
      features: [
        { name: "Pressure Washer Standar", included: true },
        { name: "Foam Cannon Basic", included: true },
        { name: "Microfiber Cloth (2 pcs)", included: true },
        { name: "Car Shampoo 250ml", included: true },
        { name: "Quick Detailer 100ml", included: false },
        { name: "Interior Cleaner", included: false },
        { name: "Tire Shine", included: false },
        { name: "Premium Wax", included: false },
      ],
      popular: false,
      ctaText: "Pilih Paket Basic"
    },
    {
      title: "Paket Premium",
      price: "Rp 899.000",
      features: [
        { name: "Pressure Washer Pro", included: true },
        { name: "Foam Cannon Deluxe", included: true },
        { name: "Microfiber Cloth (5 pcs)", included: true },
        { name: "Car Shampoo 500ml", included: true },
        { name: "Quick Detailer 250ml", included: true },
        { name: "Interior Cleaner", included: true },
        { name: "Tire Shine", included: false },
        { name: "Premium Wax", included: false },
      ],
      popular: true,
      ctaText: "Pilih Paket Premium"
    },
    {
      title: "Paket Professional",
      price: "Rp 1.499.000",
      features: [
        { name: "Pressure Washer Pro X2000", included: true },
        { name: "Foam Cannon Deluxe Gold", included: true },
        { name: "Microfiber Cloth (10 pcs)", included: true },
        { name: "Car Shampoo 1L", included: true },
        { name: "Quick Detailer 500ml", included: true },
        { name: "Interior Cleaner", included: true },
        { name: "Tire Shine", included: true },
        { name: "Premium Wax", included: true },
      ],
      popular: false,
      ctaText: "Pilih Paket Pro"
    }
  ];
  
  // Function to render the package section
  const renderPackageSection = () => {
    if (isSmallMobile) {
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {servicePackages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PackageCard 
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  popular={pkg.popular}
                  ctaText={pkg.ctaText}
                  onClick={() => window.location.href = "/products"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {servicePackages.map((pkg, index) => (
            <PackageCard 
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              popular={pkg.popular}
              ctaText={pkg.ctaText}
              onClick={() => window.location.href = "/products"}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h5 className="inline-block bg-blue-light bg-opacity-10 text-blue-medium px-4 py-2 rounded-full text-sm font-medium mb-4">
            Paket Cuci Mobil
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
            Pilih Paket Yang Tepat Untuk Anda
          </h2>
          <p className="text-gray-600 text-sm">
            Kami menyediakan berbagai paket peralatan cuci mobil untuk kebutuhan Anda.
            Dari paket basic hingga professional, semua dengan kualitas terbaik.
          </p>
        </div>
        
        {renderPackageSection()}
        
        <div className="text-center mt-6">
          <Link to="/contact" className="inline-flex items-center text-blue-medium hover:text-blue-dark transition-colors text-sm">
            <span className="mr-2">Butuh paket khusus? Hubungi kami</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
