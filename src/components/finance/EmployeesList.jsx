import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const EmployeesList = () => {
	const navigate = useNavigate();

	const goToPayroll = () => {
		navigate('/finance/payroll/')
	}

	return(
      <div className="bg-white rounded-lg p-5 shadow-md mt-5">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Employees</p>
            <div
            onClick={goToPayroll} 
            className="flex items-center p-1 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer">
              <p className="text-xs mr-1">View Payroll</p>
              <BsChevronRight />
            </div>
          </div>
          <div className="bg-blue w-full h-4/5 rounded-md mt-2 overflow-auto">
            <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Contact</th>
                  <th>Home Address</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <TableItem photo="https://randomuser.me/api/portraits/men/74.jpg" name="Albert Saye" department="Janitor" contact="+231886500500" home_address="Morris Farm Coommunity" salary="20,000" />
                <TableItem photo="https://randomuser.me/api/portraits/men/55.jpg" name="Bono Jusu" department="Janitor" contact="+231776516985" home_address="ELWA Junction Community" salary="25,000" />
                <TableItem photo="https://randomuser.me/api/portraits/men/91.jpg" name="K Zubah Kollie Jr" department="Administrator" contact="+231776861914" home_address="Airfield, Old Matadi" salary="35,000" />
                <TableItem photo="https://randomuser.me/api/portraits/women/42.jpg" name="Musu Swen" department="Teacher" contact="+231881796357" home_address="Cook Spoon Hill Community" salary="30,000" />
                <TableItem photo="https://randomuser.me/api/portraits/women/56.jpg" name="Sarah Nimely" department="Registrar" contact="+231778194357" home_address="Mamba Point, JuanSon Street" salary="30,000" />
              </tbody>
            </table>
          </div>
          </div>
        </div>
	);
}
export default EmployeesList;



const TableItem = ({photo, name, department, contact, home_address, salary}) => {
  return(
    <tr>
      <td>
        <div className="flex items-center px-4">
          <div className="w-7 h-7 bg-gray-200 rounded-full overflow-hidden border-2 border-blue-500">
            <img src={photo} />
          </div>
          <p className="text-sm ml-2">{name}</p>
        </div>
      </td>
      <td className="text-sm">{department}</td>
      <td className="text-sm">{contact}</td>
      <td className="text-sm">{home_address}</td>
      <td className="text-sm">$ {salary}</td>
    </tr>
  )
}