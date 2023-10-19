'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

// Primitives vs non-primitives values
const Price = () => {
    // console.log('Rendering component.');

    const [price, setPrice] = useState({
        number: 100,
        totalPrice: true
    });

    useEffect(() => {
        // console.log('Component mounted.');
        return () => {
            // console.log('Component unmounted.');
        };
    }, [price.number]); // BEWARE NOT to depend on non-primitives values !!!!!


    function handleClick() {
        setPrice({
            number: 100,
            totalPrice: true
        });
    }

    return (
        <>
            <Button onClick={handleClick}>Click me</Button>
            <p>Price: {price.number}</p>
        </>
    );
};

export default Price;
