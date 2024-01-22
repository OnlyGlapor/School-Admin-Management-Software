import React from 'react';

import { IoMdAdd } from 'react-icons/io';

const AccountSettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">Accounts Settings</p>
				<div className="flex items-center mr-2">
					<div className="bg-gray-200 px-3 p-0.5 rounded">
						<p className="text-sm">Save</p>
					</div>
					<div className="bg-gray-200 px-3 p-0.5 rounded ml-2">
						<p className="text-sm">Restore Default</p>
					</div>
				</div>
			</div>
			<div className="p-2">
				<p className="text-sm font-semibold">Accounts</p>
				<div className="flex items-center mt-5">
					<div className=" flex items-center flex-wrap rounded cursor-pointer hover:bg-blue-100 px-2">
						<div className="w-9 h-9 bg-green-500 rounded-full overflow-hidden">
							<img
							className="w-full h-full" 
							src="https://randomuser.me/api/portraits/women/42.jpg" />
						</div>
						<div className="m-2">
							<div className="flex items-center">
								<p className="text-sm font-semibold flex items-center">Zubah Kollie Snr <p className="text-xs ml-1 bg-gray-100 px-2 py-0.5 rounded-full">Logged in</p></p>
								{/*<IoIosMore size={20} className="ml-5 cursor-pointer" />*/}
							</div>
							<p className="text-sm">Administrator</p>
						</div>
					</div>

					<div className=" flex items-center flex-wrap rounded cursor-pointer hover:bg-blue-100 px-2 ml-2">
						<div className="w-9 h-9 bg-green-500 rounded-full overflow-hidden">
							<img
							className="w-full h-full" 
							src="https://randomuser.me/api/portraits/women/42.jpg" />
						</div>
						<div className="m-2">
							<div className="flex items-center">
								<p className="text-sm font-semibold flex items-center">Kulubah Zayzay <p className="text-xs ml-1 bg-gray-100 px-2 py-0.5 rounded-full">Active user</p></p>
								{/*<IoIosMore size={20} className="ml-5 cursor-pointer" />*/}
							</div>
							<p className="text-sm">Registrar</p>
						</div>
					</div>

					<div className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group bg-white p-2 ml-5 rounded flex flex-col items-center hover:bg-gray-200 cursor-pointer border-2 border-dashed border-slate-300 leading-6 text-slate-900 font-medium">
						<IoMdAdd /><p className="text-xs">Add New Account</p>
					</div>

				</div>

				<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Permission & Roles</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">DashBoard Access</p>
							<p className="text-xs w-52 mt-2">The user(s) will be allowed to access the DashBoard.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">User Management</p>
							<p className="text-xs w-52 mt-2">The user(s) will be allowed to add/edit/delete user.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Class Management</p>
							<p className="text-xs w-52 mt-2">User(s) in this category can manage classes, assign teachers, etc.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">GradeBook Access</p>
							<p className="text-xs w-52 mt-2">User(s) in this category can access and modify grades.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Report Generation</p>
							<p className="text-xs w-52 mt-2">User(s) in this category can generate and view report.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Settings Configuration</p>
							<p className="text-xs w-52 mt-2">User(s) in this category can access and modify system settings.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Data Import/Export</p>
							<p className="text-xs w-52 mt-2">User(s) in this category can import/export data.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Security Settings</p>
							<p className="text-xs w-52 mt-2">Tweak security settings (password policies, two-factor authentication).</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Audit / Checkup</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Audit Trail</p>
							<p className="text-xs w-52 mt-2">Track changes to role permissions for auditing purposes.</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="K Zubah Kollie (Admin), Jerry Flow (Instructor)" />
						</div>
					</div>
				</div>
			</div>

			</div>
		</div>
	)
}


export default AccountSettings;