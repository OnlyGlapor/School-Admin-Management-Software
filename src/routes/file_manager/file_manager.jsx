import { useRef, useState, useEffect } from 'react';

import styles from './styles.module.css';
import Box from '../../components/reusable/box';
import SearchBar from '../../components/reusable/searchBar';
import Avatar from '../../components/reusable/avatar';

import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowUp, IoMdMore, IoIosSearch, IoIosGrid } from 'react-icons/io';
import { AiOutlineEdit, AiOutlineFullscreen, AiTwotoneFolderOpen, AiOutlineCaretDown } from 'react-icons/ai';
import { BiExport, BiSolidVideos, BiTrashAlt, BiSolidFilePdf } from 'react-icons/bi';
import { BsFolderSymlink, BsFillFileEarmarkExcelFill, BsFileImage } from 'react-icons/bs';
import { LiaGoogleDrive } from 'react-icons/lia';
import { TiSortAlphabetically } from 'react-icons/ti';
import { HiUpload } from "react-icons/hi";

import CustomPieChart from '../../components/reusable/PieChart';
import SemiCircleProgressBar from '../../components/reusable/SemiCircleProgressBar';

import { useNavigate } from 'react-router-dom';

import Popper from '@mui/material/Popper';
import Zoom from '@mui/material/Zoom';

import Folder from '../../components/file_manager/Folder';
import File from '../../components/file_manager/File';
import FolderContent from '../../components/file_manager/FolderContent';

import Header from '../../components/file_manager/Header';
import Breadcrumbs from '../../components/file_manager/Breadcrumbs';

import Menu from '../../components/file_manager/Menu';
import StorageUsage from '../../components/file_manager/StorageUsage';

import { folderData } from '../../components/reusable/dummyData';

import InformationDrawer from '../../components/drawers/InformationDrawer';

