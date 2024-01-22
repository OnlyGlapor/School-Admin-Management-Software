const Curriculum = ({openLocalPDF}) => {
  return(
    <div className="p-2 mt-5">
      <p className="text-xs font-semibold">View Curriculum By Subjects</p>
      <CurriculumItem name="English Language" year="2015 - 2023" openLocalPDF={openLocalPDF} />
      <CurriculumItem name="Literature" year="2015 - 2023" />
      <CurriculumItem name="Chemistry" year="2015 - 2023" />
    </div>
  );
}
export default Curriculum;

const CurriculumItem = ({openLocalPDF, name, year}) => {
  return(
    <div className="bg-white rounded-md p-2">
      <p className="text-xs">{name}</p>
      <p className="text-xs">{year}</p>

      <div
      onClick={openLocalPDF}
      className="bg-blue-100 hover:bg-blue-200 rounded-md text-sm p-2 mt-2 cursor-pointer">
        <p className="text-blue-500 text-xs">View</p>
      </div>
    </div>
  )
}
