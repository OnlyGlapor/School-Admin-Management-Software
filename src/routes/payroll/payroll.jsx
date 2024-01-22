import React, { useState } from 'react';

import { GoDotFill } from 'react-icons/go';
import { IoMdArrowUp, IoMdNotificationsOutline } from 'react-icons/io';

import { AiOutlineEdit, AiOutlineFullscreen, AiFillPlusCircle } from 'react-icons/ai';
import { BsChevronDown, BsChevronRight, BsArrowLeft } from 'react-icons/bs';
import { MdAttachMoney }  from 'react-icons/md'
import CustomPieChart from '../../components/reusable/PieChart';
import SemiCircleProgressBar from '../../components/reusable/SemiCircleProgressBar';
import CustomBarChart from '../../components/reusable/BarChart';
import DoughnutPie from '../../components/reusable/DoughnutPie';

import Header from '../../components/payroll/Header';
import EmployeeTable from '../../components/payroll/EmployeeTable';


import { useNavigate } from 'react-router-dom';

const Payroll = () => {

  return (
    <div className="flex justify-between w-full h-full">
      <div className="grow overflow-auto p-2">
        <Header />
        <EmployeeTable />
      </div>
      <div className="w-2/6 bg-white">
        <div>
          <div className="flex items-center justify-between p-5">
            <p className="text-sm font-semibold">Activity Log</p>
            <div className="hover:bg-gray-200 rounded-md p-1">
              <p className="text-xs cursor-pointer">View more</p>
            </div>
          </div>
          <div className="px-5">
            <div className="">
              <p className="text-xs font-semibold">Income</p>
                <div className="p-1 rounded mt-2">
                  <p className="text-xs">School Fees Payment (12th Grade)</p>
                  <p className="text-xs font-semibold cursor-pointer mt-1 text-blue-500">View More</p>
                </div>
                <div className="p-1 rounded mt-1">
                  <p className="text-xs">School Fees Payment (12th Grade)</p>
                  <p className="text-xs font-semibold cursor-pointer mt-1 text-blue-500">View More</p>
                </div>
            </div>
            <div className="mt-2">
              <p className="text-xs font-semibold">Expenses</p>
                <div className="p-1 hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs">You have just confirm the payment of Electricity bill</p>
                </div>
                <div className="p-1 hover:bg-gray-200 rounded mt-1 cursor-pointer">
                  <p className="text-xs">You have just confirm the payment of WAEC registration fees </p>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Payroll;
