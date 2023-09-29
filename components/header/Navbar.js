import React from "react";
import { AiFillBell } from "react-icons/ai";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { FaUsersRectangle } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";
import { BsFillCalendarFill, BsFillClipboardCheckFill } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "@/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarVisible = useSelector((state) => state.sidebar);

  // console.log(sidebarVisible);
  const showSidebarHandler = (e) => {
    e.preventDefault();
    dispatch(setSidebar(!sidebarVisible));
  };
  return (
    <div className="px-8 w-full h-20 flex items-center justify-between bg-[#15132b]">
      <div className="flex max-md:hidden items-center justify-center bg-[#211a75] pl-4 pr-12 py-2 rounded-full">
        <FaSearch className="text-[#076ECD] text-lg mr-3 font-extrabold" />
        <input
          type="text"
          placeholder="Search here"
          className="text-gray-300 bg-transparent border-none text-lg outline-none"
        />
      </div>
      <p className="max-md:hidden cursor-pointer mx-10 underline text-purple-800 text-xs font-bold">
        OTHER MENUS
      </p>
      <div className="flex max-md:hidden items-center justify-center">
        <div class="relative inline-block text-6xl mx-2">
          <AiFillBell className="m-2 text-2xl text-[#7879F1]" />
          <span class="absolute top-0 right-0 px-1 py-0 translate-x-1/6 bg-[#5ECFFF] rounded-full text-xs font-semibold text-black">
            12
          </span>
        </div>
        <div class="relative inline-block text-6xl  mx-2">
          <FaUsersRectangle className="m-2 text-2xl text-[#7879F1]" />
          <span class="absolute top-0 right-0 px-1 py-0 translate-x-1/6 bg-[#5ECFFF] rounded-full text-xs font-semibold text-black">
            5
          </span>
        </div>
        <div class="relative inline-block text-6xl  mx-2 font-semibold text-black">
          <BsFillClipboardCheckFill className="m-2 text-2xl text-[#7879F1]" />
          <span class="absolute top-0 right-0 px-1 py-0 translate-x-1/6 bg-[#5ECFFF] rounded-full text-xs font-semibold text-black">
            2
          </span>
        </div>
        <div class="relative inline-block text-6xl  mx-2">
          <BsFillCalendarFill className="m-2 text-2xl text-[#7879F1]" />
          <span class="absolute top-0 right-0 px-2 py-0 border border-[#0D0B21] translate-x-1/6 bg-[#E328AF] rounded-full text-xs text-white">
            !
          </span>
        </div>
      </div>
      <div className="flex max-md:hidden items-center justify-center bg-[#211a75] text-white px-4 py-3 mx-8 rounded-full">
        <GiUsaFlag className="text-xl mx-2" />
        <p className="text-base font-bold">ENGLISH</p>
        <RxTriangleDown className="text-purple-800 text-2xl" />
      </div>
      <div className="flex md:hidden items-center text-white justify-between">
        <button onClick={showSidebarHandler}>
          <CgMenu className="text-[#7879F1] text-3xl mr-2" />
        </button>
        <h1 className="text-lg font-semibold font-sans">weframetech</h1>
      </div>
      <div className="border-l-2 h-10 border-gray-800 flex items-center justify-center">
        <div className="bg-gray-300 rounded-xl mx-2">
          <FaUserCircle className="m-2 text-2xl text-[#7879F1]" />
        </div>
        <div className="flex flex-col text-white items-start justify-start p-2">
          <p className="text-[14px]">Instructor Day</p>
          <p className="text-[14px] text-purple-800">Super Admin</p>
        </div>
        <RxTriangleDown className="text-purple-800 text-4xl" />
      </div>
    </div>
  );
};

export default Navbar;
