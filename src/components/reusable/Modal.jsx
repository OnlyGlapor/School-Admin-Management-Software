import React from 'react';
// import Modal from 'react-modal';
import Modal from '@mui/material/Modal';
import { BiSearch, BiFile } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';

const CustomModal = ({children, isOpen, onRequestClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      contentLabel="Search Modal"
      className="absolute top-0 w-full h-full flex items-center justify-center bg-blue-100 bg-opacity-10 backdrop-filter backdrop-blur-sm z-20 transition-opacity duration-500"
    >
        {children}
    </Modal>
  );
};

export default CustomModal;