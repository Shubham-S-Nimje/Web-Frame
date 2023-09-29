import React from "react";
import { AiFillBell } from "react-icons/ai";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { FaUsersRectangle } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";
import { BsFillCalendarFill, BsFillClipboardCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="px-8 w-full h-20 flex items-center justify-between bg-[#15132b]">
      <div className="flex items-center justify-center bg-[#211a75] pl-4 pr-12 py-2 rounded-full">
        <FaSearch className="text-[#076ECD] text-lg mr-3 font-extrabold" />
        <input
          type="text"
          placeholder="Search here"
          className="text-gray-300 bg-transparent border-none text-lg outline-none"
        />
      </div>
      <p className="cursor-pointer mx-10 underline text-purple-800 text-sm font-bold">
        OTHER MENUS
      </p>
      <div className="flex items-center justify-center">
        <span className="cursor-pointer">
          <AiFillBell className="m-3 text-3xl text-[#7879F1]" />
        </span>
        <span className="cursor-pointer">
          <FaUsersRectangle className="m-3 text-3xl text-[#7879F1]" />
        </span>
        <span className="cursor-pointer">
          <BsFillClipboardCheckFill className="m-3 text-3xl text-[#7879F1]" />
        </span>
        <span className="cursor-pointer">
          <BsFillCalendarFill className="m-3 text-3xl text-[#7879F1]" />
        </span>
      </div>
      <div className="flex items-center justify-center bg-[#211a75] text-white px-4 py-3 mx-8 rounded-full">
        <GiUsaFlag className="text-xl mx-2" />
        <p className="text-base font-bold">ENGLISH</p>
        <RxTriangleDown className="text-purple-800 text-3xl" />
      </div>
      <div className="border-l-2 h-10 border-gray-800 flex items-center justify-center">
        <div className="bg-gray-300 rounded-xl mx-2">
          <FaUserCircle className="m-2 text-3xl text-[#7879F1]" />
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