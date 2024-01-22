import { useState } from 'react';
import { BiExport, BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const allEmployees = [
	{
		id: 1,
		name: "Daniel Mulbah",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 2,
		name: "Princess Kotie",
		department: "Registrar",
		payMonth: "1 Month",
		netpay: "$ 25,000",
		status: "Unpaid", 
	},
	{
		id: 3,
		name: "Mulbah Sumo Jr",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 4,
		name: "Cyntia Washington",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 19,000",
		status: "Paid", 
	},
	{
		id: 5,
		name: "Sis Musu Jenna",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 6,
		name: "Calvin Jane",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Paid", 
	},
	{
		id: 7,
		name: "Melvin G Kpehe",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 15,000",
		status: "Unpaid", 
	},
	{
		id: 8,
		name: "Sussanah Bropleh",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 9,
		name: "Sarah Juan",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Paid", 
	},
	{
		id: 10,
		name: "Dartor Jefferson",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 11,
		name: "Kelvin Musanah",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
	{
		id: 12,
		name: "Alvin Clark",
		department: "Teaching",
		payMonth: "1 Month",
		netpay: "$ 20,000",
		status: "Unpaid", 
	},
];

const EmployeeTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const employeesPerPage = 6;
	const indexOfLastEmployee = currentPage * employeesPerPage;
	const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
	const currentEmployees = allEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

	const totalPages = Math.ceil(allEmployees.length / employeesPerPage);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	}

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	}


	return(
		<div className="bg-white rounded-lg p-5 border mt-5">
         <Head />
          <div className="bg-blue w-full rounded-md mt-2">
            <div>
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Pay Month</th>
                  <th>Net Pay</th>
                  <th>Status</th>
                  <th>Pay Slip</th>
                </tr>
              </thead>
              <tbody>
				{currentEmployees.map((employee) => (
	                <TableItem key={employee.id} employee={employee} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex justify-between">
	          <button onClick={handlePrevPage} disabled={currentPage === 1}>
		          Prev
	          </button>
	          <span>{`Page ${currentPage} of ${totalPages}`}</span>
	          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
		          Next
	          </button>
          </div>
          </div>
        </div>
	);
}

export default EmployeeTable;

const Head = () => {
	return(
		<div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Employees</p>
            <div className="flex items-center px-2 py-1 border rounded-full cursor-pointer">
              <BiSearch />
              <input className="ml-1 outline-none text-sm" placeholder="Search Employees" />
              <div className="rounded-full">
                <IoClose />
              </div>
            </div>
		</div>
	);
}

const TableItem = ({employee}) => {
	const { name, department, payMonth, netpay, status } = employee;
  return(
    <tr>
      <td className="flex justify-center">
        <div className="flex items-center justify-between w-full px-5">
          <div className="bg-gray-300 w-8 h-8 rounded-full">
            <img />
          </div>
          <div className="ml-2">
            <p className="text-sm">{name}</p>
          </div>
        </div>
      </td>
      <td>{department}</td>
      <td>{payMonth}</td>
      <td>{netpay}</td>
      <td>
        <p className={status === "Paid" ? "text-sm text-green-500" : "text-sm text-red-500"}>{status}</p>
      </td>
      <td>
        <p className="underline text-blue-500">View</p>
      </td>
    </tr>
  )
}