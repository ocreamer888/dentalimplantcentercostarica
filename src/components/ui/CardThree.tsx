'use client';
import Image from "next/image";
import { useId } from "react";

interface CardThreeProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkHref?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  buttonText?: string;
  cardButton?: string;
  className?: string;
  imageSize?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

const CardImage: React.FC<{ 
  src: string; 
  alt: string;
  imageSize?: CardThreeProps['imageSize'];
}> = ({ src, alt, imageSize }) => {
  // Default responsive sizes
  const defaultSizes = "w-4/5 h-4/5 md:w-3/5 md:h-3/5 lg:w-4/5 lg:h-4/5";
  
  // Build custom sizes if provided
  const customSizes = imageSize
    ? [
        imageSize.mobile || "w-4/5 h-4/5",
        imageSize.tablet ? imageSize.tablet.replace(/\b(w-|h-)/g, 'md:$1') : "md:w-3/5 md:h-3/5",
        imageSize.desktop ? imageSize.desktop.replace(/\b(w-|h-)/g, 'lg:$1') : "lg:w-2/5 lg:h-2/5",
      ].join(' ')
    : defaultSizes;
  
  return (
    <div className="relative flex flex-col w-full z-10 h-full items-center justify-end">
      <div className="flex flex-col items-center justify-end w-full h-full pt-8">
        <Image
          src={src}
          alt={alt}
          height={600}
          width={600}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={100}
          priority
          fetchPriority="high"
          className={`object-contain object-bottom ${customSizes}`}
        />
      </div>
    </div>
  );
};

const CardContent: React.FC<{ 
  title: string; 
  description: string; 
  titleId: string;
}> = ({ title, description, titleId }) => (
  <div className="
    absolute bottom-0 left-0 right-0
    z-10 rounded-3xl
    w-full h-full
    flex flex-col justify-end
    p-8
  ">
    <h2 
      id={titleId} 
      className="font-semibold text-4xl lg:text-5xl"
    >
      {title}
    </h2>
    <p className="text-lg">{description}</p>
  </div>
);

const CardThree: React.FC<CardThreeProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
  className = '',
  imageSize,
}) => {
  const titleId = useId();

  return (
    <div
      className={`
        relative flex flex-col
        h-auto w-full min-h-[400px] max-w-4/5
        justify-end items-end
        text-white rounded-3xl flex-1
        overflow-hidden
        bg-gradient-to-t from-purple-900 via-purple-300/90 to-purple-300/80
        backdrop-blur-2xl
        ${className}
      `}
      role="region"
      aria-labelledby={titleId}
    >
      <CardImage src={imageSrc} alt={imageAlt} imageSize={imageSize} />
      
      {/* Gradient Overlay */}
      <div className="
        absolute bottom-0 left-0 right-0
        h-1/2
        bg-gradient-to-t from-purple-900 via-purple-500/20 to-transparent
        z-10
      " />
      
      <CardContent title={title} description={description} titleId={titleId} />
    </div>
  );
};

export default CardThree;