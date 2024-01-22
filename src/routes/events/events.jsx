import React, { useState } from 'react';
import EventCalendar from '../../components/reusable/EventCalendar';
import MiniCalendar from '../../components/events/MiniCalendar';
import UpcomingEvents from '../../components/events/UpcomingEvents';

import 'react-calendar/dist/Calendar.css';
import './styles.css';

import { IoMdRefresh } from "react-icons/io";



import { AiFillPlusCircle } from 'react-icons/ai';
import { FaRegCalendarPlus } from 'react-icons/fa';

import Zoom from '@mui/material/Zoom';


const DashboardCalendar = () => {
  return (
    <div className="scrollable p-5 w-full h-auto">
      <p className="text-md font-semibold mt-5">Event Calendar</p>
      <div className="flex justify-between mt-5 w-full h-[95%]">
        <MiniCalendar />
          <div className="grow p-2">
            <EventCalendar />
          </div>
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default DashboardCalendar;