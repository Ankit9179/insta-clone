import React, { useEffect } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const checkLogin = useSelector((state) => state.isLogin.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLogin === true) {
      navigate("/");
    }
  }, [checkLogin]);
  return (
    <>
      <div className=" flex justify-around px-3 py-4 shadow-sm">
        <Link to={"/"}>
          <img className="w-32 object-contain" src={logo} alt="logo" />
        </Link>
        {/* check login change navbar show item */}
        {checkLogin ? (
          <ul className="flex gap-8">
            <Link to="/profile">
              <li className=" md:text-2xl cursor-pointer text-gray-400">
                Profile
              </li>
            </Link>
            <Link to={"/create-post"}>
              <li className=" md:text-2xl cursor-pointer text-gray-400">
                CreatePost
              </li>
            </Link>
          </ul>
        ) : (
          <ul className="flex gap-8">
            <Link to="/sign-up">
              <li className=" md:text-2xl cursor-pointer text-gray-400">
                Sign Up
              </li>
            </Link>
            <Link to="/sign-in">
              <li className=" md:text-2xl cursor-pointer text-gray-400">
                Sign In
              </li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
