import { useState, useEffect } from 'react';

import Header from '../../components/students/Header';
import StudentList from '../../components/students/StudentList';
import ClassPopulationAttendence from '../../components/students/ClassPopulationAttendence';
import Competition from '../../components/students/Competition';
import Performance from '../../components/students/Performance';
import Fees from '../../components/students/Fees';
import ClassMonitor from '../../components/reusable/ClassMonitor';
import Curriculum from '../../components/reusable/Curriculum';

import CustomDialog from '../../components/reusable/Dialog';
import DoughnutPie from '../../components/reusable/DoughnutPie';
import ViewFeesTrackerModal from '../../components/modals/ViewFeesTrackerModal';

import Clock from '../../components/students/Clock';


import { IoMdNotificationsOutline, IoMdArrowUp, IoMdTime } from 'react-icons/io';
import { PiStudent } from 'react-icons/pi';
import { BsDot } from 'react-icons/bs';
import { BiExport } from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { MdOutlineRefresh } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { AiOutlinePlus, AiOutlineFullscreen } from 'react-icons/ai';

import Popper from '@mui/material/Popper';

import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

import { Link } from 'react-router-dom';


const PendingFeesData = {
  title: "Pending Fees",
  grade: "10th Grade",
  data: [
    {
      studentId: 102,
      studentName: "John Doe",
      percentageComplete: 30
    },
    {
      studentId: 122,
      studentName: "Musu Bropleh",
      percentageComplete: 60
    },
    {
      studentId: 124,
      studentName: "Mary Sumo",
      percentageComplete: 60
    },
  ]
}

const RecievedFeesData = {
  title: "Received Fees",
  grade: "10th Grade",
  data: [
    {
      studentId: 99,
      studentName: "Vivian Samuke",
      percentageComplete: 100
    },
    {
      studentId: 109,
      studentName: "Jane Togbleh",
      percentageComplete: 100
    },
    {
      studentId: 123,
      studentName: "Cece Winan",
      percentageComplete: 100
    },
  ]
}

const schedule = [
  { time: '8:30 AM - 9:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '9:15 AM - 9:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '9:30 AM - 10:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '10:15 AM - 10:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '10:30 AM - 11:15 AM', monday: 'RECESS', tuesday: 'RECESS', wednesday: 'RECESS', thursday: 'RECESS', friday: 'RECESS' },
  { time: '11:15 AM - 11:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '11:30 AM - 12:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '12:30 AM - 1:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '1:30 AM - 2:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '2:15 AM - 2:45 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '2:45 AM - 3:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
  { time: '3:15 AM - 4:00 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
];

const timeTrackerData = [
    { id: 'Time Spent', value: 2, color: '#33A6FF' },
    { id: 'Time Remaining', value: 5, color: '#FF6F33' }, // Adjusted the color to the orange from the theme
];

export default function ClassDashboard() {

  // const navigate = useNavigate();

  // const goToStudentList = () => {
  //   navigate('/students/students_list')
  // }

  // const goToStudentProfile = () => {
  //   navigate('/students/students_list/1')
  // }

  const [isOpen, setIsOpen] = useState(false);

  const onRequestClose = () => {
    setIsOpen(false);
  }

  const handleOpenPopper = () => {
    setIsOpen(!isOpen);
  }

  const displayPendingFees = (event) => {
    setFeesData(PendingFeesData);
    handleOpenPopper(event)
  }

  const displayReceivedFees = (event) => {
    setFeesData(RecievedFeesData);
    handleOpenPopper(event)
  }

  const [FeesData, setFeesData] = useState(PendingFeesData);

  return (
    <div className="flex justify-between w-full h-full">
      <div className="scrollable grow overflow-auto p-5">
        <Header />
        <>
          <div className="flex items-start mt-5">
            <StudentList />
            <ClassPopulationAttendence />
          </div>

          <div className="overflow-x-auto">
            <div className="flex items-center justify-between mt-5 rounded-md">
              <Competition />
              <Performance />
              <Fees displayPendingFees={displayPendingFees} displayReceivedFees={displayReceivedFees} />
            </div>
          </div>

          <div className="flex items-center bg-white mt-3 rounded-md h-[450px] overflow-hidden">
            <ClassSchedule />
            <div className="w-[50%] h-[450px] bg-white flex flex-col justify-between border-l">
              <TeachersList />
              <SchoolTimeTracker />
            </div>
          </div>

          <Zoom in={10} timeout={1000} unmountOnExit>
            <Fab title="Add Students" color="primary" size="medium" sx={{ position: 'absolute', right: '25%', bottom: '60px'}}>
              <AiOutlinePlus />
            </Fab>
          </Zoom>
        </>
      </div>

      <div className="w-2/6 bg-white rounded-md overflow-auto shadow-md p-2 m-2">
        <ClassMonitor />
        <Curriculum />
      </div>
      <CustomDialog isOpen={isOpen} onRequestClose={onRequestClose}>
        <ViewFeesTrackerModal FeesData={FeesData} onRequestClose={onRequestClose} />
      </CustomDialog>
    </div>
  )
}

const ClassSchedule = () => {
  return(
    <div className="grow rounded-md p-2 bg-white mt-3 h-full overflow-auto">
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold ml-2">Class Schedule</p>
        <div className="flex items-center">
            <div className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-200 ml-2">
              <p className="text-sm">View Full</p>
              <AiOutlineFullscreen className="ml-1" />
            </div>
          </div>
      </div>
      <table>
        <thead className="text-sm sticky top-0">
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((classInfo, index) => (
            <tr key={index}>
              <td className="text-xs">{classInfo.time}</td>
              <td className="text-xs">{classInfo.monday}</td>
              <td className="text-xs">{classInfo.tuesday}</td>
              <td className="text-xs">{classInfo.wednesday}</td>
              <td className="text-xs">{classInfo.thursday}</td>
              <td className="text-xs">{classInfo.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TeachersList = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const periods = [
    { name: "Mr Jerome Boakai - English", startTime: "8:30", endTime: "9:15" },
    { name: "Madam Elizabeth Krubo - Biology", startTime: "9:15", endTime: "10:00" },
    { name: "Mr John Momo - Chemistry", startTime: "10:00", endTime: "10:45" },
    { name: "Mr John Momo - Physics", startTime: "10:45", endTime: "11:30" },
    { name: "RECESS BREAK", startTime: "11:30", endTime: "11:45" },
    { name: "Mr Peter Drury - RME", startTime: "11:45", endTime: "12:30" },
    { name: "Zubah Wallie - PE", startTime: "12:30", endTime: "1:15" }
  ];

  const isActiveClassTime = (startTime, endTime) => {
    const startTimeInMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
    const endTimeInMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes;
  };

  return (
    <div className="p-3">
      <p className="text-sm font-medium">Active Class Tracker</p>
      <ul className="mt-4">
        {periods.map((period, index) => (
          <li
            key={index}
            className={`p-1 border-b text-xs cursor-pointer transform transition-opacity hover:scale-105 ${
              isActiveClassTime(period.startTime, period.endTime)
                ? 'opacity-100 border-l-4 border-green-400 bg-green-200'
                : 'opacity-50 hover:opacity-100 bg-white'
            } ${period.name === "RECESS BREAK" && 'font-medium'}`}
          >
            {period.name}
          </li>
        ))}
      </ul>
    </div>
  );
};





const SchoolTimeTracker = () => {
  return(
    <div className="bg-green-50d0 p-3 h-[230px]">
      <p className="text-sm font-medium">School TIme Tracker</p>
      <div className="mt-3">
      <Clock />
      </div>
    </div>
  );
}