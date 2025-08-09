"use client";
import Image from "next/image";



export default function Bento2() {
  // Removed unused current state and useEffect since they're not being used

  return (
    <section className="relative flex flex-col lg:flex-row h-full w-full p-4 rounded-3xl flex-1 overflow-hidden gap-4 my-8 h-full w-full justify-center items-center backdrop-blur-2xl">
                    <Image 
                        src="/MedDeFi-bgBig2.webp" 
                        alt="Dental image reference #1" 
                        fill
                        className="relative object-top object-cover rounded-3xl"
                    />
      <div className="flex flex-1 gap-4 h-full w-full justify-center items-center flex-col">
      <div className=" flex flex-col md:flex-row flex-1 bg-gray-800/20 backdrop-blur md:pl-8 pr-4 rounded-3xl items-center md:items-end justify-center gap-4 z-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center md:pb-8 gap-4">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
           Healthcare &<br />
            <span className="text-white">Blockchain</span>
          </h1>
          <p className="text-lg text-center md:text-start text-pretty text-gray-200 max-w-md">
            MedDeFi delivers world-class healthcare treatments at a fraction of the cost. Get elite care, advanced tech & the results you deserve.
          </p>
          <div className="flex gap-4">
            <button className="px-32 md:px-16 py-4 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition">
              Get started
            </button>
          </div>
        </div>
        {/* Right: Hero Image - Full height */}
          {/* Right: Hero Image - Full height */}
          <div className="flex-1 relative h-1/2 w-1/2 lg:h-full pt-4 flex items-end justify-end">
            <Image
              src="/nurse2.webp"
              alt="Hero"
              height={400}
              width={400}
              className="rounded-3xl object-cover"
            />
          </div>
      </div>

      {/* Features */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 z-20">
        <div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent backdrop-blur-lg rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <Image src="/public/file.svg" alt="icon" width={40} height={40} />
          <h3 className="font-semibold text-white text-lg mt-4 mb-2">Instant, Secure Payments</h3>
          <p className="text-gray-100 text-sm">
            Pay for treatments in seconds, with blockchain-backed security and transparency.
          </p>
        </div>
        <div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent backdrop-blur-lg rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <Image src="/public/globe.svg" alt="icon" width={40} height={40} />
          <h3 className="font-semibold text-white text-lg mt-4 mb-2">Verified Global Providers</h3>
          <p className="text-gray-100 text-sm">
            Access a network of top-rated, verified healthcare professionals worldwide.
          </p>
        </div>
        <div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent backdrop-blur-lg rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <Image src="/public/window.svg" alt="icon" width={40} height={40} />
          <h3 className="font-semibold text-white text-lg mt-4 mb-2">Transparent Reviews</h3>
          <p className="text-gray-100 text-sm">
            Read real patient reviews and ratings before you book.
          </p>
        </div>
      </div>
      </div>
      
      <div className="flex-1 w-full h-full bg-gradient-to-t from-black/50 via-black/10 to-transparent backdrop-blur rounded-3xl flex flex-col items-start pl-8 gap-4 z-20">
        {/* Left: Text */}
        <div className="flex flex-col justify-center items-center w-full">
        <div className="flex-1 items-center justify-center relative">
          <Image
            src="/MedDeFi Logo 2.png"
            alt="Hero"
            height={200}
            width={200}
            className="rounded-3xl object-cover"
          />
        </div>
        </div>
        <div className="flex-1 flex flex-col items-start py-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
           Healthcare &<br />
            <span className="text-white">Blockchain</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            MedDeFi delivers world-class healthcare treatments at a fraction of the cost. Get elite care, advanced tech & the results you deserve.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition">
              Get started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-gray-500 transition">
              Is this right for me?
            </button>
          </div>
        
      </div>
      </div>
    </section>
  );
} 