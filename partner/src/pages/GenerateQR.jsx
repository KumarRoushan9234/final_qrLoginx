import { useState, useEffect } from "react";
import usePartnerStore from "../store/PartnerStore";
import API from "../api/api";

const GenerateQR = () => {
  const { token } = usePartnerStore();
  const [previousQrCode, setPreviousQrCode] = useState(null);
  const [newQrCode, setNewQrCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load the previous QR code from local storage if available
    const savedQrCode = localStorage.getItem("partner-qr-code");
    if (savedQrCode) {
      setPreviousQrCode(savedQrCode);
    }
  }, []);

  const handleGenerateQR = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await API.post(
        "/partners/generate-qr",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setNewQrCode(response.data.qrCode);
      localStorage.setItem("partner-qr-code", response.data.qrCode);
      setPreviousQrCode(response.data.qrCode);
    } catch (err) {
      setError("Failed to generate QR Code. Try again.");
      console.error(err);
    }

    setLoading(false);
  };

  const downloadQRCode = (qrCode, name) => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Partner QR Code</h2>

      {error && <p className="text-red-500">{error}</p>}

      {previousQrCode ? (
        <div className="mb-6">
          <h3 className="text-lg font-medium">Previous QR Code</h3>
          <img
            src={previousQrCode}
            alt="Previous Partner QR Code"
            className="w-48 h-48 mx-auto mb-2"
          />
          <button
            onClick={() =>
              downloadQRCode(previousQrCode, "Previous_QR_Code.png")
            }
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Download QR Code
          </button>
        </div>
      ) : (
        <p className="text-gray-500 mb-6">
          No QR code available. Generate a new one below.
        </p>
      )}

      <button
        onClick={handleGenerateQR}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Generating..." : "Generate New QR Code"}
      </button>

      {newQrCode && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">New QR Code</h3>
          <img
            src={newQrCode}
            alt="New Partner QR Code"
            className="w-48 h-48 mx-auto mb-2"
          />
          <button
            onClick={() => downloadQRCode(newQrCode, "New_QR_Code.png")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Download New QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateQR;
