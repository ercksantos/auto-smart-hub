import { MessageCircle, Car, TrendingUp, Zap, Star, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
    { Icon: MessageCircle, position: "top-20 left-10", delay: "0s", color: "text-cyan-400" },
    { Icon: Car, position: "top-40 right-20", delay: "0.5s", color: "text-emerald-400" },
    { Icon: TrendingUp, position: "bottom-32 left-20", delay: "1s", color: "text-violet-400" },
    { Icon: Zap, position: "bottom-20 right-32", delay: "1.5s", color: "text-orange-400" },
    { Icon: Star, position: "top-1/2 left-1/4", delay: "2s", color: "text-yellow-400" },
    { Icon: CheckCircle, position: "top-1/3 right-1/3", delay: "2.5s", color: "text-pink-400" },
];

export const FloatingIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {floatingIcons.map((item, index) => (
                <div
                    key={index}
                    className={`absolute ${item.position} ${isVisible ? "animate-float" : "opacity-0"
                        }`}
                    style={{
                        animationDelay: item.delay,
                        animationDuration: "8s"
                    }}
                >
                    <item.Icon className={`w-12 h-12 ${item.color}`} />
                </div>
            ))}
        </div>
    );
};
