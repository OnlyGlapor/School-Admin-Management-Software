import React, {useState} from 'react';
import { BiSearch, BiFile } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';

import LookingForComponent from '../../components/searchModal/LookingForComponent';
import LastSearchComponent from '../../components/searchModal/LastSearchComponent';
import QuickActions from '../../components/searchModal/QuickActions';

var lookingForData = ["All", "Teachers", "students", "Staffs", "More"];

const SearchModal = ({onRequestClose}) => {
  const [lookingFor, setLookingFor] = useState('All');

  const handleLookingFor = (filter) => {
    setLookingFor(filter);
  }
  return(
    <div className="bg-white w-3/6 rounded-lg p-2 py-4 relative shadow-lg">
        <button
        title="Close Modal"
        className="bg-blue-500 rounded-full w-10 h-10 absolute bottom-10 right-10 text-2xl text-white" onClick={onRequestClose}>x</button>
        <div className="flex items-center w-full">
          <div className="w-full flex items-center bg-gray-100 p-1 px-2 rounded-full">
            <BiSearch />
            <input autoFocus className="text-sm outline-none ml-1 bg-gray-100 flex-1 caret-blue-500 focus" placeholder="Search students, teachers & Docs..." />
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm font-semibold my-2">I'm looking for</p>
          <LookingForComponent lookingForData={lookingForData} lookingFor={lookingFor} handleLookingFor={handleLookingFor} />
        </div>

        <div className="p-2">
          <p className="text-sm font-semibold my-2">Last Search</p>
          <LastSearchComponent lookingFor={lookingFor} />
        </div>

        <div className="p-2">
          <p className="text-sm font-semibold my-1">Quick Action</p>
          <QuickActions />
        </div>
    </div>
  )
}

export default SearchModal;