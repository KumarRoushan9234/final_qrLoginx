import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
        User-App
      </h3>
      <div className="flex-1 mx-10 max-w-lg relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-300">{user.name}</span>

            <FaRegUserCircle
              className="text-2xl cursor-pointer hover:text-blue-400"
              onClick={() => navigate("/profile")}
            />

            <IoLogOut
              onClick={logout}
              className="text-2xl cursor-pointer text-red-500 hover:text-red-400"
            />
          </>
        ) : (
          <button
            className="flex items-center gap-2 px-2 py-2 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
            onClick={() => navigate("/login")}
          >
            <FiLogIn className="text-lg" />
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
