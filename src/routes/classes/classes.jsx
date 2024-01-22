import { useState, useEffect } from "react";
import styles from '../classes/styles.module.css';
import { PiStudentFill } from 'react-icons/pi';
import { BiBookBookmark, BiHorizontalCenter } from 'react-icons/bi';
import { FcTimeline, FcOvertime } from 'react-icons/fc';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiFillPlusCircle, AiOutlinePlus } from 'react-icons/ai';
import { IoTrashOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { MdPeopleOutline } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';

import CustomDialog from '../../components/reusable/Dialog';



export default function Classes() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const listen = () => {
    if(anchorEl != null){
      handleOpenPopper();
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const navigate = useNavigate();

  const handleOpenClass = () => {
    // Navigate to the desired page or route
    navigate('/students/students_list');
    console.log('go')
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDeleteConfirmation = () => {
    setIsOpen(!isOpen);
  }

  const [openCreateClass, setOpenCreateClass] = useState(false);

  const handleCreateClass = () => {
    setOpenCreateClass(!openCreateClass);
  }

  const [openStudentModal, setOpenStudentModal] = useState(false);

  const handleStudentList = () => {
    setOpenStudentModal(!openStudentModal);
  }

  return(
    <div onClick={listen} className="h-full overflow-auto">
      <div className="flex items-center justify-between px-4 py-1 sticky top-0 bg-white">
        <div className="flex items-center p-4">
          <p className="text-md font-semibold">Groups</p>
          <p className="ml-2">12</p>
        </div>

        <div className="flex items-center">
          <button className="bg-gray-100 p-1 rounded-full hover:bg-gray-200"><FiMoreHorizontal /></button>
          <button
          onClick={handleCreateClass} 
          className="flex items-center bg-blue-500 rounded-md p-1.5 text-white ml-2"><AiFillPlusCircle size={18} /><p className="text-xs font-semibold text-white ml-2">Add Group</p></button>
        </div>
      </div>

      <div className="grid grid-cols-6 px-4 mt-2">
        {[...Array(6)].map((_, index) => (
          <ClassItem 
          grade="12th Grade"
          handleOpenPopper={handleOpenPopper}
          handleOpenClass={handleOpenClass}
          />
        ))}
      </div>

       <Popper id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 w-[10%] shadow-lg">
        <PopperElement handleStudentList={handleStudentList} toggleDeleteConfirmation={toggleDeleteConfirmation} />
      </Popper>

      <CustomDialog isOpen={isOpen} onRequestClose={()=> setIsOpen(false)}>
        <div className="bg-white rounded-lg w-1/3 p-1 relative">
          <div className="my-2">
            <p className="text-md font-semibold text-center">Delete Group</p>
          </div>
          <div
          onClick={() => setIsOpen(false)} 
          className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-lg absolute -right-5 -top-5 cursor-pointer">
            x
          </div>
          <div className="py-4 px-3">
            <p className="text-sm">Deleting this group also means data about it members will also be deleted. This action cannot be undone.</p>
          </div>
          <div className="flex items-center p-4 justify-end">
            <div
            onClick={() => setIsOpen(false)} 
            className="bg-gray-100 p-1.5 rounded-md cursor-pointer hover:bg-gray-200">
              <p className="text-sm">Cancel</p>
            </div>
            <div className="bg-red-400 p-1.5 rounded-md ml-2 cursor-pointer hover:bg-red-500">
              <p className="text-sm font-semibold text-white">Delete group</p>
            </div>
          </div>
        </div>
      </CustomDialog>
      <CreateClassModal 
      openCreateClass={openCreateClass} 
      setOpenCreateClass={setOpenCreateClass}
      handleStudentList={handleStudentList}
      />
      <StudentListModal 
      openStudentModal={openStudentModal}
      setOpenStudentModal={setOpenStudentModal} />
    </div>
  )
}

const ClassItem = ({grade, handleOpenPopper, handleOpenClass, toggleDeleteConfirmation}) => {
  return(
    <div className="relative overflow-hidden bg-white w-9/12 p-2 rounded-md m-2 border">
      <div onClick={handleOpenClass} className="w-full h-full absolute left-0 top-0 z-0" />
          <div className="flex items-center justify-between z-10">
            <p className="text-xs font-semibold">{grade}</p>
            <img className="w-7 h-7 rounded-full border-2" 
            src="https://randomuser.me/api/portraits/men/74.jpg" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col items-center justify-center">
              <BiBookBookmark />
              <p className="text-xs">Subjects</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FcTimeline />
              <p className="text-xs">45 minutes</p>
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <img src="https://randomuser.me/api/portraits/women/42.jpg" 
              className="w-6 h-6 rounded-full bg-gray-200 -ml-2" />
            <img src="https://randomuser.me/api/portraits/men/74.jpg" 
              className="w-6 h-6 rounded-full bg-gray-200 -ml-2" />
            <img src="https://randomuser.me/api/portraits/men/55.jpg" 
              className="w-6 h-6 rounded-full bg-gray-200 -ml-2" />
            <div className="w-6 h-6 rounded-full bg-gray-200 -ml-2 overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/56.jpg"
               />
            </div>
          </div>
          <div title="More Options" onClick={handleOpenPopper} className="absolute bottom-2 z-10">
            <div className="flex">
              <div title="more options" className="bg-gray-100 hover:bg-gray-200 rounded-full p-1">
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
        </div>
  )
}

const PopperElement = ({handleStudentList, toggleDeleteConfirmation}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">More options</p>
      </div>
      <div className="mt-2">
        <div className="p-1 hover:bg-gray-100 rounded-md">
          <p className="text-xs">Edit</p>
        </div>
        <div onClick={handleStudentList} className="p-1 hover:bg-gray-100 rounded-md my-1">
          <p className="text-xs">Add Students</p>
        </div>
        <div
          onClick={toggleDeleteConfirmation}
          className="p-1 hover:bg-gray-100 rounded-md flex items-center text-red-500"
        >
          <IoTrashOutline />
          <p className="text-xs ml-1">Delete</p>
        </div>
      </div>
    </div>
  );
}

const CreateClassModal = ({openCreateClass, setOpenCreateClass, handleStudentList}) => {
  return(
    <CustomDialog isOpen={openCreateClass} onRequestClose={()=> setOpenCreateClass(false)}>
        <div className="bg-white rounded-lg w-2/5 p-2 relative">
          <div className="w-full h-50">
            <img src="https://statics.teams.cdn.live.net/hashed/freemium_fre_invite_members-284be33.svg" />
          </div>
           <div className="flex items-center justify-between p-2">
            <p className="text-md font-semibold">Create Class</p>
            <div
            onClick={()=> setOpenCreateClass(false)}
            className='bg-white border rounded-full p-1 absolute top-5 right-5'>
              <IoClose />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center border-b border-blue-500 p-2">
              <SiGoogleclassroom />
              <input className="text-sm ml-2 outline-none" placeholder="Class Name (i.e. 10th, 11th Grade)" />
            </div>
            <div className="flex items-center rounded-md  my-4">
              <form className="bg-red-400 w-1/3 border overflow-hidden rounded-md">
                <select className="p-1 w-full text-sm appearance-none bg-white" name="cars" id="cars">
                  <option value="volvo">12 Subjects</option>
                  <option value="saab">10 Subjects</option>
                </select>
              </form>
              <form className="bg-white w-1/3 border rounded-lg overflow-hidden ml-1">
                <select className="p-1 w-full text-sm appearance-none bg-white" name="cars" id="cars">
                  <option value="volvo">8AM - 1:15PM</option>
                  <option value="saab">8AM - 3:00PM</option>
                </select>
              </form>
            </div>

            <div
            onClick={handleStudentList} 
            className="border rounded-md flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <MdPeopleOutline />
              <p className="text-sm ml-2">Click to add students</p>  
            </div>
          </div>
          <div className="flex items-center justify-end p-2">
            <div className="bg-gray-100 p-2 rounded-md mr-2">
              <p className="text-sm">More options</p>
            </div>
            <div className="bg-blue-400 p-2 rounded-md hover:bg-blue-500">
              <p className="text-sm text-white">Submit</p>
            </div>
          </div>
        </div>
    </CustomDialog>
  )
}

const StudentListModal = ({openStudentModal, setOpenStudentModal}) => {
  return(
    <CustomDialog isOpen={openStudentModal} onRequestClose={()=> setOpenStudenModal(false)}>
        <div className="bg-white rounded-lg w-2/5 p-4 relative">
          <div className="flex items-center justify-between text-center">
            <p className="text-md font-semibold">Add Students</p>
            <div
            onClick={()=> setOpenStudentModal(false)} 
            className="bg-white border p-2 rounded-full cursor-pointer">
              <IoClose />
            </div>
          </div>
          <div className="flex items-center p-1 rounded-md border mt-5">
            <IoIosSearch />
            <input className="text-sm ml-2 outline-none" placeholder="Search" />
          </div>
          <div className="bg-gray-100 rounded-md h-28 flex items-center justify-center mt-5">
            <p className="text-xs">No student selected</p>
          </div>
          <div>
            <div className="p-2 mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold">Students</p>
              <div className="border p-1 rounded-md cursor-pointer flex items-start">
                <AiOutlinePlus className="text-sm" />
                <p className="text-xs ml-1">Create new profile</p>
              </div>
            </div>
            <div className="overflow-auto h-56">
              <div className="flex items-center rounded-md p-1 mt-2 hover:bg-gray-100 cursor-pointer">
                <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/51.jpg" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">James Freeman</p>
                </div>
              </div>
              <div className="flex items-center rounded-md p-1 mt-2 hover:bg-gray-100 cursor-pointer">
                <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/6.jpg" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">Ezekiel Browne</p>
                </div>
              </div>
              <div className="flex items-center rounded-md p-1 mt-2 hover:bg-gray-100 cursor-pointer">
                <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/41.jpg" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">May Sumo</p>
                </div>
              </div>
              <div className="flex items-center rounded-md p-1 mt-2 hover:bg-gray-100 cursor-pointer">
                <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/51.jpg" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">Sarah Jones</p>
                </div>
              </div>
              <div className="flex items-center rounded-md p-1 mt-2 hover:bg-gray-100 cursor-pointer">
                <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/50.jpg" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">Jake Pope</p>
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=> setOpenStudentModal(false)} className='bg-white border-2 rounded-full p-2 absolute bottom-7 right-7 cursor-pointer hover:shadow-lg'>
              <p className="text-sm">Add (0)</p>
          </div>
        </div>
    </CustomDialog>
  )
}