import React, { useState } from 'react';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';
import Footer from '../components/footer/Footer';

import CustomModal from '../components/reusable/Modal';
import SearchModal from '../components/modals/SearchModal';
import CreateStudentModal from '../components/modals/CreateStudentModal';
import CreateTeacherModal from '../components/modals/CreateTeacherModal';

import PdfReader from '../components/modals/PdfReader';

import { Outlet } from "react-router-dom";

export default function Root() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const [isloggedIn, setIsLoggedIn] = useState(false);

  const toggleLogout = () => {
    setIsLoggedIn(!isloggedIn)
  }

  const [openCreateStudentModal, setOpenCreateStudentModal] = useState(false);

  const handleCreateStudentModal = () => {
    setOpenCreateStudentModal(!openCreateStudentModal);
  }

  const [openCreateTeacherModal, setOpenCreateTeacherModal] = useState(false);

  const handleCreateTeacherModal = () => {
    setOpenCreateTeacherModal(!openCreateTeacherModal);
  }
  return (
    <div className="h-screen flex-col justify-between">
      <Header toggleModal={toggleModal} toggleLogout={toggleLogout} handleCreateStudentModal={handleCreateStudentModal} handleCreateTeacherModal={handleCreateTeacherModal} />
      <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <SearchModal onRequestClose={() => setModalIsOpen(false)} />
      </CustomModal>
      <div className='flex justify-between h-[85%]'>
        <Menu />
        <div className=" w-11/12 grow">
          <Outlet />
        </div>
      </div>
      <LogoutModal isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />
      <CreateStudentModal openCreateStudentModal={openCreateStudentModal} handleCreateStudentModal={handleCreateStudentModal} />
      <CreateTeacherModal openCreateTeacherModal={openCreateTeacherModal} handleCreateTeacherModal={handleCreateTeacherModal} />
      <Footer />
    </div>
  );
}

const LogoutModal = ({isloggedIn, setIsLoggedIn}) => {
  return(
    <CustomModal isOpen={isloggedIn} onRequestClose={() => setIsLoggedIn(false)}>
      <div className="bg-white w-1/4 h-48 rounded-lg flex flex-col items-center justify-center shadow-lg">
        <p className="text-md font-semibold">Are you sure you want to logout?</p>
        <div className="flex items-center justify-around w-full mt-10">
          <p className="text-sm font-semibold text-black p-2 hover:bg-gray-100 rounded-md cursor-pointer">Yes, log me out</p>
          <p onClick={() => setIsLoggedIn(false)} className="text-sm font-semibold text-blue-500 p-2 hover:bg-gray-100 rounded-md cursor-pointer">Cancel</p>
        </div>
      </div>
    </CustomModal>
  );
}
