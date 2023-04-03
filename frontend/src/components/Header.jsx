import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleUserIconClick() {
    setShowMenu((prev) => !prev);
  }
  return (
    <div className="z-50 fixed w-full shadow-md h-16 px-2 md:px-4 bg-white">
      <div className="flex itmes-center h-full justify-between">
        <Link to={""}>
          <div className="logo h-10">
            <img src={logo} className="h-full ml-5 mt-2" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to="contact">Contact</Link>
          </nav>
          <div className="text-2xl cursor-pointer text-slate-600 relative">
            <BsCartFill />
            <div className="flex items-center absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-center text-sm">
              <span>99</span>
            </div>
          </div>
          <div className="text-slate-600" onClick={handleUserIconClick}>
            <div className="cursor-pointer text-3xl">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                <Link
                  to={"newProduct"}
                  className="cursor-pointer whitespace-nowrap"
                >
                  New Product
                </Link>
                <Link to={"login"} className="cursor-pointer whitespace-nowrap">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
