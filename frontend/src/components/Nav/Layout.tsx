import React from "react";
import Navbar from "@/components/Nav/Navbar";
import LeftSidenav from "@/components/Nav/LeftSidenav";
import RightSidenav from "@/components/Nav/RightSidenav";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="   flex min-h-screen">
        <div className="w-[20%] ">
          <LeftSidenav />
        </div>
        <div className="w-[55%]">
          <Outlet />
        </div>
        <div className="w-[25%]">
          {location.pathname !== "/create-post" && <RightSidenav />}
        </div>
      </div>
    </div>
  );
}

export default Layout;
