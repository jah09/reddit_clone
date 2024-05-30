import React from "react";
import add from "../assets/add.svg";
function Sidenav() {
  return (
    <div className="  p-4 h-full text-foreground  border-r border-gray-800">
      <div className="">
        <ul>
          <li className="py-2 hover:bg-[#181c1f] cursor-pointer">Home</li>
          <li className="py-2 hover:bg-[#181c1f] cursor-pointer">Popular</li>
          <li className="py-2 hover:bg-[#181c1f] cursor-pointer">All</li>
        </ul>
        <hr className="border-gray-700 mt-2" />
        <div className="mt-6">
          <p>CUSTOM FEEDS</p>
        </div>
        <hr className="border-gray-700 mt-12" />
        <div className="mt-6">
          <p>COMMUNITIES</p>
          {/* <div className="mt-2 flex hover:bg-[#181c1f] hover:rounded-lg">
        
            <h6 className=" py-2">Create Community</h6>
          </div> */}
          <div className="mt-2 ">
            <button className="inline-flex items-center hover:bg-[#181c1f] ">
            <img src={add} alt="add icon ml-10" className="w-8 h-8" />
              Create Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
