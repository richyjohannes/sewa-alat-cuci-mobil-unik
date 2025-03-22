
import React from 'react';
import Testimonial, { TestimonialType } from '../Testimonial';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useSmallMobile } from '@/hooks/useSmallMobile';

const TestimonialsSection = () => {
  const isSmallMobile = useSmallMobile();
  
  // Testimonials data
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pemilik",
      company: "Budi Car Wash",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=3000&auto=format&fit=crop",
      rating: 5,
      content: "Saya sudah menggunakan peralatan dari MaxClean selama 2 tahun dan sangat puas dengan kualitasnya. Pelayanan mereka juga sangat profesional dan responsif."
    },
    {
      id: 2,
      name: "Dewi Anggraini",
      role: "Manajer",
      company: "Clean & Shine",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop",
      rating: 4,
      content: "Layanan penyewaan mereka sangat membantu bisnis kami saat kami baru memulai. Sekarang kami telah membeli peralatan sendiri dari MaxClean karena kualitasnya terjamin."
    },
    {
      id: 3,
      name: "Ahmad Rizal",
      role: "Pemilik",
      company: "Premium Auto Care",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=3387&auto=format&fit=crop",
      rating: 5,
      content: "Pressure washer yang saya beli dari MaxClean sangat awet dan mudah digunakan. Sudah 3 tahun berjalan dan masih berfungsi dengan baik. Sangat direkomendasikan!"
    }
  ];
  
  const renderTestimonials = () => {
    if (isSmallMobile) {
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Testimonial testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      );
    } else {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      );
    }
  };
  
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h5 className="inline-block bg-blue-light/10 text-blue-medium px-3 py-1 rounded-full text-sm font-medium mb-3">
            Testimonial
          </h5>
          <h2 className="text-xl md:text-2xl font-bold text-blue-dark mb-3">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-gray-600 text-sm">
            Pendapat jujur dari pelanggan yang telah menggunakan layanan kami.
          </p>
        </div>
        
        {renderTestimonials()}
      </div>
    </section>
  );
};

export default TestimonialsSection;
