import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //send data to backend
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const res = await axios.post(
        "http://localhost:5000/api/v1/insta-clone/user/sign-in",
        data
      );
      const resData = res.data;
      if (!resData.success) {
        toast.error(resData.message);
      }
      if (resData.success) {
        toast.success(resData.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="signin w-full h-screen flex justify-center items-center bg-[url('https://media.istockphoto.com/id/1191721107/vector/bright-gradient-background-for-the-site-pink-orange-purple.jpg?s=612x612&w=0&k=20&c=2ZV_IOJKRiJ7YWrABLo_Kl7qUdnJSwn2bqgWVwK25lM=')] bg-cover ">
      <div className="signincontainer">
        <form
          className="signinform bg-[#ffffff4d] text-center p-4 rounded-t-md"
          onSubmit={sendData}
        >
          <img className="w-40 mx-auto my-4 " src={logo} alt="logo" />
          <div className="grid gap-2 mt-5 mb-2">
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email "
            />
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password "
            />
          </div>
          <input
            type="submit"
            name="btn"
            value="Sign In"
            className="mb-3 mt-1 bg-blue-900 text-white font-bold text-[20px]  px-2 py-1 rounded-md cursor-pointer hover:border-white w-[100%]"
          />
        </form>
        <div className="text-center  bg-[#ffffff4d] rounded-b-md p-3 my-2 ">
          Don't have an account ?
          <Link to="/sign-up">
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
