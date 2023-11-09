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
    }, 200) as unknown as number;
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
          clearInterval(intervalRef.current);
          setStartTime(null);
          setNow(null);
        }}
        className={`ml-2`}
      >
        Clear
      </Button>
      <hr className={`mb-2 mt-2`} />
      <Form />
      <hr className={`mb-2 mt-2`} />
      <CatFriends />
    </>
  );
}

export function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input
        ref={inputRef}
        className={`mr-2 border-2`}
      />
      <Button onClick={handleClick}>Focus the input</Button>
    </>
  );
}

export function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <Button onClick={handleScrollToFirstCat}>Tom</Button>
        <Button onClick={handleScrollToSecondCat}>Maru</Button>
        <Button onClick={handleScrollToThirdCat}>Jellylorum</Button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src='https://placekitten.com/g/200/200'
              alt='Tom'
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src='https://placekitten.com/g/300/200'
              alt='Maru'
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src='https://placekitten.com/g/250/200'
              alt='Jellylorum'
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
