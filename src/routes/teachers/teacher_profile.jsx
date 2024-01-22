import React, { useState, useEffect } from 'react';
import styles from '../student_item/styles.module.css';
import SearchBar from '../../components/reusable/searchBar';
import { BsArrowLeft, BsDot } from 'react-icons/bs';
import { BiHealth, BiSearch, BiExport } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineFullscreen, AiTwotoneFolderOpen } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';
import { GrOverview } from 'react-icons/gr';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdFamilyRestroom, MdAttachMoney } from 'react-icons/md';
import { PiWarningOctagonBold } from 'react-icons/pi';
import { IoClose } from 'react-icons/io5';

import Header from '../../components/teacher_profile/Header';
import ProfileCardLeft from '../../components/teacher_profile/ProfileCardLeft';
import Main from '../../components/teacher_profile/Main';


import DoughnutPie from '../../components/reusable/DoughnutPie';
import CustomDialog from '../../components/reusable/Dialog';

import { useNavigate } from 'react-router-dom';

export default function TeacherProfile (){
	const [activeTab, setActiveTab] = useState('Overview');

	const navigate = useNavigate();

	const goBack = () => {
	    navigate(-1)
	};

	const [openEditModal, setOpenEditModal] = useState(false);
	
	const handleOpenEditModal = () => {
		setOpenEditModal(!openEditModal);
	}

	const [hasCollegeDegree, setHasCollegeDegree] = useState(null);

	const [openImageModal, setOpenImageModal] = useState(false);

	const handleOpenImageModal = () => {
		setOpenImageModal(!openImageModal);
	}

	const [openRecordModal, setOpenRecordModal] = useState(false);

	const handleOpenRecordModal = () => {
		setOpenRecordModal(!openRecordModal);
	}

	return(
		<div className="w-full h-full">
			<Header handleOpenEditModal={handleOpenEditModal} />
			<div className="p-5 flex w-full h-[95%] overflow-auto">
			<ProfileCardLeft activeTab={activeTab} setActiveTab={setActiveTab} handleOpenImageModal={handleOpenImageModal} />
			<Main openRecordModal={openRecordModal} activeTab={activeTab} handleOpenEditModal={handleOpenEditModal} />
			</div>
			<EditInfoModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} hasCollegeDegree={hasCollegeDegree}  />
			<ImageDetailModal openImageModal={openImageModal} setOpenImageModal={setOpenImageModal} />
		</div>
	)
}

