// DashboardCalendar.js
import React, { useState } from 'react';
import styles from '../finance/styles.module.css'


import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowUp } from 'react-icons/io';
import { BiExport } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineFullscreen } from 'react-icons/ai';
import { BsChevronDown, BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';

import DoughnutPie from '../../components/reusable/DoughnutPie';
import SemiCircleProgressBar from '../../components/reusable/SemiCircleProgressBar';
import CustomBarChart from '../../components/reusable/BarChart';

import { useNavigate } from 'react-router-dom';

import Popper from '@mui/material/Popper';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Header from '../../components/teachers/Header';
import TeachersList from '../../components/teachers/TeachersList';
import Exams from '../../components/teachers/Exams';
import ClassMonitor from '../../components/reusable/ClassMonitor';
import Curriculum from '../../components/reusable/Curriculum';

export default function Teachers (){
  return (
    <div className="flex justify-between w-full h-full">
      <div className="grow p-2 overflow-auto scrollable">
        <Header />
        <div className="flex justify-around rounded-md mt-5">
          <TeachersList />
          <Exams />
        </div>
      </div>
      <div className="w-1/4 bg-white rounded-md overflow-auto shadow-md">
        <ClassMonitor />
        <Curriculum />
      </div>
    </div>
  );
};