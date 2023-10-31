import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
    const [size, setSize] = useState({
        mobile: false,
        tablet: false,
        desktop: false,
    });
    useLayoutEffect(() => {
        function updateSize() {
            setSize({
                mobile: window.matchMedia('(max-width: 480px)').matches,
                tablet: window.matchMedia('(min-width: 481px) and (max-width: 1024px)').matches,
                desktop: window.matchMedia('(min-width: 1025px)').matches,
            });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default useWindowSize;