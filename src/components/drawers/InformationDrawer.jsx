import React, { useRef, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';

import { FaFolderOpen } from "react-icons/fa6";
import { SiMicrosoftexcel } from 'react-icons/si';
import { IoIosArrowRoundBack } from "react-icons/io";

const InformationDrawer = ({ infoBoxRef, openDrawer, setOpenDrawer, toggleDrawer, selectedFolder, selectedFile }) => {
  // const infoBoxRef = useRef();

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
      setOpenDrawer(false);
    }
  };

  if (
    (!selectedFolder || Object.keys(selectedFolder).length === 0) &&
    (!selectedFile || Object.keys(selectedFile).length === 0)
  ) {
    setOpenDrawer(false);
  }

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [infoBoxRef, toggleDrawer, selectedFolder, selectedFile]);


  const { name, type, size, date_modified, description } = selectedFolder || selectedFile || {};

  const renderIcon = () => {
    if(selectedFolder){
      return <FaFolderOpen size={30} />
    }

    return <SiMicrosoftexcel size={30} />
  }

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer}
      className="bg-black bg-opacity-5 backdrop-filter"
    >
      <div ref={infoBoxRef} className="w-72 p-5 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-semibold">{name}</p>
          <div onClick={toggleDrawer} className="hover:bg-gray-100 rounded-full p-1 cursor-pointer">
            <IoIosArrowRoundBack size={30} />
          </div>
        </div>
        <div className="bg-gray-100 rounded-full p-2 mt-5">
        {renderIcon()}
        </div>
        <div className="mt-3">
          <InfoItem title="Size" result={size} />
          <InfoItem title="Type" result={type} />
          <InfoItem title="Date modified" result={date_modified} />
          <InfoItem title="File location" result="Documents" />
          <InfoItem title="Description" result={description} />
        </div>
      </div>
    </Drawer>
  );
};

export default InformationDrawer;

const InfoItem = ({ title, result }) => {
  return (
    <div className="flex items-center justify-between mt-3">
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm rounded-md w-2/4">{result}</p>
    </div>
  );
};
