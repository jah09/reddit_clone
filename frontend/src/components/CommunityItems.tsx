import React from "react";
import { FaRegHeart } from "react-icons/fa";
import profile from "@/assets/profile.jpg";

import { CommunityObject } from "@/data/community";
function CommunityItems({ community }: { community: CommunityObject }) {
  return (
    <div
      className="py-2 px-2 gap-x-2 hover:bg-[#152030]  hover:rounded-lg  cursor-pointer flex  items-center mt-0.5 "
      key={community.id}
    >
      <img
        src={profile}
        alt="mousecursor"
        className="w-8 h-8 rounded-full ml-[2px]"
      />
      <h1 className="text-text-primary  flex-1 bg-inherit">
        f/ {community.name}{" "}
      </h1>
      <div className="bg-inherit">
        <FaRegHeart className="text-neutral w-5 h-5 cursor-pointer bg-inherit" />
      </div>
    </div>
  );
}

export default CommunityItems;
