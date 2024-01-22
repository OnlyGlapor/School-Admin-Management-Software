import React from 'react';

const GeneralSettings = () => {
	return(
		<div className="">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">General Settings</p>
				<div className="flex items-center mr-2">
					<div className="bg-blue-500 px-3 p-0.5 rounded cursor-pointer">
						<p className="text-sm text-white">Save</p>
					</div>
					<div className="bg-white border hover:bg-gray-100 px-3 p-0.5 rounded ml-2 cursor-pointer">
						<p className="text-sm">Restore Default</p>
					</div>
				</div>
			</div>
			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">School Information</p>
				<div className="flex items-center  mt-5">
					<div className="w-32 h-32 bg-gray-100 rounded-full">
						<img />
					</div>
					<div className="w-9/12 ml-8 flex flex-wrap">
						<div className="m-2">
							<p className="text-sm">School Name</p>
							<input className="text-sm p-1 mt-1 rounded bg-white border text-gray-800 placeholder-gray-500" 
							placeholder="Messiah Mission Institute" />
						</div>
						<div className="m-2 ml-8">
							<p className="text-sm">School Address</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="Morris Farm, WoodCamp, Paynesville City, Liberia" />
						</div>
						<div className="m-2">
							<p className="text-sm">Contact #</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="+231886500500" />
						</div>
						<div className="m-2 ml-8">
							<p className="text-sm">Email Address</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="+mmi@gmail.com" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Academic Year Configuration</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 flex flex-wrap">
						<div className="m-2">
							<p className="text-sm">Number of Semester</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="2" />
						</div>
						<div className="m-2">
							<p className="text-sm">Semester Terming/Naming</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="Semester 1 & 2 Order" />
						</div>
						<div className="m-2 mt-8">
							<p className="text-sm font-semibold">Start & End Date</p>

							<div className="flex items-center mt-5">
								<p className="text-sm font-semibold">1st Semester</p>
								<div className="mt-2 ml-8">
									<p className="text-sm">Start Date</p>
									<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
									placeholder="+231886500500" />
								</div>
								<div className="mt-2 ml-8">
									<p className="text-sm">End Date</p>
									<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
									placeholder="+231886500500" />
								</div>
							</div>

							<div className="flex items-center mt-5">
								<p className="text-sm font-semibold">2nd Semester</p>
								<div className="mt-2 ml-8">
									<p className="text-sm">Start Date</p>
									<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
									placeholder="+231886500500" />
								</div>
								<div className="mt-2 ml-8">
									<p className="text-sm">End Date</p>
									<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
									placeholder="+231886500500" />
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Default Language and Timezone</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 flex flex-wrap">
						<div className="m-2">
							<p className="text-sm">Language (Default: English)</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="English (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Country/Timezone</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="Liberia  (GMT + 00)" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">School Hours</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 flex flex-wrap">
						<div className="m-2">
							<p className="text-sm">Regular School Hours</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="8AM - 2PM" />
						</div>
						<div className="m-2">
							<p className="text-sm">Break Periods</p>
							<input className="text-sm p-1 mt-1 rounded bg-gray-100 text-gray-800 placeholder-gray-500" 
							placeholder="10:30AM - 11:15PM" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">System Theme</p>
				<div className="flex items-center mt-5">
					<div className="flex items-center flex-col">
						<div>
							<div className="bg-green-500 w-36 h-24 rounded" />
						</div>
						<div className=" mt-2 p-2 bg-gray-200 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default GeneralSettings;