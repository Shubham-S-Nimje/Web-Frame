import React from "react";
import { BsFillArrowLeftCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa6";
import { BiSolidCommentDetail } from "react-icons/bi";
import { PiCircleDashed } from "react-icons/pi";

const TitleCard = () => {
  return (
    <div className="w-full p-5 flex flex-col items-center justify-center bg-[#15132b] rounded-lg text-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start my-3">
          <span className="flex items-center justify-center">
            <BsFillArrowLeftCircleFill className="text-gray-300 text-xl mr-3" />
            <p className="text-lg font-bold">School November Tasks</p>
          </span>
          <p className="text-xs text-gray-500 mt-3 ml-8 max-md:ml-0">
            Created by Instructor Day on November 31,2022
          </p>
        </div>
        <div className="flex items-center justify-end max-md:hidden">
          <span className="flex flex-col items-end justify-end mr-2">
            <p className="text-base font-bold text-end">
              Centered Martial Arts
            </p>
            <p className="text-xs text-gray-500 mt-1 text-end">Sunnyvale,Ca</p>
          </span>
          <div className="bg-gray-300 rounded-xl mx-2">
            <PiCircleDashed className="m-2 text-3xl text-[#7879F1]" />
          </div>
          <BsThreeDotsVertical className="ml-5 text-gray-300 text-lg" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-wrap items-center justify-start">
          <div className="flex items-center justify-start ml-8 max-md:ml-0">
            <div className="bg-red-800 flex justify-center font-semibold items-center rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[-20px] z-20">
              VD
            </div>
            <div className="bg-yellow-800 flex justify-center font-semibold items-center rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[-10px] z-20">
              HE
            </div>
            <div className="bg-green-800 flex justify-center font-semibold items-center rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[0px] z-20">
              GB
            </div>
            <div className="flex items-center font-semibold justify-center text-white bg-[#E328AF] rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[10px] text-[13px] z-20">
              5+
            </div>
            <div className=" bg-blue-800 flex justify-center font-semibold items-center rounded-full w-8 h-8 border-[#15132b] border-2 absolute z-10 ">
              HR
            </div>
            <button className="ml-3 mr-3 bg-violet-800 px-4 py-1 text-[14px] text-white flex items-center justify-center rounded-[10px]">
              <FaUserPlus className="text-lg mx-1" />
              Invite People
            </button>
          </div>
          <div className="flex">
            <button className="mr-3 my-3 border-[#7879f1] border-2 px-4 py-1 text-[14px] text-white flex items-center justify-center rounded-[10px]">
              Private
            </button>
            <button className="mr-3 my-3 bg-[#7879f1] px-4 py-1 text-[14px] text-white flex items-center justify-center rounded-[10px]">
              Edit
            </button>
            <button className="mr-3 my-3 w-max border-[#7879f1] border-2 px-4 py-1 text-[14px] text-white flex items-center justify-center rounded-[10px]">
              <BiSolidCommentDetail className="mr-2 text-lg" />
              45 Comments
            </button>
          </div>

          <div className="flex max-md:flex-col justify-end lg:ml-48 max-md:block items-center max-md:justify-center mt-2 mr-2">
            <p className="text-xs max-md:text-lg font-semibold text-white mt-2">
              Total Progress 60%
            </p>
            <div className="ml-5 max-md:ml-0 w-44 max-md:w-60 bg-[#1e1c3a] rounded-xl mt-2 h-3">
              <div className="w-24 bg-violet-800 rounded-xl h-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
