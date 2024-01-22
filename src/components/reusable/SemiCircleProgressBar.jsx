import React, { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

const GenderPopulationProgressBar = ({
  malePercentage = 50,
  femalePercentage = 50,
  strokeWidth = 6,
  colorMale = '#3498db',
  colorFemale = '#e74c3c',
  trailColor = '#eee',
  trailWidth = 1,
  duration = 1400,
  fontFamily = '"Raleway", Helvetica, sans-serif',
  fontSize = '1.3rem',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const bar = new ProgressBar.SemiCircle(containerRef.current, {
      strokeWidth,
      color: colorMale, // Default color for male
      trailColor,
      trailWidth,
      easing: 'easeInOut',
      duration,
      svgStyle: null,
      text: {
        value: '',
        alignToBottom: false,
      },
      from: { color: colorMale },
      to: { color: colorFemale },
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        const value = Math.round(bar.value() * 100);
        if (value === 0) {
          bar.setText('');
        } else {
          bar.setText(value);
        }

        bar.text.style.color = state.color;
      },
    });

    bar.text.style.fontFamily = fontFamily;
    bar.text.style.fontSize = fontSize;

    // Animate separately for male and female percentages
    bar.animate(malePercentage / 100, {
      duration: duration * (malePercentage / (malePercentage + femalePercentage)),
    });

    // Cleanup when the component unmounts
    return () => {
      bar.destroy();
    };
  }, [malePercentage, femalePercentage, strokeWidth, colorMale, colorFemale, trailColor, trailWidth, duration, fontFamily, fontSize]);

  return <div ref={containerRef}></div>;
};

export default GenderPopulationProgressBar;
