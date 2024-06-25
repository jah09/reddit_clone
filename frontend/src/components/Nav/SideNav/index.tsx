import { IoMdAdd } from "react-icons/io";
import barchart from "@/assets/barchart.svg";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgArrowTopRightO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import CommunityItems from "@/components/CommunityItems";
import communityData from "@/data/community";
function LeftSidenav() {
  const community = communityData(); //static community data3
  return (
    <div className="  p-4 h-full text-primary  border-r border-neutral">
      <div className=" ">
        <ul>
          <NavLink to="/">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "py-2 px-4 bg-[#152030] rounded-lg cursor-pointer flex items-center"
                    : "py-2 px-4 hover:bg-[#152030] hover:rounded-lg cursor-pointer flex items-center"
                }
              >
                <AiFillHome className="w-6 h-6 text-neutral bg-inherit" />
                <span className="ml-3 text-text-primary bg-inherit">Home</span>
              </li>
            )}
          </NavLink>
          <NavLink to="/popular">
            {({ isActive }) => (
              <li
                className={
                  isActive
                    ? "py-2 px-4  bg-[#152030] rounded-lg cursor-pointer flex items-center  mt-0.5"
                    : "py-2 px-4 hover:bg-[#152030] hover:rounded-lg cursor-pointer flex items-center  mt-0.5"
                }
              >
                <CgArrowTopRightO className="w-6 h-6 text-neutral bg-inherit" />
                <span className="ml-3  text-text-primary bg-inherit">
                  Popular
                </span>
              </li>
            )}
          </NavLink>

          <li className="py-2 px-4  hover:bg-[#152030]  hover:rounded-lg  cursor-pointer flex  items-center mt-0.5  ">
            <img
              src={barchart}
              alt="add icon ml-10"
              className="w-7 h-7 bg-inherit"
            />

            <span className="ml-3  text-text-primary bg-inherit  ">All</span>
          </li>
        </ul>
        <hr className="border-neutral mt-2" />
        <div className="mt-6 p-2 text-text-primary">
          <p>CUSTOM FEEDS</p>
        </div>
        <hr className="border-neutral mt-12" />
        <div className="mt-6 ">
          <div className="p-2 hover:bg-[#152030]  hover:rounded-lg flex items-center justify-between">
            <p className="bg-inherit text-text-primary">COMMUNITIES</p>
            <IoIosArrowDown className="text-neutral  w-5 h-5 bg-inherit" />
          </div>

          <div className="mt-2 hover:bg-[#152030]  hover:rounded-lg  ">
            <Link to="/create-subreddit-form">
              <button className=" flex items-center py-1 w-full text-text-primary ">
                <IoMdAdd className="w-8 h-8 text-neutral bg-inherit" />
                Create Community
              </button>
            </Link>
          </div>

          <div className="mt-2">
            {community.map((item) => (
              <CommunityItems community={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSidenav;
