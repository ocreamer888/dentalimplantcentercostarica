'use client';
import Image from "next/image";

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
}

const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative flex flex-col items-center justify-bottom w-full lg:h-[50vh]">
    <Image
      src={src}
      alt={alt}
      height={600}
      width={600}
      sizes="600px"
      quality={100}
      loading="lazy"
      className="object-cover flex flex-col items-center justify-bottom"
    />
  </div>
  
  
);

const CardContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="relative  rounded-3xl w-full h-full flex flex-col justify-end">
    <h2 id="card-title" className="font-semibold text-4xl lg:text-5xl">{title}</h2>
    <p className="text-lg">{description}</p>
  </div>
);

const CardThree: React.FC<CardThreeProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
}) => {

  return (
    <div className="relative flex flex-col h-auto w-full  px-8 justify-center items-center text-white p-4 rounded-3xl flex-1 overflow-hidden bg-gradient-to-t from-purple-900 via-purple-300/90 to-purple-300/80 backdrop-blur-2xl" role="region" aria-labelledby="card-title">
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardContent title={title} description={description} />
    </div>
  );
};

export default CardThree;
