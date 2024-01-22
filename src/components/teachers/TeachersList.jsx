import { useNavigate } from 'react-router-dom';
import Zoom from '@mui/material/Zoom'
;
const TeachersList  = () => {

  const navigate = useNavigate();

  const handleItemClick = () => {
    // Navigate to the desired page or route
    navigate('/teacher/1/');
  };
	return(
		<Zoom in={10} timeout={400} unmountOnExit>
		<div className="w-4/6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-3">
              <p className="text-sm font-semibold">List of teachers</p>
              <p className="text-xs font-semibold cursor-pointer p-1 rounded hover:bg-gray-200">View More</p>
            </div>
			<div className="mt-1 max-h-[300px] overflow-auto scrollable">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Subject(s)</th>
							<th>Contact</th>
							<th>Level</th>
						</tr>
					</thead>
					<tbody>
						<BodyItem handleItemClick={handleItemClick} />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
						<BodyItem />
					</tbody>
				</table>
		    </div>
	   </div>
	   </Zoom>
	);
}

export default TeachersList;


const BodyItem = ({handleItemClick}) => {
  return(
    <tr onClick={handleItemClick}>
      <td className="text-sm flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" />
        </div>
        <p className="ml-5">Korvah Kennedy</p>
      </td>
      <td className="text-sm">Math, Phy, Chem</td>
      <td className="text-sm">+231886500500</td>
      <td>
        <p className="text-sm">BSC (English)</p>
      </td>
    </tr>
  )
}