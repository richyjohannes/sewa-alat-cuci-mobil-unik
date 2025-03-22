
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CtaSection from '../components/CtaSection';
import PackageSection from '../components/sections/PackageSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Package Section */}
      <PackageSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Featured Products Section */}
      <FeaturedProductsSection />
      
      {/* How it Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <CtaSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
