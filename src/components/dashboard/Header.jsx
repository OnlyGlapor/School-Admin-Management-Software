import { PiStudent } from 'react-icons/pi';
import Zoom from '@mui/material/Zoom';

const Header = () => {
	return(
		// <div className="h-1/3 p-5 rounded-md relative overflow-hidden bg-cover">
    //       <div className="absolute top-0 left-0 p-4 z-20 w-full h-full">
    //         <p className="text-lg font-semibold text-white z-10">Admin Dashboard</p>
    //         <div className="flex items-center justify-between mt-5">
    //           <div className="">
    //             <p className="text-md text-white z-20">Good morning! 🌞</p>
    //             <p className="text-sm font-semibold text-white">David Farsedu Junior</p>
    //           </div>
    //           <TopItem timeout={200} name="Students" number="800" />
    //           <TopItem timeout={300} name="Teachers" number="12" />
    //           <TopItem timeout={400} name="Staffs" number="25" />
    //           <TopItem timeout={500}name="Avg. Earnings" number="$10,000.00" />
    //         </div>
    //       </div>
    //       <div className="bg-blue-500 bg-opacity-60 w-full h-full absolute top-0 left-0 z-10"></div>

    //       <div className="w-full h-full overflow-hidden m-auto flex justify-center absolute top-0 left-0">
    //         <img className="w-full h-full object-cover" src="https://i.pinimg.com/originals/bc/92/78/bc9278984439811cc832db07b5903208.jpg" />
    //       </div>
	  //   </div>
    <div>
      <div className="flex items-center justify-between">
        <TopStudentItem />
        <Item title="Teachers" />
        <Item title="Students" />
        <Item title="Staffs" />
        <Item title="Parents" />
      </div>
    </div>
	);
}

const TopStudentItem = () => {
  return(
    <div className="bg-white w-[20%] relative rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/romantic-teenage-girl-keeps-lips-rounded-wants-kiss-boyfriend-while-having-date-wears-big-transparent-glasses-casual-sweatshirt-isolated-yellow-wall-tender-relationship-moment_273609-49694.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais"
        alt="Student of the Moment"
      />
      <div className="absolute z-10 bottom-0 w-full bg-white p-2">
        <p className="text-sm font-medium">🎉 Student of the Moment 🎉 </p>
      </div>
    </div>

  );
}

const Item = ({title}) => {
  return(
    <div className="w-[18%] flex items-center justify-around p-2 rounded-md bg-white">
      <div>
        <p className="mt-2 text-sm font-semibold">{title}</p>
        <p className="text-sm font-medium">13</p>
      </div>
      <div className="bg-gray-100 rounded-full p-1">
        <PiStudent size={20} />
      </div>
    </div>
  );
}

export default Header;

const TopItem = ({name, number, timeout}) => {
  return(
    <Zoom in={100} timeout={timeout} unmountOnExit>
    <div className="w-40 bg-white p-2 rounded-md border flex items-center">
      <div className="bg-gray-200 rounded-full p-1">
        <PiStudent size={20} />
      </div>
      <div className="ml-2">
        <p className="text-xs">{name}</p>
        <p className="text-lg font-semibold">{number}</p>
      </div>
    </div>
    </Zoom>
  )
}