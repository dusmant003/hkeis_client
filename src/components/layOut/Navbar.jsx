import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [salonOpen, setSalonOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
       <div >
        <img src=" https://www.mayraspasalon.com/wp-content/uploads/2024/02/hd-rose-1-300x250.png" alt="" className="h-24"/>
       </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold items-center">

          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About Us</li>

          {/* SERVICES DROPDOWN */}
          <li className="relative cursor-pointer">
            <span className="hover:text-gray-300">Services ▾</span>

            <div
              className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-44 opacity-0 group-hover:opacity-100 hover:opacity-100 transition pointer-events-auto"
            >
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Massage
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Therapy
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Spa Packages
              </button>
            </div>
          </li>

          {/* SALON DROPDOWN */}
          <li className="relative cursor-pointer">
            <span className="hover:text-gray-300">Salon ▾</span>

            <div
              className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-44 opacity-0 group-hover:opacity-100 hover:opacity-100 transition pointer-events-auto"
            >
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Hair Care
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Skin Care
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Makeup
              </button>
            </div>
          </li>

          <li className="hover:text-gray-300 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 text-white px-6 py-4 space-y-4">

          <p className="border-b pb-2">Home</p>
          <p className="border-b pb-2">About Us</p>

          {/* MOBILE SERVICES */}
          <div>
            <p
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
            >
              Services <span>{serviceOpen ? "▲" : "▼"}</span>
            </p>

            {serviceOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <p className="cursor-pointer">Massage</p>
                <p className="cursor-pointer">Therapy</p>
                <p className="cursor-pointer">Spa Packages</p>
              </div>
            )}
          </div>

          {/* MOBILE SALON */}
          <div>
            <p
              onClick={() => setSalonOpen(!salonOpen)}
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
            >
              Salon <span>{salonOpen ? "▲" : "▼"}</span>
            </p>

            {salonOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <p className="cursor-pointer">Hair Care</p>
                <p className="cursor-pointer">Skin Care</p>
                <p className="cursor-pointer">Makeup</p>
              </div>
            )}
          </div>

          <p className="border-b pb-2">Gallery</p>
          <p className="border-b pb-2">Contact Us</p>
        </div>
      )}
    </nav>
  );
}
