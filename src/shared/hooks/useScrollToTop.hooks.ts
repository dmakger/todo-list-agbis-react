import { useEffect } from "react";

export const useScrollToTop = (isNeeded: boolean) => {
    useEffect(() => {
        if (isNeeded) {
            window.scrollTo(0, 0);
        }
    }, [isNeeded]);
};