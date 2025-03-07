import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiSettings, FiLogOut, FiActivity } from "react-icons/fi";
import { MdOutlineQrCodeScanner, MdOutlineBusiness } from "react-icons/md";
import {
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
} from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import usePartnerStore from "../store/PartnerStore";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { partner, logout } = usePartnerStore();

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 p-4 transition-all duration-300 shadow-lg flex flex-col justify-between relative`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-4 bg-gray-700 text-white p-2 rounded-full shadow-md"
      >
        {isOpen ? <BsLayoutSidebarInset /> : <BsLayoutSidebarInsetReverse />}
      </button>

      <nav className="space-y-2">
        <SectionTitle isOpen={isOpen} title="Dashboard" />

        <SidebarItem
          isOpen={isOpen}
          icon={<MdOutlineBusiness />}
          text="My Business"
          link="/"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<MdOutlineQrCodeScanner />}
          text="Generate QR"
          link="/generate-qr"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<FiUsers />}
          text="Check-In Requests"
          link="/request"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<FiActivity />}
          text="Activity Log"
          link="/activity"
        />
        <SidebarItem
          isOpen={isOpen}
          icon={<IoSettings />}
          text="Settings"
          link="/settings"
        />

        <div className="border-t border-gray-700 my-3"></div>

        {/* <button
          onClick={logout}
          className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg w-full"
        >
          <FiLogOut className="text-xl" />
          {isOpen && <span className="ml-3">Logout</span>}
        </button> */}
      </nav>
    </div>
  );
};

const SidebarItem = ({ isOpen, icon, text, link }) => (
  <Link
    to={link}
    className="flex items-center text-gray-300 hover:bg-gray-700 p-2 rounded-lg"
  >
    <span className="text-xl">{icon}</span>
    {isOpen && <span className="ml-3">{text}</span>}
  </Link>
);

const SectionTitle = ({ isOpen, title }) =>
  isOpen ? (
    <h2 className="text-gray-500 uppercase text-xs mt-4">{title}</h2>
  ) : null;

export default Sidebar;
