import { useState, useEffect } from 'react';
import styles from '../students_list/styles.module.css';
import SearchBar from '../../components/reusable/searchBar';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid, BsSortAlphaDown, BsArrowLeft } from 'react-icons/bs';
import { BiGridAlt, BiSearch } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';


export default function Students_List (){
	const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate('/class/1/stud_list/1');
  };

  const handleGoBack = () => {
    // Navigates back to the previous page
    navigate(-1);
  };

	const [view, setView] = useState('list');

	const handleViewChange = () => {
	    if(view === 'list'){
	    	setView('Grid');
	    }else{
	    	setView('list');
	    }
	};

	const periods = [
	    { label: '1st period', progress: 30 },
	    { label: '2nd period', progress: 60 },
	    { label: '3rd period', progress: 90 },
	];

	const [currentPeriod, setCurrentPeriod] = useState(0);

    useEffect(() => {
	    // Simulate progress increase over time
	    const interval = setInterval(() => {
	      setCurrentPeriod((prevPeriod) => (prevPeriod < periods.length - 1 ? prevPeriod + 1 : prevPeriod));
	    }, 2000);

	    return () => clearInterval(interval);
	  }, [periods.length]);

    const [selectedSort, setSelectedSort] = useState('default');

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };


	return(
		<div className="w-full h-full p-2 bg-white">
			<div className="flex items-center justify-between p-2 bg-white">
				<div>
					<div
					onClick={handleGoBack}
					className="bg-gray-100 hover:bg-gray-200 px-2 p-1 cursor-pointer rounded-full flex items-center">
						<BsArrowLeft />
						<p className="ml-2 text-xs">Classes</p>
					</div>
					<div className="pt-2 pl-2">
						<p className="text-md font-semibold">12 Grade</p>
					</div>
				</div>

				<div className="flex items-center">
					<div className="flex items-center px-2 py-1 border rounded-full cursor-pointer">
            <BiSearch />
            <input className="ml-1 outline-none text-sm" placeholder="Search Employees" />
            <div className="bg-gray-100 rounded-full p-1">
              <BiSearch />
            </div>
          </div>
					<div className="flex items-center ml-2">
						<div title="Toggle view" className={styles.viewButton} onClick={handleViewChange}>
							{view === 'list' ? (
								<div className="flex items-center border hover:bg-gray-200 rounded-full p-2 cursor-pointer">
									<BiGridAlt />
								</div>
							):(
								<div className="flex items-center border hover:bg-gray-200 rounded-full p-2 cursor-pointer">
									<FaListUl />
								</div>
							)}
						</div>
						<div title="Order" className=" p-2 rounded-full hover:bg-gray-200 border cursor-pointer ml-2">
				        <BsSortAlphaDown />
						</div>
					</div>
				</div>
			</div>

			<div className={view === 'list' ? "p-2 overflow-auto w-full h-[90%]" : "grid grid-cols-6 gap-5 p-5 overflow-auto"}>
			<Zoom in={10} timeout={1000} unmountOnExit>
				<Fab title="Add Student" color="primary" size="medium" sx={{ position: 'absolute', right: '60px', bottom: '90px'}}>
					<AiOutlinePlus />
				</Fab>
			</Zoom>
				{view === 'list' ? (
					<div>
						<table>
					        <thead>
					          <tr className="text-sm">
					            <th>Name</th>
					            <th>Age</th>
					            <th>Gender</th>
					            <th>Phone Number</th>
					            <th>Email Address</th>
					            <th>Home Address</th>
					            <th>Emergency Contact</th>
					            <th>Attendance records</th>
					          </tr>
					        </thead>
					        <tbody>
					            <ListStudentItem handleViewDetail={handleViewDetail} />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
					            <ListStudentItem />
				            </tbody>
				        </table>
					</div>
				):(
				<>
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
					<GridStudentItem periods={periods} />
				</>

				)}
			</div>
		</div>
	)
}

const GridStudentItem = ({periods}) => {
	return(
		<div className="rounded-md p-2 border">
			<div className="flex items-center justify-between">
				<div className="">
					<p className="text-sm">Juliana Lopez</p>
					<p className="text-sm">ID#: 7446</p>
				</div>
				<div className="w-10 h-10 bg-red-500 rounded-full overflow-hidden border-2 border-blue-500">
					<img src="https://randomuser.me/api/portraits/women/13.jpg" />
				</div>
			</div>
			<div className="mt-2">
					{periods.map((period, index) => (
	          <div key={index}>
	            <p className="text-xs">{period.label}</p>
	            <div className={styles.progressBar}>
	              <div
	                className={styles.progressItem}
	                style={{ width: `${100 - period.progress}%`}}
	              ></div>
	            </div>
	          </div>
	        ))}
			</div>
		</div>
	)
}

const ListStudentItem = ({handleViewDetail}) => {
	return(
		<tr
		onClick={handleViewDetail} 
		className="text-sm hover:bg-gray-100">
        <td className="w-56">
          <div className="flex items-center pl-2">
            <div className="bg-gray-200 w-8 h-8 rounded-full overflow-hidden">
            	<img src="https://randomuser.me/api/portraits/women/2.jpg" />
            </div>
            <p className="text-sm ml-2">Cynthia Morphy</p>
          </div>
        </td>
        <td className="text-sm">18</td>
        <td className="text-sm">Male</td>
        <td className="text-sm">+231886500500</td>
        <td className="text-sm">knimely43@gmail.com</td>
        <td className="text-sm" id={styles.homeAddress}>Swary Clinic Avenue, ParkerPaint Belt, WoodCamp</td>
        <td className="text-sm">+231775700159</td>
        <td className="text-sm">OK</td>
    </tr>
	)
}