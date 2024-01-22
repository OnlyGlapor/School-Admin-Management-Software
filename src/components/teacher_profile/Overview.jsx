import { AiOutlineEdit } from 'react-icons/ai';

const Overview = ({handleOpenEditModal}) => {
	return(
		<div>
			<div className="px-4 pt-4">
				<p className="text-lg font-semibold">Overview</p>
			</div>
			<div className="flex items-center justify-between p-4">
				<div className="bg-white rounded-md p-2 px-4">
					<p className="text-sm">Execises given</p>
					<div className="mt-2">
						<p className="text-2xl">20</p>
						<p className="text-xs">80% of the total 25</p>
					</div>
				</div>
				<div className="bg-white rounded-md p-2 px-4 ml-4">
					<p className="text-sm">Classes</p>
					<div className="mt-2">
						<p className="text-2xl">2</p>
						<p className="text-xs">10% of the total classes 12</p>
					</div>
				</div>
				<div className="bg-white rounded-md p-2 px-4 ml-4">
					<p className="text-sm">Students Performance</p>
					<div className="mt-2">
						<p className="text-2xl">Good</p>
						<p className="text-xs">Good means average grade<br></br> per student is 80%</p>
					</div>
				</div>
				<div className="bg-white rounded-md p-2 px-4 ml-4">
					<p className="text-sm">Teacher's Rating</p>
					<div className="mt-2">
						<p className="text-2xl">8/10</p>
						<p className="text-xs">One of the best teacher we've got.</p>
					</div>
				</div>
			</div>
			<div className="p-4 bg-white m-4 rounded-md border-t">
				<div className="flex items-center justify-between">
					<p className="text-lg font-semibold text-black ">Schedule</p>
				</div>
				<div className="mt-4">
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
					<div className="p-4 mt-2">
						<p className="text-xs text-black">Note: This schedule is not subject to change until this teacher's contract expires according to the contract agreement and other terms signed between the Teacher and Administration, Thank you.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Overview;