export default function FileManager() {

  

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate("/folder_detail/")
  }

  const [tab, setTab] = useState('Recent');

  const handleTabChange = (tab) => {
    setTab(tab);
  }

  // Popper

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const divRef = useRef();


  const [isOpenFolder, setIsOpenFolder] = useState(false);

  const [clickedFolder, setClickedFolder] = useState(
    folderData.content && folderData.content.length > 0
      ? folderData.content[0]
      : null
  );

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const handleBreadcrumbClick = (index) => {
    setBreadcrumbs((prevBreadcrumbs) => prevBreadcrumbs.slice(0, index + 1));
    setClickedFolder(breadcrumbs[index]);
  };

  
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFolderSelect = (folder) => {
    setSelectedFolder(folder);
  };

  const handleFileSelect = (file) => {
    console.log("Selected File:", file);
    setSelectedFile(file);
    setSelectedFolder(null); // Clear selected folder when a file is selected

    // Check if the file is already in the list
    const isAlreadyInList = recentlyInteractedItems.some((item) => item.id === file.id);
    if (!isAlreadyInList) {
      setRecentlyInteractedItems((prevItems) => [file, ...prevItems]);
    }
  };


  const [openDrawer, setOpenDrawer] = useState(null);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const folderRef = useRef();
  const fileRef = useRef();
  const infoBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const folderRefElement = folderRef.current;
      const fileRefElement = fileRef.current;

      if (
        folderRefElement &&
        !folderRefElement.contains(event.target) &&
        selectedFolder
      ) {
        setSelectedFolder(null);
      }

      if (
        fileRefElement &&
        !fileRefElement.contains(event.target) &&
        selectedFile
      ) {
        setSelectedFile(null);
      }

      // Your existing code for handling clicks outside infoBoxRef
      if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
        setOpenDrawer(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [folderRef, fileRef, infoBoxRef, selectedFolder, selectedFile, setOpenDrawer]);



  const [recentlyInteractedItems, setRecentlyInteractedItems] = useState([]);

  console.log("HELLO OO BABE", recentlyInteractedItems);

  const handleFolderClick = (folder) => {
  const isRecentlyInteracted = recentlyInteractedItems.some((item) => item.id === folder.id);

  if (folder.name === 'Recent') {
    // If the clicked folder is "Recent", do not include it in recentlyInteractedItems
    setBreadcrumbs([folder]);
    setClickedFolder(folder);
    setTab(folder.name);
  } else if (isRecentlyInteracted) {
    // If the clicked folder is in recentlyInteractedItems, move it to the first place in the list
    const updatedRecentlyInteractedItems = recentlyInteractedItems
      .filter((item) => item.id !== folder.id) // Remove the clicked folder from the list
      .map((item) => ({ ...item, interactionTime: new Date() })); // Update interactionTime for all items

    setRecentlyInteractedItems([folder, ...updatedRecentlyInteractedItems]);

    // Update breadcrumbs, setClickedFolder, and set the tab state
    setBreadcrumbs([folder]);
    setClickedFolder(folder);
    setTab(folder.name);
  } else if (clickedFolder.content && clickedFolder.content.includes(folder)) {
    // If the clicked folder is a child of the current clicked folder's content, update breadcrumbs, setClickedFolder, and set the tab state
    setBreadcrumbs((prevBreadcrumbs) => [...prevBreadcrumbs, folder]);
    setClickedFolder(folder);
    setTab(folder.name);
  } else {
    // If not, restart the trail with the clicked folder
    setBreadcrumbs([folder]);
    setClickedFolder(folder);

    // Create a new recently interacted item with the current time
    const newRecentlyInteractedItem = { ...folder, interactionTime: new Date() };

    // Add the item to the beginning of recentlyInteractedItems
    setRecentlyInteractedItems((prevItems) => [newRecentlyInteractedItem, ...prevItems]);

    // Set the tab state to the clicked folder name
    setTab(folder.name);
  }
};


  const mergeRecentItems = () => {
  const recentFolder = folderData.content.find((item) => item.name === 'Recent');

  if (recentFolder) {
    // Create a map to store unique items based on their id
    const uniqueItemsMap = new Map();

    // Add items from recentlyInteractedItems to the map first to preserve the order
    recentlyInteractedItems.forEach((item) => {
      uniqueItemsMap.set(item.id, item);
    });

    // Add items from recentFolder.content to the map, but skip those already in recentlyInteractedItems
    recentFolder.content.forEach((item) => {
      if (!uniqueItemsMap.has(item.id)) {
        uniqueItemsMap.set(item.id, item);
      }
    });

    // Convert the map values back to an array
    const mergedContent = Array.from(uniqueItemsMap.values());

    // Update recentFolder.content with the merged content
    recentFolder.content = mergedContent;
  }
};


  useEffect(() => {
    mergeRecentItems();
  }, [recentlyInteractedItems]);


  const [arrangement, setArrangement] = useState('Default');

  const handleArrangement = (newArrangement) => {
    setArrangement(newArrangement);
  };


  return(
    <div ref={divRef} className="pt-5">
      <div className="flex justify-between">
        <Menu folderData={folderData} tab={tab} handleTabChange={handleTabChange} handleFolderClick={handleFolderClick} />
        <Zoom in={10} timeout={300} unmountOnExit>
          <div className="grow bg-white-500 mx-2 rounded-md p-5 w-1/2 bg-white overflow-auto">
            <div>
              <Header tab={tab} breadcrumbs={breadcrumbs} handleBreadcrumbClick={handleBreadcrumbClick} handleOpenPopper={handleOpenPopper} anchorEl={anchorEl} setAnchorEl={setAnchorEl} id={id} open={open} arrangement={arrangement} handleArrangement={handleArrangement} />
            </div>

            <div className="mt-9">
              <div className="mt-5">
                {clickedFolder ? (
                    <FolderContent 
                    folder={clickedFolder} 
                    onFolderClick={handleFolderClick} 
                    selectedFolder={selectedFolder}
                    handleFolderSelect={handleFolderSelect}
                    selectedFile={selectedFile}
                    handleFileSelect={handleFileSelect}
                    toggleDrawer={toggleDrawer}
                    folderRef={folderRef}
                    fileRef={fileRef}
                    arrangement={arrangement} />
                  ) : (
                    <Folder 
                    folder={folderData}
                    onFolderClick={handleFolderClick}
                    onFolderSelect={handleFolderSelect}
                    isSelected={selectedFolder === folderData}
                    toggleDrawer={toggleDrawer}  />
                )}
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom in={10} timeout={500} unmountOnExit>
        <div className="bg-white rounded-md mr-1 w-1/5 py-4 mr-4">
          <StorageUsage />
        </div>
        </Zoom>
      </div>
      <InformationDrawer infoBoxRef={infoBoxRef} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} toggleDrawer={toggleDrawer} selectedFolder={selectedFolder} selectedFile={selectedFile} />
    </div>
  );
}



 const PopperElement = () => {
  return(
    <div className="mt-4">
      <PopperItem title="New folder" shortcut="Ctrl + N" />
      <PopperItem title="Select All" shortcut="Ctrl + A" />
      <PopperItem title="File Settings" shortcut="Ctrl + Shift + S" />
      <div className="border-t">
        <PopperItem title="Help" />
        <PopperItem title="Send Feedback" />
      </div>
    </div>
  );
 }

 const PopperItem = ({title, shortcut}) => {
  return(
    <div className="flex items-center justify-between p-2 hover:bg-gray-200">
      <p className="text-xs font-semibold">{title}</p>
      <p className="text-xs">{shortcut}</p>
    </div>
  );
 }

const RecentItem = ({ item, onItemSelect, isSelected, toggleDrawer, folderRef, fileRef }) => {
  return (
    <div className="mt-5">
      {item.type === 'folder' ? (
        <div ref={folderRef}>
          <Folder
            folder={item}
            onFolderClick={() => onItemSelect(item)}
            onFolderSelect={() => onItemSelect(item)}
            isSelected={isSelected}
            toggleDrawer={toggleDrawer}
          />
        </div>
      ) : (
        <div ref={fileRef}>
          <File
            file={item}
            onFileSelect={() => onItemSelect(item)}
            isSelected={isSelected}
            toggleDrawer={toggleDrawer}
          />
        </div>
      )}
    </div>
  );
};
