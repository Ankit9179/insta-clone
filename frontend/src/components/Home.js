import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [postData, setPostData] = useState([])
  const navigate = useNavigate()
  const checkLogin = useSelector((state) => state.isLogin.value);
  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (checkLogin !== true) {
      navigate('/sign-in')
    } else {
      // // fetchdata posts
      fetch("http://localhost:5000/api/v1/insta-clone/post/get-all-posts", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((post) => post.json())
        .then((posts) => setPostData(posts))
        .catch((err) => console.log(err));
    }
  }, [navigate, checkLogin])


  return (
    <>
      {postData.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <div className="homediv flex justify-center align-middle ">
              <div className="carddiv w-full md:w-[400px] border-2 m-4 md:m-4">
                <div className="cardheader flex gap-3 p-3 align-middle">
                  <img
                    className="w-[40px] rounded-full"
                    src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg"
                    alt="img"
                  />
                  <p className="mt-2">{item.postedBy.name}</p>
                </div>
                <div className="cardpostdata flex justify-center ">
                  <img src={item.url} alt="img" />
                </div>
                <div className="cardconntent p-3 md:p-5">
                  <p>❤️</p>
                  <p>1 Like</p>
                  <p>{item.body}</p>
                </div>
                <hr className="text-black font-bold text-3xl" />
                <div className="comment flex p-3 gap-1">
                  <p className="my-auto">😄</p>
                  <input
                    className="w-full p-1  focus:outline-none"
                    type="text"
                    placeholder="Add a comment"
                  />
                  <button className="text-blue-300 cursor-pointer">Post</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
