import { useState, useEffect } from 'react'
import { RiLogoutCircleRFill } from 'react-icons/ri';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import { BiSupport } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { TiVendorMicrosoft } from "react-icons/ti";
import CircularLoader from './components/reusable/CircularLoader'; // Adjust the path based on your file structure
import CustomDialog from './components/reusable/Dialog'; // Adjust the path based on your file structure

import logo from "./assets/signup.png";

import { Route, Routes, Link, useParams } from 'react-router-dom';

// Static Components

import Header from './components/header/header';

import Dashboard from "./routes/dashboard/dashboard";
import ClassDashboard from './routes/class/ClassDashboard'
import StudentsList from "./routes/students_list/students_list";
import StudentItem from "./routes/student_item/student_item";
import ErrorPage from "./error-page";


function App() {
  return(
    <>
    <Header toggleModal={{}} toggleLogout={{}} handleCreateStudentModal={{}} handleCreateTeacherModal={{}} />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/classes/" element={<ClassDashboard />} />
      <Route path="/classes/new" element={<h1>Add New Class</h1>} />
      <Route path="/class/:id" element={<StudentsList /> }/>
      <Route path="/class/:id/stud_list/:id" element={<StudentItem /> }/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}
export default App;


// function App() {
//   const [showEmailError, setShowEmailError] = useState(false);
//   const [showPasswordError, setShowPasswordError] = useState(false);
//   const [openAlert, setOpenAlert] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//  const handleLogin = () => {
//     setIsLoading(true);

//     // Simulate an asynchronous operation (e.g., an API call) with a setTimeout
//     setTimeout(() => {
//       setIsLoading(false);
//       setOpenAlert(true); // Set openAlert to true after the timeout
//     }, 2000); // Adjust the delay as needed (2000 milliseconds = 2 seconds)
//   };

//   const handleOpenAlert = () => {
//     setOpenAlert(!openAlert);
//   }

//   const onRequestClose = () => {
//     setOpenAlert(false);
//   }

//   const handleNeedHelp = () => {
//     const recipient = 'contact@eduadmin.com';
//     const subject = 'Need Help!';

//     // Construct the mailto URL
//     const mailtoURL = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

//     // Open the user's default email application in a new window
//     window.open(mailtoURL, '_blank');
//   };

//   return (
//       <div className="h-[100vh] bg-gray-100 p-2 flex items-center justify-center relative">
//       <div className="w-full  h-[10%] p-3 flex items-center justify-between absolute top-0">
//          <div className="flex items-end">
//            <RiLogoutCircleRFill size={30} />
//            <p className="ml-2 font-medium">SchoolAdmin</p>
//          </div>

//          <div>
//            <button onClick={handleNeedHelp} className="text-xs hover:bg-gray-100 border text-black p-1 rounded-md flex items-center">Need Help? <BiSupport className="ml-3" /></button>
//          </div>
//        </div>
//         <div className="w-[35%] h-[360px] flex flex-col items-center justify-center py-5 border-r bg-white">
//           <p>Continue with other accounts!</p>
//           <div className="w-full flex flex-col items-center mt-10">
//             <button title="Google" className="w-[70%] text-sm p-2 px-5 bg-blue-400 text-white rounded-md flex items-center"><FaGoogle size={18} /><p className="text-sm ml-5">Continue with Google</p></button>
//             <button title="Apple" className="w-[70%] text-sm p-2 px-5 bg-black text-white rounded-md flex items-center my-2"><FaApple size={18} /><p className="text-sm ml-5">Continue with Google</p></button>
//             <button title="Microsoft" className="w-[70%] border text-sm p-2 px-5 bg-white rounded-md flex items-center"><TiVendorMicrosoft size={18} /><p className="text-sm ml-5">Continue with Google</p></button>
//           </div>
//         </div>
//         <div className="w-[35%] h-[360px] bg-white flex flex-col items-center justify-center p-2">
//           <p className="text-lg font-semibold">Sign In</p>

//           <div className="flex flex-col items-center mt-5 w-full">
//             <div className="w-[70%]">
//               <input autoFocus className={`w-full p-2 rounded-md text-sm border hover:border-gray-300 ${showEmailError ? "border-red-500" : null}`} placeholder="Email" />
//               {showEmailError && <p className="text-xs mt-1 text-red-500">Enter a valid email address</p>}
//             </div>
//             <div className="w-[70%] mt-3">
//               <input className={`w-full p-2 rounded-md text-sm border hover:border-gray-300 ${showPasswordError ? "border-red-500" : null}`} placeholder="Password" />
//               {showPasswordError && <p className="text-xs mt-1 text-red-500">Enter a valid password</p>}
//             </div>
//           </div>
//           <div className="my-5 w-[70%]">
//             <p className="text-sm flex items-center"><input className="mr-2" type="checkbox" />Stay signed in for 30 days</p>
//           </div>
//           <button onClick={handleLogin} className="w-[70%] text-sm font-medium bg-blue-400 p-2 rounded-md text-white flex justify-center">
//             {isLoading ? <CircularLoader classType="buttonLoader" /> : "Sign In now!"}
//           </button>
//           <p className="text-sm my-5">Don't have an account? <span className="text-blue-400 cursor-pointer">Create an account</span></p>
//         </div>
//         <CustomDialog isOpen={openAlert} onRequestClose={onRequestClose}>
//           <AlertModal handleOpenAlert={handleOpenAlert} />
//         </CustomDialog>
//       </div>
//   )
// }

// export default App;

// const AlertModal = ({handleOpenAlert}) => {
//   return(
//     <Zoom in={10} timeout={200} unmountOnExit>
//     <div className="absolute w-[35%] h-[250px] bg-white rounded-md shadow-md p-5 flex flex-col items-center justify-center">
//       <p className="text-sm font-medium text-center">Oops, we couldn't find an account that matches those credientials.</p>
//       <div className="w-full flex flex-col items-center justify-center mt-10">
//         <button className="w-full text-sm font-medium bg-gray-100 p-2 hover:bg-blue-400 hover:text-white">Create an account that matches!</button>
//         <button onClick={handleOpenAlert} className="w-full text-sm font-medium hover:underline p-2">Continue to sign in</button>
//       </div>
//     </div>
//     </Zoom>
//   );
// }

// function App() {
//   const [openSignup, setOpenSignup] = useState(false);
//   const [isSignupComplete, setIsSignupComplete] = useState(false);
//   const [showLoader, setShowLoader] = useState(false);

//   const handleOpenSignUp = () => {
//     setOpenSignup(!openSignup);
//   }

//   const handleSignUpComplete = () => {
//     setShowLoader(true);

//     // Adding a delay of 500 milliseconds (you can adjust the duration)
//     setTimeout(() => {
//       setIsSignupComplete(true);
      
//       // Set showLoader back to false after the delay
//     }, 1000).then(()=> {
//       setShowLoader(false);
//     })
//   };



//   const sentences = [
//     "Manage student info effortlessly.",
//     "Track staff progress seamlessly.",
//     "Sync to the cloud securely.",
//     "Export docs anytime you need."
//   ];



//   const [currentSentence, setCurrentSentence] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//    useEffect(() => {
//     let sentenceIndex = 0;
//     let textIndex = 0;

//     const textIntervalId = setInterval(() => {
//       if (textIndex <= sentences[sentenceIndex].length) {
//         setCurrentText(sentences[sentenceIndex].substring(0, textIndex));
//         textIndex++;
//       } else {
//         setTimeout(() => {
//           setCurrentText('');
//           textIndex = 0;
//           sentenceIndex = (sentenceIndex + 1) % sentences.length;
//         }, 1000); // Delay before starting the next sentence
//       }
//     }, 100); // Change the interval as needed (in milliseconds)

//     const cursorIntervalId = setInterval(() => {
//       setShowCursor((prevShowCursor) => !prevShowCursor);
//     }, 500); // Adjust the interval for the cursor

//     return () => {
//       clearInterval(textIntervalId);
//       clearInterval(cursorIntervalId);
//     }; // Cleanup intervals on component unmount
//   }, []);


//   return (
//     <div className="bg-white h-[100vh] relative overflow-hidden">
//       <div className="h-[10%] p-2 flex items-center justify-between">
//         <div className="flex items-end">
//           <RiLogoutCircleRFill size={30} />
//           <p className="ml-2 font-medium">SchoolAdmin</p>
//         </div>

//         <div>
//           <button className="text-sm hover:bg-gray-100 border text-black font-medium p-2 rounded-md">Contact us</button>
//           <button className="text-sm hover:bg-gray-100 border text-black font-medium p-2 rounded-md mx-2">Sign In</button>
//           <button className="text-sm bg-blue-400 text-white font-medium p-2 rounded-md">Sign Up for free</button>
//         </div>
//       </div>
//       {openSignup ? (
//         <SignUp isSignupComplete={isSignupComplete} handleSignUpComplete={handleSignUpComplete} showLoader={showLoader} />
//       ):(
//       <div className="h-[90%] flex items-center justify-between">
//         <div className="h-full flex flex-col pl-5 justify-center">
//           <p className="text-2xl font-semibold w-[80%] h-[110px]">
//             Welcome to EduAdmin. No need for papers!<br />
//             <span>{currentText}</span>
//             {showCursor && <span className="cursor-blink">|</span>}
//           </p>
//           <p className="text-sm mt-2">Join the team by signing up with your email</p>

//           <div className="my-5">
//             <input autoFocus className="bg-white p-1.5 text-sm rounded-l-md outline-none border-blue-400 border-l-2 border-b-2 border-t-2" placeholder="example@me.com" />
//             <button onClick={handleOpenSignUp} className="bg-blue-400 rounded-md p-2 text-white text-sm -ml-2">Sign Up for free</button>
//           </div>

//           <p className='text-sm text-center mt-10'>Or with other accounts</p>

//           <div className="flex justify-center items-center mt-10">
//             <button title="Google" className="text-sm p-1.5 bg-gray-100 hover:bg-black hover:text-white rounded-md flex items-center"><FaGoogle size={18} /></button>
//             <button title="Apple" className="text-sm p-1.5 bg-gray-100 hover:bg-black hover:text-white rounded-md flex items-center mx-10"><FaApple size={18} /></button>
//             <button title="Microsoft" className="text-sm p-1.5 bg-gray-100 hover:bg-black hover:text-white rounded-md flex items-center"><TiVendorMicrosoft size={18} /></button>
//           </div>
//         </div>
//         <Fade in={10} direction="left" timeout={1000} unmountOnExit>
//           <div className="w-[50%] h-full flex items-start justify-center bg-blue-400 rounded-l-full">
//             <img src="https://i.ibb.co/FHCh7CS/Screenshot-2024-01-12-12-47-28-PM.png" className="w-[60%] h-auto object-cover shadow-lg absolute top-20" />
//           </div>
//         </Fade>
//       </div>
//       )}
//       <div className="text-center bg-transparent absolute bottom-0 w-full p-2">
//         <p className="text-xs">© Copyright 2024 - version 2.6.0</p>
//         <div className="flex items-center justify-center mt-2"> 
//           <p className="text-xs">Terms of service</p>
//           <p className="text-xs mx-5">Privacy Policy</p>
//           <p className="text-xs">Data Policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// export default App;

function SignUp({isSignupComplete, handleSignUpComplete, showLoader}) {
  return (
    <Slide in={10} direction="left" timeout={200} unmountOnExit>
      <div className="h-[90%] flex items-center justify-between p-2">
        <Fade in={10} direction="left" timeout={1000} unmountOnExit>
          <div className="w-[50%] h-full flex items-start justify-center bg-bdlue-400 rounded-r-full">
            <img src={logo} className="w-[45%] h-auto object-cover absolute top-[19%]" />
          </div>
        </Fade>
        {showLoader ? (
          !isSignupComplete ? (
            <div className="w-[50%] h-full flex items-center justify-center">
              <CircularLoader />
            </div>
          ):(
            <Passwords />
          )
        ):(
          <div className="w-[50%] h-full flex flex-col items-center justify-center bg-blue-t400 p-2 pb-10">
            <p className="text-lg font-semibold">Sign up for free</p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <input className="p-1 rounded-md text-sm border" placeholder="First Name" />
              <input className="p-1 rounded-md text-sm border" placeholder="Middle Name" />
              <input className="p-1 rounded-md text-sm border" placeholder="Last Name" />
              <input className="p-1 rounded-md text-sm border" placeholder="Phone" />
              <input className="p-1 rounded-md text-sm border" placeholder="Role" />
            </div>
            <p className="text-sm font-medium mt-10">Fill in school's information</p>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <input className="p-1 rounded-md text-sm border" placeholder="School's Name" />
              <input className="p-1 rounded-md text-sm border" placeholder="Level" />
              <input className="p-1 rounded-md text-sm border" placeholder="Country" />
              <input className="p-1 rounded-md text-sm border" placeholder="State" />
              <input className="p-1 rounded-md text-sm border" placeholder="Email Address" />
              <input className="p-1 rounded-md text-sm border" placeholder="Contact 1" />
            </div>

            <div className="my-5 px-5">
              <p className="text-sm"><input className="mr-2" type="checkbox" /> I agree to the terms of service and privacy policy.</p>
              <p className="text-sm"><input className="mr-2" type="checkbox" /> I wish to recieve newsletters about latest updates and news about  this software.</p>
            </div>
            <button onClick={handleSignUpComplete} className="text-sm font-medium bg-blue-400 p-2 rounded-md text-white">Sign me up now!</button>
          </div>
        )}
      </div>
      </Slide>
  )
}


function Passwords() {
  return (
    <Slide in={10} direction="left" timeout={200} unmountOnExit>
      <div className="w-[50%] h-full flex flex-col items-center justify-center bg-blue-t400 p-4 pb-10">
        <p className="text-lg font-semibold">Sign up for free - Passwords</p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <input className="p-1 rounded-md text-sm border" placeholder="Password" />
          <input className="p-1 rounded-md text-sm border" placeholder="Confirm Password" />
          <input className="p-1 rounded-md text-sm border" placeholder="Secret Glue" />
        </div>

        <div className="my-5 px-5">
          <p className="text-sm">Note: We automatically enable two factor authentication for our user's account. Learn more.</p>
        </div>
        <button className="text-sm font-medium bg-blue-400 p-2 rounded-md text-white">Sign me up now!</button>
      </div>
    </Slide>
  )
}
