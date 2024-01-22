const Menu = ({activeTab, handleTabToggle}) => {
	return(
		<div className="w-44 h-full">
			<ul>
				<TabNav activeTab={activeTab} name="General" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="Personalization" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="Notifications" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="Accessibility" handleTabToggle={handleTabToggle}/>
				<TabNav activeTab={activeTab} name="Accounts" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="Security/Privacy" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="Import/Export" handleTabToggle={handleTabToggle} />
				<TabNav activeTab={activeTab} name="About" handleTabToggle={handleTabToggle} />
			</ul>
		</div>
	);
}

export default Menu;

const TabNav = ({name, activeTab, handleTabToggle}) => {
	return(
		<li 
		className={activeTab === name ? "p-1 rounded bg-blue-100 font-semibold cursor-pointer" : "p-1 rounded hover:bg-blue-100 cursor-pointer transition-all transition-duration-500 transition-delay-500"}
		onClick={()=> handleTabToggle(name)}>{name}</li>
	)
}

