import { useState, useRef, useEffect } from 'react';
import { IoIosMore } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";

import Popper from '@mui/material/Popper';

const Folder = ({ folder, onFolderClick, onFolderSelect, isSelected, toggleDrawer }) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleDoubleClick = () => {
    onFolderClick(folder);
    onFolderSelect(null);
  };

  const handleSelect = () => {
    onFolderSelect(folder);
  };

  const handleFolderOptionClick = () => {
    // Toggle isPopperOpen for the clicked folder
    folder.isPopperOpen = !folder.isPopperOpen;
    setIsPopperOpen(folder.isPopperOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popperElement = document.getElementById(`simple-popper`);
        if (
          divRef.current &&
          !divRef.current.contains(event.target) &&
          (!popperElement || !popperElement.contains(event.target))
        ) {
          // Update the isPopperOpen state of the clicked folder
          folder.isPopperOpen = false;
          setIsPopperOpen(false);
          setIsHovered(false); // Reset hover state
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [divRef, folder, setIsPopperOpen, setIsHovered]);

  const handleDrawerPopper = () => {
    toggleDrawer()
    folder.isPopperOpen = false;
  }

  const handleSaveLocally = () => {
    const content = JSON.stringify(folder);
    const blob = new Blob([content], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${folder.name}.json`;
    link.click();
  };

  return (
    <div
      ref={divRef}
      className={`folder text-sm p-2 rounded-md flex justify-between ${
        isSelected ? 'selected bg-gray-200 flex' : 'flex item-center'
      } ${isHovered ? 'selected bg-gray-100 flex' : 'flex item-center'}`}
      onDoubleClick={handleDoubleClick}
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <span role="img" aria-label="Folder">
          <FaFolderOpen size={20} className="text-yellow-500" />
        </span>{' '}
        <p className="ml-2 text-md">{folder.name}</p>
      </div>
      {isHovered ? (
        <button aria-describedby={`simple-popper`} onClick={handleFolderOptionClick} className="ml-2">
          <IoIosMore />
        </button>
      ) : null}
      <Popper
        id={`simple-popper`}
        open={folder.isPopperOpen}
        anchorEl={divRef.current}
        className="bg-white border rounded-md w-[15%] shadow-lg absolute mt-2"
      >
        <PopperElement handleDrawerPopper={handleDrawerPopper} handleSaveLocally={handleSaveLocally} folderLabel={folder.label} />
      </Popper>
    </div>
        // <Zoom in={10} timeout={200} unmountOnExit>
  );
};

export default Folder;


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

const PopperItem = ({ title, shortcut, toggleDrawer, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center justify-between p-2 hover:bg-gray-200">
      <p className={title === 'Delete' ? "text-xs font-semibold text-red-500" : "text-xs font-semibold"}>{title}</p>
    </div>
  );
};
