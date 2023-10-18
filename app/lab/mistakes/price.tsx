'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Price = () => {
    const [price, setPrice] = useState(0);

    function handleClick() {
        setPrice(0);
    }

    return <Button onClick={handleClick}>Click me</Button>;
};

export default Price;