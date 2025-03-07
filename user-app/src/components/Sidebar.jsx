import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiMessageSquare,
  FiShoppingCart,
  FiCalendar,
  FiActivity,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import {
  MdOutlineViewCompactAlt,
  MdOutlineQrCodeScanner,
} from "react-icons/md";
import { BsListTask } from "react-icons/bs";

import {
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
} from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 p-4 transition-all duration-300 shadow-lg flex flex-col justify-between relative`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-4 bg-gray-700 text-white p-2 rounded-full shadow-md"
      >
        {isOpen ? <BsLayoutSidebarInset /> : <BsLayoutSidebarInsetReverse />}
      </button>

      {/* Logo & Title */}
      {/* <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-500 w-10 h-10 rounded-full"></div>
        {isOpen && (
          <h1 className="text-white font-semibold text-lg">Softtech</h1>
        )}
      </div> */}

      {/* Navigation Links */}
      <nav className="space-y-2">
        <SectionTitle isOpen={isOpen} title="Overview" />

        <SidebarItem
          isOpen={isOpen}
          icon={<MdOutlineViewCompactAlt />}
          text="Companies"
          link="/"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<MdOutlineQrCodeScanner />}
          text="Scanner"
          link="/scan"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<IoSettings />}
          text="Settings"
          link="/"
        />

        {/* <SidebarItem
          isOpen={isOpen}
          icon={<FiBox />}
          text="Products"
          link="/products"
        /> */}
        <SidebarItem
          isOpen={isOpen}
          icon={<FiMessageSquare />}
          text="Messages"
          link="/messages"
          // badge="2"
        />

        {/* <SidebarItem
          isOpen={isOpen}
          icon={<FiShoppingCart />}
          text="Order"
          link="/orders"
        /> */}

        <SidebarItem
          isOpen={isOpen}
          icon={<FiBarChart2 />}
          text="Static"
          link="/static"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<BsListTask />}
          text="Task | Kanban"
          link="/static"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<FiCalendar />}
          text="Calendar"
          link="/calendar"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<FiActivity />}
          text="Activity"
          link="/activity"
        />
        <div className="border-t border-gray-700 my-3"></div>

        {/* <SectionTitle isOpen={isOpen} title="Account" /> */}

        {/* <SidebarItem
          isOpen={isOpen}
          icon={<HiOutlineChatAlt2 />}
          text="Chat"
          link="/chat"
        /> */}
        {/* <SidebarItem
          isOpen={isOpen}
          icon={<FiSettings />}
          text="Settings"
          link="/settings"
        /> */}
        {/* <SidebarItem
          isOpen={isOpen}
          icon={<FiLogOut />}
          text="Logout"
          link="/logout"
        /> */}
      </nav>

      {/* Theme Toggle */}
      {/* <div className="mt-auto border-t border-gray-700 pt-4 flex items-center justify-between">
        {isOpen && <span className="text-gray-400 text-sm">Dark Mode</span>}
        <input type="checkbox" className="toggle toggle-sm" />
      </div> */}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ isOpen, icon, text, link, badge }) => (
  <Link
    to={link}
    className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg"
  >
    <span className="text-xl">{icon}</span>
    {isOpen && <span className="ml-3 flex-1">{text}</span>}
    {badge && isOpen && (
      <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

// Section Title Component
const SectionTitle = ({ isOpen, title }) =>
  isOpen ? (
    <h2 className="text-gray-500 uppercase text-xs mt-4">{title}</h2>
  ) : null;

export default Sidebar;
