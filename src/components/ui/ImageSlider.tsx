import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  swiperImage?: string; // Optional, with default
  className?: string; // Optional styling
}

const ImageSlider = ({ 
  beforeImage, 
  afterImage, 
  swiperImage = "/images/icons/icon-star.svg",
  className = ""
}: ImageSliderProps) => {
  const CompareSlider = ({
    beforeImage,
    afterImage,
    swiperImage,
  }: {
    beforeImage: string;
    afterImage: string;
    swiperImage: string;
  }) => {
    const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position at 50%
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
      // No-op or remove this effect entirely if nothing is needed here
    }, []);

    useEffect(() => {
      // Detect if the device is touch capable
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }, []);

    const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      // Prevent scrolling on touch devices
      if (event.type === "touchstart") event.preventDefault();
    };

    const handleDragMove = (event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
      let clientX;
      let nativeEvent: MouseEvent | TouchEvent;
      if ("nativeEvent" in event) {
        nativeEvent = event.nativeEvent;
      } else {
        nativeEvent = event;
      }
      if ("touches" in nativeEvent) {
        clientX = nativeEvent.touches[0].clientX;
      } else {
        clientX = nativeEvent.clientX;
      }
      if (!sliderRef.current) return;
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX = clientX - sliderRect.left;
      const width = sliderRect.width;
      const newSliderPosition = (offsetX / width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    };

    const handleDragEnd = () => setIsDragging(false);

    useEffect(() => {
      if (!isDragging) return;
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchend", handleDragEnd);
      return () => {
        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("touchmove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchend", handleDragEnd);
      };
    }, [isDragging]);

    const handleHoverMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice || isDragging) return; // Only for desktop and not dragging
      if (!sliderRef.current) return;
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX = event.clientX - sliderRect.left;
      const width = sliderRect.width;
      const newSliderPosition = (offsetX / width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    };

    return (
      <div
        className={`relative w-full aspect-[4/3] sm:aspect-[16/9] cursor-col-resize select-none ${className}`}
        ref={sliderRef}
        onMouseMove={handleHoverMove}
        // No onTouchMove here, handled by drag
      >
        {/* Before Image - Full size */}
        <Image
          src={beforeImage}
          alt="Before Image"
          fill
          className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* After Image - Full size but clipped */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-3xl pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt="After Image"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 h-full bg-black bg-opacity-50 pointer-events-none"
          style={{ left: `${sliderPosition}%`, width: "2px" }}
        />

        {/* Swiper Image */}
        <Image
          src={swiperImage}
          alt="Drag handle"
          width={32}
          height={32}
          className="absolute cursor-pointer z-10"
          style={{
            left: `${sliderPosition}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            touchAction: "none",
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          draggable={false}
        />
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <CompareSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
        swiperImage={swiperImage}
      />
    </div>
  );
};

export default ImageSlider;