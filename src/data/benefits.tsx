import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";
import { IBenefit } from "@/types/types"

export const benefits: IBenefit[] = [
    {
        title: "New Smile On Budget",
        description: "Save money on your dental care with our affordable and transparent pricing while maintaining the highest quality of care.",
        bullets: [
            {
                title: "Affordable",
                description: "We offer a range of affordable dental care options to suit your budget.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Transparent",
                description: "We provide clear and transparent pricing for all our services.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Convenient",
                description: "We offer flexible payment options to make your dental care more accessible.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "No Hidden Fees",
        description: "We don't charge hidden fees or surprise charges. You'll always know exactly what you're paying for.",
        bullets: [
            {
                title: "Zirconia Implants",
                description: "We use the highest quality zirconia implants to ensure the best possible results.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "All-On-4 Implants",
                description: "We use the highest quality all-on-4 implants to ensure the best possible results.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "All-On-6 Implants",
                description: "We use the highest quality all-on-6 implants to ensure the best possible results.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]