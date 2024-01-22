const ActivityLog = () => {
	return(
		<div>
          <div className="flex items-center justify-between p-5">
            <p className="text-sm font-semibold">Activity Log</p>
            <div className="hover:bg-gray-200 rounded-md p-1">
              <p className="text-xs cursor-pointer">View more</p>
            </div>
          </div>
          <div className="px-5">
            <div className="">
              <p className="text-xs font-semibold">Income</p>
                <div className="p-1 rounded hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs font-semibold">School Fees Payment (12th Grade)</p>
                  <p className="text-xs">10s ago</p>
                </div>
                <div className="p-1 rounded mt-1 hover:bg-gray-200 rounded cursor-pointer">
                  <p className="text-xs font-semibold">School Fees Payment (12th Grade)</p>
                  <p className="text-xs">2d ago</p>
                </div>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold">Expenses</p>
                <div className="p-1 hover:bg-gray-200 rounded mt-2 cursor-pointer">
                  <p className="text-xs">You have just confirm the payment of Electricity bill</p>
                </div>
                <div className="p-1 hover:bg-gray-200 rounded mt-1 cursor-pointer">
                  <p className="text-xs">You have just confirm the payment of WAEC registration fees </p>
                </div>
            </div>
          </div>
        </div>
	);
}
export default ActivityLog;