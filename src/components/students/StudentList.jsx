import React from 'react';
import Zoom from '@mui/material/Zoom';
import { Link, useParams } from 'react-router-dom';

const StudentList = () => {
  const { id } = useParams()
	return(
    <Zoom in={10} timeout={200} unmountOnExit>
		<div className="grow bg-white rounded-md min-h-[390px]">
      <div className="flex items-center justify-between p-4">
        <p className="text-sm font-semibold">Student List</p>
          <Link to="/class/1" className="cursor-pointer">
            <p className="text-xs font-semibold">View more</p>
          </Link>
      </div>
      <p className="bg-blue-500">{id}</p>
      <List />
		</div>
    </Zoom>
	);
}

export default StudentList;


const List = ({goToStudentList}) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Semester</th>
          <th>Period</th>
          <th>Avg.Grade</th>
        </tr>
      </thead>
      <tbody>
        <ListItem name="Sarah Dripot" grade="K1" semester="2" period="5" avgGrade="98.5" goToStudentList={goToStudentList} />
        <ListItem name="Mariam Brown" grade="K1" semester="2" period="5" avgGrade="97.5" />
        <ListItem name="Cynthia Brown" grade="K1" semester="2" period="5" avgGrade="94.9" />
        <ListItem name="Vanma Kerkula" grade="K1" semester="2" period="5" avgGrade="94.7" />
        <ListItem name="Cecelia Krubo" grade="K1" semester="2" period="5" avgGrade="93.8" />
        <ListItem name="Martha Sumo" grade="K1" semester="2" period="5" avgGrade="93.57" />
        <ListItem name="Jane Clark" grade="K1" semester="2" period="5" avgGrade="91.9" />
      </tbody>
    </table>
  );
}

const ListItem = ({name, grade, semester, period, avgGrade, goToStudentList}) => {
  return(
    <tr title={name} onClick={goToStudentList}>
      <td>{name}</td>
      <td>{grade}</td>
      <td>{semester}</td>
      <td>{period}</td>
      <td>{avgGrade}</td>
    </tr>
  );
}

