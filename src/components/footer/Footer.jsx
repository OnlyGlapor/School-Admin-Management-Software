import styles from './footer.module.css'
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsMoonStars } from 'react-icons/bs';
import {HiOutlineCog } from 'react-icons/hi';
import { RiLogoutCircleRFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-white border-t h-11 fixed bottom-0 w-full mt-auto px-4">
      <div className="flex items-center">
        <div className="p-1 bg-gray-200 rounded-full"></div>
        <p className="text-sm font-semibold ml-2">Currently Offline</p>
      </div>
      <div className="flex items-center">
        <p className="text-md">Wed, Oct 23</p>
        <div className="h-5 border rounded-full mx-2">
        </div>
        <p className="text-md">4:37:26 PM</p>
      </div>
    </div>
  )
}
