import { useState } from 'react';
import { LiaFileVideoSolid } from "react-icons/lia";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { BsFolderSymlink } from "react-icons/bs";
import { LuFileStack } from "react-icons/lu";

import DoughnutPie from '../../components/reusable/DoughnutPie';
import { FiAlertCircle } from "react-icons/fi";

const data = [
    { id: 'storage used', value: 10, color: '#33A6FF' },
    { id: 'storage remaining', value: 15, color: '#FF6F33' },
];

const StorageUsage = () => {
  const [expandAlert, setExpandAlert] = useState(null);

  const handleExpandAlert = () => {
    setExpandAlert(!expandAlert);
  }
	return(
		<>
			<div className="flex flex-col items-center py-5 relative">
       <div className={`absolute right-4 -top-0 shadow-lg p-1 rounded-full flex items-center transition-all duration-300 ease-in-out ${expandAlert ? 'px-2' : 'w-10'}`} onMouseEnter={()=> handleExpandAlert()} onMouseLeave={()=> handleExpandAlert()}>
  {expandAlert && <p className="text-xs">Admin's online storage usage</p>}
  <FiAlertCircle className="ml-2" />
</div>

        <p className="text-md font-semibold">Overall Usage</p>
        <div className="w-4/5 h-30 flex justify-center">
          <DoughnutPie data={data} isPercentage={true} width="150px" height="150px" />
        </div>
      </div>
			<div className="">
				<StorageUsageItem icon={<LiaFileVideoSolid />} name="Videos" total_files="12" />
				<StorageUsageItem icon={<MdOutlinePhotoSizeSelectActual />} name="Photos" total_files="25" />
				<StorageUsageItem icon={<BsFolderSymlink />} name="Documents" total_files="8" />
				<StorageUsageItem icon={<LuFileStack />} name="Other Files" total_files="2" />
			</div>
		</>
	);
}
export default StorageUsage;

const StorageUsageItem = ({icon, name, total_files}) => {
 return(
   <div className="flex items-center justify-between mt-3">
     <div className="flex items-center ml-2">
       <div className="bg-gray-100 p-2 rounded-full">
         {icon}
       </div>
       <div className="ml-2">
         <p className="text-xs font-medium">{name}</p>
         <p className="text-xs">{total_files}</p>
       </div>
     </div>
     <p className="text-sm font-medium mr-4">15.2 GB</p>
   </div>
 )
}