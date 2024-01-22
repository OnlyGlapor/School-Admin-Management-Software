import { IoMdRefresh } from 'react-icons/io';
import { AiFillPlusCircle } from 'react-icons/ai'

import IconButton from '@mui/material/IconButton';

import Zoom from '@mui/material/Zoom';

const UpcomingEvents = () => {
	return(
		<div className="bg-white p-2 w-1/5 rounded-sm overflow-hidden relative h-[445px] shadow-md">
          <div className="absolute z-20 top-0 left-0 w-full p-2">
            <div className="flex items-center justify-between p-2">
              <p className="text-sm font-semibold text-white">Upcoming Events</p>
              <IconButton size="small" style={{ color: '#fff'}}>
                <IoMdRefresh />
              </IconButton>
            </div>
            <div className="mt-2">
              <EventItem timeout={100} />
              <EventItem timeout={200} />
              <EventItem timeout={300} />
            </div>
          </div>
          <div className="bg-opacity-40 w-full h-full absolute top-0 left-0 z-10"></div>

          {/*<div className="w-full h-full overflow-hidden m-auto flex justify-center absolute top-0 left-0">
            <img className="w-full h-full object-cover" src="https://i.pinimg.com/originals/bc/92/78/bc9278984439811cc832db07b5903208.jpg" />
          </div>*/}
        </div>
	);
}
export default UpcomingEvents;

const EventItem = ({timeout}) => {
  return (
    <Zoom in={10} timeout={timeout} unmountOnExit>
    <div className="bg-white p-2 mt-2 rounded-sm shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm">November 29, 2023</p>
        <AiFillPlusCircle />
      </div>
      <div>
        <p className="text-sm font-semibold py-2">Pres. Tolbert's Birthday</p>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm">07:00 - 10:00 PM</p>
          <p className="text-sm font-semibold">$50</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="" style={{ width: '60%', height: '5px', borderRadius: 20, backgroundColor: '#eee'}}>
            <div className="bg-blue-500" style={{width: '80%', height: '5px'}}></div>
          </div>
          <p className="text-xs">10 days left</p>
        </div>
      </div>
    </div>
    </Zoom>
  )
}