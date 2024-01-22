import Overview from '../../components/teacher_profile/Overview';
import About from '../../components/teacher_profile/About';
import FinancialRecords from '../../components/teacher_profile/FinancialRecords';
import Files from '../../components/teacher_profile/Files';

const Main = ({activeTab, handleOpenEditModal, openRecordModal}) => {
	return(
		<div className="bg-white grow rounded-md overflow-auto">
			{activeTab === 'Overview' && <Overview handleOpenEditModal={handleOpenEditModal} />}
			{activeTab === 'About' && <About />}
			{activeTab === "Financial Records" && <FinancialRecords openRecordModal={openRecordModal} />}
			{activeTab === 'Files' && <Files />}
		</div>
	);
}

export default Main;