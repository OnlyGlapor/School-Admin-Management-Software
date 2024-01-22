import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

const Header = ({handleOpenEditModal}) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}
	return(
		<div className="flex justify-between px-4 pt-4">
			<div
			onClick={goBack}
			className="bg-white hover:bg-gray-200 px-2 p-1 cursor-pointer rounded-full flex items-center">
			<BsArrowLeft />
			<p className="ml-2 text-xs">Teacher's Dashboard</p>
			</div>
			<div
			className="cursor-pointer" 
			onClick={handleOpenEditModal}>
			<AiOutlineEdit />
			</div>
		</div>
	);
}

export default Header;