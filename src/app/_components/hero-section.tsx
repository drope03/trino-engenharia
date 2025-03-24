'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

export default function HeroSection() {
  // Se quiser iniciar automaticamente, defina true
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactPlayer
        url="/videos/hero-section.mp4"
        className="w-full h-full"
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
