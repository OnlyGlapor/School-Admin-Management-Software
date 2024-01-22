
const PersonalisedSettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between sticky -top-2 bg-white py-2">
				<p className="text-md font-semibold">Personalization Settings</p>
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
				<p className="text-sm font-semibold">Theme & Appearance</p>
				<div className="flex items-center mt-5">
					<div className="flex items-center flex-col">
						<div>
							<div className="bg-green-500 w-36 h-24 rounded" />
						</div>
						<div className=" mt-2 p-2 bg-gray-200 rounded-full" />
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
				<p className="text-sm font-semibold">Topography</p>
				<div className="flex items-center mt-5">
					<div className="w-9/12 grid grid-cols-3 gap-5">
						<div className="m-2">
							<p className="text-sm">Font Style</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Calibra Body" />
						</div>
						<div className="m-2">
							<p className="text-sm">Font Size</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="Header(20px) / Body(13px)" />
						</div>
						<div className="m-2">
							<p className="text-sm">Font Weight</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="bold" />
						</div>
						<div className="m-2">
							<p className="text-sm">Line Spacing</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="10px" />
						</div>
						<div className="m-2">
							<p className="text-sm">Text Color</p>
							<input className="text-sm p-1 mt-2 rounded bg-gray-100 text-gray-800 placeholder-gray-500 w-52" 
							placeholder="System Theme" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PersonalisedSettings;