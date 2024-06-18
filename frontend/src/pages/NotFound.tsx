import React from "react";
import errorpage from "@/assets/404.svg";

function NotFound() {
  return (
    <div className=" flex justify-center items-center">
      <img src={errorpage} alt="logo" className="mt-20 " />
    </div>
  );
}

export default NotFound;
