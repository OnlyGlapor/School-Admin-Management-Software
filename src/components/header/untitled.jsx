
const AddContentPopper = ({handleCreateStudentModal, handleCreateTeacherModal}) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [addContentReferenceElement, setAddContentReferenceElement] = useState(null);
  const [addContentPopperElement, setAddContentPopperElement] = useState(null);

  const addContentPopper = usePopper(addContentReferenceElement, addContentPopperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const toggleAddContent = () => {
      setContentVisible(!contentVisible);
  };

  return (
    <>
      <div
        title="Quick Actions"
        ref={setAddContentReferenceElement}
        onClick={toggleAddContent}
        className={contentVisible ? "p-1 bg-blue-500 rounded-full mx-2 transition duration-300 ease-in-out cursor-pointer flex items-center" : "flex items-center p-1.5 bg-gray-200 rounded-full mx-2 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"}
      >
        {contentVisible ? <AiOutlinePlus className="text-white" size={19} /> : <AiOutlinePlus size={19} />}
      </div>
      {contentVisible && (
        <div
          ref={setAddContentPopperElement}
          {...addContentPopper.attributes.popper}
          style={addContentPopper.styles.popper}
          className="popper bg-white border rounded-md z-30 w-[18%] shadow-md"
        >
          <div className="flex items-center justify-between p-2">
            <p className="text-sm font-semibold">Actions</p>
            <AiOutlineWarning />
          </div>
          {/* Messages content goes here */}
          <div className="mt-2">
            <div className=" w-full">
              <div onClick={handleCreateStudentModal} className="flex items-center p-1.5 hover:bg-gray-100 cursor-pointer">
                <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                  <PiStudent />
                </div>
                <p className="text-xs font-semibold ml-2 w-44">Create Student Profile</p>
              </div>
              <div onClick={handleCreateTeacherModal} className="flex items-center p-1.5 hover:bg-gray-100 cursor-pointer">
                <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                  <LiaChalkboardTeacherSolid />
                </div>
                <p className="text-xs font-semibold w-44 ml-2">Create New Teacher</p>
              </div>
              <div className="flex items-center p-1.5 hover:bg-gray-100 cursor-pointer">
                <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                  <AiOutlinePlus />
                </div>
                <p className="text-xs font-semibold w-44 ml-2">Create New Employee</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const ProfilePopper = ({toggleLogout}) => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [profileReferenceElement, setProfileReferenceElement] = useState(null);
  const [profilePopperElement, setProfilePopperElement] = useState(null);

  const profilePopper = usePopper(profileReferenceElement, profilePopperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const navigate = useNavigate();

  const toggleProfile = () => {
      setProfileVisible(!profileVisible);
  };

  const manageProfile = () => {
     toggleProfile();
    navigate("/settings")
  }

  return (
    <>
      <div
        title="Profile"
        ref={setProfileReferenceElement}
        onClick={toggleProfile}
      >
        <div className="ml-1.5 cursor-pointer">
          <img className="w-9 h-9 rounded-full bg-gray-600 border-2 border-blue-500"
          src="https://randomuser.me/api/portraits/women/56.jpg" />
        </div>
      </div>
      {profileVisible && (
        <div
          ref={setProfilePopperElement}
          {...profilePopper.attributes.popper}
          style={profilePopper.styles.popper}
          className="popper bg-white border rounded-md p-4 z-30 w-[20%] shadow-lg"
        >
          <div className="flex items-start">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/56.jpg" />
              </div>
              <div className="bg-blue-500 rounded-full absolute bottom-0 right-0">
                <BiCheck className="text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold">Lisa Smother</p>
              <p className="text-xs">lissmother@gmail.com</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <p className="text-xs">Active</p>
                  <div className="p-1 rounded-full bg-green-500 ml-1"></div>
                </div>
                <p className="text-xs ml-4 cursor-pointer">Set status me...</p>
              </div>
            </div>
          </div>

          <div
          onClick={manageProfile} 
          className="p-1 rounded-md cursor-pointer hover:bg-gray-100 mt-5 flex items-center">
            <AiOutlineUsergroupAdd />
            <p className="text-sm ml-1">Manage Account</p>
          </div>
          <div
          onClick={toggleLogout} 
          className="p-1 rounded-md cursor-pointer hover:bg-gray-50 text-red-500 flex items-center">
            <MdOutlineLogout />
            <p className="text-sm ml-1">Log out</p>
          </div>
        </div>
      )}
    </>
  );
};
