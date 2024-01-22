import React, { useState, useEffect } from 'react';
import styles from '../student_item/styles.module.css';
import SearchBar from '../../components/reusable/searchBar';
import { BsArrowLeft, BsDot } from 'react-icons/bs';
import { BiHealth } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineFullscreen } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';
import { GrOverview } from 'react-icons/gr';
import { FaGlasses } from "react-icons/fa6";
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdFamilyRestroom, MdAttachMoney } from 'react-icons/md';
import { PiWarningOctagonBold } from 'react-icons/pi';
import { BiExport } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import DoughnutPie from '../../components/reusable/DoughnutPie';
import CustomDialog from '../../components/reusable/Dialog';

import { useNavigate } from 'react-router-dom';

const data = [
    { id: 'Incompleted', value: 70, color: '#3B82F6' },
    { id: 'Completed', value: 30, color: '#33A6FF' },
];

const feesPercentage = [
	{ id: 'balance', value: 70, color: '#3B82F6' },
    { id: 'paid', value: 30, color: '#33A6FF' },
]

export default function Students_Item (){
	const [activeTab, setActiveTab] = useState('Overview');

	const [schedule, setSchedule] = useState([
	    { time: '8:30 AM - 9:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
	    { time: '9:15 AM - 9:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
	    { time: '9:30 AM - 10:15 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
	    { time: '10:15 AM - 10:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
	    { time: '10:30 AM - 11:15 AM', monday: 'RECESS', tuesday: 'RECESS', wednesday: 'RECESS', thursday: 'RECESS', friday: 'RECESS' },
	    { time: '11:15 AM - 11:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
	    { time: '11:30 AM - 12:30 AM', monday: 'Class A', tuesday: 'Class B', wednesday: 'Class C', thursday: 'Class D', friday: 'Class E' },
    ]);

     const [subjects, setSubjects] = useState([
    { name: 'Math', grades: [90, 85, 92, 60, 'N/A', 'N/A', 'N/A', 'N/A'] },
    { name: 'English', grades: [88, 92, 90, 67, 'N/A', 'N/A', 'N/A', 'N/A'] },
    { name: 'Science', grades: [92, 87, 94, 98, 'N/A', 'N/A', 'N/A', 'N/A'] },
    // Add more subjects and grades as needed
	 ]);

	const studentData = [
	    { subject: 'Math', percentage: 80 },
	    { subject: 'English', percentage: 75 },
	    { subject: 'Science', percentage: 90 },
	    // Add more subjects and their percentages
    ];

	const navigate = useNavigate();

	const goBack = () => {
	    navigate(-1)
	};

	const [openEditInfo, setOpenEditInfo] = useState(false);

	const handleEditModal = () => {
		setOpenEditInfo(!openEditInfo);
	}

	const [openImageModal, setOpenImageModal] = useState(false);

	const handleOpenImageModal = () => {
		setOpenImageModal(!openImageModal);
	}

	return(
		<div className="p-5 w-full h-full overflow-auto bg-white">
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center">
					<div className="bg-gray-100 p-1 rounded-full hover:bg-gray-200 cursor-pointer" onClick={goBack}>
						<BsArrowLeft />
					</div>
					<p className="text-lg font-semibold ml-2">Kelvin's Profile</p>
				</div>

				<div
				onClick={handleEditModal} 
				className="bg-gray-100 p-1 rounded-full hover:bg-gray-200 cursor-pointer">
					<AiOutlineEdit />
				</div>
			</div>	

			<div className="p-2 px-5 mt-5">
				<div className="flex items-center">
					<div
					onClick={handleOpenImageModal} 
					className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden border-2 border-blue-500">
						<img
						src="https://s3.envato.com/files/241332759/MON1095025.jpg" />
					</div>
					<div className="ml-2">
						<p className="text-md font-semibold">Kelvin Nimely</p>
						<div className="flex items-center text-sm">
							<p>Age: 18</p>
							<BsDot />
							<p>Student</p>
							<BsDot />
							<p>Liberian</p>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<ul className="flex items-center">
						<li className={activeTab === 'Overview' ? 'flex items-center bg-blue-500 p-1 rounded-md text-white cursor-pointer' : 'flex items-center cursor-pointer'} onClick={() => setActiveTab('Overview')}>
						   <FaGlasses />
						   <p className={activeTab === "Overview" ? "text-sm ml-2": "text-sm ml-2"}>Overview</p>
						</li>
						<li className={activeTab === "Academics" ? "flex items-center bg-blue-500 p-1 rounded-md ml-2 text-white cursor-pointer" : "flex items-center p-1 ml-2 rounded-md cursor-pointer"} onClick={() => setActiveTab('Academics')}>
						  <HiOutlineAcademicCap />
						  <p className="text-sm ml-1">Academics</p>
						</li>
						<li className={activeTab === "Fees" ? "flex items-center bg-blue-500 p-1 rounded-md ml-2 text-white cursor-pointer" : "flex items-center p-1 ml-2 rounded-md cursor-pointer"} onClick={() => setActiveTab('Fees')}>
						  <MdAttachMoney />
						  <p className="text-sm ml-1">Fees Record</p>
						</li>
						<li className={activeTab === "Health & Activities" ? "flex items-center bg-blue-500 p-1 ml-2 rounded-md text-white cursor-pointer" : "flex items-center p-1 ml-2 rounded-md cursor-pointer"} onClick={() => setActiveTab('Health & Activities')}>
						  <BiHealth />
						  <p className="text-sm ml-2">Health & Activities</p>
						</li>
						<li className={activeTab === "Family" ? "flex items-center bg-blue-500 p-1 ml-2 rounded-md text-white cursor-pointer" : "flex items-center p-1 ml-2 rounded-md cursor-pointer"} onClick={() => setActiveTab('Family')}>
						  <MdFamilyRestroom />
						  <p className="text-sm ml-2">Family</p>
						</li>
						<li className={activeTab === "Counseling & Permissions" ? "flex items-center bg-blue-500 p-1 ml-2 rounded-md text-white cursor-pointer" : "flex items-center p-1 ml-2 rounded-md cursor-pointer"} onClick={() => setActiveTab('Counseling & Permissions')}>
						  <PiWarningOctagonBold />
						  <p className="text-sm ml-2">Counseling & Permissions</p>
						</li>
					</ul>
				</div>
			</div>
			<div>
				{activeTab === 'Overview' ? (
				  <Overview />
				) : activeTab === 'Academics' ? (
					<Academics subjects={subjects} schedule={schedule} studentData={studentData} />
				) : activeTab === 'Fees' ? (
					<FeesRecord />
				) : activeTab === 'Health & Activities' ? (
				  <HealthActivities />
				) : activeTab === 'Family' ? (
				  <Family />
				) : activeTab === 'Counseling & Permissions' ? (
				  <CounselingPermissions />
				) : (
				  <h2>Hello</h2>
				)}
			</div>
			<EditInfoModal openEditInfo={openEditInfo} setOpenEditInfo={setOpenEditInfo} schedule={schedule} subjects={subjects} />
			<ImageDetailModal openImageModal={openImageModal} setOpenImageModal={setOpenImageModal} />
		</div>
	)
}

const Overview = () => {
	return(
		<div className="grid grid-cols-5 gap-5 p-4 mt-5 w-4/5 rounded-md">
			<div className="p-1">
				<p className="text-sm font-semibold">First Name</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm">Kelvin</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Middle Name</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm">Tewon</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Last Name</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm">Nimely</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Grade</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm">12</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Date Of Birth</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm">12/05/2023</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Home Address</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">Swary Clinic Avenue, Soul Clinic</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Phone Number</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">+231881796357</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Email Address</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">knimely43@gmail.com</p>
					<AiOutlineEdit />
				</div>
			</div>
			<div className="p-1">
				<p className="text-sm font-semibold">Emergency Contact</p>
				<div className="mt-2 bg-white-50 border rounded-md p-2 flex items-center justify-between cursor-pointer">
					<p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">+231775700159</p>
					<AiOutlineEdit />
				</div>
			</div>
		</div>
	)
}

const Academics = ({schedule, subjects, studentData}) => {
	return(
	   <div className=" p-5">
		<div className="flex items-start bg-white rounded-md">
			<div className="grow border rounded-md p-1">
				<div className="flex items-center justify-between">
					<p className="text-md font-semibold my-2 ml-2">Class Schedule</p>
					<div className="flex items-center">
					    <div className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-200">
					      <p className="text-sm">Export</p>
					      <BiExport className="ml-1" />
				        </div>
				        <div className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-200 ml-2">
					      <p className="text-sm">View Full</p>
					      <AiOutlineFullscreen className="ml-1" />
				        </div>
			      </div>
				</div>
				<table>
		        <thead className="text-sm">
		          <tr>
		            <th>Time</th>
		            <th>Monday</th>
		            <th>Tuesday</th>
		            <th>Wednesday</th>
		            <th>Thursday</th>
		            <th>Friday</th>
		          </tr>
		        </thead>
		        <tbody>
		          {schedule.map((classInfo, index) => (
		            <tr key={index}>
		              <td className="text-xs">{classInfo.time}</td>
		              <td className="text-xs">{classInfo.monday}</td>
		              <td className="text-xs">{classInfo.tuesday}</td>
		              <td className="text-xs">{classInfo.wednesday}</td>
		              <td className="text-xs">{classInfo.thursday}</td>
		              <td className="text-xs">{classInfo.friday}</td>
		            </tr>
		          ))}
		        </tbody>
		        </table>
			</div>
			<div className="w-2/5 border text-center rounded-md ml-2">
				<p className="text-sm font-semibold my-2">Academic Progress</p>
				<DoughnutPie title="Student Performance" data={data} isPercentage={true} />
			</div>
		</div>
		<div className="mt-5 border rounded-md">
			<GradeSheet subjects={subjects} />
		</div>
	</div>
	)
}


const GradeSheet = ({subjects}) => {
  return (
	<div className="bg-white rounded-md p-2">
		<div className="flex items-center justify-between">
	      <p className="text-md font-semibold ml-2">Grade Sheet</p>
	      <div className="flex items-center">
			    <div className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-200">
			      <p className="text-sm">Export</p>
			      <BiExport className="ml-1" />
		        </div>
		        <div className="flex items-center cursor-pointer p-1 rounded-md hover:bg-gray-200 ml-2">
			      <p className="text-sm">View Full</p>
			      <AiOutlineFullscreen className="ml-1" />
		        </div>
	      </div>
	    </div>
      <table className={styles.gradeTable}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>1st Period</th>
            <th>2nd Period</th>
            <th>3rd Period</th>
            <th>Exam</th>
            <th>4th Period</th>
            <th>5th Period</th>
            <th>6th Period</th>
            <th>Exam</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              {subject.grades.map((grade, periodIndex) => (
                <td key={periodIndex}>{grade}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const FeesRecord = ({schedule}) => {
	return(
		<div className=" p-5">
		<div className="flex items-start bg-white rounded-md">
			<div className="grow border rounded-md p-1">
				<p className="text-md font-semibold my-2 ml-2">Fees</p>
				<table>
		        <thead className="text-sm">
		          <tr>
		            <th>First Quarter</th>
		            <th>Second Quarter</th>
		            <th>Third Quarter</th>
		            <th>Fourth Quarter</th>
		            <th>Total</th>
		          </tr>
		        </thead>
		        <tbody>
		            <tr>
		              <td className="text-sm">$ 20,000.00</td>
		              <td className="text-sm">$ 5,000.00 out of 10,000.00</td>
		              <td className="text-sm">$ 5,000.00 out of 5,000</td>
		              <td className="text-sm">$ 10,000.00 out of 10,000</td>
		              <td className="text-sm text-red-500">$ 25,000.00 <br /> (R = 5,000)</td>
		            </tr>
		        </tbody>
		        </table>
		        <div className="text-center mt-5">
		        	<p className="text-sm">Note: 12 Graders total tuition fees is <p className="text-blue-500">$ 30,000.00</p></p>
		        </div>
			</div>
			<div className="w-2/5 border text-center rounded-md ml-2">
				<p className="text-sm font-semibold my-2">Progress So Far</p>
				<DoughnutPie title="Student Performance" data={feesPercentage} isPercentage={true} />
			</div>
		</div>
	</div>
	)
}


const HealthActivities = () => {
    return (
        <div className="grid grid-cols-5 p-5 bg-gray-50 border">
            <div className="">
                <p className="text-sm font-semibold">Immunization Records</p>
                <p className="text-sm">Up to date</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Medical History</p>
                <p className="text-sm">No chronic conditions</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Allergies</p>
                <p className="text-sm">None reported</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Extracurricular Activities</p>
                <p className="text-sm">Soccer, Chess Club</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Achievements and Awards</p>
                <p className="text-sm">Student of the Month (October 2022)</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Upcoming Events</p>
                <p className="text-sm">Science Fair (November 15, 2023)</p>
            </div>
        </div>
    );
};


const Family = () => {
    return (
        <div className="grid grid-cols-5 gap-5 p-5 bg-gray-50 border">
            <div className="">
                <p className="text-sm font-semibold">Parent/Guardian 1</p>
                <p className="text-sm">Up to date</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Relationship</p>
                <p className="text-sm">No chronic conditions</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Contact Number</p>
                <p className="text-sm">None reported</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Parent/Guardian 2</p>
                <p className="text-sm">Soccer, Chess Club</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Relationship</p>
                <p className="text-sm">Mother</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Contact Number</p>
                <p className="text-sm">Science Fair (November 15, 2023)</p>
            </div>
        </div>
    );
};

const CounselingPermissions = () => {
    return (
        <div className="grid grid-cols-5 gap-5 p-5 bg-gray-50 border">
            <div className="">
                <p className="text-sm font-semibold">Counseling Sessions</p>
                <p className="text-sm">Bi-weekly sessions with counselor</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Career Aspirations</p>
                <p className="text-sm">Interested in computer science</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">College Plans</p>
                <p className="text-sm">Considering universities with strong CS programs</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Permission Forms</p>
                <p className="text-sm">Soccer, Chess Club</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Media Release Consent</p>
                <p className="text-sm">Consent given for media coverage</p>
            </div>
            <div className="">
                <p className="text-sm font-semibold">Field Trip Consent</p>
                <p className="text-sm">Consent given for upcoming field trips</p>
            </div>
        </div>
    );
};


const EditInfoModal = ({openEditInfo, setOpenEditInfo, schedule, subjects}) => {
	return(
		<CustomDialog isOpen={openEditInfo} onRequestClose={()=> setOpenEditInfo(false)}>
			<div className="bg-white rounded-lg w-3/5 h-4/5 p-2 relative overflow-auto">
	         <div className="p-4 flex items-center justify-between">
	         	<p className="text-md font-semibold">Edit Info</p>
	         	<div
	         	onClick={()=>  setOpenEditInfo(false)} 
	         	className="bg-gray-100 p-1 rounded-full">
		         	<IoClose />
	         	</div>
	         </div>
	         <div>
		        <div className="p-4 flex items-center justify-between">
			        <p className="text-md font-semibold">Overview</p>
			    </div>
			    <div className="p-4 px-5 flex items-center justify-between">
			        <p className="text-sm font-semibold">Basic</p>
			        <div className="ml-2">
	         			<AiOutlineEdit />
	         		</div>
			    </div>
		        <div className="flex items-center justify-around p-4">
			        <div className="relative">
			         	<div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden relative">
				         	<img className="absolute" src="https://s3.envato.com/files/241332759/MON1095025.jpg" />
			         	</div>
			         	<div className="absolute bg-blue-500 text-white hover:shadow-lg p-2 rounded-full bottom-0 right-0 cursor-pointer">
		         			<AiOutlineEdit />
		         		</div>
		         	</div>
		         	<div className="ml-2 flex items-center w-3/4 grid grid-cols-2 gap-5">
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="First Name" />
		         		</div>
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="Last Name" />
		         		</div>
		         		<div className="flex items-center border">
		         			<select className="flex-1 bg-white text-sm p-1">
		         				<option value="volvo">12 Grade</option>
				                <option value="saab">11 Grade</option>
		         			</select>
		         		</div>
		         		<div className="flex items-center border">
		         			<input type="date" className="text-sm flex-1 p-1" placeholder="Date Of Birth" />
		         		</div>
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="Home Address" />
		         		</div>
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="Phone Number" />
		         		</div>
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="Email Address" />
		         		</div>
		         		<div className="flex items-center border">
		         			<input className="text-sm flex-1 p-1" placeholder="Emergency Contact" />
		         		</div>
		         	</div>
	         	</div>
	         	<Accordion style={{ border: 'none', boxShadow: 'none' }}>
		         	<AccordionSummary
			          aria-controls="panel1a-content"
			          id="panel1a-header"
			        >
			         	<div className="w-2/4 m-auto bg-gray-100 p-2 rounded-md text-center cursor-pointer hover:bg-gray-200">
			         		<p className="text-sm">See more</p>
			         	</div>
		         	</AccordionSummary>
		         	<AccordionDetails>
		         	<div className="p-4">
			         	<div className="p-4 flex items-center justify-between">
					        <p className="text-sm font-semibold">Health & Activities</p>
					        <div className="ml-2">
		         			<AiOutlineEdit />
		         		</div>
					    </div>
			         	<div className="flex items-center justify-around p-4">
				         	<div className="ml-2 flex items-center grid grid-cols-3 gap-5">
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Immunization Records" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Medical History" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Allergies" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Extracurricular Activities" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Home Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Phone Number" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Email Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Emergency Contact" />
				         		</div>
				         	</div>
			         	</div>
		         	</div>

		         	<div className="p-4">
			         	<div className="p-4 flex items-center justify-between">
					        <p className="text-sm font-semibold">Family</p>
					        <div className="ml-2">
			         			<AiOutlineEdit />
			         		</div>
					    </div>
			         	<div className="flex items-center justify-around p-4">
				         	<div className="ml-2 flex items-center grid grid-cols-3 gap-5">
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="First Name" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Last Name" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Grade/Class" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Date Of Birth" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Home Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Phone Number" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Email Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Emergency Contact" />
				         		</div>
				         	</div>
			         	</div>
		         	</div>

		         	{/*Counceling & Consent*/}

		         	<div className="p-4">
			         	<div className="p-4 flex items-center justify-between">
					        <p className="text-sm font-semibold">Counseling & Permissions</p>
					        <div className="ml-2">
			         			<AiOutlineEdit />
			         		</div>
					    </div>
			         	<div className="flex items-center justify-around p-4">
				         	<div className="ml-2 flex items-center grid grid-cols-3 gap-5">
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="First Name" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Last Name" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Grade/Class" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Date Of Birth" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Home Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Phone Number" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Email Address" />
				         		</div>
				         		<div className="flex items-center border overflow-hidden">
				         			<input className="text-sm p-1 w-full" placeholder="Emergency Contact" />
				         		</div>
				         	</div>
			         	</div>
		         	</div>
		         	</AccordionDetails>
	         	</Accordion>
	         </div>

	         <div className="mt-4">
		        <div className="p-4 flex items-center justify-between">
			        <p className="text-md font-semibold">Academics</p>
			    </div>
			    
		        <div>
			        <div className="p-4">
				        <div className="p-4 flex items-center justify-between">
					        <p className="text-sm font-semibold">Class Schedule</p>
					        <div className="ml-2">
			         			<AiOutlineEdit />
			         		</div>
					    </div>
			         	<table>
				        <thead className="text-sm">
				          <tr>
				            <th>Time</th>
				            <th>Monday</th>
				            <th>Tuesday</th>
				            <th>Wednesday</th>
				            <th>Thursday</th>
				            <th>Friday</th>
				          </tr>
				        </thead>
				        <tbody>
				          {schedule.map((classInfo, index) => (
				            <tr key={index}>
				              <td className="text-xs">{classInfo.time}</td>
				              <td className="text-xs">{classInfo.monday}</td>
				              <td className="text-xs">{classInfo.tuesday}</td>
				              <td className="text-xs">{classInfo.wednesday}</td>
				              <td className="text-xs">{classInfo.thursday}</td>
				              <td className="text-xs">{classInfo.friday}</td>
				            </tr>
				          ))}
				        </tbody>
			        </table>
		        </div>

		        <div className="p-4">
			        <div className="p-4 flex items-center justify-between">
				        <p className="text-sm font-semibold">Grade Report</p>
				        <div className="ml-2">
		         			<AiOutlineEdit />
		         		</div>
				    </div>
	     	        <table>
			        <thead>
			          <tr>
			            <th>Subject</th>
			            <th>1st Period</th>
			            <th>2nd Period</th>
			            <th>3rd Period</th>
			            <th>Exam</th>
			            <th>4th Period</th>
			            <th>5th Period</th>
			            <th>6th Period</th>
			            <th>Exam</th>
			          </tr>
			        </thead>
			        <tbody>
			          {subjects.map((subject, index) => (
			            <tr key={index}>
			              <td>{subject.name}</td>
			              {subject.grades.map((grade, periodIndex) => (
			                <td key={periodIndex}>{grade}</td>
			              ))}
			            </tr>
			          ))}
			        </tbody>
			      </table>
		        </div>
	         	</div>
	         </div>

	         {/*Fees Record*/}

	         <div className="mt-5">
		        <div className="p-4 flex items-center justify-between">
			        <p className="text-md font-semibold">Fees Record</p>
			    </div>
			    
		        <div>
			        <div className="p-4">
				        <div className="p-4 flex items-center justify-between">
					        <p className="text-sm font-semibold">Fees</p>
					        <div className="ml-2">
			         			<AiOutlineEdit />
			         		</div>
					    </div>
			         	<table>
					        <thead className="text-sm">
					          <tr>
					            <th>First Quarter</th>
					            <th>Second Quarter</th>
					            <th>Third Quarter</th>
					            <th>Fourth Quarter</th>
					            <th>Total</th>
					          </tr>
					        </thead>
					        <tbody>
					            <tr>
					              <td className="text-sm">$ 20,000.00</td>
					              <td className="text-sm">$ 5,000.00 out of 10,000.00</td>
					              <td className="text-sm">$ 5,000.00 out of 5,000</td>
					              <td className="text-sm">$ 10,000.00 out of 10,000</td>
					              <td className="text-sm text-red-500">$ 25,000.00 <br /> (R = 5,000)</td>
					            </tr>
					        </tbody>
				        </table>
			        </div>
	         	</div>
	         </div>
	        </div>
		</CustomDialog>
	)
}

const ImageDetailModal = ({openImageModal, setOpenImageModal}) => {
	return(
		<CustomDialog isOpen={openImageModal} onRequestClose={()=> setOpenImageModal(false)}>
			<div className="bg-gray-400 w-3/5 p-2 relative overflow-auto h-[85%]">
		        <div
		        onClick={()=> setOpenImageModal(false)}
		        className="p-1 rounded-full absolute right-5 top-3 bg-white shadow-lg cursor-pointer">
		        	<IoClose size={20} />
		        </div>
			</div>
		</CustomDialog>
	)
}