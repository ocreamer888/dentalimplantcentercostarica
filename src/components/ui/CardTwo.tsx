'use client';
import Image from "next/image";

interface CardTwoProps {
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

// CardImage: not absolute; image controls height
const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="bottom-0 z-0 flex-1 justify-end">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}        // use the real intrinsic ratio if you can
      quality={100}
      sizes="400px"
      className="block w-full h-auto bottom-0 justify-end flex-1"  // image fits container width; height auto
      loading="lazy"
    />
  </div>
);

// CardContent: overlay only the lower area; higher z-index
const CardContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="absolute w-full inset-x-0 bottom-0 z-10 p-6">
    <h2 id="card-title" className="font-semibold text-4xl lg:text-5xl">{title}</h2>
    <p className="text-lg">{description}</p>
  </div>
);

const CardTwo: React.FC<CardTwoProps> = ({
  title = "Default Title",
  description = "Default Description",
  imageSrc = "/default-image.webp",
  imageAlt = "Default Image",
}) => {

  return (
    <div className="relative rounded-3xl overflow-hidden justify-end" role="region" aria-labelledby="card-title">
      <CardImage src={imageSrc} alt={imageAlt} />
      <CardContent title={title} description={description} />
    </div>
  );
};

export default CardTwo;
