import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="Logo"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link className="hover:text-gray-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/forums">
                Forums
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/chat">
                Chat
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/content">
                Content
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/Fpage">
                Fpage
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <IonIcon
            icon={isMenuOpen ? close : menu}
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>

      {/* Optional: Close the menu when clicking outside of it */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={onToggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
