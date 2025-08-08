"use client";
import ImageSlider from "./ImageSlider";



interface BentoProps {
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function Bento({ 
  className = "" 
}: BentoProps) {
  


  return (
    <section 
      className={`w-full bg-gradient-to-t from-black/transparent via-black/40 to-black/60  ${className}`}
    >
      <div className="w-full mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          <div className="flex flex-col justify-center space-y-6 bg-white/10 p-4 rounded-3xl">
            <div className="">
              <span className="block pb-8 text-8xl text-white font-bold">Before & After</span>
              <ImageSlider 
                beforeImage="/images/dentalimages/dentalimplant1.webp"
                afterImage="/images/dentalimages/dentalsmile.webp"
              />
            </div>

            <div className="">
              <ImageSlider 
                beforeImage="/images/dentalimages/dentalimplant1.webp"
                afterImage="/images/dentalimages/dentalsmile.webp"
              />
            </div>

            {/* CTA Buttons */}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Feature Card 1 */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4">
              <div className="flex flex-col justify-between h-full">
               
                <div className="pb-4">
              <ImageSlider 
                beforeImage="/images/dentalimages/dentalimplant1.webp"
                afterImage="/images/dentalimages/dentalsmile.webp"
              />
            </div>
                <div className="">
              <ImageSlider 
                beforeImage="/images/dentalimages/dentalimplant1.webp"
                afterImage="/images/dentalimages/dentalsmile.webp"
              />
            </div>
                
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="mt-4">
                  <button className="w-full py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors">
                    Get started
                  </button>
                </div>
          </div>
        </div>
       

        <div className="flex flex-col justify-center items-center p-12 py-40">
                <h3 className="text-6xl text-balance text-pretty font-semibold pb-8">
                Specializing in All-On <span className="font-thin">Dental Implants & Full Mouth Restorations</span>
                </h3>
                </div>
      </div>
      
    </section>
  );
}
