import React, { useEffect, useRef } from "react";
import profile from "@/assets/profile.jpg";
import profileMenuData from "@/data/profilemenudata";
import ProfileMenuItem from "@/components/Nav/Navbar/ProfileMenuItem";
interface ProfileMenuProps {
  handleShowProfileMenu: () => void;
}
const ProfileMenu = ({ handleShowProfileMenu }: ProfileMenuProps) => {
  const menu = profileMenuData();
  const menuRef = useRef<HTMLDivElement>(null);

  // manage an event listener for clicks outside the input element (menuRef.current).
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
        handleShowProfileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="  " ref={menuRef}>
      <div className="w-60 bg-[#152030] h-auto  mt-7 rounded-md p-5">
        <div className="flex gap-x-2 bg-[#152030] items-center cursor-pointer ">
          <img
            src={profile}
            alt="mousecursor"
            className="w-10 h-10 rounded-full ml-[2px] cursor-pointer"
          />
          <div className="">
            <h5 className="font-semibold text-sm bg-[#152030]">View Profile</h5>
            <p className="text-sm bg-[#152030]">u/ username</p>
          </div>
        </div>

        <div className="bg-red-900 mt-8">
          {menu.map((item) => (
            <ProfileMenuItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
