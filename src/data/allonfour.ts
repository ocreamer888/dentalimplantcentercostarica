import React from "react";
import { BarChart2, Target, TrendingUp } from "lucide-react";
import { AllOn } from "@/types/types"

export const allonfour: AllOn[] = [
    {
        title: "All-On-4 Zirconia",
        subtitle: "$19,950 All-Inclusive" ,
        description: "Zirconia Upper and Lower, IV Sedation Hotel Extractions – Bone Grafts and Medications. Save money on your dental care with our affordable and transparent pricing while maintaining the highest quality of care.",
        bullets: [
            {
                title: "Zirconia Upper and Lower Implants",
                description: "We use the highest quality zirconia implants to ensure the best possible results.",
                icon: React.createElement(BarChart2, { size: 28 })
            },
            {
                title: "Transparent",
                description: "We provide clear and transparent pricing for all our services.",
                icon: React.createElement(Target, { size: 28 })
            },
            {
                title: "Convenient",
                description: "We offer flexible payment options to make your dental care more accessible.",
                icon: React.createElement(TrendingUp, { size: 28 })
            }
        ],
        imageSrc: "/images/dentalimages/dentalimplant5.webp"
    }
]