import { useState } from "react";
import usePartnerStore from "../../store/PartnerStore";
import { useNavigate } from "react-router-dom";

const PartnerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = usePartnerStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(email, password);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Partner Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mt-2 w-80"
      />

      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-80"
      >
        Login
      </button>
    </div>
  );
};

export default PartnerLogin;
