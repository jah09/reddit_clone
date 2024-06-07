import React from "react";
import Navbar from "./Navbar";
import LeftSidenav from "./LeftSidenav";
import RightSidenav from "./RightSidenav";
import { Outlet,useLocation } from "react-router-dom";

function Layout() {
   const location = useLocation();
   console.log(location.pathname);
  return (
    <div>
      <Navbar />
      <div className=" bg-background flex min-h-screen">
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