const EditInfoModal = ({openEditModal, setOpenEditModal, hasCollegeDegree, handleCollegeDegree}) => {
	return(
		<CustomDialog isOpen={openEditModal} onRequestClose={()=> setOpenEditModal(false)}>
			<div className="bg-white rounded-lg w-3/5 p-2 relative h-3/4">
		        <div className="p-4 flex items-center justify-between">
		         	<p className="text-md font-semibold">Edit Info</p>
		         	<div
		         	onClick={()=>  setOpenEditModal(false)} 
		         	className="bg-gray-100 p-1 rounded-full cursor-pointer">
			         	<IoClose />
		         	</div>
		        </div>
		        <div className="overflow-auto h-5/6">
				    <div className="p-4 px-5 flex items-center justify-between">
				        <p className="text-sm font-semibold">About Info</p>
				        <div className="ml-2">
		         			<AiOutlineEdit />
		         		</div>
				    </div>
				    <div className="flex items-center flex-col justify-around ">
				        <div className="relative">
				         	<div className="w-28 h-28 bg-gray-100 rounded-full overflow-hidden relative">
					         	<img className="absolute" src="https://s3.envato.com/files/241332759/MON1095025.jpg" />
				         	</div>
				         	<div className="absolute bg-blue-500 text-white hover:shadow-lg p-2 rounded-full bottom-0 right-0 cursor-pointer">
			         			<AiOutlineEdit />
			         		</div>
			         	</div>
			         	<div className="grid grid-cols-4 gap-5 text-sm justify-around p-10 mt-10">
				         	<div>
					         	<p className="text-xs font-semibold">First Name</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="First Name" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Last Name</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Last Name" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Date of birth</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Date of birth" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Place of birth</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Place of birth" />
				         		</div>
			         		</div>
							{/*Row 2*/}
			         		<div>
					         	<p className="text-xs font-semibold">Street Address</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="First Name" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Home Address</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Last Name" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Contact #1</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Date of birth" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Contact #2</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Place of birth" />
				         		</div>
			         		</div>
			         		<div>
					         	<p className="text-xs font-semibold">Emergency Contact</p>
				         		<div className="border rounded-md mt-1">
				         			<input className="w-full p-1" placeholder="Place of birth" />
				         		</div>
			         		</div>
			         	</div>
		         	</div>

		         	<div className="p-4">
			         	<div className="p-4 px-5 flex items-center justify-between mt-5">
					        <p className="text-sm font-semibold">Academic</p>
					    </div>
			         	<div className="flex items-center flex-col justify-around ">
				         	<div className="grid grid-cols-4 gap-5 text-sm justify-around p-4">
					         	<div>
						         	<p className="text-xs font-semibold">High School Degree?</p>
					         		<div className="border rounded-md mt-1 overflow-hidden">
						         		<select className="w-full p-1 bg-white">
						         			<option>Yes</option>
						         			<option>No</option>
						         		</select>
					         		</div>
				         		</div>
				         		<div>
						         	<p className="text-xs font-semibold">High School Attended</p>
					         		<div className="border rounded-md mt-1">
					         			<input className="w-full p-1" placeholder="e.g. Messiah Mission Institute" />
					         		</div>
				         		</div>
				         		<div>
						         	<p className="text-xs font-semibold">High School Average</p>
					         		<div className="border rounded-md mt-1">
					         			<input className="w-full p-1" placeholder="e.g. 88" />
					         		</div>
				         		</div>
				         		<div>
						         	<p className="text-xs font-semibold">College Degree?</p>
					         		<div className="border rounded-md mt-1">
					         			<select className="w-full p-1 bg-white">
						         			<option>Yes</option>
						         			<option>No</option>
						         		</select>
					         		</div>
				         		</div>
								{/*Row 2*/}
								{hasCollegeDegree && (
									<>
					         		<div>
							         	<p className="text-xs font-semibold">College Attended</p>
						         		<div className="border rounded-md mt-1">
						         			<input className="w-full p-1" placeholder="e.g. Starz College Of Science & Technology" />
						         		</div>
					         		</div>
					         		<div>
							         	<p className="text-xs font-semibold">College Degree Obtained</p>
						         		<div className="border rounded-md mt-1">
						         			<input className="w-full p-1" placeholder="e.g. BIT" />
						         		</div>
					         		</div>
					         		<div>
							         	<p className="text-xs font-semibold">Specializes In</p>
						         		<div className="border rounded-md mt-1">
						         			<input className="w-full p-1" placeholder="e.g. Information Technology" />
						         		</div>
					         		</div>
					         		</>
				         		)}
				         	</div>
			         	</div>
		         	</div>

		         	<div className="p-4 border-t">
			        <div className="p-4 flex items-center justify-between">
				        <p className="text-sm font-semibold">Schedule</p>
				        <div className="ml-2">
		         			<AiOutlineEdit />
		         		</div>
				    </div>
	     	        <table className="w-full bg-white">
						<thead>
							<tr>
								<th>Subject</th>
								<th>Monday</th>
								<th>Wednesday</th>
								<th>Friday</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Chemistry</td>
								<td>9:30AM - 10:00 AM</td>
								<td>9:30AM - 10:00 AM</td>
								<td>9:30AM - 10:00 AM</td>
							</tr>
							<tr>
								<td>Geography</td>
								<td>9:30AM - 10:00 AM</td>
								<td>9:30AM - 10:00 AM</td>
								<td>9:30AM - 10:00 AM</td>
							</tr>
						</tbody>
					</table>
		        </div>

		        <div className="p-4 border-t mt-5">
			        <div className="flex items-center justify-between">
					<p className="text-md font-semibold">Financial Records | 2023 - 2024</p>
					<button onClick={{}} className="hover:bg-gray-200 p-1 rounded-full">
						<AiOutlineEdit />
					</button>
				</div>
				<div className="flex items-center mt-5">
				<table>
					<thead>
						<tr>
							<th>Sept</th>
							<th>Oct</th>
							<th>Nov</th>
							<th>Dec</th>
							<th>Jan</th>
							<th>Feb</th>
							<th>Mar</th>
							<th>Apr</th>
							<th>May</th>
							<th>Jun</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>$ 20,000</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
							<td>N/A</td>
						</tr>
						<tr>
							<td className="text-green-500">- In-full -</td>
							<td className="text-red-500">-10%</td>
							<td className="text-red-500">-15%</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
							<td className="text-green-500">- In-full -</td>
						</tr>
						<tr className="font-semibold">
							<td>Indebt</td>
							<td>$ 15,000</td>
							<td className="border-l">Total</td>
							<td>$ 150,000</td>
						</tr>
					</tbody>
				</table>
			</div>
		        </div>
			    </div>

			    <div className="flex justify-end mb-2">
				<button onClick={() => alert("Are you sure you want to update this record?")} className="bg-blue-500 rounded-md text-white text-sm p-2">
					Update Record
				</button>
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

