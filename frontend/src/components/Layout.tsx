import React from "react";
import Navbar from "./Navbar";
import LeftSidenav from "./LeftSidenav";
import RightSidenav from "./RightSidenav";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Navbar />
      <div className=" bg-background flex min-h-screen">
        <div className="w-[20%] ">
          <LeftSidenav />
        </div>
        <div className="w-[60%]">
          <Outlet />
        </div>
        <div className="w-[20%]">
          <RightSidenav />
        </div>
      </div>
    </div>
  );
}

export default Layout;
