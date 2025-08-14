'use client';
import React from "react";
import { Check, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  treatment: string;
  duration: string;
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Single Implant",
      price: "$1,500",
      originalPrice: "$4,500",
      description: "Perfect for replacing a single missing tooth",
      treatment: "Single Dental Implant",
      duration: "2-3 days",
      features: [
        "Titanium implant",
        "Porcelain crown",
        "Consultation & planning",
        "Surgery & placement",
        "Follow-up care",
        "Lifetime warranty"
      ]
    },
    {
      name: "All-on-4 Implants",
      price: "$19,950",
      originalPrice: "$50,000",
      description: "Full arch restoration with 4 implants",
      treatment: "All-on-4 Full Arch",
      duration: "5-7 days",
      popular: true,
      features: [
        "4 titanium implants",
        "Full arch prosthesis",
        "Pre-surgery consultation",
        "Surgery & placement",
        "Temporary prosthesis",
        "Final zirconia prosthesis",
        "Follow-up care",
        "Lifetime warranty"
      ]
    },
    {
      name: "All-on-6 Implants",
      price: "$22,950",
      originalPrice: "$60,000",
      description: "Maximum stability with 6 implants",
      treatment: "All-on-6 Full Arch",
      duration: "7-10 days",
      features: [
        "6 titanium implants",
        "Full arch prosthesis",
        "Pre-surgery consultation",
        "Surgery & placement",
        "Temporary prosthesis",
        "Final prosthesis",
        "Follow-up care",
        "Lifetime warranty"
      ]
    }
  ];
  const scrollToForm = () => {
    const formElement = document.getElementById('estimate-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-t from-black/0 via-black/40 to-black/0">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>
            <h2>Transparent Pricing</h2>
          </SectionTitle>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Save up to 70% compared to US prices. All-inclusive packages with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-t from-black/transparent via-black/40 to-black/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{plan.name}</h3>
                  <p className="text-gray-100 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-500">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-red-400 line-through ml-2">{plan.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-100">
                    <p>{plan.treatment}</p>
                    <p>Duration: {plan.duration}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                onClick={scrollToForm}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What&apos;s Included in All Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Airport transfers</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Hotel accommodations</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Medical insurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Sedation/anesthesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Follow-up care</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Lifetime warranty</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}