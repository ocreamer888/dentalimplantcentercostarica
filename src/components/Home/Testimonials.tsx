"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/SectionTitle";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I was nervous about getting dental implants abroad, but the team at Dental Implant Center Costa Rica made me feel completely at ease. The quality of care was exceptional and the results exceeded my expectations. I can finally smile with confidence!",
      name: "Sarah Johnson",
      location: "California, USA",
      treatment: "All-on-4 Implants",
      rating: 5,
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      quote: "The cost savings were incredible - I saved over $30,000 compared to US prices. The facilities were modern, the staff was professional, and the recovery was smooth. I highly recommend this clinic to anyone considering dental implants.",
      name: "Michael Rodriguez",
      location: "Texas, USA",
      treatment: "All-on-6 Implants",
      rating: 5,
      avatar: "/avatars/michael.jpg"
    },
    {
      id: 3,
      quote: "From the initial consultation to the final result, everything was perfect. The doctors are highly skilled and the aftercare support was outstanding. My new smile looks natural and feels great.",
      name: "Jennifer Davis",
      location: "Florida, USA",
      treatment: "Single Implants",
      rating: 5,
      avatar: "/avatars/jennifer.jpg"
    },
    {
      id: 4,
      quote: "I researched many dental tourism options and chose Costa Rica because of the excellent reviews. The experience was even better than I expected. Professional, affordable, and life-changing results.",
      name: "Robert Wilson",
      location: "New York, USA",
      treatment: "Full Mouth Reconstruction",
      rating: 5,
      avatar: "/avatars/robert.jpg"
    },
    {
      id: 5,
      quote: "The combination of quality care, beautiful location, and significant cost savings made this the perfect choice. The team was responsive to all my questions and concerns throughout the process.",
      name: "Lisa Thompson",
      location: "Colorado, USA",
      treatment: "All-on-4 Implants",
      rating: 5,
      avatar: "/avatars/lisa.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-bl from-purple-900/50 via-purple-500/50 to-purple-900/50">
      <Container>
        <div className="text-center mb-16 text-white">
          <SectionTitle>
            <h2>What Our Patients Say</h2>
          </SectionTitle>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Real stories from patients who transformed their smiles and lives with our dental implant treatments
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-12">
                  <div className="flex flex-col items-center text-center space-y-8">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 max-w-4xl">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    {/* Patient Info */}
                    <div className="text-center">
                      <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            aria-label={`Previous testimonial. Currently viewing testimonial ${currentTestimonial + 1} of ${testimonials.length}`}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" aria-hidden="true" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label={`Next testimonial. Currently viewing testimonial ${currentTestimonial + 1} of ${testimonials.length}`}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" aria-hidden="true" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              role="tab"
              aria-selected={index === currentTestimonial}
              aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
