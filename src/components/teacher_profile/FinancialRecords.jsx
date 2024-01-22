import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

import CustomDialog from '../../components/reusable/Dialog';


const FinancialRecords = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenDialog = () => {
		setIsOpen(!isOpen);
	}

	const onRequestClose = () => {
		setIsOpen(false);
	}

	return(
		<>
			<div className="flex items-center justify-between p-4">
				<p className="text-md font-semibold">Financial Records</p>
				<button onClick={handleOpenDialog}>
					<AiOutlineEdit />
				</button>
			</div>
			<div className="flex items-center p-4">
				<table>
					<thead>
						<tr>
							<th>Sept - Oct</th>
							<th>Oct - Nov</th>
							<th>Nov - Dec</th>
							<th>Dec - Jan</th>
							<th>Jan - Feb</th>
							<th>Feb - Mar</th>
							<th>Mar - Apr</th>
							<th>Apr - May</th>
							<th>Jun - Jul</th>
							<th>Jan - Aug</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>$ 20,000</td>
							<td>$ 15,000</td>
							<td>$ 10,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
							<td>$ 20,000</td>
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
			<div className="w-full p-10 flex flex-col items-center justify-center">
				<p className="text-2xl">R, $ 15,000</p>
				<p className="text-2xl">Total - $ 150,000</p>
			</div>
			<div className="p-4">
				<p className="text-sm">Note: This financial can/should only be updated/edited by an admin. We'll notify every admin. Thank you!</p>
			</div>

			<EditFinancialRecord isOpen={isOpen} onRequestClose={onRequestClose} />
		</>
	);
}

export default FinancialRecords;

const EditFinancialRecord = ({isOpen, onRequestClose}) => {
	return(
		<CustomDialog isOpen={isOpen} onRequestClose={onRequestClose}>
			<div className="bg-white w-4/6 p-3">
				<div className="flex items-center justify-between p-4">
					<p className="text-md font-semibold">Financial Records | 2023 - 2024</p>
					<button onClick={onRequestClose} className="hover:bg-gray-200 p-1 rounded-full">
						<IoClose />
					</button>
				</div>
				<div className="flex items-center mr-2">
				<table className="w-56">
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
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
							<td><input className="w-20 text-center" placeholder="amount" /></td>
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
			<div className="flex justify-end">
				<button onClick={() => alert("Are you sure you want to update this record?")} className="bg-blue-500 rounded-md text-white text-xs p-2">
					Update Record
				</button>
			</div>
			</div>
		</CustomDialog>
	);
}