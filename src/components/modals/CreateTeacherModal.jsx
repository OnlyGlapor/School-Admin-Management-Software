import { useState } from 'react';

import CustomDialog from '../../components/reusable/Dialog';
import Button from '@mui/material/Button';
import { IoClose, IoPersonCircleOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import { IoMdPerson } from "react-icons/io";

const studentStatus = ["Yes","No"]

const grades = [
  "Nursery",
  "K1",
  "K2",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
]



const CreateTeacherModal = ({openCreateTeacherModal, handleCreateTeacherModal}) => {
  const [createProfile, setCreateProfile] = useState('Step 1');

  const handleNextButton = () => {
    if(createProfile == 'Step 1'){
      setCreateProfile('Step 2')
    }else {
      setCreateProfile("Step 3")
    }
  }

  const handleBackButton = () => {
    if(createProfile == 'Step 3'){
      setCreateProfile('Step 2')
    }else {
      setCreateProfile("Step 1")
    }
  }

  const [openCancellationModal, setOpenCancellationModal] = useState(false);

  const handleOpenCancellationModal = () => {
    if(createProfile == 'Step 2'){
      setOpenCancellationModal(true);
    }
  }

  const handleCancelAction = () => {
    setOpenCancellationModal(false);
    setCreateProfile('Step 2');
    handleCreateTeacherModal();
  }

  return(
    <CustomDialog isOpen={openCreateTeacherModal} onRequestClose={() => setOpenCreateStudentModal(false)}>
      <>
      {createProfile === 'Step 1' && <CreateProfilePrompt handleCreateTeacherModal={handleCreateTeacherModal} handleNextButton={handleNextButton} />}
      {createProfile === 'Step 2' && <CreateProfile studentStatus={studentStatus} grades={grades} handleCreateTeacherModal={handleCreateTeacherModal} handleNextButton={handleNextButton} handleBackButton={handleBackButton} handleOpenCancellationModal={handleOpenCancellationModal} />}
      {createProfile === 'Step 3' && <DocumentSubmissionStep handleCreateTeacherModal={handleCreateTeacherModal} handleBackButton={handleBackButton} />}
      <CancellationModal openCancellationModal={openCancellationModal} setOpenCancellationModal={setOpenCancellationModal} handleCancelAction={handleCancelAction} />
      </>
    </CustomDialog>
  );
}

export default CreateTeacherModal;


const CreateProfilePrompt = ({handleNextButton, handleCreateTeacherModal}) => {
  return(
    <div className="w-3/5 h-3/4 rounded-lg bg-white p-5 relative flex flex-col justify-center overflow-hidden">
      <div className="flex justify-center z-50">
        <button onClick={handleCreateTeacherModal} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-lg cursor-pointer absolute right-2 top-2">
         <IoClose />
        </button>
        <div className="flex flex-col items-start w-2/3 pl-5">
          <div className="bg-gray-100 p-2 rounded-full">
            <IoPersonCircleOutline size={35} />
          </div>
          <div className="mt-5 shadow-md">
            <p className="text-xl font-bold text-white">Create Teacher Profile</p>
            <p className="text-base font-medium mt-3 text-white pr-2">This action will notify all admins of this system, Remember to add all the necessary student records.</p>
          </div>
        </div>
        <div className="w-2/3 h-[70%] overflow-hidden m-auto flex justify-center">
          <img src="https://cdn2.iconfinder.com/data/icons/users-89/200/create-account-1--create-account-USER-INFO-INFORMATION-DETAILS-PROFILE-PERSONAL-SOCIAL-MEDIA-APP-512.png" />
        </div>
      </div>
      <div className="w-full absolute bottom-10 left-0 pb-4 flex justify-center z-10">
        <Button
        size="large"
        onClick={handleNextButton}
        className="w-56 p-2.5 text-center cursor-pointer"
        style={{backgroundColor: '#3B82F6', textTransform: 'none', borderRadius: 20, border: '1px solid #fff' }}>
          <p className="text-sm text-white font-medium">Create Profile</p>
        </Button>
      </div>
      <div className="absolute left-0 w-1/2 h-full">
        <img className="h-full object-cover" src="https://secondlineblog.org/wp-content/uploads/2018/11/BMEC1.jpg" />
      </div>
      <div className="w-1/2 h-full bg-blue-500 bg-opacity-40 absolute left-0"></div>
    </div>
  );
}


const CreateProfile = ({studentStatus, grades, handleCreateTeacherModal, handleNextButton, handleBackButton, handleOpenCancellationModal}) => {
  return(
    <div className="max-w-3/5 h-3/4 rounded-lg bg-white relative flex flex-col">
      <div className="flex items-center justify-between p-4">
        <p className="text-md font-semibold ml-5">Create Student Profile</p>
        <div className="w-9 h-9 bg-gray-100 rounded-full -ml-32 flex items-center justify-center">
          <IoMdPerson />
        </div>
        <button onClick={handleOpenCancellationModal} className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-lg cursor-pointer">
         <IoClose />
        </button>
        <div className="absolute bottom-5 right-10">
          <Button onClick={handleNextButton}>Next</Button>
        </div>
      </div>
        <div>
          <div className="flex justify-start mt-2 px-10 py-5">
            <div>
              <TextInput type="text" title="First Name" placeholder="Enter first name" />
              <TextInput type="text" title="Middle Name" placeholder="Enter middle name" />
              <TextInput type="text" title="Last Name" placeholder="Enter last name" />
              <TextInput type="date" title="Date of birth" placeholder="i.e. Sept 14, 2003" />
              <DropDown title="Grade" options={grades} />
              <TextInput title="User Type" placeholder="Student"/>
            </div>
            <div className="ml-10">
              <TextInput type="email" title="Email Address" placeholder="Enter email Address" />
              <TextInput type="tel" title="Phone Number" placeholder="Phone Number" />
              <DropDown title="Are you a new student?" options={studentStatus} />
              <TextInput type="checkbox" title="I consent to the school law and order." placeholder="Agree" />
            </div>
          </div>
        </div>
      </div>
  );
}

const TextInput = ({title, placeholder, type}) => {
  return(
    <div className="flex items-center my-4">
      <p className="text-sm font-semibold w-32">{title}:</p>
      <input type={type} className="text-sm border p-1 rounded-md ml-2" placeholder={placeholder} />
    </div>
  );
}

const DropDown = ({title, options}) => {
  console.log(options);

  return(
    <div className="flex items-center my-4">
      <p className="text-xs font-semibold w-32">{title}:</p>
      <select className="bg-white border w-40 ml-2 rounded-md p-1 text-xs">
        {options.map((option, index) => (
          <option key="index">{option}</option>
        ))}
      </select>
    </div>
  );
}

const DocumentSubmissionStep = ({handleNextButton, handleBackButton}) => {
  return(
    <div className="w-3/5 h-3/4 rounded-lg bg-white p-5 relative flex flex-col">
      <div className="flex items-center justify-between">
        <button onClick={handleBackButton} className="bg-gray-100 p-2 rounded-full">
          <BsArrowLeft />
        </button>
        <Button>Create</Button>
      </div>
      <div className="p-2">
        <p className="text-md font-semibold mt-2">Create Student Profile</p>
        <p className="text-sm mt-2">Please submit the required documents if you are a new student!</p>
      </div>
      <div className="grid grid-cols-4 gap-5 h-32 my-10">
        <DocumentItem title="Upload Report Card" />
        <DocumentItem title="Upload Transcript" />
        <DocumentItem title="Upload Letter Of Recommendation from school" />
        <DocumentItem title="Upload Letter of Recommendation from community"/>
      </div>
      <div className="w-full absolute bottom-0 left-0 pb-4 flex justify-center">
        <div onClick={handleNextButton} className="bg-blue-100 w-56 rounded-full p-2 text-center cursor-pointer">
          <p className="text-sm text-white">Uploading 20%</p>
        </div>
      </div>
    </div>
  );
}

const DocumentItem = ({title, notice}) => {
  return(
    <div className="bg-gray-50 rounded-md flex flex-col items-center justify-center text-center hover:bg-gray-100 cursor-pointer p-2 mb-5">
      <p className="text-xs text-gray-700">{title}</p>
    </div>
  );
}

const CancellationModal = ({openCancellationModal, setOpenCancellationModal, handleOpenCancellationModal, handleCancelAction}) => {
  return(
    <CustomDialog isOpen={openCancellationModal} onRequestClose={() => setOpenCancellationModal(false)}>
      <div className="bg-white p-5 rounded-md">
        <p className="text-md">Are you sure you want to cancel this action?</p>
        <p className="text-xs mt-2 text-gray-700">All inputted data will be cleared!</p>
        <div className="flex items-center mt-2">
          <Button onClick={() => setOpenCancellationModal(false)}>Cancel</Button>
          <Button onClick={handleCancelAction} sx={{color: 'red'}}>Yes</Button>
        </div>
      </div>
    </CustomDialog>
  );
}