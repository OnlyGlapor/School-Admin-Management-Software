import React, { useState } from 'react';
import { BiSolidLayout } from 'react-icons/bi';
import { PiStudent, PiStudentFill } from 'react-icons/pi';
import { BsCalendar2Event, BsCalendar2EventFill } from 'react-icons/bs';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { AiFillFile, AiOutlineFileDone } from 'react-icons/ai';
import { MdOutlineLogout, MdOutlineAttachMoney, MdAttachMoney } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { HiOutlineCog, HiCog } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const regularItems = [
    { name: 'Dashboard', link: 'dashboard/', activeIcon: <BiSolidLayout size={22} />, inactiveIcon: <BiSolidLayout size={22} className="text-gray-500" /> },
    { name: 'Students', link: 'students/', activeIcon: <PiStudentFill size={20} />, inactiveIcon: <PiStudent size={20} className="text-gray-500" /> },
    { name: 'Events', link: 'events/', activeIcon: <BsCalendar2EventFill size={20} />, inactiveIcon: <BsCalendar2Event size={20} className="text-gray-500" /> },
    { name: 'Teachers', link: 'teachers/', activeIcon: <GiTeacher size={20} />, inactiveIcon: <LiaChalkboardTeacherSolid size={22} className="text-gray-500" /> },
    { name: 'Finance', link: 'finance/', activeIcon: <MdOutlineAttachMoney size={23} />, inactiveIcon: <MdAttachMoney size={22} className="text-gray-500" /> },
    { name: 'File Manager', link: 'file_manager/', activeIcon: <AiFillFile size={23} />, inactiveIcon: <AiOutlineFileDone size={23} className="text-gray-500" /> },
  ];

  const bottomItems = [
    { name: 'Settings', link: 'settings/', activeIcon: <HiCog size={23} />, inactiveIcon: <HiOutlineCog size={23} className="text-gray-500" /> },
    { name: 'Logout', link: '#', activeIcon: <MdOutlineLogout size={23} color="red" title="Logout" />, inactiveIcon: <MdOutlineLogout size={23} className="text-red-500" /> },
  ];

  return (
    <div className="w-12 bg-white text-black flex flex-col items-center justify-between">
      <div>
        {regularItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            link={item.link}
            activeIcon={item.activeIcon}
            inactiveIcon={item.inactiveIcon}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
      <div>
        {bottomItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            link={item.link}
            activeIcon={item.activeIcon}
            inactiveIcon={item.inactiveIcon}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ name, link, activeIcon, inactiveIcon, activeTab, handleTabClick }) => {
  return (
    <NavLink 
    to={link} 
    title={name} 
    onClick={() => handleTabClick(name)}
    >
      <div className="rounded flex items-center justify-center p-1 mx-2 my-3 hover:bg-blue-100 transition-all transition-delay-500 transition-duration-500">
        {activeTab === name ? activeIcon : inactiveIcon}
      </div>
    </NavLink>
  );
};

export default Menu;
