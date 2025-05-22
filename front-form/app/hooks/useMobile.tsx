import { useEffect, useState } from "react"

export const useMobile = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleChangeIsMobileScreen = () => setIsMobileScreen(mediaQuery.matches);

        handleChangeIsMobileScreen();
        mediaQuery.addEventListener('change', handleChangeIsMobileScreen)

        return () => {
            mediaQuery.removeEventListener('change', handleChangeIsMobileScreen)
        }
    }, [])

    return isMobileScreen;
}