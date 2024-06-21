import { useState } from "react";

import reddit from "@/assets/reddit.svg";
import appLogo from "@/assets/test2.png";

import profile from "@/assets/profile.jpg";
import qrcode from "@/assets/qrcode.svg";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlineAdsClick } from "react-icons/md";
import {
  IoChatbubbleEllipsesOutline,
  IoSearchOutline,
  IoBagOutline,
} from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isKebabClicked, setIsKebabClicked] = useState<boolean>(false);

  const toggleKebabMenu = () => {
    setIsKebabClicked(!isKebabClicked);
  };
  return (
    <nav className="w-full py-1.5 px-3 border-b border-neutral text-text-primary  ">
      <div className="flex justify-between">
        <div className="text-3xl font-bold  text-primary  flex  items-center gap-x-2 justify-start ">
          <Link to="/" className="inline-flex">
            {" "}
            <div className="w-8 h-8 relative overflow-hidden bg-red-900">
              <img
                src={reddit}
                alt="logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full"
              />
            </div>
            <h1 className="tracking wide text-md ml-2 text-text-primary">
              Foraverse{" "}
            </h1>
          </Link>
        </div>
        <div className="justify-center flex  relative items-center  ml-10 ">
          <div className="bg-background-secondary  absolute left-1 px-3 w-6 h-6">
            <IoSearchOutline className="w-6 h-6   bg-background-secondary text-neutral" />
          </div>
          <input
            className="rounded-full px-11 text-primary focus:outline-none min-w-[500px]  bg-background-secondary py-2 text-text-primary"
            type="text"
            placeholder="Search foraverse"
          />
        </div>

        {isLogin ? (
          <div className="  w-96 px-2">
            <div className="flex  gap-x-[2px] items-center  justify-end  ">
              <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
                <MdOutlineAdsClick className="w-[25px] h-[25px] text-neutral  hover:rounded-full bg-inherit" />
              </div>
              <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
                <IoChatbubbleEllipsesOutline className="w-[25px] h-[25px] text-neutral   hover:rounded-full" />
              </div>
              <Link to="/create-post">
                <button className="text-text-primary  flex items-center hover:bg-[#152030] hover:rounded-full  cursor-pointer py-1 px-2.5  *:">
                  <IoMdAdd className="w-7 h-7 text-neutral bg-transparent  " />
                  <span className="bg-transparent">Create</span>
                </button>
              </Link>
              <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
                <LuBell className="w-[25px] h-[25px] text-neutral  hover:rounded-full bg-inherit" />
              </div>
              <div className=" ">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-7 h-7 rounded-full ml-[2px]"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="  w-96 px-2 ">
            <div className="flex gap-x-3 justify-end items-center    ">
              <button className="text-text-primary rounded-full bg-primary-accent px-3 py-[6px] h-10 flex gap-x-2 items-center">
                <span className="inline-block ">
                  <img src={qrcode} alt="" className="w-6 h-6 bg-transparent" />
                </span>
                Get app
              </button>
              <Link to="/login">
                <button className="text-text-primary rounded-full bg-primary px-3 py-[6px] h-10">
                  Log In
                </button>
              </Link>
              <div className="relative">
                <div className="relative" onClick={toggleKebabMenu}>
                  <GoKebabHorizontal className="relative z-10 w-6 h-6 cursor-pointer text-neutral" />
                </div>
                {isKebabClicked && (
                  <div className="absolute right-0  mt-5 w-72 bg-background-secondary text-text-primary rounded shadow-lg py-4 px-2">
                    <div className="p-2  cursor-pointer flex mr-2 bg-inherit">
                      <BsBoxArrowInRight className="w-[25px] h-[25px] mr-2 bg-inherit text-neutral" />
                      <Link to="/login" className="bg-inherit">
                        Log In / Sign Up
                      </Link>
                    </div>
                    <div className="p-2  cursor-pointer flex focus:bg-gray-100 bg-inherit">
                      <MdOutlineAdsClick className="w-[25px] h-[25px] mr-2  bg-inherit text-neutral" />
                      Advertise on Reddit
                    </div>
                    <div className="p-2  cursor-pointer flex bg-inherit">
                      <IoBagOutline className="w-[25px] h-[25px] mr-2 bg-inherit text-neutral" />
                      Shop Collectible Avatars
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
