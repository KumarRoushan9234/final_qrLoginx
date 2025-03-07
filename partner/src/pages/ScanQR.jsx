import { useRef, useState, useEffect } from "react";
import jsQR from "jsqr";

const ScanQR = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState("No QR code detected");

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        video.srcObject = stream;
        video.setAttribute("playsinline", true);
        video.play();
        requestAnimationFrame(scanQRCode);
      });

    function scanQRCode() {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          setResult(code.data);
        }
      }
      requestAnimationFrame(scanQRCode);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Scan QR Code</h1>
      <video ref={videoRef} className="w-full max-w-md" />
      <canvas ref={canvasRef} className="hidden" />
      <p className="mt-4 text-lg">{result}</p>
    </div>
  );
};

export default ScanQR;
