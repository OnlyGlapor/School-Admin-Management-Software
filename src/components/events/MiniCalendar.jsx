import { useState } from 'react';

import Calendar from 'react-calendar';
import Zoom from '@mui/material/Zoom';


const MiniCalendar = () => {
	const [value, onChange] = useState(new Date());
	return(
	    <Zoom in={10} timeout={200} unmountOnExit>
  		<div className="w-1/4 bg-white rounded-sm p-2 flex flex-col justify-between shadow-md h-[445px]">
          <div className="rounded-md bg-white">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="bg-gray-100 rounded-md h-36 flex items-center justify-center">
            <p className="text-sm">There's no event for today!</p>
          </div>
          <div className="flex items-start hover:bg-blue-200 p-2 cursor-pointer rounded-md border text-blue-500 bg-blue-100 mt-5">
            {/*<FaRegCalendarPlus />*/}
            <p className="text-sm ml-2">Connect my calendar</p>
          </div>
        </div>
      </Zoom>
	);
}
export default MiniCalendar;