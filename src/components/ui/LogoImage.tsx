'use client';
import Image from "next/image";

interface LogoImageProps {
  imageSrc: string;
  imageAlt: string;
}

const LogoImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative h-full w-full flex justify-center items-center">
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={1000}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={100}
      loading="lazy"
      className="object-cover object-top"
    />
    <div className="absolute inset-0"></div>
  </div>
);

const LogoImageComponent: React.FC<LogoImageProps> = ({
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
}) => {
  return (
    <div className="relative flex flex-col w-full justify-center items-center text-white flex-1 overflow-hidden" role="region" aria-labelledby="card-title">
      <LogoImage src={imageSrc} alt={imageAlt} />
    </div>
  );
}

export default LogoImageComponent;
