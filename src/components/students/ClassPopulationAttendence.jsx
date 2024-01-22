import { useState } from 'react';
import DoughnutPie from '../../components/reusable/DoughnutPie';

import Zoom from '@mui/material/Zoom';

const PopulationData = [
    { id: 'Class Population', value: 100, color: '#33A6FF' },
    { id: 'School Poulation', value: 900, color: '#FF6F33' }, // Adjusted the color to the orange from the theme
];

const AttendenceData = [
    { id: 'Present', value: 50, color: '#33A6FF' },
    { id: 'Absent', value: 10, color: '#FF6F33' }, // Adjusted the color to the orange from the theme
];


const ClassPopulationAttendence = () => {
	const [populationPeriod, setPopulationPeriod] = useState('Today');

	const handlePopulationPeriod = (period) => {
		setPopulationPeriod(period);
	}

	const [attendancePeriod, setAttendancePeriod] = useState('Today');

	const handleAttendancePeriod = (period) => {
  	setAttendancePeriod(period);
	}

	return(
    <Zoom in={5} timeout={200} unmountOnExit>
		<div className="flex items-start flex-col bg-white w-2/5 h-auto ml-2 p-4 rounded-md">
      <div>
        <p className="text-sm font-semibold">Population</p>
      </div>
      <div>
        <div className="mt-4">
          <p className="text-xs font-semibold">No. of students</p>
        </div>
        <div className="flex items-center mt-4">
          <PopulationPeriodTab period="Today" populationPeriod={populationPeriod} handlePopulationPeriod={handlePopulationPeriod} />
          <PopulationPeriodTab period="Week" populationPeriod={populationPeriod} handlePopulationPeriod={handlePopulationPeriod} />
          <PopulationPeriodTab period="Month" populationPeriod={populationPeriod} handlePopulationPeriod={handlePopulationPeriod} />
          <PopulationPeriodTab period="Year" populationPeriod={populationPeriod} handlePopulationPeriod={handlePopulationPeriod} />
        </div>
        <div className="flex items-center mt-2">
          <div>
            <div className="flex items-start">
              <div className="bg-blue-500 p-1"></div>
              <p className="text-xs ml-1">10% of the school's population</p>
            </div>
            <div className="flex items-center mt-4">
              <div className="bg-orange-500 p-1"></div>
              <p className="text-xs ml-1">total population %</p>
            </div> 
          </div>
          <div>
            <DoughnutPie data={PopulationData} width="90px" height="90px" fontsize={15} isPercentage={true} />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-4">
          <p className="text-xs font-semibold">Attendance</p>
        </div>
        <div className="flex items-center mt-4">
          <AttendancePeriodTab period="Today" attendancePeriod={attendancePeriod} handleAttendancePeriod={handleAttendancePeriod} />
          <AttendancePeriodTab period="Week" attendancePeriod={attendancePeriod} handleAttendancePeriod={handleAttendancePeriod} />
          <AttendancePeriodTab period="Month" attendancePeriod={attendancePeriod} handleAttendancePeriod={handleAttendancePeriod} />
          <AttendancePeriodTab period="Year" attendancePeriod={attendancePeriod} handleAttendancePeriod={handleAttendancePeriod} />
        </div>
        <div className="flex items-center mt-2">
          <div>
            <div className="flex items-start">
              <div className="bg-blue-500 p-1"></div>
              <p className="text-xs ml-1">95% attended class today</p>
            </div>
            <div className="flex items-center mt-4">
              <div className="bg-orange-500 p-1"></div>
              <p className="text-xs ml-1">5% absent today</p>
            </div> 
          </div>
          <div>
            <DoughnutPie data={AttendenceData} width="90px" height="90px" fontsize={15} isPercentage={true} />
          </div>
        </div>
      </div>
    </div>
    </Zoom>
	);
}

export default ClassPopulationAttendence;

const PopulationPeriodTab = ({period, populationPeriod, handlePopulationPeriod}) => {
  return(
    <div 
    onClick={()=> handlePopulationPeriod(period)} 
    className={populationPeriod === period ? "mr-2 cursor-pointer bg-blue-500 border-b p-1 rounded-md text-white" : "mr-2 cursor-pointer  hover:bg-gray-100 p-1 rounded-md"}>
      <p className="text-xs font-semibold">{period}</p>
    </div>
  );
}

const AttendancePeriodTab = ({period, attendancePeriod, handleAttendancePeriod}) => {
  return(
    <div 
    onClick={()=> handleAttendancePeriod(period)} 
    className={attendancePeriod === period ? "mr-2 cursor-pointer bg-blue-500 border-black p-1 rounded-md text-white" : "mr-2 cursor-pointer  hover:bg-gray-100 p-1 rounded-md"}>
      <p className="text-xs font-semibold">{period}</p>
    </div>
  );
}