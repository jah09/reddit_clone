import React from "react";
import { ProfileMenu } from "@/data/profilemenudata";

const ProfileMenuItem = ({ item }: { item: ProfileMenu }) => {
  const IconComponent = item.icon;
  return (
    <div className="bg-[#152030]">
      <div key={item.id} className="flex items-center py-2.5  bg-transparent cursor-pointer ">
        <IconComponent size={24} className="" />
        <span className="ml-3 bg-[#152030]">{item.name}</span>
      </div>
    </div>
  );
};

export default ProfileMenuItem;
