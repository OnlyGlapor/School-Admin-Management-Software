import React, { useState } from 'react';

import '../dashboard/styles.css';

import Header from '../../components/dashboard/Header';
import AllExamComparasonByGender from '../../components/dashboard/AllExamComparasonByGender';
import StaffStudentPopulation from '../../components/dashboard/StaffStudentPopulation';
import StarStudent from '../../components/dashboard/StarStudent';
import News from '../../components/reusable/News';
import Weather from '../../components/reusable/Weather';

import AttendanceChart from '../../components/dashboard/AttendanceChart';


import { IoMdTime } from 'react-icons/io';
import { FaChalkboardTeacher, FaLongArrowAltRight, FaRegMoneyBillAlt } from 'react-icons/fa';
import { TfiMoreAlt } from "react-icons/tfi";
import { IoDocumentsOutline } from "react-icons/io5";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {
  return (
    <div className="flex justify-between w-full h-full">
      <div className="scrollable w-[80%] overflow-auto p-5">
        <Header />
        <div className="flex items-start mt-3">
          <AllExamComparasonByGender />
          <StaffStudentPopulation />
        </div>

        <div className="bg-white rounded-md p-2 mt-3 relative">
          <div className="flex items-center justify-between p-3">
            <p className="text-sm font-medium">Attendence</p>
            <div className="cursor-pointer">
                <TfiMoreAlt />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <AttendanceChart />
            </div>
            <div className="w-[40%] p-2 rounded-l-full">
              <div className="absolute top-10">
                <p className="text-sm font-medium">Overall Attendance Percentage</p>
              </div>

              <div className="flex items-center justify-around">
                <AttendanceOverallPercentage />
                <div className="text-xs font-medium">
                  <p className="mt-2">10% - 60 (Low)</p>
                  <p className="mt-2">60% - 80% (Good)</p>
                  <p className="mt-2">80% - 100% (Very Good)</p>
                </div>
              </div>
              <div className="absolute bottom-5">
                <p className="text-xs">Note: this attendance metrics is measure in respect to students and staff or faculty members!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-3 rounded-md">
          <StarStudent />
          <div className="p-2 rounded-md bg-white ml-2">
            <div className="flex items-center justify-between p-2" style={{ background: '#FFFFFF' }}>
              <p className="text-sm font-semibold">Quick Activities</p>
              <div className="cursor-pointer">
                <TfiMoreAlt />
              </div>
            </div>
            <QuickActivityItem icon={<FaChalkboardTeacher size={18} />} title="New Teacher Added" description="Name: Kelvin Nimely, DOB: 12/12/2001" />
            <QuickActivityItem icon={<FaRegMoneyBillAlt />} title="Payment Reminder" description="You'll soon need to satisfy the payroll of this month - Jan 15" />
            <QuickActivityItem icon={<IoDocumentsOutline size={18} />} title="Test Questions Submission" description="Teachers need to start submitting their test questions" />
          </div>
        </div>

        

      </div>
      <div className="sidebar-scrollable w-[26%] bg-white rounded-md overflow-auto m-2">
        <EventCalendar />
        <News />
        <Weather />
      </div>
    </div>
  )
}

const EventCalendar = ({selectedDate, handleDateChange}) => {
  return(
    <div>
      <div className="flex items-center justify-between p-2">
        <p className="text-sm font-medium">Event Calendar</p>
        <TfiMoreAlt />
      </div>

      <div className="grid grid-cols-2 gap-1 px-2">
        <div className="bg-gray-100 p-3 rounded-md">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <p className="text-xs font-medium ml-2">14 Feb, 2024</p>
          </div>
          <p className="text-xs font-semibold mt-2">Valentines Day</p>
          <FaLongArrowAltRight />
        </div>

        <div className="bg-gray-100 p-3 rounded-md ml-2 px-2">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <p className="text-xs font-medium ml-2">14 Feb, 2024</p>
          </div>
          <p className="text-xs font-semibold mt-2">Valentines Day</p>
          <FaLongArrowAltRight />
        </div>
      </div>

      <div className="bg-gray-100 h-[250px] m-2 rounded-md">
      {/*Custom Calendar*/}
      </div>
    </div>
  );
}



const QuickActivityItem = ({icon, title, description}) => {
  return (
    <div className="flex hover:bg-gray-200 mt-2 p-2 rounded-md cursor-pointer">
      <div className="flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div className="ml-2">
        <p className="text-sm font-semibold" style={{ color: '#333' }}>{title}</p>
        <p className="text-xs" style={{ color: '#666' }}>{description}</p>
      </div>
    </div>
  )
}

const AttendanceOverallPercentage = () => {
  return(
    <div className="w-[150px] h-[150px] rounded-full border-[20px] border-blue-400 text-2xl flex items-center justify-center">
    89%
    </div>
  );
}