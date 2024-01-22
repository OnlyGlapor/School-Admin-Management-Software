import { useState, useRef, useEffect } from 'react';

import { IoMdNotifications } from 'react-icons/io';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Popper from '@mui/material/Popper';

const NotificationsPopper = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenPopper = (event) => {
	    setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const popperRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if(popperRef.current && !popperRef.current.contains(event.target)){
				handleOpenPopper()
			}
		}

		document.addEventListener('mousedown', handleClickOutside);

	    return () => {
	      document.removeEventListener('mousedown', handleClickOutside);
	    };
	},[handleOpenPopper])

	return(
		<>
			<div
	        title="Notifications"
	        onClick={handleOpenPopper}
	        className={anchorEl ? "p-1.5 bg-blue-100 rounded-full mx-2 hover:bg-blue-100 transition duration-300 ease-in-out cursor-pointer flex items-center" : "flex items-center p-1.5 bg-gray-200 rounded-full mx-2 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"}>
	        <div className="mr-0.5">
	          <p className="text-xs mt-1 font-semibold">8</p>
	        </div>
	        {anchorEl ? <IoMdNotifications className="text-blue-500" size={20} /> : <IoMdNotificationsOutline size={20} />}
		    </div>
			<Popper ref={popperRef} id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 shadow-lg z-20">
				<div className="flex items-center justify-between p-2">
		            <p className="text-sm">Notifications</p>
		            <div className="bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center pt-1">
		              <p className="text-xs font-semibold">1</p>
		            </div>
		        </div>
		        <div className="mt-2">
	            <div className=" w-full">
	              <div className="p-1.5 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
	                <div className="flex items-center">
	                  <div className="w-5 h-5 bg-green-500 rounded-full" />
	                  <p className="text-xs font-semibold ml-2 w-44">Hello sir</p>
	                </div>
	                <div className="p-1 bg-blue-300 rounded-full" />
	              </div>
	              <div className="p-1.5 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
	                <div className="flex items-center">
	                  <div className="w-5 h-5 bg-green-500 rounded-full" />
	                  <p className="text-xs w-44 ml-2">You haven't visited the (Finance Dashboard) today!</p>
	                </div>
	                <p style={{fontSize: 11}}>10m</p>
	              </div>
	            </div>
	          </div>
		    </Popper>
	    </>
	);
}

export default NotificationsPopper;