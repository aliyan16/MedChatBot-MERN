import React from 'react';
import { FaFacebook, FaHome, FaVideo, FaUserFriends, FaBell, FaUserCircle, FaAddressCard, FaTimesCircle, FaClock, FaPersonBooth } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ProfileDropDown from './profileDropdown';

export default function Header({user}) {
  const navigate=useNavigate()
  return (
    <header className="flex items-center justify-between p-2 bg-black shadow-md sticky top-0 z-50 text-white" >
      <div className="flex items-center space-x-2">
        <FaPersonBooth className="text-blue-600 text-3xl cursor-pointer" onClick={()=> navigate('/home')} />
      </div>
      <div className='flex space-x-12 text-2xl justify-between'>
        <FaHome className="cursor-pointer" onClick={()=> navigate('/home')} />
        <FaAddressCard className="cursor-pointer" onClick={()=> navigate('/reels')} />
        <FaClock className="cursor-pointer" onClick={()=> navigate('/friends')} />

      </div>
      <div className="flex space-x-8 text-2xl">
        <ProfileDropDown user={user}/>
      </div>
    </header>
  );
}
