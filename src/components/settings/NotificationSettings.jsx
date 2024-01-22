import React from 'react';

const NotificationSettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">Notifications Settings</p>
				<div className="flex items-center mr-2">
					<div className="bg-gray-200 px-3 p-0.5 rounded">
						<p className="text-sm">Save</p>
					</div>
					<div className="bg-gray-200 px-3 p-0.5 rounded ml-2">
						<p className="text-sm">Restore Default</p>
					</div>
				</div>
			</div>
			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Notifications</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Notification Channel</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Event Specific Settings</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Exam Schedules, Attendance Update" />
						</div>
						<div className="m-2">
							<p className="text-sm">Frequency Settings:</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Daily" />
						</div>
						<div className="m-2">
							<p className="text-sm">Mute or Snooze</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="10px" />
						</div>
					</div>
				</div>
			</div>
			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Notification Permissions</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Emergency Alert</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Acknowledgement Settings</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Exam Schedules, Attendance Update" />
						</div>
						<div className="m-2">
							<p className="text-sm">System-wide Announcements</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Daily" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default NotificationSettings;