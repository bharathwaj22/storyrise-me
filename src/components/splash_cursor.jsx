

import React, { useState, useEffect } from 'react';

const SplashEffect = () => {
  const [splashes, setSplashes] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const splash = { x: e.clientX, y: e.clientY, id: Date.now() };
      setSplashes((prev) => [...prev, splash]);

      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== splash.id));
      }, 1000); // Matches the animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="splash"
          style={{ left: splash.x, top: splash.y }}
        />
      ))}
    </>
  );
};

export default SplashEffect;


