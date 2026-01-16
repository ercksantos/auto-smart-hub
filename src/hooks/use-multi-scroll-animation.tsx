import { useEffect, useRef, useState } from "react";

export const useMultiScrollAnimation = (count: number, options = {}) => {
    const { threshold = 0.1, stagger = 100 } = options;
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const elementRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.getAttribute("data-index") || "0");
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleItems((prev) => new Set([...prev, index]));
                        }, index * stagger);
                    }
                });
            },
            { threshold }
        );

        elementRefs.current.forEach((el) => {
            if (el && observerRef.current) {
                observerRef.current.observe(el);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [count, threshold, stagger]);

    const setRef = (index: number) => (el: HTMLElement | null) => {
        elementRefs.current[index] = el;
    };

    return { visibleItems, setRef };
};
