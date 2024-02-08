import React, { useState, useEffect } from 'react';

// Import slider images correctly as per your setup
import slider1 from '../../../src/assets/slider.png';
import slider2 from '../../../src/assets/slider2.png';
import slider3 from '../../../src/assets/slider3.png';
import slider4 from '../../../src/assets/slider4.png';

const slides = [
  { id: 1, url: slider1, alt: 'Slide 1' },
  { id: 2, url: slider2, alt: 'Slide 2' },
  { id: 3, url: slider3, alt: 'Slide 3' },
  { id: 4, url: slider4, alt: 'Slide 4' },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative mx-auto overflow-hidden my-8" style={{ maxWidth: '1800px', height: '400px' }}> {/* Adjust the max-width and height as per your design requirement */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== currentSlide}
        >
          <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}
      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none"
      >
        Prev
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};
