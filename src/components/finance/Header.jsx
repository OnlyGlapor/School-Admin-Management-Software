import { useState, useRef, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Popper from '@mui/material/Popper';
import Zoom from '@mui/material/Zoom'

const Header = () => {

	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenPopper = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const [filterStatus, setFilterStatus] = useState('Monthly');

	const handleFilterStatus = (status) => {
		setFilterStatus(status)
	}

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
		<div className="bg-white rounded-lg pb-2 shadow-md">
          <div className="flex items-center justify-between p-5">
            <p className="text-md font-semibold">My Finance Report</p>
            <div ref={popperRef} onClick={handleOpenPopper} className="flex items-center p-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
              <p className="text-xs mr-1">{filterStatus}</p>
              <BsChevronDown />
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 w-[10%] shadow-lg">
              <FilterReportPopper handleFilterStatus={handleFilterStatus} />
            </Popper>
          </div>
          <div className="flex items-center justify-around">
            <TopItem timeout={100} title="Total Balance" amount="$56,650.00" performance="increase" percentage="+2%" timeframe="The last 7 days" color />
            <TopItem timeout={200} title="Total Income" amount="$156,650.00" performance="increase" percentage="+8%" timeframe="The last 7 days" />
            <TopItem timeout={300} title="Total Expenses" amount="$90,000.00" performance="decrease" percentage="-4%" timeframe="The last 7 days"  />
            <TopItem timeout={400} title="Total Investment" amount="$100,000.00" performance="increase" percentage="+10%" timeframe="The last 7 days" />
            <TopItem timeout={500}  title="Total Credit" amount="$50,000.00" performance="decrease" percentage="-1%" timeframe="The last 7 days" />
          </div>
        </div>
	);
}

export default Header;

const TopItem = ({title, timeout, amount, percentage, performance, timeframe, color}) => {
  return(
    <Zoom in={10} timeout={timeout} unmountOnExit>
    <div className={color ? "bg-blue-500 text-white p-2 rounded-md border": "bg-white p-2 rounded-md border"}>
      <p className="text-sm">{title}</p>
      <div className="flex items-center">
        <p className="text-lg font-semibold">{amount}</p>
        <div className={performance === "increase" ? "bg-green-100 rounded-full ml-1 px-0.5" : "bg-red-100 rounded-full ml-1 px-0.5"}>
          <p className="text-xs text-black">{percentage}</p>
        </div>
      </div>
      <p className="text-sm">{timeframe}</p>
    </div>
    </Zoom>
  )
}

const FilterReportPopper = ({handleFilterStatus}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">filter</p>
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