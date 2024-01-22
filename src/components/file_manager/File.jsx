import { useState, useRef, useEffect } from 'react';
import { IoIosMore } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";

import Popper from '@mui/material/Popper';

const File = ({ file, onFileSelect, isSelected, toggleDrawer }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleDoubleClick = () => {
    onFileClick(file);
    onFileSelect(null);
  };

  const handleSelect = () => {
    onFileSelect(file);
  };

  const handleFileOptionClick = () => {
    // Toggle isPopperOpen for the clicked file
    file.isPopperOpen = !file.isPopperOpen;
    setIsPopperOpen(file.isPopperOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popperElement = document.getElementById(`simple-popper`);
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        (!popperElement || !popperElement.contains(event.target))
      ) {
        // Update the isPopperOpen state of the clicked file
        file.isPopperOpen = false;
        setIsPopperOpen(false);
        setIsHovered(false); // Reset hover state
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef, file, setIsPopperOpen, setIsHovered]);

 const handleDrawerPopper = () => {
    toggleDrawer()
    file.isPopperOpen = false;
  }

  const handleSaveLocally = () => {
    const content = JSON.stringify(file);
    const blob = new Blob([content], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${file.name}.json`;
    link.click();
  };

  return (
    <div
      ref={divRef}
      className={`file text-sm p-2 rounded-md flex justify-between 
      ${isSelected ? 'selected bg-gray-200 flex' : 'flex item-center'
      } ${isHovered ? 'selected bg-gray-100 flex' : 'flex item-center'}`}
      onDoubleClick={handleDoubleClick}
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <span role="img" aria-label="file">
          <SiMicrosoftexcel size={20} className="text-yellow-500" />
        </span>{' '}
        <p className="ml-2 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">{file.name}</p>
      </div>
      {isHovered ? (
        <button aria-describedby={`simple-popper`} onClick={handleFileOptionClick} className="ml-2">
          <IoIosMore />
        </button>
      ) : null}
      <Popper
        id={`simple-popper`}
        open={file.isPopperOpen}
        anchorEl={divRef.current}
        className="bg-white border rounded-md w-[15%] shadow-lg absolute mt-2"
      >
        <PopperElement handleDrawerPopper={handleDrawerPopper} handleSaveLocally={handleSaveLocally} folderLabel={file.label} />
      </Popper>
    </div>
  );
};

export default File;


const PopperElement = ({handleDrawerPopper, handleSaveLocally, folderLabel}) => {
  const shouldDisplayDelete = folderLabel === 'custom';
  return (
    <div className="mt-4">
      {/* Your Popper content */}
      <PopperItem title="Get Info" onClick={handleDrawerPopper}/>
      <PopperItem title="Save (local)" onClick={handleSaveLocally} />
      {shouldDisplayDelete && <PopperItem title="Delete" />}
      <PopperItem title="Protect" />
    </div>
  );
};

const PopperItem = ({ title, shortcut, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center justify-between p-2 hover:bg-gray-200">
      <p className={title === 'Delete' ? "text-xs font-semibold text-red-500" : "text-xs font-semibold"}>{title}</p>
    </div>
  );
};
