import React from "react";
import { useNavigate } from "react-router-dom";

const IncompleteProfilePopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md text-center max-w-sm">
        <h2 className="text-lg font-semibold text-red-600">
          Incomplete Profile
        </h2>
        <p className="text-gray-600 my-3">
          Please update your profile to continue using the app.
        </p>
        <button
          onClick={() => navigate("/update-profile")}
          className="btn-primary"
        >
          Update Now
        </button>
      </div>
    </div>
  );
};

export default IncompleteProfilePopup;
