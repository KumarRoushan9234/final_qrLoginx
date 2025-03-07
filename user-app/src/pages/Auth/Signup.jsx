import { useState } from "react";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loginWithGoogle } = useAuthStore();
  const navigate = useNavigate();

  const handleSignup = async () => {
    const success = await signup(name, email, phone, password);
    if (success) navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-80"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded mt-2 w-80"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border rounded mt-2 w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mt-2 w-80"
      />

      <button
        onClick={handleSignup}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-80"
      >
        Sign Up
      </button>

      <button
        onClick={loginWithGoogle}
        className="mt-2 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded w-80"
      >
        <FcGoogle className="text-2xl mr-2" /> Sign Up with Google
      </button>

      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
