import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // ✅ Import context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext); // ✅ Get user from context
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // ✅ clear context
    navigate("/login");
  };

  const menuLinks = [
    { name: "Home", to: "/home" },
    { name: "Features", to: "/" },
    { name: "Pricing", to: "/" },
    { name: "Resource ▾", to: "/" },
    { name: "About", to: "/" },
  ];

  return (
    <nav className="bg-black px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center pl-0 sm:pl-6 space-x-2">
          <img
            src="https://i.pinimg.com/736x/94/3f/cf/943fcf1ad73de4334e083475d1ab9541.jpg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Element X</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-[#FF9C1F] text-white font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-white font-medium">
                {user?.username}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm border border-[#FF9C1F] text-[#FF9C1F] px-3 py-1 rounded hover:bg-[#FF9C1F] hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-gray-500 px-4 py-1 rounded hover:bg-gray-700"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#FF9C1F] hover:bg-[#FF9C1F] px-4 py-1 rounded text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 py-4">
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-[#FF9C1F] text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-2 pt-2">
            {user ? (
              <>
                <span className="text-white font-medium">
                  Welcome, {user?.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm border border-red-400 text-red-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border border-gray-500 px-4 py-1 rounded text-center hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-[#FF9C1F] hover:bg-[#FF9C1F] px-4 py-1 rounded text-white text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
   
