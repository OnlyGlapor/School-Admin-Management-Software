import { useState } from 'react';

import Menu from '../../components/settings/Menu';
import GeneralSettings from '../../components/settings/GeneralSettings';
import AccountSettings from '../../components/settings/AccountSettings';
import PersonalisedSettings from '../../components/settings/PersonalisedSettings';
import NotificationSettings from '../../components/settings/NotificationSettings';
import AccessibilitySettings from '../../components/settings/AccessibilitySettings';
import SecurityPrivacySettings from '../../components/settings/SecurityPrivacySettings';
import ImportExportSettings from '../../components/settings/ImportExportSettings';
import AboutSoftware from '../../components/settings/AboutSoftware';

export default function Settings (){
	const [activeTab, setActiveTab] = useState('General');

	const handleTabToggle = (name) => {
		setActiveTab(name);
	}
	return(
		<div className="flex justifn bg-white-500 h-full">
	      <div className="w-52 bg-white p-5 m-2 rounded-md">
	        <p className="text-lg font-semibold">Settings</p>
		    <Menu activeTab={activeTab} handleTabToggle={handleTabToggle} />
	       </div>
	       <div className="grow h-[580px] bg-white m-2 p-3 rounded-md pt-2 h-full overflow-auto scrollable">
		       {activeTab == 'General' && <GeneralSettings />}
		       {activeTab == 'Personalization' && <PersonalisedSettings />}
		       {activeTab == 'Notifications' && <NotificationSettings />}
		       {activeTab == 'Accessibility' && <AccessibilitySettings />}
		       {activeTab == 'Accounts' && <AccountSettings />}
		       {activeTab == 'Security/Privacy' && <SecurityPrivacySettings />}
		       {activeTab == 'Import/Export' && <ImportExportSettings />}
		       {activeTab == 'About' && <AboutSoftware />}
	       </div>
	    </div>
	)
}
