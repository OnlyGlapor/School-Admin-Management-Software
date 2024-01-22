import { AiOutlinePlus } from 'react-icons/ai';

const QuickActions = () => {
	return(
		<div className="mt-2">
            <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-gray-200 flex items-center justify-center">
                  <AiOutlinePlus />
                </div>
                <p className="text-sm ml-2">Add teacher</p>
              </div>
            </div>
            <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-gray-200 flex items-center justify-center">
                  <AiOutlinePlus />
                </div>
                <p className="text-sm ml-2">Add student</p>
              </div>
            </div>
            <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-gray-200 flex items-center justify-center">
                  <AiOutlinePlus />
                </div>
                <p className="text-sm ml-2">Update Profile</p>
              </div>
            </div>
		</div>
	);
}

export default QuickActions;