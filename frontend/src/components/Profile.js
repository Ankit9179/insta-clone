import React, { useEffect } from "react";

const Profile = () => {
  //test own api
  const testApi = async () => {
    const res = await fetch("http://localhost:5000"); //fetch data
    const data = await res.json(); // convert data to json
    console.log(data);
  };
  useEffect(() => {
    testApi();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
