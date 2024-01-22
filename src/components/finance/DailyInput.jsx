import { BsChevronDown } from 'react-icons/bs';
import Zoom from '@mui/material/Zoom'

const DailyInput = () => {
	return(
    <Zoom in={10} timeout={400} unmountOnExit>
		<div className="w-2/4 h-auto bg-white p-2 ml-2 rounded-md shadow-md">
      <div className="bg-blue-500 text-white p-5 rounded-lg flex items-start justify-between">
        <div>
          <p className="text-xl font-semibold">$50,000.00</p>
          <p className="text-sm my-2">Daily Expenses</p>
          <p className="text-sm">Today</p>
        </div>
        <div className="flex items-center bg-white rounded-full px-2 py-1 cursor-pointer text-black">
          <p className="text-xs">Expenses</p>
          <BsChevronDown size={14} className="ml-1" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-md font-semibold">Quick Daily Input</p>
        <div className="flex">
          <div>
            <p className="text-sm">Service spent on</p>
            <input 
            className="rounded-md p-1 mt-2 text-sm border w-36" 
            placeholder="Electricity"
            type="name" />
          </div>
          <div className="ml-2">
            <p className="text-sm">Amount</p>
            <input 
            className="rounded-md p-1 mt-2 text-sm border w-36" 
            placeholder="Electricity"
            type="currency" />
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div className="">
            <p className="text-sm">Enter Password</p>
            <div className="flex items-center mt-2 w-full">
              <input 
              className="w-1/2 rounded-full flex items-center px-2 border" 
              placeholder="Enter Pin"
              type="password" />
              <div className="w-6/12 bg-blue-500 rounded-full text-center p-2 ml-2 cursor-pointer">
                <p className="text-sm text-white">Enter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
    </Zoom>
	);
}
export default DailyInput;