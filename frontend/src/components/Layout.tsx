import React from 'react'
import Navbar from './Navbar'
import LeftSidenav from "./LeftSidenav";
import RightSidenav from "./RightSidenav";


function Layout({ children }: { children: React.ReactNode }) {
	return (
    <div>
      <Navbar />
      <div className=" bg-background flex min-h-screen">
        <div className="w-[20%] ">
          <LeftSidenav />
        </div>
        <div className="w-[60%]"> {children}</div>
        <div className="w-[20%]">
          <RightSidenav />
        </div>
      </div>
    </div>
  );
}

export default Layout
