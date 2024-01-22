import React, { useState, useEffect } from 'react';

const CircularLoader = ({classType}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 10) % 360);
    }, 100); // Adjust the interval based on your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classType == "buttonLoader" ? "buttonLoader" : "loader"} style={{ transform: `rotate(${rotation}deg)` }}></div>
  );
};

export default CircularLoader;
