import React from "react";
import { FaRegHeart } from "react-icons/fa";
import profile from "@/assets/profile.jpg";
import {CommunityObject} from '@/data/community'
function CommunityItems({community}: { community: CommunityObject }) {
  // const community=props.community;
  console.log("received",community)
  return (
    <div className=" flex items-center gap-x-2 py-1 " key={community.id}>
      <img
        src={profile}
        alt="mousecursor"
        className="w-8 h-8 rounded-full ml-[2px]"
      />
      <h1 className="text-text-primary  flex-1">f/ {community.name} </h1>
      <div>
        <FaRegHeart className="text-neutral w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
}

export default CommunityItems;
