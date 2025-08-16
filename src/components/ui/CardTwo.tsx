'use client';
import Image from "next/image";
import ImagePreloader from "./ImagePreloader";

interface CardTwoProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="h-[50vh]">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={100}
      loading="lazy"
      className="object-cover object-top flex w-full bg-gradient-to-t from-gray-900 to-transparent pt-20 -z-20"
    />
    <div className="absolute bg-gradient-to-t from-gray-900 via-transparent to-transparent inset-0"></div>
  </div>
  
  
);

const CardContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="relative z-10 rounded-3xl w-full h-full flex flex-col justify-end">
    <h2 id="card-title" className="font-semibold text-4xl lg:text-2xl">{title}</h2>
    <p className="text-lg pb-8">{description}</p>
  </div>
);

const CardTwo: React.FC<CardTwoProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
}) => {
  const imagesToPreload = [imageSrc];

  return (
    <div className="relative flex flex-col h-auto w-full py-8 justify-start items-center text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-t from-purple-600/70 via-purple-500/60 to-purple-500/50 backdrop-blur-2xl" role="region" aria-labelledby="card-title">
      <ImagePreloader images={imagesToPreload} priority={true} />
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardContent title={title} description={description} />
    </div>
  );
};

export default CardTwo;
