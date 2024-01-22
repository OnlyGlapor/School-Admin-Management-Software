import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

const ImportExportSettings = () => {
	return(
		<div className="bg-white">
			<div className="flex items-center justify-between py-2">
				<p className="text-md font-semibold">Import / Export</p>
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
				<p className="text-sm font-semibold">Import</p>
				<div className="flex flex-col items-start mt-5">
					<div className="w-1/2 h-40 bg-gray-100 flex justify-center items-center rounded cursor-pointer hover:bg-gray-200">
						<AiOutlineFileAdd /><p className="text-sm ml-1">Upload file</p>
					</div>
					<p className="text-sm py-2">Note: Please upload data in CSV, Excel, or JSON format.</p>
				</div>
			</div>
			<div className="p-2 mt-5">
				<p className="text-sm font-semibold">Export</p>
				<div className="flex flex-col items-start mt-5">
					<div className="w-1/2 flex items-center justify-between mt-5">
						<p className="text-sm">Messiah Mission Insitiute - December 22, 2023 | 12:00PM (UPDATE)</p>
						<p className="text-sm hover:bg-gray-200 p-1 rounded font-semibold cursor-pointer">Export</p>
					</div>
					<div className="w-1/2 flex items-center justify-between mt-5">
						<p className="text-sm">Messiah Mission Insitiute - December 22, 2023 | 12:00PM (UPDATE)</p>
						<p className="text-sm hover:bg-gray-200 p-1 rounded font-semibold cursor-pointer">Export</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImportExportSettings;