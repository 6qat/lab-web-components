'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

// https://react.dev/learn/referencing-values-with-refs
export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number>(0);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10) as unknown as number;
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <Button
        onClick={handleStart}
        className={`ml-2`}
      >
        Start
      </Button>
      <Button
        onClick={handleStop}
        className={`ml-2`}
      >
        Stop
      </Button>
      <Button
        onClick={() => {
          setStartTime(null);
          setNow(null);
        }}
        className={`ml-2`}
      >
        Clear
      </Button>
    </>
  );
}
