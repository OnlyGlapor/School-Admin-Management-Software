import React, { useState, useRef, useEffect } from 'react';
import { IoIosSearch, IoIosGrid } from 'react-icons/io';
import { TiSortAlphabetically } from 'react-icons/ti';
import { HiUpload, HiDownload } from 'react-icons/hi';
import { IoMdMore, IoMdTrash } from 'react-icons/io';

import Popper from '@mui/material/Popper';
import Slide from '@mui/material/Slide';

import Breadcrumbs from '../../components/file_manager/Breadcrumbs';


const Header = ({ tab, breadcrumbs, handleBreadcrumbClick, handleOpenPopper, anchorEl, id, open, arrangement, handleArrangement }) => {
  const divRef = useRef();
  const exceptionRef = useRef();

  const createNewFolder = () => {
  	// Create a fuction to add new folder
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
    handleOpenPopper();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        exceptionRef.current &&
        !exceptionRef.current.contains(event.target)
      ) {
        // Clicked outside the popper and the exception, close it
        handleOpenPopper(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleOpenPopper]);

  const handleHeaderPopper = (event) => {
    if(isSearchOpen){
      setIsSearchOpen(false);
      handleOpenPopper(event)
    }else{
      handleOpenPopper(event)
    }
  }

  const handleHeaderArrangement = (newArrangement) => {
    handleArrangement(newArrangement);
    setIsSearchOpen(false);
    handleOpenPopper();
  }

  return (
    <div className="flex items-center justify-between" ref={divRef}>
      {tab === 'Recent' ? "Recent" : <Breadcrumbs breadcrumbs={breadcrumbs} onBreadcrumbClick={handleBreadcrumbClick} />}
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-gray-100 rounded-full transition-all duration-300 ease-in-out">
          <div
          onClick={handleSearchIconClick}
          title="Search files" 
          className={`transition-all duration-300 ease-in-out w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer ${!isSearchOpen ? 'bg-white' : 'bg-white border -translate-x-1/4'}`}>
            <IoIosSearch size={20} />
          </div>
          {isSearchOpen && (
            <div className="rounded-sm overflow-hidden w-52 ml-1">
              {/* Your input field goes here */}
              <input autoFocus className="text-sm bg-gray-100 w-[95%] outline-none" type="text" placeholder="Search..." />
            </div>
          )}
        </div>
        {tab !== 'Recent' &&  
          <div
          onClick={() => arrangement !== 'Alphabetically' ? handleHeaderArrangement('Alphabetically') : handleHeaderArrangement('Default')}
          title="Filter" className={arrangement === 'Alphabetically' ?  "w-7 h-7 flex items-center justify-center rounded-full cursor-pointer ml-2 bg-black text-white": "w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer ml-2"}>
            <TiSortAlphabetically size={20} className="mb-0.5" />
          </div>
        }
        <div
          title="More"
          onClick={handleHeaderPopper}
          className={anchorEl ? 'w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer ml-2' : 'w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer ml-2'}
        >
          <IoMdMore size={20} />
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md w-[15%] shadow-lg">
          <PopperElement exceptionRef={exceptionRef} tab={tab} />
        </Popper>
      </div>
    </div>
  );
};

export default Header;

const PopperElement = ({exceptionRef, tab}) => {
  return (
    <div ref={exceptionRef} className="mt-4">
      {/*{tab !== 'Recent' && <PopperItem title="New folder" shortcut="Ctrl + N" />}*/}
      <PopperItem title="File Settings" shortcut="Ctrl + Shift + S" />
      <div className="border-t">
        <PopperItem title="Help" />
        <PopperItem title="Send Feedback" />
      </div>
    </div>
  );
};

const PopperItem = ({ title, shortcut }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-200">
      <p className="text-xs font-semibold">{title}</p>
      <p className="text-xs">{shortcut}</p>
    </div>
  );
};