import DoughnutPie from '../../components/reusable/DoughnutPie';
import { BsChevronDown, BsChevronRight, BsArrowLeft } from 'react-icons/bs';
import { MdAttachMoney }  from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const Header = () => {

	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1)
	}

	const expenseData = [
	    { subject: 'Salaries', percentage: 40 },
	    { subject: 'Utilities', percentage: 25 },
	    { subject: 'Maintenance', percentage: 15 },
	    { subject: 'Other Expenses', percentage: 20 },
	];

	return(
		<div className="bg-white rounded-lg pb-2 border">
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center">
              <div onClick={goBack} className="cursor-pointer bg-gray-100 p-1 rounded-full">
                <BsArrowLeft />
              </div>
              <p className="text-md font-semibold ml-2">Payroll</p>
            </div>
            <div className="flex items-center p-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
              <p className="text-xs mr-1">Nov 15, 2023</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="grid grid-cols-2 gap-2">
              <TopItem title="Total Employees" amount="25" performance="increase" percentage="+8%" timeframe="The last 7 days" />
              <TopItem title="Total Working Hours" amount="250" performance="increase" percentage="+8%" timeframe="The last 7 days" />
              <TopItem title="Payroll Cost" amount="$15,000.00" performance="increase" percentage="+8%" timeframe="The last 7 days" />
              <TopItem title="Net Salary" amount="$10,650.00" performance="increase" percentage="+8%" timeframe="The last 7 days" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-56 rounded-md p-2 flex flex-col justify-center items-center text-center border">
              <div>
                <p className="text-sm font-semibold">Salary Distribution</p>
              </div>
                <DoughnutPie data={expenseData} />
              </div>
            </div>

            <div className="w-56 rounded-md p-2 flex flex-col justify-center items-center text-center border">
              <div className="bg-blue-500 text-white rounded-full p-2 border-blue-500 border-2">
                <MdAttachMoney />
              </div>
              <div className="my-5">
                <p className="text-sm font-semibold">Payroll Date</p>
                <p className="text-sm">Nov 12, 2023</p>
                <p className="text-sm mt-2">Note: This payroll runs from: Nov 15, 2023 - Sep 15, 2023</p>
              </div>
              <div className="bg-blue-500 rounded-md p-1 cursor-pointer">
                <p className="text-xs font-semibold text-white">Payroll Detail</p>
              </div>
            </div>
          </div>
        </div>
	);
}

export default Header;

const TopItem = ({title, amount, percentage, performance, timeframe, color}) => {
  return(
    <div className={color ? "bg-blue-500 text-white p-2 rounded-md border": "bg-white p-2 rounded-md border"}>
      <p className="text-sm">{title}</p>
      <div className="flex items-center">
        <p className="text-lg font-semibold">{amount}</p>
        <div className={performance === "increase" ? "bg-green-100 rounded-full ml-1 px-0.5" : "bg-red-100 rounded-full ml-1 px-0.5"}>
          <p className="text-xs text-black">{percentage}</p>
        </div>
      </div>
      <p className="text-sm">{timeframe}</p>
    </div>
  )
}