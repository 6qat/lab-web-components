'use client';
import React, { useEffect, useState } from 'react';

const CounterExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
    return () => {
      //clearInterval(interval);
    };
  }, []);

  return <div>Count is: {count}</div>;
};

export default CounterExample;
