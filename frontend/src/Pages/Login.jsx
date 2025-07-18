import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [message, setMessage] = useState(""); // ✅ State for message
  const [error, setError] = useState(false);  // ✅ For error/success color

  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${api}/api/auth/login`, { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      setMessage("✅ Login Successful!");
      setError(false);

      setTimeout(() => {
        navigate("/home");
      }, 1000);  // ✅ Redirect after 1 sec
    } catch (err) {
      const errorMsg = err.response?.data?.message || "❌ Invalid Email or Password";
      setMessage(errorMsg);
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#171717] p-10 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Login to Your Account
        </h2>

        {/* ✅ Show Message if exists */}
        {message && (
          <div
            className={`mb-4 text-center p-2 rounded ${
              error ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-[#FF9C1F] transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
