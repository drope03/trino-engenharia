'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsPlaying(true); 
  }, []);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactPlayer
        url="/videos/hero-section.mp4"
        className="min-w-full h-full rounded-lg"
        playing={isPlaying}
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className={`absolute inset-0 m-auto p-4 bg-black bg-opacity-50 rounded-full text-white transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-80'
          }`}
          style={{ width: '80px', height: '80px' }}
        >
          ▶
        </button>
      )}
    </div>
  );
}
