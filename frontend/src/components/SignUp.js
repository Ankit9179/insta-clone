import React from "react";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="signup w-full h-screen flex justify-center items-center bg-[url('https://media.istockphoto.com/id/1191721107/vector/bright-gradient-background-for-the-site-pink-orange-purple.jpg?s=612x612&w=0&k=20&c=2ZV_IOJKRiJ7YWrABLo_Kl7qUdnJSwn2bqgWVwK25lM=')] bg-cover ">
      <div className="signupcontainer">
        <div className="signupform bg-white text-center p-4 rounded-t-md">
          <img className="w-40 mx-auto my-4 " src={logo} alt="logo" />
          <p className="text-gray-400 font-bold">Sign up to see photos and videos<br /> from your friends</p>
          <div className="grid gap-2 my-5">
            <input className="border-2 p-2 rounded-sm outline-none box-border" type="text" name="fullname" placeholder="Full name" />
            <input className="border-2 p-2 rounded-sm outline-none box-border" type="text" name="username" placeholder="User name" />
            <input className="border-2 p-2 rounded-sm outline-none box-border" type="email" name="email" placeholder="Email " />
            <input className="border-2 p-2 rounded-sm outline-none box-border" type="password" name="" placeholder="password " />
          </div>
          <p className="text-gray-400 font-bold">By signing up, you agree to out terms, privacy  <br />policy and cookies policy</p>
          <input type="submit" name="btn" value="Sign Up" className="my-3 bg-blue-700 text-white font-bold text-[20px] border-2 px-2 py-1 rounded-md cursor-pointer hover:border-white w-[90%]" />
        </div>
        <div className="text-center bg-white rounded-b-md p-3 my-2">
          Already have an account ?
          <Link to="/sign-in"><span className="text-blue-600 cursor-pointer">Sign In</span></Link>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
