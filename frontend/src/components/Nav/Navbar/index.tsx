import { useState } from "react";

import reddit from "@/assets/reddit.svg";
import appLogo from "@/assets/Foraverse.svg";

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
import Tooltip from "@/components/Tooltip/Tooltip";
import ProfileMenu from "@/components/Nav/Navbar/ProfileMenu";
function Navbar() {
  //--state---
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isKebabClicked, setIsKebabClicked] = useState<boolean>(false);
  const [isShowProfileMenu, setIsShowProfileMenu] = useState<boolean>(false);
  //--event handler---
  //click the kebab and show the menu
  const handleClickKebabMenu = () => {
    setIsKebabClicked(!isKebabClicked);
  };

  const handleShowProfileMenu = () => {
    setIsShowProfileMenu(!isShowProfileMenu);
  };
  return (
    <nav className="w-full py-1.5 px-3 border-b border-neutral text-text-primary  relative">
      <div className="flex justify-between">
        <div className="text-3xl font-bold  text-primary  flex  items-center gap-x-2 justify-start ">
          <Link to="/" className="inline-flex">
            {" "}
            <div className="w-10 h-10  ">
              <img src={appLogo} alt="logo" className="  " />
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

        <div className="  w-96 px-2">
          <div className="flex  gap-x-[2px] items-center  justify-end  ">
            <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
              <Tooltip
                content="Advertise on reddit"
                place="bottom"
                className=" mt-1.5 rounded-md"
                style={{ backgroundColor: "#b7cad4", color: "black" }}
              >
                <MdOutlineAdsClick className="w-[25px] h-[25px] text-neutral  hover:rounded-full bg-inherit cursor-pointer" />
              </Tooltip>
            </div>
            <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
              <Tooltip
                content="Open chat"
                place="bottom"
                className=" mt-1.5 rounded-md"
                style={{ backgroundColor: "#b7cad4", color: "black" }}
              >
                <IoChatbubbleEllipsesOutline className="w-[25px] h-[25px] text-neutral   hover:rounded-full cursor-pointer" />
              </Tooltip>
            </div>
            <Tooltip
              content="Create post"
              place="bottom"
              className=" mt-1.5 rounded-md"
              style={{ backgroundColor: "#b7cad4", color: "black" }}
            >
              <Link to="/create-post">
                <button className="text-text-primary  flex items-center hover:bg-[#152030] hover:rounded-full  cursor-pointer py-1 px-2.5  *:">
                  <IoMdAdd className="w-7 h-7 text-neutral bg-transparent  " />
                  <span className="bg-transparent">Create</span>
                </button>
              </Link>
            </Tooltip>
            <div className="w-[34px] h-[34px] hover:bg-[#152030] rounded-full flex items-center justify-center">
              <Tooltip
                content="Open inbox"
                place="bottom"
                className=" mt-1.5 rounded-md"
                style={{ backgroundColor: "#b7cad4", color: "black" }}
              >
                <LuBell className="w-[25px] h-[25px] text-neutral  hover:rounded-full bg-inherit cursor-pointer" />
              </Tooltip>
            </div>
            <div className=" ">
              <Tooltip
                content="Open profile menu"
                place="bottom-end"
                className=" mt-1 rounded-md"
                style={{ backgroundColor: "#b7cad4", color: "black" }}
              >
                <img
                  onClick={handleShowProfileMenu}
                  src={profile}
                  alt="mousecursor"
                  className="w-7 h-7 rounded-full ml-[2px] cursor-pointer"
                />
              </Tooltip>
            </div>
            {isShowProfileMenu && (
              <div className=" bg-transparent absolute top-7 right-2">
                <ProfileMenu handleShowProfileMenu={handleShowProfileMenu} />
              </div>
            )}
          </div>
        </div>
        {/*      
          // <div className="  w-96 px-2 ">
          //   <div className="flex gap-x-3 justify-end items-center    ">
          //     <button className="text-text-primary rounded-full bg-primary-accent px-3 py-[6px] h-10 flex gap-x-2 items-center">
          //       <span className="inline-block ">
          //         <img src={qrcode} alt="" className="w-6 h-6 bg-transparent" />
          //       </span>
          //       Get app
          //     </button>
          //     <Link to="/login">
          //       <button className="text-text-primary rounded-full bg-primary px-3 py-[6px] h-10">
          //         Log In
          //       </button>
          //     </Link>
          //     <div className="relative">
          //       <div className="relative" onClick={handleClickKebabMenu}>
          //         <GoKebabHorizontal className="relative z-10 w-6 h-6 cursor-pointer text-neutral" />
          //       </div>
          //       {isKebabClicked && ( 
          //         <div className="absolute right-0  mt-5 w-72 bg-background-secondary text-text-primary rounded shadow-lg py-4 px-2">
          //           <div className="p-2  cursor-pointer flex mr-2 bg-inherit">
          //             <BsBoxArrowInRight className="w-[25px] h-[25px] mr-2 bg-inherit text-neutral" />
          //             <Link to="/login" className="bg-inherit">
          //               Log In / Sign Up
          //             </Link>
          //           </div>
          //           <div className="p-2  cursor-pointer flex focus:bg-gray-100 bg-inherit">
          //             <MdOutlineAdsClick className="w-[25px] h-[25px] mr-2  bg-inherit text-neutral" />
          //             Advertise on Reddit
          //           </div>
          //           <div className="p-2  cursor-pointer flex bg-inherit">
          //             <IoBagOutline className="w-[25px] h-[25px] mr-2 bg-inherit text-neutral" />
          //             Shop Collectible Avatars
          //           </div>
          //         </div>
          //       )}
          //     </div>
          //   </div>
          // </div>
     */}
      </div>
    </nav>
  );
}

export default Navbar;
