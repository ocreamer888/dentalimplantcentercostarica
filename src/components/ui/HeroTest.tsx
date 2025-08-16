'use client';
import React from 'react';
import Image from "next/image";
import ImagePreloader from "./ImagePreloader";
import Header from '../Layout/Header/Header';

interface HeroTestProps {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
}


const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex flex-col w-4/5 md:w-1/2 h-screen items-center justify-end md:pb-4">
    <div className='flex flex-col items-end justify-end w-full md:w-4/5'>
    <Image
      src={src}
      alt={alt}
      height={800}
      width={800}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      quality={100}
      loading="lazy"
      className="object-cover object-top flex w-full md:w-[80vw] md:h-[90vh] h-full md:bg-gradient-to-t from-yellow-600 via-yellow-400/20 to-yellow-200/0 md:pt-12 md:rounded-full -z-20"
    />
    </div>
  </div>
);

const CardContent: React.FC<{ title: React.ReactNode; description: string; linkHref: string }> = ({ title, description, linkHref }) => (
  <div className="absolute md:relative z-10 rounded-3xl w-full md:w-1/2 h-auto flex flex-col text-balance justify-center items-center md:items-start px-8 md:pl-16">
    <h2 id="card-title" className="text-center md:text-start font-semibold max-w-xl text-4xl lg:text-6xl">{title}</h2>
    <p className="flex text-lg text-start">{description}</p>
    <a href={linkHref} className="bg-purple-100 hover:bg-blue-700 text-purple-900 font-bold px-8 py-4 rounded-full">Learn More</a>
  </div>
);

class HeroTest extends React.Component<HeroTestProps> {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description",
    imageSrc: "/default-image.webp",
    imageAlt: "Default Image",
  };

  render() {
const { title, description, imageSrc, imageAlt, linkHref } = this.props;
const imagesToPreload = [imageSrc];

return (
  <div className='relative flex flex-col h-screen w-full bg-gradient-to-tl from-purple-400/70 via-purple-300/60 to-purple-100/50'>
    <Header/>
    <div className="relative flex flex-col md:flex-row h-screen w-full justify-end md:justify-center md:py-8 items-center text-white rounded-b-3xl flex-1 overflow-hidden backdrop-blur" role="region" aria-labelledby="card-title">
      <ImagePreloader images={imagesToPreload} priority={true} />
      <CardContent title={title} description={description} linkHref={linkHref} />
      <CardImage src={imageSrc} alt={imageAlt} />
    </div>
  </div>
);
  }
}
export default HeroTest;
