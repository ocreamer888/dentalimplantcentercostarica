"use client"
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import BenefitBullet from "@/components/Home/BenefitsComponents/BenefitBullet";
import SectionTitle from "@/components/SectionTitle";
import { AllOn } from "@/types/types";

interface Props {
    benefit: AllOn;
    imageAtRight?: boolean;
}

const FourSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, subtitle, description, imageSrc, bullets } = benefit;
    const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="benefit-section justify-center items-center">
            <div
                ref={setNode}
                className={`flex flex-wrap bg-gradient-to-tl from-purple-900/80 via-purple-800/80 to-purple-900/80 backdrop-blur shadow-md w-[96vw] flex-col items-center justify-center md:justify-between rounded-3xl p-8 my-4 px-4 lg:py-20 md:px-20 lg:flex-row lg:flex-nowrap transition-all duration-1000 ease-out ${
                    entry?.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "lg:order-2": imageAtRight, "lg:order-1": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left">
                        <div className="flex flex-col w-full">
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent">
                                {description}
                            </p>
                        </div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet 
                                    key={index} 
                                    title={item.title} 
                                    icon={item.icon} 
                                    description={item.description} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-1": imageAtRight, "lg:order-2": !imageAtRight })}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={500}
                        height={300}
                        className="rounded-3xl object-cover"
                        priority={false}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default FourSection;