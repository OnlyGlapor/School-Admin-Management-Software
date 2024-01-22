import { useState } from 'react';
import { BiFile } from 'react-icons/bi';
import { HiOutlineCog } from 'react-icons/hi';

var generalLastSearchData = [
  {
    type: "profile",
    profile_img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Jerome Doku",
    searched_time: "2 minutes ago",
    category: ["students"]
  },
  {
    type: "profile",
    profile_img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mr Samson Dweah",
    searched_time: "2 minutes ago",
    category: ["Staffs", "Teachers"]
  },
  {
    type: "profile",
    profile_img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Sis Cythia Gundogan",
    searched_time: "2 minutes ago",
    category: ["Staffs", "Registrar"]
  },
  {
    type: "document",
    name: "Biology_Curriculum_(2022 - present).pdf",
    searched_time: "2 minutes ago",
    category: ["More"]
  },
  {
    type: "settings",
    name: "Add Accounts (settings)",
    searched_time: "2 minutes ago",
    category: ["More"]
  }
];



const LastSearchComponent = ({lookingFor}) => {
  const [lastSearchData, setLastSearchData] = useState(generalLastSearchData)

  console.log(lookingFor);

  const filterDataList = generalLastSearchData.filter((item) => item.category == "Teachers");


  console.log("ghjg", filterDataList);

  return(
    <div className="mt-2">
      {lastSearchData.map((item, index) => (
        <LastSearchItem key={index} item={item} />
      ))}
    </div>
  );
}

export default LastSearchComponent;

const LastSearchItem = ({item}) => {
  const { type, profile_img, name, searched_time } = item;

  return(
    <>
    {type == "profile" ? (
      <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
          <img src={profile_img} />
          </div>
          <p className="text-sm ml-2">{name}</p>
        </div>
        <div>
        <p className="text-xs text-gray-700">{searched_time}</p>
        </div>
      </div>
    ):(
      type == "document" ? (
        <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
            <BiFile size={20} />
            </div>
            <p className="text-sm ml-2">{name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-700">{searched_time}</p>
          </div>
        </div>
      ):(
        type == "settings" ? (
          <div className="rounded-md p-1 hover:bg-blue-50 cursor-pointer flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-gray-50 overflow-hidden flex items-center justify-center">
                <HiOutlineCog size={20} />
              </div>
              <p className="text-sm ml-2">{name}</p>
            </div>
            <div>
              <p className="text-xs text-gray-700">{searched_time}</p>
            </div>
          </div>
        ): null
      )
    )}
    </>
  );
}