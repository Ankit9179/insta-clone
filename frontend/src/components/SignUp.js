import React, { useState } from "react";
import axios from "axios";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  // get all input feild value
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // send data to backend
  const sendData = async (e) => {
    e.preventDefault();
    try {
      const user = { name, userName, email, password };
      const res = await axios.post(
        "http://localhost:5000/api/v1/insta-clone/user/sign-up",
        user
      );
      const serverResponse = res.data;
      if (serverResponse.success) {
        toast.success(serverResponse.message);
      }
    } catch (error) {
      toast.error("server error");
    }
  };
  return (
    <div className="signup w-full h-screen flex justify-center items-center bg-[url('https://media.istockphoto.com/id/1191721107/vector/bright-gradient-background-for-the-site-pink-orange-purple.jpg?s=612x612&w=0&k=20&c=2ZV_IOJKRiJ7YWrABLo_Kl7qUdnJSwn2bqgWVwK25lM=')] bg-cover ">
      <div className="signupcontainer">
        <form
          className="signupform bg-white text-center p-4 rounded-t-md"
          onSubmit={sendData}
        >
          <img className="w-40 mx-auto my-4 " src={logo} alt="logo" />
          <p className="text-gray-400 font-bold">
            Sign up to see photos and videos
            <br /> from your friends
          </p>
          <div className="grid gap-2 my-5">
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="text"
              required
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User name"
            />
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email "
            />
            <input
              className="border-2 p-2 rounded-sm outline-none box-border"
              type="password"
              required
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password "
            />
          </div>
          <p className="text-gray-400 font-bold">
            By signing up, you agree to out terms, privacy <br />
            policy and cookies policy
          </p>
          <input
            type="submit"
            name="btn"
            value="Sign Up"
            className="my-3 bg-blue-700 text-white font-bold text-[20px] border-2 px-2 py-1 rounded-md cursor-pointer hover:border-white w-[90%]"
          />
        </form>
        <div className="text-center bg-white rounded-b-md p-3 my-2">
          Already have an account ?
          <Link to="/sign-in">
            <span className="text-blue-600 cursor-pointer">Sign In</span>
          </Link>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default SignUp;
