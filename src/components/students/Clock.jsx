import React, { useState, useEffect } from 'react';
import schoolBell from '../../sounds/school-bell.mp3';

const Clock = () => {
  const startOfClassTime = new Date();
  startOfClassTime.setHours(8, 30, 0); // Set start of classes to 8:30 AM

  const endOfClassTime = new Date(startOfClassTime);
  endOfClassTime.setHours(18, 54, 0); // Set end of classes to 1:15 PM

  const [currentTime, setCurrentTime] = useState(new Date());
  const [schoolClosed, setSchoolClosed] = useState(false);

  let audio;

  useEffect(() => {

    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [])

  useEffect(() => {
    const now = new Date();

    // Check time inside interval 
    if (now >= endOfClassTime ) {
      setSchoolClosed(true);

      audio = new Audio(schoolBell);
      audio.play();

      setTimeout(() => {
        audio.pause();
      }, 4000);
    }

  }, []);

  // Calculate remaining time
  const timeDifference = endOfClassTime - currentTime;
  const remainingHours = Math.floor(timeDifference / (60 * 60 * 1000));
  const remainingMinutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));

  // Format the time for display
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time:</h2>
      <p className="text-2xl font-medium">{formattedTime}</p>
      {schoolClosed ? (
        <p className="text-sm font-medium mt-3">School is closed for the day</p>
      ) : (
        <p className="text-sm font-medium mt-3">{`About ${remainingHours} hours and ${remainingMinutes} minutes remaining for the school day to end`}</p>
      )}
    </div>
  );
};

export default Clock;