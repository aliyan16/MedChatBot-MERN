import React, { useState } from "react";
import { 
  FaTachometerAlt, 
  FaCalendarAlt, 
  FaPlusCircle,
  FaFileUpload,
  FaChartLine, 
  FaToolbox, 
  FaCog,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './leftbar.css'

function LeftSideBar({ user }) {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt className="text-lg" />,
      path: "/dashboard"
    },
    {
      name: "Therapy Sessions",
      icon: <FaCalendarAlt className="text-lg" />,
      subItems: [
        { name: "Start New Session", icon: <FaPlusCircle className="text-lg" />, path: "/sessions/new" },
        { name: "Post Sessions", icon: <FaFileUpload className="text-lg" />, path: "/sessions/post" },
        { name: "Latest Summary", icon: <FaChartLine className="text-lg" />, path: "/sessions/summary" }
      ]
    },
    {
      name: "Progress & Insights",
      icon: <FaChartLine className="text-lg" />,
      path: "/progress"
    },
    {
      name: "Tools & Resources",
      icon: <FaToolbox className="text-lg" />,
      path: "/tools"
    },
    {
      name: "Settings",
      icon: <FaCog className="text-lg" />,
      path: "/settings"
    }
  ];

  return (
    <div className="bg-gray-800 text-white p-4 overflow-y-auto hidden w-64 lg:block h-screen sticky top-0">
      <div className="space-y-2 p-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold">CIT Therapy Assistant</h1>
        </div>
        
        {/* Menu Items */}
        {menuItems.map((item) => (
          <div key={item.name}>
            <div 
              className="flex items-center justify-between cursor-pointer p-3 rounded hover:bg-gray-700 transition"
              onClick={() => item.subItems ? toggleDropdown(item.name) : navigate(item.path)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </div>
              {item.subItems && (
                openDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />
              )}
            </div>
            
            {/* Dropdown Content */}
            {item.subItems && openDropdown === item.name && (
              <div className="ml-8 mt-1 space-y-2">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.name}
                    className="flex items-center space-x-3 cursor-pointer p-2 pl-4 rounded hover:bg-gray-700 transition"
                    onClick={() => navigate(subItem.path)}
                  >
                    {subItem.icon}
                    <span className="text-sm">{subItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* User Profile at bottom */}
        {user && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              {user.firstName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm">
              {`${user.firstName} ${user.lastName}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeftSideBar;