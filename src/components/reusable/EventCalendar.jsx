// EventCalendar.js
import React, { useState } from 'react';
import { startOfMonth, endOfMonth, format, addMonths, subMonths, addDays, getDate, isToday } from 'date-fns';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import Zoom from '@mui/material/Zoom';

const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderDays = () => {
  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const daysInMonth = [];

  // Calculate the starting day of the week for the current month
  const startDayOfWeek = format(start, 'iii');

  // Days of the week
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Adjust the order of weekDays based on the starting day of the week
  const reorderedWeekDays = [...weekDays.slice(weekDays.indexOf(startDayOfWeek)), ...weekDays.slice(0, weekDays.indexOf(startDayOfWeek))];

  // Render day names
  const dayNames = reorderedWeekDays.map(day => (
    <div key={day} className="text-sm bg-white rounded-md p-2">
      {day}
    </div>
  ));


  for (let day = start; day <= end; day = addDays(day, 1)) {
    const isCurrentDay = isToday(day);

    daysInMonth.push(
      <div key={day} className="flex items-start justify-between border rounded-md p-2 h-16 cursor-pointer hover:bg-blue-100">
        <Zoom in={day} timeout={500} unmountOnExit>
          <div className={isCurrentDay ? "bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center pt-0.5":""}>
            <p className={isCurrentDay ? "text-md font-semibold text-white" : "text-md font-semibold"}>{getDate(day)}</p>
          </div>
        </Zoom>
      </div>
    );
  }

  return [...dayNames, ...daysInMonth];
};


  return (
    <div className="event-calendar mx-4">
      <div className="calendar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div>
          <p className="text-md font-medium">{format(currentMonth, 'MMMM yyyy')}</p>
        </div>
        <div style={{ display: 'flex', padding: '0px 20px '}}>
          <button style={{ display: 'flex', border: 'none', borderRadius: 10, padding: '5px', fontSize: '14px', backgroundColor: '#fff', cursor: 'pointer', border: '1px solid #ddd', }} onClick={() => setCurrentMonth(prevMonth => subMonths(prevMonth, 1))}>
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button style={{ marginLeft: 10, display: 'flex', border: 'none', borderRadius: 10, padding: '5px', fontSize: '14px', backgroundColor: '#fff', cursor: 'pointer', border: '1px solid #ddd', }} onClick={() => setCurrentMonth(prevMonth => addMonths(prevMonth, 1))}>
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
      <div className="calendar-body shadow-md rounded-sm" style={{ backgroundColor: '#fff', padding: 10, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' }}>
        {renderDays()}
      </div>
    </div>
  );
};

export default EventCalendar;
