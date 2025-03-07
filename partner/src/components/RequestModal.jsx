import axios from "axios";

const RequestModal = ({ request, onClose, setRequests }) => {
  if (!request) return null;

  const handleDecision = async (status) => {
    try {
      await axios.patch(`/api/requests/${request.id}`, { status });

      setRequests((prevRequests) =>
        prevRequests.filter((req) => req.id !== request.id)
      );

      onClose();
    } catch (error) {
      console.error(`Error updating request:`, error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">User Request</h2>
        <p>
          <strong>Name:</strong> {request.name}
        </p>
        <p>
          <strong>Email:</strong> {request.email}
        </p>
        <p>
          <strong>Phone:</strong> {request.phone}
        </p>
        <p>
          <strong>Message:</strong> {request.message}
        </p>

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={() => handleDecision("rejected")}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Reject
          </button>
          <button
            onClick={() => handleDecision("approved")}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Approve
          </button>
        </div>

        <button onClick={onClose} className="mt-4 text-gray-500 underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default RequestModal;
