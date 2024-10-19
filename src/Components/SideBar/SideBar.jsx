import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Arrow  from '../../assets/Arrow.png'
import userImg from '../../assets/UserImg.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track the active link
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (path) => {
    setActiveLink(path); // Set the clicked link as active
    navigate(path);
    setIsOpen(false); // Close sidebar when navigation occurs (optional for mobile)
  };

  return (
    <div className="h-full">
      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden flex items-center p-4 bg-gray-800 text-white h-full">
        <button onClick={toggleSidebar}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <span className="ml-4 text-xl">Menu</span>
      </div>

      {/* Sidebar */}
      <div className="flex justify-between flex-col h-full">
        <div
          className={`fixed inset-y-0 w-fit left-0 z-50 bg-gray-800 md:bg-white text-white md:text-gray-800 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}
        >
          <div className="flex flex-col h-screen justify-between">
            <div className="p-4 overflow-y-auto flex-grow">
              {/* <h2 className="text-2xl font-semibold mb-6">Lemon Inc.</h2> */}
              <img src={Logo} alt="Logo" className="mb-6 border-b-2 w-auto h-auto p-4"/>

              <ul>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/"}
                    onChange={() => handleCheckboxChange("/")}
                    className="mr-2"
                  />
                  <Link
                    to="/"
                    className="flex-grow"
                    onClick={() => setActiveLink("/")}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/store"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/store"}
                    onChange={() => handleCheckboxChange("/store")}
                    className="mr-2"
                  />
                  <Link
                    to="/store"
                    className="flex-grow"
                    onClick={() => setActiveLink("/store")}
                  >
                    Stores
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/products"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/products"}
                    onChange={() => handleCheckboxChange("/products")}
                    className="mr-2"
                  />
                  <Link
                    to="/products"
                    className="flex-grow"
                    onClick={() => setActiveLink("/products")}
                  >
                    Products
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/catalogue"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/catalogue"}
                    onChange={() => handleCheckboxChange("/catalogue")}
                    className="mr-2"
                  />
                  <Link
                    to="/catalogue"
                    className="flex-grow"
                    onClick={() => setActiveLink("/catalogue")}
                  >
                    Catalogue
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/promotion"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/promotion"}
                    onChange={() => handleCheckboxChange("/promotion")}
                    className="mr-2"
                  />
                  <Link
                    to="/promotion"
                    className="flex-grow"
                    onClick={() => setActiveLink("/promotion")}
                  >
                    Promotion
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/reports"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/reports"}
                    onChange={() => handleCheckboxChange("/reports")}
                    className="mr-2"
                  />
                  <Link
                    to="/reports"
                    className="flex-grow"
                    onClick={() => setActiveLink("/reports")}
                  >
                    Reports
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/docs"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/docs"}
                    onChange={() => handleCheckboxChange("/docs")}
                    className="mr-2"
                  />
                  <Link
                    to="/docs"
                    className="flex-grow"
                    onClick={() => setActiveLink("/docs")}
                  >
                    Docs
                  </Link>
                </li>
                <li
                  className={`flex items-center mb-2 p-2 rounded-md transition-colors ${
                    activeLink === "/settings"
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={location.pathname === "/settings"}
                    onChange={() => handleCheckboxChange("/settings")}
                    className="mr-2"
                  />
                  <Link
                    to="/settings"
                    className="flex-grow"
                    onClick={() => setActiveLink("/settings")}
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            {/* User Profile Section at the Bottom */}
            <div className="p-4 mx-2 bg-card border-t-2">
              <div className="flex items-center">
                <img
                  aria-hidden="true"
                  alt="User Profile"
                  src={userImg}
                  className="rounded-full mr-3"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Andy Samberg</p>
                  <p className="text-muted-foreground">
                    andy.samberg@gmail.com
                  </p>
                </div>
                <img src={Arrow} alt='Arrow Icon' className="ml-1 h-4 w-4"/> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;


