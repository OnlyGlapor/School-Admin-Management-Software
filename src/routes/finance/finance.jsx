import React, { useState } from 'react';

import Header from '../../components/finance/Header';
import Statistics from '../../components/finance/Statistics';
import DailyInput from '../../components/finance/DailyInput';
import EmployeesList from '../../components/finance/EmployeesList';
import ActivityLog from '../../components/reusable/ActivityLog';
import Weather from '../../components/reusable/Weather';

import { useNavigate } from 'react-router-dom';

const Finance = () => {
  return (
    <div className="flex justify-between w-full h-full">
      <div className="scrollable grow overflow-auto p-2">
        <Header />
        <div className="flex justify-around rounded-md mt-2">
          <Statistics />
          <DailyInput />
        </div>
        <EmployeesList />
      </div>
      <div className="w-1/4 bg-white overflow-auto shadow-md sidebar-scrollable">
        <ActivityLog />
        <Weather />
      </div>
    </div>
  );
};

export default Finance;