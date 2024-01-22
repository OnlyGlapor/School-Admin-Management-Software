import React, {useState} from 'react';
import { BiSearch, BiFile } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';
import { IoIosArrowRoundBack } from "react-icons/io";

import LookingForComponent from '../../components/searchModal/LookingForComponent';
import LastSearchComponent from '../../components/searchModal/LastSearchComponent';
import QuickActions from '../../components/searchModal/QuickActions';

var lookingForData = ["All", "Teachers", "students", "Staffs", "More"];

import { useNavigate } from 'react-router-dom';

const ViewFeesTrackerModal = ({onRequestClose, FeesData}) => {
  const [lookingFor, setLookingFor] = useState('All');

  const handleLookingFor = (filter) => {
    setLookingFor(filter);
  }

  const { title, grade, data } = FeesData;

  const navigate = useNavigate();
  
  const checkStudentProfile = () => {
    navigate('/students/students_list/1');
  }

  return(
    <div className="bg-white w-2/5 rounded-lg p-3 py-4 relative shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={title == "Pending Fees" ? "bg-orange-500 w-2 h-2 pb-5" : "bg-blue-500 w-2 h-2 pb-5"}></div>
          <p className="text-md font-medium ml-1">{title}</p>
        </div>
        <button title="Close Modal" onClick={onRequestClose} className="hover:bg-gray-100 rounded-full">
          <IoIosArrowRoundBack size={25} />
        </button>
      </div>
      <div className={title == "Received Fees" ? "p-2 rounded-md bg-gradient-to-r from-blue-200 to-white-500" : "p-2 rounded-md"}>
        <p className="text-sm font-medium ">{grade}</p>
      </div>
      <div className="w-full flex items-center bg-gray-100 p-1 px-2 rounded-full mt-3">
          <BiSearch />
          <input autoFocus className="text-sm outline-none ml-1 bg-gray-100 flex-1 caret-blue-500 focus" placeholder="Enter student name" />
      </div>
      <div className="mt-5 px-2 h-[300px] overflow-auto">
        {data.map((item, index) => (
          <Item studentName={item.studentName} percentageComplete={item.percentageComplete} checkStudentProfile={checkStudentProfile} />
        ))}
      </div>
    </div>
  )
}

export default ViewFeesTrackerModal;

const Item = ({studentName, percentageComplete, checkStudentProfile}) => {

  const renderPercentage = () => {
    if(percentageComplete < 30){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm text">{studentName}</p>
          <p className="bg-red-400 p-1 px-2 rounded-full text-xs text-white font-medium">{percentageComplete}% complete</p>
        </li>
      )
    }else if(percentageComplete < 50){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-red-200 p-1 px-2 rounded-full text-xs font-medium">{percentageComplete}% complete</p>
        </li>
      )
    }else if (percentageComplete < 70){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-green-200 p-1 px-2 rounded-full text-xs font-medium">{percentageComplete}% complete</p>
        </li>
      )
    }else if (percentageComplete < 80 || percentageComplete > 80 && percentageComplete < 90){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-green-300 p-1 px-2 rounded-full text-xs font-medium">{percentageComplete}% complete</p>
        </li>
      )
    }else if (percentageComplete < 90 && percentageComplete != 80){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-black p-1 px-2 rounded-full text-xs font-medium">{percentageComplete}% complete</p>
        </li>
      )
    }else if (percentageComplete > 90 && percentageComplete < 100){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-green-500 p-1 px-2 rounded-full text-xs font-medium text-white">{percentageComplete}% complete</p>
        </li>
      )
    }else if (percentageComplete === 100){
      return(
        <li onClick={checkStudentProfile} className={"flex items-center justify-between hover:bg-gray-200 p-2 cursor-pointer border-b"}>
          <p className="font-medium text-sm">{studentName}</p>
          <p className="bg-gray-200 p-1 px-2 rounded-full text-xs font-medium text-black">complete</p>
        </li>
      )
    }
  }

  return(
    <>
      {renderPercentage()}
    </>
  );
}