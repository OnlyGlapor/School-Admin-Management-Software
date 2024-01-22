import React from 'react';

const AboutSoftware = () => {
	return(
		<div className="bg-white">
			<div className="p-2 mt-5">
				<p className="text-lg font-semibold">About Our School Admin Software</p>
				<div className="flex flex-col items-start">
					<div className="w-1/2 h-40 flex justify-center items-center">
						<p className="text-sm">Welcome to our School Admin Software, a comprehensive solution designed to streamline administrative tasks, enhance communication, and provide valuable insights for educational institutions. Our user-friendly interface empowers administrators, teachers, and staff to efficiently manage student data, attendance, grades, and more.</p>
					</div>
				</div>
				<p className="text-sm font-semibold">Key Features</p>
				<ul className="p-5 list-disc">
				  <li className="text-sm">Intuitive User interface</li>
				  <li className="text-sm">Role-Based Access Control</li>
				  <li className="text-sm">Seamless Data Import/Export</li>
				  <li className="text-sm">Customizable Settings and Personalization</li>
				  <li className="text-sm">Secure Communication with SSL/TLS Support</li>
				</ul>
				<div>
					<p className="text-sm">Experience the next level of school administration with our software.<br/> Simplify your tasks, improve collaboration, and focus on what truly matters – education.</p>
				</div>
			</div>
		</div>
	)
}
export default AboutSoftware;