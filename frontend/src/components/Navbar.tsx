import { useState } from "react";
import { Input } from "@/components/ui/input";
import reddit from "@/assets/reddit.svg";
import mouse from "@/assets/mouse.svg";
import message from "@/assets/message.svg";
import plus from "@/assets/plus.svg";
import bell from "@/assets/bell.svg";
import profile from "@/assets/profile.jpg";
import search from "@/assets/search.svg";
import kebab from "@/assets/kebab.svg";
import qrcode from "@/assets/qrcode.svg";



function Navbar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
   const [isKebabHovered, setIsKebabHovered] = useState<boolean>(false);
  return (
    <nav className="w-full py-2 px-3 bg-background border-b border-gray-800   ">
      <div className="flex justify-between">
        <div className="text-3xl font-bold  text-foreground  flex  items-center gap-x-2 justify-start ">
          <img src={reddit} alt="logo" className="w-8 h-8" />{" "}
          <h1 className="tracking wide text-md">reddit </h1>
        </div>
        <div className="justify-center flex  relative items-center  ml-10">
          <div className="  absolute left-0 px-3">
            {" "}
            <img src={search} alt="" className="w-6 h-6" />
          </div>
          <Input
            className="rounded-full px-11 text-foreground focus:outline-none min-w-[500px]  bg-[#2a3236] "
            type="text"
            placeholder="Search Reddit"
          />{" "}
        </div>

        {isLogin ? (
          <div className="  w-96 px-2">
            <div className="flex gap-x-3 items-center  justify-end">
              <div className=" ">
                <img src={mouse} alt="mousecursor" className="w-7 h-7" />
              </div>
              <div>
                <img src={message} alt="mousecursor" className="w-7 h-7" />
              </div>

              <img src={plus} alt="mousecursor ml-10" className="w-10 h-10" />
              <h5 className=" text-foreground "> Create</h5>

              <div className="">
                <img src={bell} alt="mousecursor" className="w-7 h-7" />
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
              <button className="text-foreground rounded-full bg-[#2a3236] px-3 py-[6px] h-10 flex gap-x-2">
                <span className="inline-block">
                  <img src={qrcode} alt="" className="w-6 h-6" />
                </span>
                Get app
              </button>
              <button className="text-foreground rounded-full bg-primary px-3 py-[6px] h-10">
                Log In
              </button>
              <div className="relative group">
                <img src={kebab} alt="" className="w-6 h-6" />{" "}
                {isKebabHovered && (
                  <span className="absolute inset-0 bg-blue-500 rounded-full opacity-50"></span>
                )}
              </div>
            </div>
          </div>
        )}
        {/* <div className="  w-96 px-2">
          <div className="flex gap-x-3 items-center  justify-end">
            <div className=" ">
              <img src={mouse} alt="mousecursor" className="w-7 h-7" />
            </div>
            <div>
              <img src={message} alt="mousecursor" className="w-7 h-7" />
            </div>

            <img src={plus} alt="mousecursor ml-10" className="w-10 h-10" />
            <h5 className=" text-foreground "> Create</h5>

            <div className="">
              <img src={bell} alt="mousecursor" className="w-7 h-7" />
            </div>
            <div className=" ">
              <img
                src={profile}
                alt="mousecursor"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
