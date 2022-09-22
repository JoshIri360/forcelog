import React from "react";
import Logo from "./img/logo.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="w-screen h-screen landing grid grid-cols-2">
      <div className="logo-holder flex items-center justify-center">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="nav-holders text-white text-3xl flex flex-col items-center justify-center gap-11">
        <a href="#page1" className="hover:underline">
          Page 1
        </a>
        <a href="#page2" className="hover:underline">
          Page 2
        </a>
        <a href="#page3" className="hover:underline">
          Page 3
        </a>
      </div>
    </div>
  );
};

export default Landing;
