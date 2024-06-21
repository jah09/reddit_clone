import React from "react";
import rewards from "@/assets/rewards.svg";
import r_icon from "@/assets/r_icon.png";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";
function PostItem() {
  return (
    <div>
      <div className="  px-4 py-1 mt-1 hover:bg-[#181c1f] hover:rounded-xl hover:cursor-pointer">
        <div className="flex gap-x-2 items-center justify-between">
          <div className="flex gap-x-2 items-center justify-between">
            {" "}
            <img src={r_icon} alt="" className="w-5 h-5     " />
            <h5 className="text-gray-500 font-medium">r/Cebu</h5>
            <p className="text-gray-500">• 3 hr. ago</p>
          </div>
          <div>
            <GoKebabHorizontal className="relative z-10 w-6 h-6 cursor-pointer text-white" />
          </div>
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-lg">Lorem ipsum </h1>
          <p className="text-sm py-1">Ut non leo justo. In eu feugiat eros. </p>
        </div>
        <div className="mt-2 flex gap-x-2">
          <div className="bg-[#2a3236] rounded-full px-2 gap-x-1 flex items-center ">
            <button>
              <PiArrowFatDownLight className="w-6 h-5  text-white" />
            </button>
            0
            <button className="hover:bg-red-900">
              <PiArrowFatUpLight className="w-6 h-5  text-white" />
            </button>
          </div>
          <button className="bg-[#2a3236] rounded-full px-4 py-1">
            <FaRegCommentAlt className="w-6 h-5 inline-flex mr-1 text-white" />1
          </button>
          <button className="bg-[#2a3236] rounded-full px-4 py-1">
            <img src={rewards} alt="" className="w-6 h-5 inline-flex mr-1" />1
          </button>
          <button className="bg-[#2a3236] rounded-full px-4 py-1 flex items-center text-sm">
            <HiOutlineArrowUpTray className="w-6 h-5 inline-flex mr-1 text-white" />
            Share
          </button>
        </div>
      </div>
      <hr className="  border-neutral mt-1" />
    </div>
  );
}

export default PostItem;
