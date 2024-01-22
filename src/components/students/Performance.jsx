import { useState } from 'react';
import Zoom from '@mui/material/Zoom';


const Performance = () => {
  const [performancePeriod, setPerformancePeriod] = useState('Recent');

  const handlePerformancePeriod = (period) => {
  setPerformancePeriod(period);
  }

  return(
    <Zoom in={10} timeout={400} unmountOnExit>
    <div className="bg-white rounded-md p-5 mx-2 w-[40%]">
     <div className="">
        <p className="text-xs font-semibold">Performance</p>
      </div>
      <div className="flex items-center mt-5">
        <PerformancePeriodTab period="Recent" performancePeriod={performancePeriod} handlePerformancePeriod={handlePerformancePeriod} />
        <PerformancePeriodTab period="Week" performancePeriod={performancePeriod} handlePerformancePeriod={handlePerformancePeriod} />
        <PerformancePeriodTab period="Month" performancePeriod={performancePeriod} handlePerformancePeriod={handlePerformancePeriod} />
        <PerformancePeriodTab period="Year" performancePeriod={performancePeriod} handlePerformancePeriod={handlePerformancePeriod} />
      </div>
      <div>
        
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 mt-5">
        <div>
          <p className="text-xs font-semibold">Reading</p>
          <div className="mt-2">
            <div className="flex items-center">
              <div className="p-1 bg-orange-500 rounded-full"></div>
              <p className="text-xs ml-2">92% pass</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-pink-500 rounded-full"></div>
              <p className="text-xs ml-2">7% fail</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-red-500 rounded-full"></div>
              <p className="text-xs ml-2">0% incomplete</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-xs font-semibold">Writing</p>
          <div className="mt-2">
            <div className="flex items-center">
              <div className="p-1 bg-orange-500 rounded-full"></div>
              <p className="text-xs ml-2">92% pass</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-pink-500 rounded-full"></div>
              <p className="text-xs ml-2">7% fail</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-red-500 rounded-full"></div>
              <p className="text-xs ml-2">0% incomplete</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-xs font-semibold">ABC</p>
          <div className="mt-2">
            <div className="flex items-center">
              <div className="p-1 bg-orange-500 rounded-full"></div>
              <p className="text-xs ml-2">92% pass</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-pink-500 rounded-full"></div>
              <p className="text-xs ml-2">7% fail</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-red-500 rounded-full"></div>
              <p className="text-xs ml-2">0% incomplete</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-xs font-semibold">Recitation</p>
          <div className="mt-2">
            <div className="flex items-center">
              <div className="p-1 bg-orange-500 rounded-full"></div>
              <p className="text-xs ml-2">92% pass</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-pink-500 rounded-full"></div>
              <p className="text-xs ml-2">7% fail</p>
            </div>
            <div className="flex items-center">
              <div className="p-1 bg-red-500 rounded-full"></div>
              <p className="text-xs ml-2">0% incomplete</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  </Zoom>
  );
}

export default Performance;



const PerformancePeriodTab = ({period, performancePeriod, handlePerformancePeriod}) => {
  return(
    <div 
    onClick={()=> handlePerformancePeriod(period)} 
    className={performancePeriod === period ? "mr-2 cursor-pointer bg-blue-500 border-black p-1 rounded-md text-white text-center" : "mr-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md text-center"}>
      <p className="text-xs font-semibold">{period}</p>
    </div>
  );
}