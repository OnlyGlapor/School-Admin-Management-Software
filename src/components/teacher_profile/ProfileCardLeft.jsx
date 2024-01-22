import { MdAttachMoney } from 'react-icons/md';
import { BiExport } from 'react-icons/bi';

const ProfileCardLeft = ({activeTab, setActiveTab, handleOpenImageModal}) => {
	return(
		<div className="bg-white rounded-md p-4 border flex flex-col justify-between">
			<div className="mt-5">
				<div>
					<div className="flex items-start">
						<div onClick={handleOpenImageModal} className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-blue-500 cursor-pointer">
							<img
							className="w-full h-full"
						src="https://randomuser.me/api/portraits/men/74.jpg" />
						</div>
						<div className="ml-4 w-44">
							<p className="text-md font-semibold">Kelvin David</p>
							<p className="text-xs">kk@gmail.com</p>
							<p className="text-xs my-1">Department: Teaching</p>
							<p className="text-xs">DOB: 12/08/2023</p>
						</div>
					</div>
					<div className="mt-4 flex items-center justify-around">
						<div className="">
							<div className="flex items-center justify-center">
								<MdAttachMoney />
								<p className="text-xs">Salary</p>
							</div>
							<p className="text-xs font-semibold">$12,000.00</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-xs">Contract ends</p>
							<p className="text-xs font-semibold">July 15</p>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<ul>
						<li onClick={() => setActiveTab('Overview')} className={activeTab === 'Overview' ? "text-sm p-2 rounded-md cursor-pointer text-white bg-blue-500 font-semibold" : "text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer"}>Overview</li>
						<li onClick={() => setActiveTab('About')} className={activeTab === 'About' ? "text-sm p-2 rounded-md cursor-pointer text-white bg-blue-500 font-semibold" : "text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer"}>About</li>
						<li onClick={() => setActiveTab('Financial Records')} className={activeTab === 'Financial Records' ? "text-sm p-2 rounded-md cursor-pointer text-white bg-blue-500 font-semibold" : "text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer"}>Financial Records</li>
						<li onClick={() => setActiveTab('Files')} className={activeTab === 'Files' ? "text-sm p-2 rounded-md cursor-pointer text-white bg-blue-500 font-semibold" : "text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer"}>Files</li>
					</ul>
				</div>
			</div>
			<div className="p-2 hover:bg-gray-200 rounded-md cursor-pointer flex">
				<BiExport />
				<p className="text-sm ml-2">Export</p>
			</div>
		</div>
	);
}

export default ProfileCardLeft;