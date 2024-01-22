import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';

export default function CustomDrawer({children, open, setOpen, toggleDrawer}) {
  return (
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        hideBackdrop
        className="bg-black bg-opacity-5 backdrop-filter"
      >
        {children}
      </Drawer>
  );
}
