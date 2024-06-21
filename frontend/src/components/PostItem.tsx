import React from "react";
import rewards from "@/assets/rewards.svg";
import r_icon from "@/assets/r_icon.png";
import profile from "@/assets/profile.jpg";

import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";
function PostItem() {
  return (
    <div>
      <div className="  px-4 py-1 mt-1 hover:bg-background-secondary  rounded-xl hover:cursor-pointer group ">
        <div className="flex gap-x-2 items-center justify-between bg-inherit">
          <div className="flex gap-x-2 items-center justify-between  bg-inherit">
            {" "}
            <img
              src={profile}
              alt=""
              className="w-6 h-6 bg-inherit rounded-full   "
            />
            <h5 className=" first-line:font-medium bg-inherit text-text-primary">
              f/ Cebu
            </h5>
            <p className=" bg-inherit text-text-secondary text-sm">
              • 3 hr. ago
            </p>
          </div>
          <div className="bg-inherit">
            <GoKebabHorizontal className="relative z-10 w-6 h-6 cursor-pointer text-white bg-inherit" />
          </div>
        </div>
        <div className="mt-3 bg-inherit">
          <h1 className="font-semibold text-lg text-text-primary bg-inherit">
            Lorem ipsum{" "}
          </h1>
          <p className="text-sm py-1 text-text-primary bg-inherit">
            Ut non leo justo. In eu feugiat eros.{" "}
          </p>
        </div>
        <div className="mt-2 flex gap-x-2 bg-inherit">
          <div className="bg-background-secondary group-hover:bg-background-secondary-hover rounded-full gap-x-1 flex items-center text-text-primary  ">
            <div className="bg-inherit rounded-full flex items-center hover:bg-background-primary p-1">
              <button className="   ">
                <PiArrowFatUpLight className="w-6 h-5  text-neutral    bg-inherit  hover:text-primary-accent" />
              </button>
            </div>
            0
            <div className="bg-inherit rounded-full flex items-center hover:bg-background-primary p-1">

              <button className="">
                <PiArrowFatDownLight className="w-6 h-5  text-neutral  bg-inherit hover:text-secondary-accent" />
              </button>{" "}
            </div>
          </div>
          <button className=" bg-background-secondary group-hover:bg-background-secondary-hover  rounded-full px-4 py-1 text-text-primary">
            <FaRegCommentAlt className="w-6 h-5 inline-flex mr-1 text-neutral  bg-inherit" />
            1
          </button>
          <button className=" bg-background-secondary group-hover:bg-background-secondary-hover rounded-full px-4 py-1 text-text-primary">
            <img
              src={rewards}
              alt=""
              className="w-6 h-5 inline-flex mr-1 bg-inherit"
            />
            1
          </button>
          <button className=" bg-background-secondary group-hover:bg-background-secondary-hover  rounded-full px-4 py-1 flex items-center text-sm text-text-primary">
            <HiOutlineArrowUpTray className="w-6 h-5 inline-flex mr-1 text-neutral  bg-inherit" />
            Share
          </button>
        </div>
      </div>
      <hr className="  border-neutral mt-1" />
    </div>
  );
}

export default PostItem;
