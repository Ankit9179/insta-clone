import React from "react";

const Home = () => {
  return (
    <>
      <div className="homediv flex justify-center align-middle ">
        <div className="carddiv w-full md:w-[400px] border-2 m-4 md:m-20">
          <div className="cardheader flex gap-3 p-3 align-middle">
            <img className="w-[40px] rounded-full" src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="img" />
            <p className="mt-2">Hitisha</p>
          </div>
          <div className="cardpostdata flex justify-center ">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
          </div>
          <div className="cardconntent p-3 md:p-5">
            <p>❤️</p>
            <p>1 Like</p>
            <p>This is amazing</p>
          </div>
          <hr className="text-black font-bold text-3xl" />
          <div className="comment flex p-3 gap-1">
            <p className="my-auto">😄</p>
            <input className="w-full p-1  focus:outline-none" type="text" placeholder="Add a comment" />
            <button className="text-blue-300 cursor-pointer">Post</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;
