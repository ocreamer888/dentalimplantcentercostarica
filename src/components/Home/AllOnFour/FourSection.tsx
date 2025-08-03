"use client"
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "@/components/Home/BenefitsComponents/BenefitBullet";
import SectionTitle from "@/components/SectionTitle";
import { AllOn } from "@/types/types";

interface Props {
    benefit: AllOn;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const FourSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, subtitle, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section justify-center items-center">
            <motion.div
                className="flex flex-wrap bg-gradient-to-tl from-purple-900/80 via-purple-800/80 to-purple-900/80 backdrop-blur shadow-md w-[96vw] flex-col items-center justify-center md:justify-between rounded-3xl p-8 my-4 px-4 lg:py-32 md:px-32 lg:flex-row lg:flex-nowrap"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "lg:order-2": imageAtRight, "lg:order-1": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left ">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants as Variants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>
                            <h4 className="font-semibold lg:text-5xl"> 
                                        {subtitle}
                                    </h4>

                            <p className="mt-4 mx-auto lg:ml-0 leading-normal text-lg">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight, "lg:order-1": !imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-end": imageAtRight, "justify-start": !imageAtRight })}>
                        <Image src={imageSrc} alt="title" width="384" height="762" quality={100} className="lg:mr-16" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default FourSection