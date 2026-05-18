import React, { useState } from "react";
import Hero from "../Hero";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <nav className=" flex flex-row justify-between items-center "   id="Hero">
        <div className="hidden md:flex flex-row justify-start items-center  md:p-4 py-2 h-auto ">
          <a href="#Hero" className="text-lg mr-8 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#Certifications" className="text-lg mr-8 hover:text-blue-600 transition-colors">
            Certification
          </a>
          <a href="#Project" className="text-lg mr-8 hover:text-blue-600 transition-colors">
            Project
          </a>
          <a href="#About" className="text-lg mr-8 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#Contact" className="text-lg mr-8 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={toggleSidebar}
          type="button"
          className="ml-auto inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5A.75.75 0 012.75 14h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            ></path>
          </svg>
        </button>
      </nav>

      {/* --- OVERLAY (Background dimmer when menu is open) --- */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 sm:hidden"
        ></div>
      )}

      {/* --- SIDEBAR --- */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  duration-300 ease-in-out backdrop-blur-[20px]  
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
         `}
        // NOTE: 'sm:hidden' keeps this sidebar completely gone on large screens.
        // If you want a permanent sidebar on desktop, remove 'sm:hidden'.
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default" onClick={toggleSidebar}>
          {/* Close Button Inside Sidebar (Optional but good UX) */}
          <div className="flex justify-end mb-4 sm:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-2 font-medium" >
            <li>
              <a
                href="#Hero"
                className="flex items-center px-2 py-1.5 text-white rounded-lg hover:bg-gray-700 group"
                onClick={()=>toggleSidebar()}
              >
                <span className="ms-3" > Home</span>
              </a>
            </li>
            <li>
              <a
                href="#Certifications"
                className="flex items-center px-2 py-1.5 text-white rounded-lg hover:bg-gray-700 group"
                onClick={()=>toggleSidebar()}
              >
                <span className="ms-3" >Certification</span>
              </a>
            </li>
            <li>
              <a
                href="#Project"
                className="flex items-center px-2 py-1.5 text-white rounded-lg hover:bg-gray-700 group"
                onClick={()=>toggleSidebar()}
              >
                <span className="ms-3" >Project</span>
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="flex items-center px-2 py-1.5 text-white rounded-lg hover:bg-gray-700 group"
                onClick={()=>toggleSidebar()}
              >
                <span className="ms-3" >About</span>
              </a>
            </li>
            
            <li>
              <a
                href="#Contact"
                className="flex items-center px-2 py-1.5 text-white rounded-lg hover:bg-gray-700 group"
                onClick={()=>toggleSidebar()}
              >
                <span className="ms-3" >Contact</span>
              </a>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
