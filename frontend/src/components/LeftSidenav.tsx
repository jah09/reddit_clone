import React from "react";
import add from "../assets/add.svg";
import barchart from "../assets/barchart.svg";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
function Sidenav() {
  return (
    <div className="  p-4 h-full text-foreground  border-r border-gray-800">
      <div className=" ">
        <ul>
          <li className="py-2 px-4  hover:bg-[#181c1f]  hover:rounded-lg  cursor-pointer flex  items-center ">
            <AiFillHome className="w-6 h-6" />
            <span className="ml-3">Home</span>
          </li>
          <li className="py-2 px-4  hover:bg-[#181c1f]  hover:rounded-lg  cursor-pointer flex  items-center ">
            <LuArrowUpRightFromCircle className="w-6 h-6" />

            <span className="ml-3">Popular</span>
          </li>
          <li className="py-2 px-4  hover:bg-[#181c1f]  hover:rounded-lg  cursor-pointer flex  items-center ">
            <img src={barchart} alt="add icon ml-10" className="w-7 h-7" />

            <span className="ml-3">All</span>
          </li>
        </ul>
        <hr className="border-gray-700 mt-2" />
        <div className="mt-6 p-2">
          <p>CUSTOM FEEDS</p>
        </div>
        <hr className="border-gray-700 mt-12" />
        <div className="mt-6    ">
          <div className="p-2 hover:bg-[#181c1f]  hover:rounded-lg ">
            {" "}
            <p>COMMUNITIES</p>
          </div>

          <div className="mt-2 hover:bg-[#181c1f]  hover:rounded-lg  ">
            <Link to="/create-subreddit-form">
              <button className="inline-flex items-center py-1 w-full">
                <img src={add} alt="add icon " className="w-8 h-8 " />
                Create Community
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
