"use client";

import React from "react";

export default function CircularGradientExample() {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Circular (Radial) Gradient Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Example 1: Simple Circular Gradient with Inline CSS */}
        <div className="p-4 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">1. Simple Circular Gradient (Inline CSS)</h2>
          <div
            className="w-full h-64 rounded-lg flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, #ff80b5, #9089fc)',
            }}
          >
            <span className="text-black font-bold text-lg p-2 bg-white/50 rounded">
              CSS: radial-gradient(circle, color1, color2)
            </span>
          </div>
        </div>

        {/* Example 2: Using Tailwind CSS */}
        <div className="p-4 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">2. Using Tailwind CSS</h2>
          <div
            className="w-full h-64 rounded-lg flex items-center justify-center bg-gradient-radial from-purple-500 to-blue-500"
          >
             <span className="text-white font-bold text-lg p-2 bg-black/50 rounded">
              Tailwind: bg-gradient-radial from-color to-color
            </span>
          </div>
        </div>

        {/* Example 3: Multi-color "bullseye" gradient */}
        <div className="p-4 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">3. Multi-Color Bullseye</h2>
          <div
            className="w-full h-64 rounded-lg flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, red 10%, yellow 20%, green 50%)',
            }}
          >
            <span className="text-black font-bold text-lg p-2 bg-white/50 rounded">
              With color stops
            </span>
          </div>
        </div>

        {/* Example 4: Text with a gradient background */}
        <div className="p-4 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">4. Gradient Text</h2>
          <div className="w-full h-64 rounded-lg flex items-center justify-center bg-gray-700">
            <h3 className="text-6xl font-extrabold bg-gradient-radial from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Hello World
            </h3>
          </div>
        </div>
        
        {/* Example 5: Animated Gradient Background */}
        <div className="p-4 rounded-lg bg-gray-800 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">5. Animated Gradient</h2>
          <div
            className="w-full h-80 rounded-lg relative overflow-hidden"
          >
            <style jsx>{`
              .animated-gradient {
                background: radial-gradient(circle at center, #8a2be2, #4b0082, #0000ff);
                background-size: 200% 200%;
                animation: gradient-animation 8s ease infinite;
              }

              @keyframes gradient-animation {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
            <div className="animated-gradient w-full h-full flex items-center justify-center">
                <span className="text-white font-bold text-lg p-2 bg-black/50 rounded">
                    Animated Background
                </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}