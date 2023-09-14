import React from "react";

const CreatePost = () => {
    const loadFile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    }
    return (
        <>
            <div className="post w-full md:w-[50%] border-2 my-4 mx-auto rounded-md">
                <div className="heder flex">
                    <p className="mx-auto my-3 text-2xl font-bold">Create Post</p>
                    <p className="text-blue-400 my-3 cursor-pointer mr-1 font-bold">Shere</p>
                </div>
                <div className="main border-t-2">
                    <img className="w-[300px] my-2 outline-none border-none mx-auto" id="output" alt="img" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" />
                    <input type="file" accept="image/*" onChange={(event) => loadFile(event)} />
                </div>
                <div className="details  border-t-2 flex gap-3 p-2">
                    <img className="w-[50px] rounded-full " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="img" />
                    <h2 className="my-auto text-[20px] text-gray-500 font-bold">Gone jojo</h2>
                </div>
                <textarea className="w-[96%] outline-none p-2" placeholder="Write a Caption...." />
            </div>
        </>
    )
};

export default CreatePost;
