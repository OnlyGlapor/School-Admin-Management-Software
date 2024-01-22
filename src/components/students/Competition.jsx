import { useState } from 'react'; 
import Zoom from '@mui/material/Zoom';

const Competition = ({goToStudentProfile}) => {

  const [competitionPeriod, setCompetitionPeriod] = useState('1st Period');

  const handleCompetitionPeriod = (period) => {
    setCompetitionPeriod(period);
  }
  return(
    <Zoom in={10} timeout={300} unmountOnExit>
    <div className="bg-white rounded-md p-5">
     <div className="">
        <p className="text-xs font-semibold">Competition (Star Students)</p>
      </div>
      <div className="flex items-center mt-5">
        <CompetitionPeriodTab period="1st Period" competitionPeriod={competitionPeriod} handleCompetitionPeriod={handleCompetitionPeriod} />
        <CompetitionPeriodTab period="2nd Period" competitionPeriod={competitionPeriod} handleCompetitionPeriod={handleCompetitionPeriod} />
        <CompetitionPeriodTab period="3rd Period" competitionPeriod={competitionPeriod} handleCompetitionPeriod={handleCompetitionPeriod} />
        <CompetitionPeriodTab period="4th Period" competitionPeriod={competitionPeriod} handleCompetitionPeriod={handleCompetitionPeriod} />
        
      </div>
      <div>
        <div onClick={goToStudentProfile} className="flex items-center justify-between mt-5 cursor-pointer">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            <p className="text-xs font-semibold ml-2">Dorcas Robinson</p>
          </div>
          <div>
            <p className="text-xs font-semibold">92.5</p>
          </div>
        </div>
        <div onClick={goToStudentProfile} className="flex items-center justify-between mt-5 cursor-pointer">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            <p className="text-xs font-semibold ml-2">Dorcas Robinson</p>
          </div>
          <div>
            <p className="text-xs font-semibold">90.5</p>
          </div>
        </div>
        <div onClick={goToStudentProfile} className="flex items-center justify-between mt-5 cursor-pointer">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            <p className="text-xs font-semibold ml-2">Dorcas Robinson</p>
          </div>
          <div>
            <p className="text-xs font-semibold">87.2</p>
          </div>
        </div>
      </div>
  </div>
  </Zoom>
  );
}

export default Competition;



const CompetitionPeriodTab = ({period, competitionPeriod, handleCompetitionPeriod}) => {
  return(
    <div 
    onClick={()=> handleCompetitionPeriod(period)} 
    className={`${competitionPeriod === period ? "mr-2 cursor-pointer bg-blue-500 border-black p-1 rounded-md text-white text-center" : "mr-2 cursor-pointer hover:bg-gray-100 p-1 rounded-md text-center"}`}>
      <p className="text-xs font-semibold">{period}</p>
    </div>
  );
}