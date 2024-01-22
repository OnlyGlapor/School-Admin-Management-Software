import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Zoom from '@mui/material/Zoom';

const Exams = () => {	
	const [periodValue, setPeriodValue] = useState('2nd Period');

	const handlePeriodValue = (period) => {
	setPeriodValue(period);
	}

	return(
		<Zoom in={10} timeout={500} unmountOnExit>
		<div className="bg-white p-2 ml-2 flex flex-col rounded-md shadow-md">
	        <div className="mt-1">
	          <p className="text-sm font-semibold">Exams</p>
	          <div className="relative">
	            <div className="bg-blue-200 bg-opacity-40 p-1.5 shadow-lg rounded-full text-blue-500 absolute left-0 top-1 z-10">
	                <BsChevronLeft size={15} />
	            </div>
	            <div className="flex items-center my-2 w-[300px] overflow-auto border-b pb-2 relative sidebar-scrollable">
	                <PeriodTab period="1st Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="2nd Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="3rd Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="1st Sem.Exam" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="4th Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="5th Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="6th Period" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	                <PeriodTab period="Final.Exam" periodValue={periodValue} handlePeriodValue={handlePeriodValue} />
	            </div>
	            <div className="bg-blue-200 bg-opacity-40 p-1.5 shadow-lg rounded-full text-blue-500 absolute right-0 top-1">
	                <BsChevronRight size={15} />
	            </div>
	          </div>
	          <div className="my-4">
	            <TestItem name="General Science Paper - [Ready]" />
	            <TestItem name="General Science Paper - [Ready]" />
	            <TestItem name="General Science Paper - [Ready]" />
	            <TestItem name="General Science Paper - [Ready]" />
	            <TestItem name="General Science Paper - [Ready]" />
	            <TestItem name="General Science Paper - [Ready]" />
	          </div>
	        </div>
      </div>
      </Zoom>
	);
}
export default Exams;

const PeriodTab = ({period, periodValue, handlePeriodValue}) => {
  return(
    <div 
    onClick={()=> handlePeriodValue(period)}
    className={periodValue === period ? "mr-2 cursor-pointer bg-blue-500 border-black p-1 px-5 rounded-md text-white text-center" : "mr-2 cursor-pointer hover:bg-gray-100 p-1 px-5 rounded-md text-center"}>
      <p className="text-xs font-semibold">{period}</p>
    </div>
  );
}


const TestItem = ({name}) => {
	return(
		<div className="flex items-center justify-between px-2 my-4">
			<p className="text-xs font-medium">{name}</p>
			<div className="bg-gray-200 p-1 px-1 rounded-md cursor-pointer"><p className="text-xs">View</p></div>
    </div>
	);
}