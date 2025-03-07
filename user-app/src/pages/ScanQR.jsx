import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsQR from "jsqr";

const ScanQR = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [qrData, setQrData] = useState(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    let animationFrameId;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        if (video) {
          video.srcObject = stream;
          video.setAttribute("playsinline", true);
          video.play();
          scanQRCode();
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
        setQrData("Camera access denied");
      });

    function scanQRCode() {
      if (!scanning) return;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          try {
            const parsedData = JSON.parse(code.data);
            setQrData(parsedData);
            setScanning(false);

            navigate("/check-in", { state: parsedData });
          } catch (error) {
            console.error("Invalid QR code format", error);
            setQrData("Invalid QR code format");
          }
        }
      }

      animationFrameId = requestAnimationFrame(scanQRCode);
    }

    return () => {
      if (video?.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [scanning, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Scan QR Code</h1>
      <video ref={videoRef} className="w-full max-w-md rounded-lg border" />
      <canvas ref={canvasRef} className="hidden" />
      <p className="mt-4">{qrData || "Scanning..."}</p>
    </div>
  );
};

export default ScanQR;
