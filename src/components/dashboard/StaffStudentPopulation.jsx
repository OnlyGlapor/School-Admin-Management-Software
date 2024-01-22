import { useState, useRef, useEffect } from 'react';

import { MdOutlineRefresh } from 'react-icons/md';
import { TfiMoreAlt } from "react-icons/tfi";

import Popper from '@mui/material/Popper';
import Zoom from '@mui/material/Zoom';

import DoughnutPie from '../../components/reusable/DoughnutPie';

const data = [
    { id: 'Boys', value: 300, color: '#F39C12' },
    { id: 'Girls', value: 400, color: '#3498DB' },
    { id: 'Staffs', value: 50, color: '#FF6F33' }, // Adjusted the color to the orange from the theme
];


const StaffStudentPopulation = () => {

	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenPopper = (event) => {
	    setAnchorEl(anchorEl ? null : event.currentTarget);
	    setOpenPopulationPeriodicView(openPopulationPeriodicView && null)
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const [openPopulationPeriodicView, setOpenPopulationPeriodicView] = useState(null);

	const handlePopulationPeriodicView = (event) => {
	    setOpenPopulationPeriodicView(openPopulationPeriodicView ? null : event.currentTarget);
	};

  const openPopulationView = Boolean(openPopulationPeriodicView);
  const populationId = openPopulationView ? 'simple-popper' : undefined;

  const [staffStudentPeriod, setStaffStudentPeriod] = useState('Today');

  const handleStaffStudentPeriod = (period) => {
    setStaffStudentPeriod(period);
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
    <Zoom in={10} timeout={300} unmountOnExit>
		<div className="flex items-center flex-col bg-white ml-2 min-h-[305px] rounded-md">
        <div className="flex items-center justify-between w-full p-4">
          <p className="text-sm font-semibold">Staff-Student Population</p>
          <div onClick={handleOpenPopper} className={staffStudentPeriod != 'Today' ? "p-1 bg-blue-300 rounded-full cursor-pointer relative": "p-1 rounded-full cursor-pointer"} title={staffStudentPeriod}>
            <TfiMoreAlt />
            {staffStudentPeriod != 'Today' && <div className="bg-blue-500 w-2 h-2 rounded-full absolute top-0 right-0"></div>}
          </div>
          <Popper ref={popperRef} id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 w-[10%] shadow-lg z-20">
            <PopulationPopperElement handlePopulationPeriodicView={handlePopulationPeriodicView} />
          </Popper>
        </div>
        <Popper ref={popperRef} placement="right-start" id={populationId} open={openPopulationView} anchorEl={openPopulationPeriodicView} className="bg-white border rounded-md p-2 w-[10%] shadow-lg z-30">
          <PopulationPeriodicPopper staffStudentPeriod={staffStudentPeriod} handleStaffStudentPeriod={handleStaffStudentPeriod} handleOpenPopper={handleOpenPopper} />
        </Popper>
        <DoughnutPie data={data} />
        <div className="flex items-center p-2">
            <div className="flex items-center ml-2 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="ml-2">Girls</p>
            </div>
            <div className="flex items-center ml-2 text-sm">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div> 
              <p className="ml-2">Boys</p>
            </div>
            <div className="flex items-center ml-2 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div> 
              <p className="ml-2">Staff</p>
            </div>
        </div>
    </div>
    </Zoom>
	);
}

export default StaffStudentPopulation;


const PopulationPopperElement = ({handlePopulationPeriodicView}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">More options</p>
      </div>
      <div className="mt-2">
        <div
        onClick={handlePopulationPeriodicView} 
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">View periodically</p>
        </div>
        <div
          className="p-1 hover:bg-gray-100 rounded-md flex items-center text-blue-500"
        >
          <MdOutlineRefresh />
          <p className="text-xs ml-1">Refresh</p>
        </div>
      </div>
    </div>
  )
}

const PopulationPeriodicPopper = ({handleOpenPopper, handleStaffStudentPeriod, staffStudentPeriod}) => {

  const handleAction = (period) => {
    handleStaffStudentPeriod(period);
    handleOpenPopper();
  }
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">periods</p>
      </div>
      <div className="mt-2">
        <div
        onClick={()=> handleAction('Today')}
        className={staffStudentPeriod === 'Today' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Today</p>
        </div>
        <div
        onClick={()=> handleAction('Last year')}
        className={staffStudentPeriod === 'Last year' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Last year</p>
        </div>
        <div
        onClick={()=> handleAction('Last 2 year')} 
        className={staffStudentPeriod === 'Last 2 year' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Last 2 years</p>
        </div>
        <div
        onClick={()=> handleAction('Last 3 year')} 
        className={staffStudentPeriod === 'Last 3 year' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Last 3 years</p>
        </div>
        <div
        onClick={()=> handleAction('Last 4 year')} 
        className={staffStudentPeriod === 'Last 4 year' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Last 4 years</p>
        </div>
        <div
        onClick={()=> handleAction('Last 5 year')} 
        className={staffStudentPeriod === 'Last 5 year' ? "p-1 bg-blue-200 hover:bg-blue-300 rounded-md" : "p-1 hover:bg-gray-100 rounded-md"}>
          <p className="text-xs">Last 5 years</p>
        </div>
      </div>
    </div>
  )
}