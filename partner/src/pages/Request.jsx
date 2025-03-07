import React, { useState, useEffect } from "react";
import API from "../api/api";
import CheckInModal from "../components/CheckInModal";
import usePartnerStore from "../store/PartnerStore";

const Request = () => {
  const { partner } = usePartnerStore();
  // console.log(partner._id);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("partner-token");
        if (!token) {
          setError("Authentication required. Please log in.");
          setLoading(false);
          return;
        }

        const response = await API.get("/checkin/partner-checkins", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRequests(response.data.pendingCheckIns || []);
      } catch (err) {
        setError("Failed to load requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const openModal = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const updateCheckInStatus = async (requestId, status) => {
    try {
      const token = localStorage.getItem("partner-token");
      if (!token) {
        setError("Authentication required. Please log in.");
        return;
      }

      const response = await API.put(
        "/checkin/update-status",
        {
          partnerId: "{partner._id}",
          userId: requestId,
          status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.message);
      closeModal();

      // fetchRequests();
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Error updating status.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Check-In Requests</h1>

      {loading && <p className="text-blue-600">Loading requests...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && requests.length === 0 ? (
        <p className="text-gray-500">No pending check-in requests.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li
              key={req._id}
              className="p-4 border rounded-md shadow-sm bg-white cursor-pointer"
              onClick={() => openModal(req)}
            >
              <p className="text-lg font-semibold">{req.userName}</p>
              <p className="text-sm text-gray-600">{req.email}</p>
              <p className="text-sm text-gray-500">
                Check-in Time: {new Date(req.requestedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}

      <CheckInModal
        isOpen={isModalOpen}
        onClose={closeModal}
        request={selectedRequest}
        onUpdateStatus={updateCheckInStatus}
      />
    </div>
  );
};

export default Request;
