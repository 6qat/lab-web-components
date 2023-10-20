'use client';
import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(1920);

    useEffect(() => {
        function handleWindowSizeChange() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return windowSize;
}

const MyComponent1 = () => {
    const windowSize = useWindowSize();

    return <div>Component 1</div>;
};

const MyComponent2 = () => {
    const windowSize = useWindowSize();

    return <div>Component 2</div>;
};

export { MyComponent1, MyComponent2 };
