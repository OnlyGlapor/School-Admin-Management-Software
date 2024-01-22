import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import CustomBarChart from '../../components/reusable/BarChart';

import Popper from '@mui/material/Popper';
import Zoom from '@mui/material/Zoom'



const dailyExpenses = [
	{ day: 'Sun', amount: 10 },
	{ day: 'Mon', amount: 35 },
	{ day: 'Tue', amount: 35 },
	{ day: 'Wed', amount: 39 },
	{ day: 'Thu', amount: 25 },
	{ day: 'Fri', amount: 20 },
	{ day: 'Sat', amount: 19 },
]

const Statistics = () => {

	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenPopper = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);

	const id = open ? 'simple-popper' : undefined;

	const [filterValue, setFilterValue] = useState('Monthly');

	const handleFilterStats = (value) => {
		setFilterValue(value)
	}

	const [statsTab, setStatsTab] = useState('Income');

	const handleStatsTab = (tab) => {
		setStatsTab(tab);
	}

	return(
    <Zoom in={10} timeout={300} unmountOnExit>
		<div className="w-4/6 bg-white rounded-lg p-5 shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Statistics</p>
        <div onClick={handleOpenPopper} className="flex items-center p-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer">
          <p className="text-xs mr-1">{filterValue}</p>
          <BsChevronDown />
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 w-[10%] shadow-lg">
          <FilterStatsPopper handleFilterStats={handleFilterStats} />
        </Popper>
      </div>

      <div className="mt-2">
        <div className="flex items-center">
          <div 
          onClick={()=> handleStatsTab('Income')} 
          className={statsTab === 'Income' ? "bg-blue-500 rounded-lg p-1 text-white cursor-pointer" : "bg-white rounded-lg p-1 cursor-pointer"}>
            <p className="text-sm">Incomes</p>
          </div>
          <div 
          onClick={()=> handleStatsTab('Expenses')} 
          className={statsTab === 'Expenses' ? "bg-blue-500 rounded-lg p-1 text-white cursor-pointer" : "bg-white rounded-lg p-1 cursor-pointer"}>
            <p className="text-sm">Expenses</p>
          </div>
          <div
          onClick={()=> handleStatsTab('Investment')} 
          className={statsTab === 'Investment' ? "bg-blue-500 rounded-lg p-1 text-white cursor-pointer" : "bg-white rounded-lg p-1 cursor-pointer"}>
            <p className="text-sm">Investment</p>
          </div>
        </div>

        <div className="bg-blue w-full h-56 rounded-md mt-2">
          <CustomBarChart data={dailyExpenses} />
        </div>
      </div>
		</div>
    </Zoom>
	);
}

export default Statistics;


const FilterStatsPopper = ({handleFilterStats}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">filter</p>
      </div>
      <div className="mt-2">
        <div
        onClick={()=> handleFilterStats('Today')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Today</p>
        </div>
        <div
        onClick={()=> handleFilterStats('Weekly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Weekly</p>
        </div>
        <div
        onClick={()=> handleFilterStats('Monthly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Monthly</p>
        </div>
        <div
        onClick={()=> handleFilterStats('Yearly')}
        className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Yearly</p>
        </div>
      </div>
    </div>
  )
}