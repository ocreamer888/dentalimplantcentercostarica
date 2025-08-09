import React from "react";
import { Shield, Clock, DollarSign, Users, Award, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/SectionTitle";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "US-Trained Dentists",
      description: "Our dentists are US-trained and certified, ensuring the highest standards of care and expertise in dental implant procedures.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Quick Recovery",
      description: "Advanced techniques and technology allow for faster healing times and minimal discomfort during your dental implant journey.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Save 70% on Costs",
      description: "Get the same quality dental implants at a fraction of US prices, with transparent pricing and no hidden fees.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Every patient receives individualized treatment plans and dedicated support throughout their entire dental implant process.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We use only the highest quality titanium implants and premium materials that meet international standards.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "Your comfort, safety, and satisfaction are our top priorities. We treat every patient like family.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="pt-24 bg-gradient-to-t from-transparent via-black/40 to-transparent">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>
            <h2>Why Choose Dental Implant Center Costa Rica</h2>
          </SectionTitle>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Experience world-class dental implant treatment with significant cost savings and exceptional care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Additional Benefits</h3>
            <p className="text-xl opacity-90">Everything you need for a comfortable and successful treatment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🏥</span>
              </div>
              <h4 className="font-semibold mb-2">Modern Facilities</h4>
              <p className="text-sm opacity-80">State-of-the-art dental clinics with the latest technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🌴</span>
              </div>
              <h4 className="font-semibold mb-2">Beautiful Location</h4>
              <p className="text-sm opacity-80">Recover in paradise with stunning beaches and nature</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✈️</span>
              </div>
              <h4 className="font-semibold mb-2">Travel Support</h4>
              <p className="text-sm opacity-80">We handle all travel arrangements and accommodations</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">📞</span>
              </div>
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm opacity-80">Round-the-clock assistance throughout your treatment</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
