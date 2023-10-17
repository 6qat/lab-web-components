"use client"

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";

function Counter() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    return (
        <>
            <Button onClick={handleClick}> Click Me</Button>
            <p>Count is: {count}</p>
        </>
    );
}

export default Counter;
