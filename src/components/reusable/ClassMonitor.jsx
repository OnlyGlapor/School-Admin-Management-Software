const ClassMonitor = () => {
	return(
		<div>
          <div className="p-2">
            <p className="text-xs font-semibold">Class Monitor</p>
          </div>
          <div className="mt-2 px-2">
            <div className="">
                <div className="p-1 rounded hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs font-medium">Mr Farley, (English) give an assignment due tuesday, Jan 22, 2024</p>
                  <p className="text-xs mt-2">25 mins left</p>
                </div>
                <div className="p-1 rounded hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs">Mr Jerry is supposed to be in English class</p>
                  <p className="text-xs">25 mins left</p>
                </div>
                <div className="p-1 rounded hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs">Mr Jerry is supposed to be in English class</p>
                  <p className="text-xs">25 mins left</p>
                </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 mx-2 bg-blue-100 cursor-pointer hover:bg-blue-200 p-1 rounded-md">
            <p className="text-sm text-blue-500">View more</p>
          </div>
        </div>
	);
}
export default ClassMonitor;