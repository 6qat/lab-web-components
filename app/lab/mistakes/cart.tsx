'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const PRICE_PER_ITEM = 5;

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const totalPrice = PRICE_PER_ITEM * quantity;

    const handleClick = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div>
            <Button onClick={handleClick}>Add 1 item</Button>
            <p>Quantity: {quantity}</p>
            <p>Total: {totalPrice}</p>
        </div>
    );
};

export default Cart;