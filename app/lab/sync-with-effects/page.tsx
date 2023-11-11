'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
};

// https://react.dev/learn/synchronizing-with-effects
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <VideoPlayer
        isPlaying={isPlaying}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      />
    </>
  );
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  });

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
    />
  );
}
