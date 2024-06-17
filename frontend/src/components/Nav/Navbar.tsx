import { useState } from "react";

import reddit from "@/assets/reddit.svg";
import profile from "@/assets/profile.jpg";
import qrcode from "@/assets/qrcode.svg";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlineAdsClick } from "react-icons/md";
import { IoChatbubbleEllipsesOutline, IoSearchOutline ,IoBagOutline} from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuBell } from "react-icons/lu";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isKebabClicked, setIsKebabClicked] = useState<boolean>(false);

  const toggleKebabMenu = () => {
    setIsKebabClicked(!isKebabClicked);
  };
  return (
    <nav className="w-full py-1.5 px-3 bg-background border-b border-gray-800   ">
      <div className="flex justify-between">
        <div className="text-3xl font-bold  text-foreground  flex  items-center gap-x-2 justify-start ">
          <Link to="/" className="inline-flex">
            {" "}
            <img src={reddit} alt="logo" className="w-8 h-8" />
            <h1 className="tracking wide text-md ml-2">reddit </h1>
          </Link>
        </div>
        <div className="justify-center flex  relative items-center  ml-10">
          <div className="  absolute left-0 px-3">
            <IoSearchOutline className="w-6 h-6 text-white" />
          </div>
          <input
            className="rounded-full px-11 text-foreground focus:outline-none min-w-[500px]  bg-[#2a3236] py-2"
            type="text"
            placeholder="Search Reddit"
          />
        </div>

        {isLogin ? (
          <div className="  w-96 px-2">
            <div className="flex  gap-x-2 items-center  justify-end  ">
              <div className=" ">
                <MdOutlineAdsClick className="w-[25px] h-[25px]  text-white " />
              </div>
              <div>
                <IoChatbubbleEllipsesOutline className="w-[25px] h-[25px] text-white" />
              </div>
              <Link to="/create-post">
                <button className="text-foreground  flex items-center hover:hover:bg-[#181c1f]  hover:rounded-full  cursor-pointer py-1 px-2.5">
                  <IoMdAdd className="w-7 h-7 " />
                  <span>Create</span>
                </button>
              </Link>
              <div className="">
                <LuBell className="w-[25px] h-[25px] text-foreground" />
              </div>
              <div className=" ">
                <img
                  src={profile}
                  alt="mousecursor"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="  w-96 px-2 ">
            <div className="flex gap-x-3 justify-end items-center    ">
              <button className="text-foreground rounded-full bg-[#2a3236] px-3 py-[6px] h-10 flex gap-x-2 items-center">
                <span className="inline-block">
                  <img src={qrcode} alt="" className="w-6 h-6" />
                </span>
                Get app
              </button>
              <Link to="/login">
                <button className="text-foreground rounded-full bg-primary px-3 py-[6px] h-10">
                  Log In
                </button>
              </Link>
              <div className="relative">
                <div className="relative" onClick={toggleKebabMenu}>
                  <GoKebabHorizontal className="relative z-10 w-6 h-6 cursor-pointer text-white" />
                </div>
                {isKebabClicked && (
                  <div className="absolute right-0  mt-5 w-72 bg-[#181c1f] text-white rounded shadow-lg py-4 px-2">
                    <div className="p-2  cursor-pointer flex mr-2">
                      <BsBoxArrowInRight className="w-[25px] h-[25px] mr-2" />
                      <Link to="/login">Log In / Sign Up</Link>
                    </div>
                    <div className="p-2  cursor-pointer flex focus:bg-gray-100">
                      <MdOutlineAdsClick className="w-[25px] h-[25px] mr-2 text-white " />
                      Advertise on Reddit
                    </div>
                    <div className="p-2  cursor-pointer flex">
                      <IoBagOutline className="w-[25px] h-[25px] mr-2 text-white " />
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
