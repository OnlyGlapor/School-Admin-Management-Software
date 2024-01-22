import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { BiSolidFilePdf } from 'react-icons/bi'
import { BsFileImage, BsFillFileEarmarkExcelFill } from 'react-icons/bs'
import { FaFolderOpen } from "react-icons/fa6";

const QuickAccess = ({quickAccessItems, handleFolderClick}) => {
	console.log("quickAccessItems", quickAccessItems);
	return(
	    <div className="grid grid-cols-5 gap-5 mt-5 overflow-auto">
		    {quickAccessItems.map((item) => (
					<TopItem 
						key={item.id} 
						icon={item.type === 'folder' ? <FaFolderOpen size={20} className="text-yellow-500" /> : <BiSolidFilePdf size={20}  />} 
						name={item.name} 
						total_file={item.total_file} 
						file_size={item.size}
            onFolderClick={()=> handleFolderClick(item)}
	        />
	    	))}
	        {/*<TopItem icon={<BiSolidFilePdf size={20} />} name="Curriculum.pdf" file_size="32Kb" />
	        <TopItem icon={<BsFillFileEarmarkExcelFill size={20} />} name="Financial_Reco..." file_size="122Kb" />
	        <TopItem icon={<BsFillFileEarmarkExcelFill size={20} />} name="Teachers_Reco..." file_size="52Kb" />
	        <TopItem icon={<BsFileImage size={20} />} name="School_icon.jpg" file_size="32Kb" />*/}
        </div>
	);
}
export default QuickAccess;

const TopItem = ({icon, name, total_file, file_size, onFolderClick }) => {
  return(
    <div
	   onDoubleClick={onFolderClick}
     className="bg-white border p-2 rounded cursor-pointer">
      <div>
        {icon}
      </div>
      <div className="mt-4">
       <p className="text-sm font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</p>
       <p className="text-xs">{total_file ? `${total_file} files` : file_size}</p>
      </div>
    </div>
  )
}