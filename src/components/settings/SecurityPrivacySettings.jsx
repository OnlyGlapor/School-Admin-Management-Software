import React from 'react';

const SecurityPrivacySettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">Security & Privacy Settings</p>
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
				<p className="text-sm font-semibold">Security</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 items-center gap-5">
						<div className="m-2">
							<p className="text-sm">Minimum password length</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Confidential" />
						</div>
						<div className="m-2">
							<p className="text-sm">Complexity requirements (uppercase, lowercase, numbers, symbols)</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Exam Schedules, Attendance Update" />
						</div>
						<div className="m-2">
							<p className="text-sm">Password expiration settings</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Daily" />
						</div>
					</div>
				</div>
			</div>
			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Two-factor Authentication</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Enable or disable two-factor authentication</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Two-factor methods (e.g., SMS, app-based)</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="SMS" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Encryption Settings</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Encryption Algorithm</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Audit Settings</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5 items-center">
						<div className="m-2">
							<p className="text-sm">Enable or disable audit logs</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Granular logging of user activities and system events</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Advanced Security Info</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5 items-center">
						<div className="m-2">
							<p className="text-sm"># of IP BlackListed</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="500" />
						</div>
						<div className="m-2">
							<p className="text-sm">SSL/TLS Certificate</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Tranfer Protocol</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="HTTPS/Secure" />
						</div>
						<div className="m-2">
							<p className="text-sm">Security Alerts</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Enabled" />
						</div>
						<div className="m-2">
							<p className="text-sm">Vulnerability Scanning</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Scan" />
						</div>
						<div className="m-2">
							<p className="text-sm">Third-Party Security Audits</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="View" />
						</div>
						<div className="m-2">
							<p className="text-sm">Data Anonymousity</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="True" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecurityPrivacySettings;