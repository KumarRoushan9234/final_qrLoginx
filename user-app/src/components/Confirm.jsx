import { useLocation } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Check-in Confirmed</h1>
      <p className="mt-2 text-lg">
        <strong>Company Name:</strong> {data.companyName || "N/A"}
      </p>
      <p className="mt-2">
        <strong>Email:</strong> {data.email || "N/A"}
      </p>
      <p className="mt-2">
        <strong>Phone:</strong> {data.phone || "N/A"}
      </p>
      <p className="mt-2">
        <strong>Partner ID:</strong> {data.partnerId || "N/A"}
      </p>
      <hr className="my-4 w-1/2" />
      <p className="mt-2">
        <strong>Name:</strong> {data.name || "N/A"}
      </p>
      <p className="mt-2">
        <strong>User Phone:</strong> {data.phone || "N/A"}
      </p>
    </div>
  );
};

export default Confirm;
