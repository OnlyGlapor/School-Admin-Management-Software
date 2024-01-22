import { BsDatabaseFillLock } from "react-icons/bs";
import { MdArrowRight } from 'react-icons/md';

import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

const Menu = ({folderData, tab, handleTabChange, handleFolderClick}) => {
	return(
    <Zoom in={10} timeout={200} unmountOnExit>
		<div className="w-1/5 h-[75vh] rounded-md ml-4 bg-white p-4 border-r relative">
      <p className="text-md font-semibold ml-2">Documents</p>
      <ul>
        {folderData.content.map((folder) => (
          <TabNav
          key={folder.id}
          tab={tab}
          handleTabChange={handleTabChange}
          name={folder.name}
          onTabClick={() => handleFolderClick(folder)}
          />
        ))}
      </ul>
      <Fade in={10} timeout={1000} unmountOnExit>
      <div className="absolute bottom-2 left-2 w-56 p-3 rounded-md bg-gradient-to-r from-blue-500 to-orange-500 flex flex-col items-center justify-center">
        <div className="bg-white p-4 rounded-full">
          <BsDatabaseFillLock size={20} />
        </div>
        <div className="my-2">
          <p className="text-sm px-2 text-center">Upgrade your plan, find out here</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 via-orange-500 to-pink-500 w-3/4 p-2 rounded-md text-center border hover:shadow-lg cursor-pointer">
          <p className="text-sm text-white font-medium">Find out</p>
        </div>
      </div>
      </Fade>
    </div>
    </Zoom>
	);
}
export default Menu;

const TabNav = ({name, tab, handleTabChange, folder, onTabClick}) => {
  return(
    <li
    onClick={() => {
      handleTabChange(name);
      onTabClick();
    }}
    className={tab === name ? "p-1 rounded-full bg-blue-200 cursor-pointer flex items-center mt-3" : "p-1 rounded-full hover:bg-gray-100 cursor-pointer flex items-center mt-3"}>
      <MdArrowRight />
      <div className="flex items-center ml-2">
        <p className="ml-2">{name}</p>
      </div>
    </li>
  )
}
