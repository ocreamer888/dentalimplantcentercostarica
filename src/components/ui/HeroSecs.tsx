'use client';
import React from 'react';
import Image from "next/image";
import Header from '../Layout/Header/Header';

interface HeroSecsProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkHref?: string;
  backgroundImage?: string;
  id?: string;
  backgroundColor?: string;
  cardButton?: string;
  backDropBlur?: string;
  className?: string;
}

const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex flex-col w-full md:pb-4 md:px-8 h-auto items-center justify-end ">
    <div className='flex flex-col items-end justify-end w-full'>
    <Image
      src={src}
      alt={alt}
      height={200}
      width={200}
      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
      quality={100}
      loading="lazy"
      className="object-cover object-top flex w-full md:w-[80vw] md:h-[90vh] h-full md:bg-gradient-to-t from-yellow-600 via-yellow-400/20 to-yellow-200/0 md:pt-12 md:rounded-full"
    />
    </div>
  </div>
);

const CardContent: React.FC<{ title: React.ReactNode; description: string; buttonText: string; linkHref: string }> = ({ title, description, buttonText, linkHref }) => (
  <div className="absolute md:relative z-10 rounded-3xl w-full h-auto flex flex-col text-balance justify-start items-center md:items-start pt-40 md:pt-0 md:pb-0 gap-4 md:pl-16 lg:pl-24">
    <h2 id="card-title" className="text-center md:text-start text-balance font-semibold text-4xl lg:text-7xl">{title}</h2>
    <p className="text-xl text-center md:text-start">{description}</p>
    <a href={linkHref} className="hidden md:block relative bg-purple-100 cursor-pointer hover:bg-purple-200 text-purple-900 font-bold px-8 py-4 rounded-full">{buttonText}</a>
  </div>
);

const CardButton: React.FC<{ buttonText: string; linkHref: string }> = ({ buttonText, linkHref }) => (
  <div className="absolute md:relative z-10 rounded-3xl w-full h-auto flex flex-col text-balance justify-end items-center md:items-start px-8 pb-8">
    <a href={linkHref} className="md:hidden bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold px-28 py-2 rounded-full">{buttonText}</a>
  </div>
);

class HeroSecs extends React.Component<HeroSecsProps> {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description",
    imageSrc: "/default-image.webp",
    imageAlt: "Default Image",
    linkHref: "#",
    backgroundColor: "#f8f8f8",
    CardButton: "true",
    
  };

  render() {
    const { title, description, imageSrc, imageAlt, linkHref, backgroundImage, backgroundColor, backDropBlur, buttonText, cardButton, className } = this.props;

return (
  <div className='relative flex flex-col h-screen w-full rounded-b-3xl z-50'>
        {backgroundImage && (
     <Image 
            src={backgroundImage}
            alt="Background image"
                 fill
                 priority
                 fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            className="relative object-top object-cover rounded-b-3xl backdrop-blur"
             />
        )}
        <Header />
    <div className={`relative flex flex-col md:flex-row h-screen w-full justify-end items-center text-white rounded-b-3xl flex-1 overflow-hidden ${className} ${backDropBlur} ${backgroundColor}`} role="region" aria-labelledby="card-title">      
      <div className='relative flex flex-col flex-1 w-full h-screen justify-around md:justify-center items-center'>
      {title && description && linkHref && buttonText && <CardContent title={title} description={description} buttonText={buttonText} linkHref={linkHref} />}
      </div>
      <div className='flex flex-col w-full md:flex-1 md:pt-20 justify-end items-center'>
      {imageSrc && imageAlt && <CardImage src={imageSrc} alt={imageAlt} />}
      </div>
    </div>
    <div className="absolute md:hidden flex flex-col md:flex-row h-screen w-full justify-end items-center">
      {cardButton && linkHref && buttonText && <CardButton buttonText={buttonText} linkHref={linkHref} />}
    
    </div>
  </div>
);
  }
}

export default HeroSecs;

