import { useState } from 'react';
import { MdOutlineShare, MdOutlineZoomIn, MdOutlineMoreVert } from "react-icons/md";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { RiArrowGoForwardLine, RiArrowGoBackLine } from "react-icons/ri";

import { Document, Page } from "react-pdf";

const PdfReader = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
	    setNumPages(numPages);
	}

	return(
		<div className="w-full h-full">
			<div className="bg-white flex items-center justify-between p-2">
				<p className="text-sm font-semibold">My Pdf Reader</p>
				<div className="flex items-center">
					<div className="bg-white rounded-full p-2 hover:bg-gray-100 border cursor-pointer"><MdOutlineShare /></div>
					<div className="bg-white rounded-full p-2 hover:bg-gray-100 border cursor-pointer mx-2"><FiZoomIn /></div>
					<div className="bg-white rounded-full p-2 hover:bg-gray-100 border cursor-pointer"><FiZoomOut /></div>
					<div className="flex items-center justify-between bg-gray-500 rounded-full w-16 overflow-hidden border mx-4">
						<div className="bg-gray-100 w-1/2 p-1 text-center border-r">
							<p className="text-sm">1</p>
						</div>
						<div className="bg-white w-1/2 p-1 text-center">
							<p className="text-sm">25</p>
						</div>
					</div>
					<div className="flex items-center cursor-pointer">
						<div className="bg-white p-2 rounded-full hover:bg-blue-100 border">
							<RiArrowGoBackLine />
						</div>
						<div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-100 border ml-2">
							<RiArrowGoForwardLine />
						</div>
					</div>
				</div>

				<div>
					<div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-100 border ml-2">
						<MdOutlineMoreVert />
					</div>
				</div>
			</div>

			<div className="flex justify-between h-[92%]">
				<div className="grow h-full bg-blue-500">
					<Document file="html.pdf" onLoadSuccess={onDocumentLoadSuccess}>
				        <Page pageNumber={pageNumber} />
			        </Document>
				</div>
				<div className="w-1/4 border rounded-md overflow-auto bg-yellow-500">hi</div>
			</div>
		</div>
	)
}

export default PdfReader;