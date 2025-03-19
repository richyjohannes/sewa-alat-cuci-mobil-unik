
import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
}

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'text-yellow fill-yellow' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="glass-card p-6 h-full flex flex-col">
      <div className="flex space-x-2 mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
      
      <div className="flex items-center mt-auto">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-blue-dark">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
