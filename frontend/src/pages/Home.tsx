import React from "react";
import PostItem from "@/components/PostItem";
function Home() {
  return (
    <div className="text-primary p-4">
      <div className="">
        <hr className="  border-gray-800 " />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}

export default Home;
