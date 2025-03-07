import React, { useState } from "react";

const CheckInModal = ({ isOpen, onClose, request, onUpdateStatus }) => {
  const [status, setStatus] = useState("");

  const handleUpdateStatus = () => {
    if (status) {
      onUpdateStatus(request._id, status);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-xl font-semibold">Approve or Reject Check-in</h2>
        <p className="mt-2">User: {request.userName}</p>
        <p className="mt-2">Email: {request.email}</p>
        <p className="mt-2">
          Requested At: {new Date(request.requestedAt).toLocaleString()}
        </p>

        <div className="mt-4">
          <label className="block text-sm font-medium">Status</label>
          <select
            className="w-full p-2 mt-2 border rounded-md"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="">Select Status</option>
            <option value="Approved">Approve</option>
            <option value="Rejected">Reject</option>
          </select>
        </div>

        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <button
            onClick={handleUpdateStatus}
            className={`${
              status === "Approved" ? "bg-green-500" : "bg-red-500"
            } text-white px-4 py-2 rounded-md`}
          >
            {status === "Approved" ? "Approve" : "Reject"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckInModal;
