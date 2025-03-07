import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/authStore";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ScanQR from "./pages/ScanQR";
import LandingPage from "./pages/Landing/LandingPage";
import Companies from "./pages/Companies";
import Profile from "./pages/Profile";
import "./index.css";
import CheckIn from "./pages/CheckIn";
import Confirm from "./components/Confirm";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}

      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <div className="flex flex-1">
          {isAuthenticated && <Sidebar />}

          <div className="flex-1  overflow-auto bg-black">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/"
                element={isAuthenticated ? <Companies /> : <LandingPage />}
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
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/check-in"
                element={
                  <ProtectedRoute>
                    <CheckIn />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/confirm"
                element={
                  <ProtectedRoute>
                    <Confirm />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
