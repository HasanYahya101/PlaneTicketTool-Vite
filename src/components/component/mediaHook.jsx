import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        // Set the initial state
        setMatches(mediaQueryList.matches);

        // Listen for changes
        mediaQueryList.addListener(documentChangeHandler);

        return () => {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
