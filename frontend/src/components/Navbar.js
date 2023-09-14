import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-around px-3 py-4 shadow-sm">
        <Link to={"/"}>
          <img className="w-32 object-contain" src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-8">
          <Link to="/sign-in">
            <li className=" md:text-2xl cursor-pointer text-gray-400">
              Sign in
            </li>
          </Link>
          <Link to="/sign-up">
            <li className=" md:text-2xl cursor-pointer text-gray-400">
              Sign up
            </li>
          </Link>
          <Link to="/profile">
            <li className=" md:text-2xl cursor-pointer text-gray-400">
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
