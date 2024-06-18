import React from "react";
import { IoMdAdd } from "react-icons/io";
import barchart from "../../assets/barchart.svg";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgArrowTopRightO } from "react-icons/cg";
 
function Sidenav() {
  return (
    <div className="  p-4 h-full text-foreground  border-r border-gray-800">
      <div className=" ">
        <ul>
          <NavLink to="/">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "py-2 px-4 bg-[#181c1f] rounded-lg cursor-pointer flex items-center"
                    : "py-2 px-4 hover:bg-[#181c1f] hover:rounded-lg cursor-pointer flex items-center"
                }
              >
                <AiFillHome className="w-6 h-6" />
                <span className="ml-3">Home</span>
              </li>
            )}
          </NavLink>
          <NavLink to="/popular">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "py-2 px-4 bg-[#181c1f] rounded-lg cursor-pointer flex items-center  mt-0.5"
                    : "py-2 px-4 hover:bg-[#181c1f] hover:rounded-lg cursor-pointer flex items-center  mt-0.5"
                }
              >
                <CgArrowTopRightO className="w-6 h-6 text-foreground" />
                <span className="ml-3">Popular</span>
              </li>
            )}
          </NavLink>

          <li className="py-2 px-4  hover:bg-[#181c1f]  hover:rounded-lg  cursor-pointer flex  items-center mt-0.5">
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
              <button className=" flex items-center py-1 w-full  ">
                <IoMdAdd className="w-8 h-8 " />
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
