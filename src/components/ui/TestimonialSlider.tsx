"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  age: number;
  product: string;
  avatar: string;
}

interface TestimonialSliderProps {
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function TestimonialSlider({ 
  backgroundColor,
  textColor
}: TestimonialSliderProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "When my treatment arrived, let's just say: my wife and I haven't had that much fun in a long time. Now, we schedule weekly date nights and get to enjoy one another again. I couldn't be happier with the results.",
      name: "Patrick",
      age: 49,
      product: "Sildenafil Chews",
      avatar: "/avatars/patrick.jpg"
    },
    {
      id: 2,
      quote: "My manhood wouldn't work like it used to. The combo in my treatment makes me get hard and last for hours. It gave me the confidence in the bedroom and my lady enjoys it as well.",
      name: "Richard",
      age: 43,
      product: "Sex Rx + Climax Control",
      avatar: "/avatars/richard.jpg"
    },
    {
      id: 3,
      quote: "The difference was noticeable from the first night! I was able to get it up faster, last longer, and was able to go multiple rounds with my partner.",
      name: "Trevor",
      age: 31,
      product: "Hard Mints",
      avatar: "/avatars/trevor.jpg"
    },
    {
      id: 4,
      quote: "Hims made it so easy to address my concerns. The process was discreet, which I really appreciated. The results have been amazing and my self-esteem got a massive boost.",
      name: "Max",
      age: 32,
      product: "Generic for Viagra®",
      avatar: "/avatars/max.jpg"
    },
    {
      id: 5,
      quote: "Suddenly, I couldn't get hard. The next day, I heard an ad for Hims. I quickly jumped on the opportunity. It was so easy. Everything was online. About one week after ordering, my shipment came in. Very fast. I can stay hard for hours. My wife loves it.",
      name: "Jason",
      age: 41,
      product: "Sildenafil Chews",
      avatar: "/avatars/jason.jpg"
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
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
 
 return (
   <div>
     {/* Testimonials Section */}
     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
     <div className="relative">
       {/* Testimonial Slider */}
       <div className="relative overflow-hidden">
         <div 
           className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
         >
           {testimonials.map((testimonial) => (
             <div key={testimonial.id} className="w-full flex-shrink-0">
               <div className="flex flex-col items-center text-center space-y-6">
                 <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                   <span className="text-white font-bold text-xl">
                     {testimonial.name.charAt(0)}
                   </span>
                 </div>
                 <blockquote className="text-xl max-w-2xl leading-relaxed">
                   <strong>&ldquo;{testimonial.quote.split('"')[1]}</strong>
                   {testimonial.quote.split('"')[2]}
                   <strong>{testimonial.quote.split('"')[3]}&rdquo;</strong>
                 </blockquote>
                 <div className="text-center">
                   <h4 className="font-semibold text-lg">{testimonial.name}, {testimonial.age}</h4>
                   <p className="text-sm opacity-80">{testimonial.product}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* Navigation Buttons */}
       <button
         onClick={prevTestimonial}
         disabled={currentTestimonial === 0}
         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
       >
         <ChevronLeft className="w-6 h-6" />
       </button>
       <button
         onClick={nextTestimonial}
         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
       >
         <ChevronRight className="w-6 h-6" />
       </button>
     </div>

     {/* Slide Indicators */}
     <div className="flex justify-center mt-8 space-x-2">
       {testimonials.map((_, index) => (
         <button
           key={index}
           onClick={() => setCurrentTestimonial(index)}
           className={`w-3 h-3 rounded-full transition-all ${
             index === currentTestimonial 
               ? 'bg-white' 
               : 'bg-white/30 hover:bg-white/50'
           }`}
         />
       ))}
     </div>

     {/* CTA Button */}
     <div className="flex justify-center mt-8">
       <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
         Get results
       </button>
     </div>
     </div>
   </div>
 );
}