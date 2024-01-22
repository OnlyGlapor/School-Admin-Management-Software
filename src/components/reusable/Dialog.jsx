import React from 'react';
// import Modal from 'react-modal';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { BiSearch, BiFile } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';

const CustomDialog = ({children, isOpen, onRequestClose }) => {
  return (
    <Modal
        open={isOpen}
        onClose={onRequestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="absolute top-0 w-full h-full flex items-center justify-center z-20 bg-black bg-opacity-5"
      >
        {children}
      </Modal>
    
  );
};

export default CustomDialog;