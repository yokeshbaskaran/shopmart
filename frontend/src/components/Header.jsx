import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLockPerson } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const navDetails = [
    {
      link: "/",
      icon: <IoHomeOutline size={25} />,
      linkName: "Home",
    },
    {
      link: "/profile",
      icon: <CgProfile size={25} />,
      linkName: "Profile",
    },
    {
      link: "/followers",
      icon: <FaUsers size={25} />,
      linkName: "Followers",
    },
    {
      link: "/following",
      icon: <FaUserPlus size={25} />,
      linkName: "Following",
    },
    {
      link: "/settings",
      icon: <IoSettingsOutline size={25} />,
      linkName: "Settings",
    },
    {
      link: "/auth",
      icon: <MdLockPerson size={25} />,
      linkName: "Login/Signup",
    },
  ];

  return (
    <>
      <header className="max-w-[220px] h-screen">
        <div className="w-full h-full py-3 px-5 flex flex-col justify-between items-start">
          {/* logo  */}
          <div>
            <div className="w-full flex items-center space-x-5 px-4 py-2">
              <RxHamburgerMenu size={25} className="md:hidden visible" />

              <div className="flex items-center gap-2">
                <img src="logo.png" alt="logo" width={30} height={30} />
                <h2 className="text-2xl font-medium text-app">Tweets</h2>
              </div>
            </div>
          </div>

          {/* Navbar  */}
          <nav className="mb-auto my-3">
            <ul className="flex flex-col space-y-2 w-full">
              {navDetails.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="flex items-center space-x-5 px-4 py-2 rounded hover:bg-gray-200"
                >
                  {item.icon}
                  <span className="text-lg">{item.linkName}</span>
                </Link>
              ))}
            </ul>
          </nav>

          {/* user profile  */}
          <div className="w-full p-2">
            <div className="flex items-center gap-2">
              <RxAvatar size={30} />
              <div className="flex flex-col items-start">
                <span className="text-gray-400">@=user_idname</span>
                <button className="flex items-center justify-center gap-2">
                  <span className="text-lg capitalize">logout</span>
                  <LuLogOut size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
