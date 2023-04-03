import React from "react";
import logo from "../assets/avatar2.png";
function Signup() {
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white flex flex-col items-center p-4 m-auto">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={logo} alt="profile picture" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
