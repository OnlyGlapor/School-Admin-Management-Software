import { useState, useRef, useEffect } from 'react';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';
import { TfiMoreAlt } from "react-icons/tfi";

import Popper from '@mui/material/Popper';
import Zoom from '@mui/material/Zoom';

const studentsData = [
  {
    header: ["Pos", "Student Name", "Class", "Semester", "Period", "Avg.Grade"],
    data: [
      {
        id: 0,
        position: 1,
        studentName: "Dorcas Robinson",
        grade: 12,
        semester: 2,
        period: 6,
        average: 98.8
      }
    ],
  }
];
const teachersHeaderData = [
  {
    header: ["Name", "Subjects", "Degree", "Salary", "Status"],
    data: [
      {
        id: 1,
        teacherImg: "https://img.freepik.com/free-photo/romantic-teenage-girl-keeps-lips-rounded-wants-kiss-boyfriend-while-having-date-wears-big-transparent-glasses-casual-sweatshirt-isolated-yellow-wall-tender-relationship-moment_273609-49694.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
        teacherName: "Mr K Zubah Kollie Jr",
        subjects: "Lit., Computer Sci.",
        degree: "AA, BSC",
        salary: "$ 25,000",
        status: "employed"
      }
    ]
  }
];

const staffsHeaderData = ["Pos", "Student ID", "Student Name", "Class", "Semester", "Period", "Avg.Grade"];


const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
};

const StarStudent = () => {

	const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopper = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

	const GoToStudentProfile = () => {
	    navigate('/students/students_list/1/')
	}

  const popperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(popperRef.current && !popperRef.current.contains(event.target)){
        handleOpenPopper()
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  },[handleOpenPopper])

  const [activeTab, setActiveTab] = useState("Students");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  }

  let tableData;

  if (activeTab === 'Students') {
    tableData = studentsData;
  } else if (activeTab === 'Teachers') {
    tableData = teachersHeaderData;
  } else if (activeTab === 'Staffs') {
    tableData = staffsHeaderData;
  } else {
    // Default fallback value or additional tabs can be handled here
    tableData = [];
  }

	return(
    <Zoom in={10} timeout={400} unmountOnExit>
		<div className="flex-1 bg-white rounded-md">
        <div className="flex items-center justify-between p-4">
          <p className="text-sm font-semibold">Database</p>

          <div className="flex items-center">
            <div className="flex items-center justify-between">
              <HeaderItem title="Students" activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <HeaderItem title="Teachers" activeTab={activeTab} handleActiveTab={handleActiveTab} />
              <HeaderItem title="Other Staffs" activeTab={activeTab} handleActiveTab={handleActiveTab} />
            </div>
            <div
            onClick={handleOpenPopper} 
            className="cursor-pointer ml-5">
              <TfiMoreAlt />
            </div>
          </div>
          <Popper ref={popperRef} id={id} open={open} anchorEl={anchorEl} className="bg-white border rounded-md p-2 w-[10%] shadow-lg">
            <StarStudentPopperElement />
          </Popper>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                {tableData[0].header.map((item, index) => (
                  <th>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData[0].data.map((item, index) => (
                <TableItem item={item} activeTab={activeTab} GoToStudentProfile={GoToStudentProfile} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
    </Zoom>
	);
}

export default StarStudent;

const HeaderItem = ({title, activeTab, handleActiveTab}) => {
  return(
    <div
    onClick={() => handleActiveTab(title)}
    className={`cursor-pointer ${activeTab === title ? "border-b-2 border-blue-400" : ""} ${title === "Teachers" ? "mx-2" : ""}`}>
      <p className={activeTab === title ? "text-sm font-medium text-blue-400" : "text-sm"}>{title}</p>
    </div>
  );
}

const StarStudentPopperElement = ({}) => {
  return(
    <div>
      <div className="">
        <p className="text-xs font-semibold">More options</p>
      </div>
      <div className="mt-2">
        <div className="p-1 hover:bg-gray-100 rounded-md flex items-center">
          {/*<LuPrinter />*/}
          <p className="text-xs ml-1">View More</p>
        </div>
        <div className="p-1 hover:bg-gray-100 rounded-md flex items-center">
          <LuPrinter />
          <p className="text-xs ml-1">Print</p>
        </div>
        <div className="p-1 hover:bg-gray-100 rounded-md flex items-center">
          <FaRegShareFromSquare />
          <p className="text-xs ml-1">Share</p>
        </div>
      </div>
    </div>
  )
}


const TableItem = ({activeTab, item, GoToStudentProfile}) => {
  if(activeTab === "Students"){
    return(
      <tr title={name} onClick={GoToStudentProfile}>
        <td>{item.position}</td>
        <td className="w-56">{item.studentName}</td>
        <td>{item.grade}</td>
        <td>{item.semester}</td>
        <td>{item.period}</td>
        <td>{item.average}</td>
      </tr>
    );
  }else if(activeTab === "Teachers"){
    return(
      <tr title={item.teacherName} onClick={GoToStudentProfile}>
        <td className="w-52 flex items-center px-3"><img src={item.teacherImg} className="w-[30px] h-[30px] rounded-full mr-2" /> {item.teacherName}</td>
        <td>{truncateText(item.subjects, 10)}</td>
        <td>{item.degree}</td>
        <td>{item.salary}</td>
        <td>{item.status}</td>
      </tr>
    );
  }
  return null
}