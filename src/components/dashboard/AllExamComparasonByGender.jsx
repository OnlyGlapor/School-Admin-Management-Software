import CustomLineChart from '../../components/reusable/Linechart';
import Zoom from '@mui/material/Zoom';
import { TfiMoreAlt } from "react-icons/tfi";


const AllExamComparasonByGender = () => {
	return(
    <Zoom in={10} timeout={200} unmountOnExit>
		<div className="grow bg-white rounded-md">
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-semibold">All Exam Result</p>
          <div className="flex items-center">
            <div className="flex items-center p-1 rounded-full">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <p className="text-sm font-medium ml-2">Girls</p>
              </div>
              <div className="flex items-center ml-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> 
                <p className="text-sm font-medium ml-2">Boys</p>
              </div>
            </div>
            <button className="ml-5">
              <TfiMoreAlt />
            </button>
          </div>
        </div>
        <CustomLineChart width={500} />
    </div>
    </Zoom>
	);
}

export default AllExamComparasonByGender;