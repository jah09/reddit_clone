import React, { useEffect } from "react";
import PostItem from "@/components/PostItem";

function Home() {
  return (
    <div className="text-primary p-4">
      <div className="">
        <hr className="border-neutral" />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}

export default Home;
