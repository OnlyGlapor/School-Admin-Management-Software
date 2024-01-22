import { useState } from 'react';

const Header = () => {
	const [activeGrade, setActiveGrade] = useState('Nursery');

	const handleActiveGrade = (grade) => {
	setActiveGrade(grade);
	}

	return(
		<div className="rounded-md w-full overflow-auto sidebar-scrollable">
        <div className="flex items-center w-[1200px]">
          <TopItem name="Nursery" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="K1" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="k2" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 1" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 2" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 3" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 4" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 5" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 6" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 7" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 8" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 9" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 10" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 11" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
          <TopItem name="Grade 12" activeGrade={activeGrade} handleActiveGrade={handleActiveGrade} />
        </div>
    </div>
	);
}
export default Header;

const TopItem = ({activeGrade, name, handleActiveGrade}) => {
	return(
	    <div onClick={()=> handleActiveGrade(name)} className={activeGrade === name ? "rounded-sm p-1 mr-2 w-20 text-center cursor-pointer bg-blue-500 text-white font-semibold shadow-md" : "rounded-sm p-1 mr-2 my-1 w-20 bg-white text-center cursor-pointer shadow-md"}>
	      <p className="text-sm">{name}</p>
	    </div>
  );
}