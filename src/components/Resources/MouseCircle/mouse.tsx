"use client"
import { useState, useEffect } from 'react';

const MouseCircle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="z-0 opacity-20 fixed top-auto left-auto pointer-events-none">
      <svg width="100vw" height="100vh" className="absolute z-0">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: 'rgb(106 115 145)', stopOpacity: '1' }} />
            <stop offset="100%" style={{ stopColor: 'rgb(106 115 145)', stopOpacity: '0' }} />
          </radialGradient>
        </defs>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={2000} fill="url(#grad)" />
      </svg>
    </div>
  );
};

export default MouseCircle;