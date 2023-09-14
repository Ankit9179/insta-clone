import React from "react";

const Profile = () => {
  return (
    <>
      <div className="frofile mx-auto">
        <div className="flex w-[70%] mx-auto justify-evenly align-middle p-2 gap-6">
          <div>
            <img className="object-contain w-[120px] rounded-full mt-3" src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold mb-6">Jojo gone</h1>
            <div className="flex gap-3">
              <p>29 Post</p>
              <p>20 followers</p>
              <p>30 following</p>
            </div>
          </div>
        </div>
        <hr className="w-[60%] mx-auto opacity-100 my-7" />
        <div className="gallery  flex justify-center flex-wrap w-[70%] mx-auto">
          <img className="object-contain w-[250px] m-5 " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
          <img className="object-contain w-[250px] m-5 " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
          <img className="object-contain w-[250px] m-5 " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
          <img className="object-contain w-[250px] m-5 " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
          <img className="object-contain w-[250px] m-5 " src="https://kidmatterscounseling.com/wp-content/uploads/2017/12/Lindsey-Holsten-500x500-Profile-Picture-compressed.jpg" alt="div" />
        </div>
      </div>
    </>
  )
};

export default Profile;
