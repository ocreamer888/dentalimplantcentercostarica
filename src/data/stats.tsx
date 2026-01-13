import { BarChart3, Star, Globe } from "lucide-react";

import { IStats } from "@/types/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BarChart3 size={34} className="text-blue-500 fill-current" />,
        description: "Transactions processed securely every day, providing real-time insights."
    },
    {
        title: "5.0",
        icon: <Star size={34} className="text-yellow-500 fill-current" />,
        description: "Star rating, consistently maintained across app stores."
    },
    {
        title: "200+ ",
        icon: <Globe size={34} className="text-green-600" />,
        description: "Financial Institutions, seamlessly integrated, so you can manage all accounts."
    }
];