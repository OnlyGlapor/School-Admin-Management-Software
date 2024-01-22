import { useState } from 'react';
import DoughnutPie from '../../components/reusable/DoughnutPie';

import Zoom from '@mui/material/Zoom';


const FeesData = [
    { id: 'fees recieved', value: 50000, color: '#33A6FF' },
    { id: 'fees indebt', value: 25000, color: '#FF6F33' },
];


const Fees = ({displayPendingFees, displayReceivedFees}) => {
	const [feesPeriod, setFeesPeriod] = useState('Quarter I');

	const handleFeesPeriod = (quarter) => {
	setFeesPeriod(quarter);
	}
  return(
    <Zoom in={10} timeout={500} unmountOnExit>
    <div className="bg-white rounded-md p-2">
     <div className="mt-1">
        <p className="text-xs font-semibold">Fees</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <FeesPeriodTab quarter="Quarter I" feesPeriod={feesPeriod} handleFeesPeriod={handleFeesPeriod} />
        <FeesPeriodTab quarter="Quarter II" feesPeriod={feesPeriod} handleFeesPeriod={handleFeesPeriod} />
        <FeesPeriodTab quarter="Quarter III" feesPeriod={feesPeriod} handleFeesPeriod={handleFeesPeriod} />
        <FeesPeriodTab quarter="Quarter IV" feesPeriod={feesPeriod} handleFeesPeriod={handleFeesPeriod} />
      </div>
      <div className="flex justify-center">
        <DoughnutPie data={FeesData} width="150px" height="120px" isPercentage={true} />
      </div>
      <div className="py-2 w-full flex items-center overflow-auto">
        <div onClick={displayReceivedFees} className="flex items-center p-1.5 bg-gray-100 hover:bg-gray-200 hover:underline rounded-md cursor-pointer">
          <div className="bg-purple-500 p-1"></div>
            <p className="text-xs ml-1 hover:underline">93% Recieved</p>
        </div>
        <div onClick={displayPendingFees} className="flex items-center p-1.5 bg-gray-100 hover:bg-gray-200 hover:underline rounded-md cursor-pointer ml-4">
          <div className="bg-orange-500 p-1"></div>
          <p className="text-xs ml-1">8% pending</p>
        </div> 
      </div>
  </div>
  </Zoom>
  );
}

export default Fees;

const FeesPeriodTab = ({quarter, feesPeriod, handleFeesPeriod}) => {
  return(
    <div 
    onClick={()=> handleFeesPeriod(quarter)} 
    className={feesPeriod === quarter ? "mr-2 cursor-pointer bg-blue-500 border-black p-1 rounded-md text-white text-center" : "mr-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md text-center"}>
      <p className="text-xs font-semibold">{quarter}</p>
    </div>
  );
}