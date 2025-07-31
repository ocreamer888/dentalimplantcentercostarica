import React from "react";
import { FiBarChart2, FiTarget, FiTrendingUp } from "react-icons/fi";
import { IBenefit } from "@/types/types"

export const allonsix: IBenefit[] = [
    {
        title: "All On Six Dental Implants",
        description: "Save money on your dental care with our affordable and transparent pricing while maintaining the highest quality of care.",
        bullets: [
            {
                title: "Zirconia Implants",
                description: "We use the highest quality zirconia implants to ensure the best possible results.",
                icon: React.createElement(FiBarChart2, { size: 28 })
            },
            {
                title: "Transparent",
                description: "We provide clear and transparent pricing for all our services.",
                icon: React.createElement(FiTarget, { size: 28 })
            },
            {
                title: "Convenient",
                description: "We offer flexible payment options to make your dental care more accessible.",
                icon: React.createElement(FiTrendingUp, { size: 28 })
            }
        ],
        imageSrc: "/images/allonsix1.webp"
    }
]