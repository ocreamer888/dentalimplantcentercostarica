'use client';
import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
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
    <section className="py-24 bg-gradient-to-tl from-purple-100/50 via-purple-500/50 to-purple-900/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Container>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of patients who have already saved money and regained their confidence with our dental implant treatments
          </p>

          {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="text-white/80 mb-6">Speak with our dental experts about your treatment options</p>
              <Button
                variant="secondary"
                size="md"
                className="w-full group"
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule Treatment</h3>
              <p className="text-white/80 mb-6">Book your dental implant procedure at your convenience</p>
              <Button
                variant="secondary"
                size="md"
                className="w-full group"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Quote</h3>
              <p className="text-white/80 mb-6">Receive a personalized quote for your treatment plan</p>
              <Button
                variant="secondary"
                size="md"
                className="w-full group"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>*/}

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">70%</div>
              <div className="text-white/80">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
            <p className="text-white mb-6">
              Book your consultation this month and receive a complimentary virtual consultation and treatment planning session.
            </p>
            <Button
            onClick={scrollToForm}
              variant="primary"
              size="lg"
              className="bg-purple-900 border-2 border-purple-200 text-gray-800"
            >
              Claim Your Free Estimate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
