
const AccessibilitySettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">Accessibility Settings</p>
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
				<p className="text-sm font-semibold">View/Hear</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">High Contrast Mode</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Enabled" />
						</div>
						<div className="m-2">
							<p className="text-sm">Text-to-Speech</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Enabled" />
						</div>
						<div className="m-2">
							<p className="text-sm">Screen Reading</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Enabled" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Styling</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Button Size</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="In-app (Default)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Link Color</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Exam Schedules, Attendance Update" />
						</div>
						<div className="m-2">
							<p className="text-sm">Animation and Motion</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Disabled" />
						</div>
						<div className="m-2">
							<p className="text-sm">Font Style</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Daily" />
						</div>
						<div className="m-2">
							<p className="text-sm">Font Size</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Daily" />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Color Filters</p>
				<div className="flex items-center mt-5">
					<div className="flex items-center flex-col">
						<div>
							<div className="bg-green-500 w-36 h-24 rounded border-2 border-blue-500" />
						</div>
						<div className=" mt-2 p-2 bg-blue-500 rounded-full" />
					</div>
					<div className="flex items-center flex-col ml-5">
						<div>
							<div className="bg-red-500 w-36 h-24 rounded" />
						</div>
						<div className=" mt-2 p-2 bg-gray-200 rounded-full" />
					</div>
					<div className="flex items-center flex-col ml-5">
						<div>
							<div className="bg-yellow-500 w-36 h-24 rounded" />
						</div>
						<div className=" mt-2 p-2 bg-gray-200 rounded-full" />
					</div>
					<div className="flex items-center flex-col ml-5">
						<div>
							<div className="bg-black w-36 h-24 rounded" />
						</div>
						<div className=" mt-2 p-2 bg-gray-200 rounded-full" />
					</div>
				</div>
			</div>

			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Keyboard Shortcut</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12">
						<div className="m-2 grid grid-cols-3 gap-5">
							<p className="text-sm">Ctrl + D</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>
							<p className="text-sm">Button Size</p>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AccessibilitySettings