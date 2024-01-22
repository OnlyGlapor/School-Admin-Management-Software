import { useState, useRef, useEffect } from 'react';

import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';

import Popper from '@mui/material/Popper';

import { useNavigate } from 'react-router-dom';

const ProfilePopper = ({toggleLogout}) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenPopper = (event) => {
	    setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleClosePopper = () => {
		setAnchorEl(null);
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const navigate = useNavigate();

	const manageProfile = (event) => {
		navigate("/settings")
		handleOpenPopper();
	}

	const [statusMessage, setStatusMessage] = useState('');
	const [openStatusInput, setOpenStatusInput] = useState(false);

	const handleStatusChange = (statusText) => {
		setStatusMessage(statusText)
	}

	const handleOpenInput = () => {
		setOpenStatusInput(!openStatusInput);
	}

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
	        title="Profile"
	        onClick={handleOpenPopper}>
		        <div className="ml-1.5 cursor-pointer">
		          <img className="w-9 h-9 rounded-full bg-gray-600 border-2 border-blue-500"
		          src="https://randomuser.me/api/portraits/women/56.jpg" />
		        </div>
		    </div>
			<Popper ref={popperRef} id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md w-[22%] p-4 shadow-lg z-20">
				<div className="flex items-start">
		            <div className="relative">
		              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
		                <img src="https://randomuser.me/api/portraits/women/56.jpg" />
		              </div>
		              <div className="bg-blue-500 rounded-full absolute bottom-0 right-0">
		                <BiCheck className="text-white" />
		              </div>
		            </div>
		            <div className="ml-3">
		              <p className="text-sm font-semibold">Lisa Smother</p>
		              <p className="text-xs">lissmother@gmail.com</p>
		              <div className="flex items-center mt-2">
		                <div className="flex items-center">
		                  <p className="text-xs">Active</p>
		                  <div className="p-1 rounded-full bg-green-500 ml-1"></div>
		                </div>
		                <p onClick={handleOpenInput} className="text-xs ml-4 cursor-pointer">Set status me...</p>
		              </div>
		            </div>
		        </div>
		        {openStatusInput && (
		        <div className="border rounded-md mt-2 flex items-center">
		        	<input className="text-sm outline-none p-2 rounded-md w-5/6" placeholder="Set status message" />
		        	<span className="text-xs">0/50</span>
		        </div>
			    )}
		        <div
		          onClick={manageProfile} 
		          className="p-1 rounded-md cursor-pointer hover:bg-gray-100 mt-5 flex items-center">
		            <AiOutlineUsergroupAdd />
		            <p className="text-sm ml-1">Manage Account</p>
		          </div>
		          <div
		          onClick={toggleLogout} 
		          className="p-1 rounded-md cursor-pointer hover:bg-gray-50 text-red-500 flex items-center">
		            <MdOutlineLogout />
		            <p className="text-sm ml-1">Log out</p>
		        </div>
		    </Popper>
	    </>
	);
}

export default ProfilePopper;