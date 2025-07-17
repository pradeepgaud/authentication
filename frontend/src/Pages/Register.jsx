import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // ✅ use context

function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); // ✅ get setUser from context

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        fullName: formData.name,
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      alert("✅ " + res.data.message);

      if (res.data.user && res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);

        setUser(res.data.user); // ✅ update context state
        navigate("/home");
      } else {
        navigate("/login"); // fallback if token/user missing
      }

      setFormData({
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      alert("❌ " + errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-10 space-y-6 border border-gray-700"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Create Your Account
        </h2>

        {[
          {
            label: "Full Name",
            name: "name",
            type: "text",
            placeholder: "Enter Your Full Name",
          },
          {
            label: "Username",
            name: "username",
            type: "text",
            placeholder: "Enter Your Username",
          },
          {
            label: "Phone Number",
            name: "phone",
            type: "text",
            placeholder: "Enter Your Phone Number",
          },
          {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "john@example.com",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter your Password",
          },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm your Password",
          },
        ].map((field) => (
          <div
            key={field.name}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <label htmlFor={field.name} className="text-white text-sm sm:w-40">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-orange-500 hover:to-yellow-500 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
