import React from "react";
import add from "../assets/add.svg";
import { Link, useNavigate } from "react-router-dom";

function Sidenav() {
  return (
    <div className="  p-4 h-full text-foreground  border-r border-gray-800">
      <div className="">
        <ul>
          <li className="py-2  hover:bg-[#181c1f]  hover:rounded-lg  cursor-pointer">
            Home
          </li>
          <li className="py-2 hover:bg-[#181c1f]  hover:rounded-lg cursor-pointer">
            Popular
          </li>
          <li className="py-2 hover:bg-[#181c1f]  hover:rounded-lg cursor-pointer">
            All
          </li>
        </ul>
        <hr className="border-gray-700 mt-2" />
        <div className="mt-6">
          <p>CUSTOM FEEDS</p>
        </div>
        <hr className="border-gray-700 mt-12" />
        <div className="mt-6">
          <p>COMMUNITIES</p>

          <div className="mt-2 hover:bg-[#181c1f]  hover:rounded-lg  ">
            <Link to="/create-subreddit-form">
              <button className="inline-flex items-center py-1">
                <img src={add} alt="add icon ml-10" className="w-8 h-8 " />
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
