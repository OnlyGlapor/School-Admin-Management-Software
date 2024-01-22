import React, { useState, useEffect } from 'react';

import { BiSearch, BiCheck } from 'react-icons/bi';
import { IoMdNotificationsOutline, IoMdNotifications, IoMdMail, IoIosCheckmarkCircle } from 'react-icons/io';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import {HiOutlineMail } from 'react-icons/hi';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { AiOutlineMessage, AiOutlinePlus, AiFillMessage, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { AiOutlineWarning } from 'react-icons/ai'

import { usePopper } from 'react-popper';
import { useNavigate } from 'react-router-dom';


import MessagesPopper from '../../components/header/MessagesPopper';
import NotificationsPopper from '../../components/header/NotificationsPopper';
import ProfilePopper from '../../components/header/ProfilePopper';



export default function Header({toggleModal, toggleLogout, handleCreateStudentModal, handleCreateTeacherModal}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className="flex bg-white justify-between p-2">
      <div className="flex items-center">
        <RiLogoutCircleRFill size={30} />
        <p className="ml-5 text-base font-semibold">SchoolAdmin</p>
          <div 
          className="flex items-center bg-white border rounded-full ml-10 p-1"
          onClick={toggleModal}>
            <div className="text-gray-500 p-0.5">
              <BiSearch size={17} className="flex" />
            </div>
            <input className="ml-1.5 bg-transparent border-none focus:outline-none text-sm"
              placeholder="Search students information..."
            />
          </div>
      </div>

      <div className="flex items-center">
        {/*<div className="p-2 bg-gray-200 rounded-full mr-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <AiOutlinePlus />
        </div>*/}
        {/*<AddContentPopper handleCreateStudentModal={handleCreateStudentModal} handleCreateTeacherModal={handleCreateTeacherModal} />*/}

        <div className="w-[2px] h-full bg-gray-200" />
        <NotificationsPopper />
        <MessagesPopper />
        <div
        title="toggle dark mode"
        onClick={toggleDarkMode} 
        className={isDarkMode ? "w-7 h-7 flex items-center justify-center bg-black text-white rounded-full transition duration-300 ease-in-out cursor-pointer" : "w-7 h-7 flex items-center justify-center bg-orange-300 rounded-full transition duration-300 ease-in-out cursor-pointer"}>
          {isDarkMode ? <BsMoonStars size={19} /> : <BsSun size={20} />}
        </div>

        <div className="flex items-center ml-10">
          <img className="w-8 h-8 rounded-full bg-gray-600 -ml-3 cursor-pointer"
          src="https://randomuser.me/api/portraits/men/55.jpg" />
          <img className="w-8 h-8 rounded-full bg-gray-600 -ml-3 cursor-pointer"
          src="https://randomuser.me/api/portraits/men/74.jpg" />
          <img className="w-8 h-8 rounded-full bg-gray-600 -ml-3 cursor-pointer"
          src="https://randomuser.me/api/portraits/women/42.jpg" />
          {/*<div className="ml-1.5 cursor-pointer">
            <img className="w-9 h-9 rounded-full bg-gray-600 border-2 border-blue-500"
            src="https://randomuser.me/api/portraits/women/56.jpg" />
          </div>*/}
          <ProfilePopper toggleLogout={toggleLogout} />
        </div>
      </div>
    </div>
  )
}
