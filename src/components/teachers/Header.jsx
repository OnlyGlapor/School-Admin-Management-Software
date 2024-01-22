import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaArrowTrendUp } from "react-icons/fa6";

import Popper from '@mui/material/Popper';

import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';


const Header = () => {

  const [filterSpace, setFilterSpace] = useState(null);

  const handleFilterPopper = (event) => {
    setFilterSpace(filterSpace ? null : event.currentTarget);
  };

  const open = Boolean(filterSpace);
  const id = open ? 'simple-popper' : undefined;

  const [filterStatus, setFilterStatus] = useState('Monthly');

  const handleFilterStatus = (status) => {
    setFilterStatus(status)
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (index) => {
      setIsHovered(index);
  }


  return(
    <div className="bg-white rounded-lg pb-2 shadow-md">
      <div className="flex items-center justify-between p-5">
        <p className="text-md font-semibold">Teacher's Space</p>
        <div onClick={handleFilterPopper} className="flex items-center p-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
          <p className="text-xs mr-1" style={{ color: '#666' }}>{filterStatus}</p>
          <BsChevronDown />
        </div>
        <Popper id={id} open={open} anchorEl={filterSpace} className="bg-white border rounded-md p-2 w-[10%] shadow-lg">
          <FilterSpacePopper handleFilterStatus={handleFilterStatus} />
        </Popper>
      </div>
      <div className="grid grid-cols-5 gap-3 px-2">
        <BestTeacherItem index={0}  isHovered={isHovered} handleHover={handleHover} />
        <TopItem index={1} timeout={200} desc="Teacher's ratings are from students polls" title="Teacher's Avg. Ratings" result="8/10" stats="+2%" isHovered={isHovered} handleHover={handleHover} />
        <TopItem index={2} timeout={300} desc="The accumulated average amount of hours by contract" title="Teacher's Overall Work Hours" result="18 hrs per wk" stats="+10%" isHovered={isHovered} handleHover={handleHover} />
        <TopItem index={3} timeout={400} desc="This is a periodic calculation of the teachers average completion percentage" title="Teacher's Overall Work Completed" result="60%" stats="+10% faster than prev." isHovered={isHovered} handleHover={handleHover} />
        <TopItem index={4} timeout={500} desc="The total number of teachers in this institution" title="Teacher's Population" result="12" stats="+4% greater than prev." isHovered={isHovered} handleHover={handleHover} />
      </div>
    </div>
  );
}
export default Header;

const TopItem = ({index, timeout, desc, title, result, stats, isHovered, handleHover}) => {
  return(
    <Zoom in={index} timeout={timeout} unmountOnExit>
    <div onMouseEnter={()=> handleHover(index)} onMouseLeave={()=> handleHover(null)}  className="bg-white border rounded-md p-4 cursor-pointer relative">
      <IoMdNotificationsOutline size={25} />
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <p className="text-xs" style={{ color: '#666' }}>{title}</p>
          {isHovered === index ? 
          <div className="ml-4 absolute top-4 right-4" title={desc}>
            <AiFillPlusCircle />
          </div> : null
          }
        </div>
        <p className="text-md" style={{ color: '#333' }}>{result}</p>
        <div className="p-1 bg-gray-50 rounded-md">
          <p className="text-xs text-blue-500 font-semibold">{stats}</p>
        </div>
        </div>
    </div>
    </Zoom>
  )
}


const BestTeacherItem = ({index, isHovered, handleHover}) => {
  return (
    <Zoom in={10} timeout={100} unmountOnExit>
      <div onMouseEnter={()=> handleHover(index)} onMouseLeave={()=> handleHover(null)} className="bg-white border rounded-md cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out">
        {isHovered !== index ? (
        <div className="flex items-center justify-between m-4">
          <div>
            <p className="text-md font-semibold">Jones James</p>
            <p className="text-sm mt-2">Teacher of the Day</p>
          </div>
          <div className="shadow-md p-2 rounded-full bg-blue-500 text-white">
            <FaArrowTrendUp />
          </div>
        </div>
        ):(
          <Fade in={true} timeout={500} unmountOnExit>
            <img className="w-[200px] h-full" src="https://www.shutterstock.com/image-photo/joyful-african-american-man-white-600nw-2326279117.jpg" />
          </Fade>
        )}
      </div>
    </Zoom>
  );
};


const FilterSpacePopper = ({handleFilterStatus}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">periods</p>
      </div>
      <div className="mt-2">
        <div
        onClick={()=> handleFilterStatus('Today')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Today</p>
        </div>
        <div
        onClick={()=> handleFilterStatus('Weekly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Weekly</p>
        </div>
        <div
        onClick={()=> handleFilterStatus('Monthly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Monthly</p>
        </div>
        <div
        onClick={()=> handleFilterStatus('Yearly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Yearly</p>
        </div>
      </div>
    </div>
  )
}
