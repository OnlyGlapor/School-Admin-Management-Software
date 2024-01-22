import { BiSearch } from 'react-icons/bi';
import { AiTwotoneFolderOpen } from 'react-icons/ai';

const Files = () => {
	return(
		<>
			<div className="flex items-center justify-between p-4">
				<p className="text-md font-semibold">Files</p>
				<div className="flex items-center">
					<div className="rounded-full bg-white border p-1 ml-2 flex items-center">
						<div className="ml-r bg-white p-1 rounded-full flex items-center justify-center">
							<BiSearch />
						</div>
						<input className="text-sm pl-1 outline-none bg-inherit" placeholder="Search files" />
					</div>
				</div>
			</div>
			<div className="flex items-center p-4">
				<div className="p-1 px-2 rounded min-w-0 w-36 border cursor-pointer bg-white">
			      <div>
			        <AiTwotoneFolderOpen size={22} />
			      </div>
			      <div className="mt-2">
			       <p className="text-xs font-semibold">Chemistry</p>
			       <p className="text-sm">2 files</p>
			      </div>
			    </div>
			    <div className="p-1 px-2 rounded min-w-0 w-36 border cursor-pointer bg-white ml-2">
			      <div>
			        <AiTwotoneFolderOpen size={22} />
			      </div>
			      <div className="mt-2">
			       <p className="text-xs font-semibold">Geography</p>
			       <p className="text-sm">2 files</p>
			      </div>
			    </div>
			</div>
		</>
	)
}

export default Files;