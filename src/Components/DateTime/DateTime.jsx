import React, { useState, useEffect } from 'react';
import "./DateTime.css"

const DateTime = () => {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const updateTime = () => {
    const cd = new Date();
    setTime(`${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`);
    setDate(`${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`);
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    
    updateTime(); 
    
    return () => clearInterval(timerID); 
  }, []);

  const zeroPadding = (num, digit) => num.toString().padStart(digit, '0');

  return (
    <div id="clock">
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default DateTime;
