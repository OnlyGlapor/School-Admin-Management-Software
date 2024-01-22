import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import moment from 'moment';

// import Root from "./routes/root";
// import ErrorPage from "./error-page";
// import Classes from "./routes/classes/classes";
// import Dashboard from "./routes/dashboard/dashboard";
// import Teacher from "./routes/teachers/teachers";
// import TeacherProfile from "./routes/teachers/teacher_profile"
// import DashboardCalendar from "./routes/events/events";
// import Finance from "./routes/finance/finance";
// import Payroll from "./routes/payroll/payroll";

// import FileManager from './routes/file_manager/file_manager';
// import FolderDetail from './routes/folder_detail/folder_detail';

// import StudentDashboard from './routes/students/studentDashboard'

// import StudentsList from "./routes/students_list/students_list";
// import StudentItem from "./routes/student_item/student_item";
// import Settings from "./routes/settings/settings";

import {
  BrowserRouter
} from "react-router-dom";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "dashboard/",
//         element: <Dashboard />,
//       },
//       {
//         path: "students/",
//         element: <StudentDashboard />,
//       },
//       {
//         path: "students/students_list",
//         element: <StudentsList />,
//       },
//       {
//         path: "students/students_list/1",
//         element: <StudentItem />
//       },
//       {
//         path: "events/",
//         element: <DashboardCalendar />,
//       },
//       {
//         path: "teachers/",
//         element: <Teacher />,
//       },
//       {
//         path: "teacher/1/",
//         element: <TeacherProfile />
//       },
//       {
//         path: "finance/",
//         element: <Finance />
//       },
//       {
//         path: "finance/payroll/",
//         element: <Payroll />
//       },
//       {
//         path: "file_manager/",
//         element: <FileManager/>
//       },
//       {
//         path: "folder_detail/",
//         element: <FolderDetail />
//       },
//       {
//         path: "settings/",
//         element: <Settings />
//       }
//     ],
//   },
//   {
//     path: "sign_up/",
//     element: <App />
//   }
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
