import React, { useState } from "react";
import profile from "@/assets/profile.jpg";
import profileMenuData from "@/data/profilemenudata";

interface ProfileMenuProps {
  isShowProfileMenu: boolean;
  //onConfirm: () => void;
}
const ProfileMenu = ({ isShowProfileMenu }: ProfileMenuProps) => {
  const menu = profileMenuData();
  return (
    <div className="  ">
      {isShowProfileMenu && (
        <div className="w-60 bg-[#152030]   mt-7 rounded-md p-5">
          <div>
            <div className="flex gap-x-2 bg-[#152030] items-center cursor-pointer">
              <img
                src={profile}
                alt="mousecursor"
                className="w-8 h-8 rounded-full ml-[2px] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold text-sm bg-[#152030]">
                  View Profile
                </h5>
                <p className="text-sm bg-[#152030]">u/ username</p>
              </div>
            </div>
            <div className="mt-4 bg-red-900">
              1
              <div className="bg-blue-900">
                {menu.map((item) => (
                  <img src={item.icon} alt=""   />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
