import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import usePartnerAuthStore from "./store/PartnerStore";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import ScanQR from "./pages/ScanQR";
import LandingPage from "./pages/Landing/LandingPage";
import FloatingHelp from "./components/FloatingHelp";
import MyCompany from "./pages/MyCompany";
import Request from "./pages/Request";
import GenerateQR from "./pages/GenerateQR";
import "./index.css";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = usePartnerAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const { isAuthenticated } = usePartnerAuthStore();

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}

      <div className="flex">
        {isAuthenticated && <Sidebar />}

        <div className="flex-1 p-6 relative">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={isAuthenticated ? <MyCompany /> : <LandingPage />}
            />

            <Route
              path="/scan"
              element={
                <ProtectedRoute>
                  <ScanQR />
                </ProtectedRoute>
              }
            />
            <Route
              path="/generate-qr"
              element={
                <ProtectedRoute>
                  <GenerateQR />
                </ProtectedRoute>
              }
            />
            <Route
              path="/request"
              element={
                <ProtectedRoute>
                  <Request />
                </ProtectedRoute>
              }
            />
          </Routes>

          {isAuthenticated && <FloatingHelp />}
          {/* {isAuthenticated && <Footer />} */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
