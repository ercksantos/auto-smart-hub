import { useEffect, useState } from "react";

interface UseImagePreloaderOptions {
    onAllLoaded?: () => void;
}

export const useImagePreloader = (
    imagePaths: string[],
    options: UseImagePreloaderOptions = {}
) => {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const [isAllLoaded, setIsAllLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        if (imagePaths.length === 0) {
            setIsAllLoaded(true);
            return;
        }

        const imageCache = new Map<string, HTMLImageElement>();
        let loadedCount = 0;

        const preloadImage = (src: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                // Check if image is already cached
                if (imageCache.has(src)) {
                    resolve();
                    return;
                }

                const img = new Image();

                img.onload = () => {
                    imageCache.set(src, img);
                    loadedCount++;
                    setLoadedImages((prev) => new Set([...prev, src]));
                    setLoadingProgress((loadedCount / imagePaths.length) * 100);
                    resolve();
                };

                img.onerror = () => {
                    console.warn(`Failed to preload image: ${src}`);
                    loadedCount++;
                    setLoadingProgress((loadedCount / imagePaths.length) * 100);
                    reject(new Error(`Failed to load image: ${src}`));
                };

                img.src = src;
            });
        };

        // Preload all images
        Promise.allSettled(imagePaths.map(preloadImage))
            .then(() => {
                setIsAllLoaded(true);
                options.onAllLoaded?.();
            })
            .catch((error) => {
                console.error("Error preloading images:", error);
                setIsAllLoaded(true); // Set to true even on error to prevent blocking
            });

        // Cleanup
        return () => {
            imageCache.clear();
        };
    }, [imagePaths, options.onAllLoaded]);

    return {
        loadedImages,
        isAllLoaded,
        loadingProgress,
        isImageLoaded: (src: string) => loadedImages.has(src),
    };
};
