import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  const navigate = useNavigate();
  //post variables
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  //call the post create func
  useEffect(() => {
    if (url) {
      postCreatedFunc();
    }
  }, [url]);

  //post img to cloudinary
  const sendPostImgFile = async () => {
    try {
      const data = new FormData(); //first create an object
      data.append("file", image); // attach img'
      data.append("upload_preset", "insta-clone"); // attach upload_preset
      data.append("cloud_name", "iiicloud"); //cloudinary
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/iiicloud/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const resdata = await res.json();
      setUrl(resdata.url); //add url in setUrl variable
    } catch (error) {
      console.log(error);
    }
  };

  //send post data in ur backend
  const postCreatedFunc = async () => {
    try {
      const token = localStorage.getItem("jwt"); //from your localSrorage
      const res = await fetch(
        "http://localhost:5000/api/v1/insta-clone/post/create-new-post",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            body,
            url,
          }),
        }
      );
      const resData = await res.json();
      console.log(resData);
      if (resData.success) {
        toast.success(resData.message);
        navigate("/");
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //image load
  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <>
      <div className="post w-full md:w-[50%] border-2 my-4 mx-auto rounded-md">
        <div className="heder flex">
          <p className="mx-auto my-3 text-2xl font-bold">Create Post</p>
          <p
            className="text-blue-400 my-3 cursor-pointer mr-1 font-bold"
            onClick={sendPostImgFile}
          >
            Shere
          </p>
        </div>
        <div className="main border-t-2">
          <img
            className="w-[300px] my-2 outline-none border-none mx-auto"
            id="output"
            alt="img"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              loadFile(event);
              setImage(event.target.files[0]);
            }}
          />
        </div>
        <div className="details  border-t-2 flex gap-3 p-2">
          <img
            className="w-[50px] rounded-full "
            src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg"
            alt="img"
          />
          <h2 className="my-auto text-[20px] text-gray-500 font-bold">
            Gone jojo
          </h2>
        </div>
        <textarea
          className="w-[96%] outline-none p-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write a Caption...."
        />
      </div>
    </>
  );
};

export default CreatePost;
