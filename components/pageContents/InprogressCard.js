import React from "react";
import { FiMoreHorizontal, FiClock } from "react-icons/fi";

const InprogressCard = (props) => {
  return (
    <>
      {props.inprogressData.map((data) => (
        <div className="flex flex-col w-[280px] h-[180px] bg-[#211A75] items-center mb-4 rounded-xl hover:rotate-12 hover:translate-y-8 hover:translate-x-4">
          <div className="flex justify-between py-4 px-6 w-full">
            <div
              className={`flex justify-center items-center text-[12px] text-[${data.color}]`}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full mr-2 bg-[${data.color}]`}
              ></div>{" "}
              {data.title}{" "}
            </div>
            <div className="cursor-pointer">
              <FiMoreHorizontal />
            </div>
          </div>

          <div className="text-[14px] w-full pl-6">{data.description}</div>
          <div className="w-[80%] h-[7px] bg-[#1E1C3A] mt-5 rounded-xl">
            <div
              className={`w-[30%] h-[7px] rounded-xl bg-[${data.color}]`}
            ></div>
          </div>

          <div className="flex justify-between w-[100%] mt-4 pr-6">
            <div className="flex items-center justify-start ">
              <div className="bg-[#c4c4c4] rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[-20px] z-20"></div>
              <div className="bg-[#c4c4c4] rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[-10px] z-20"></div>
              <div className="bg-[#c4c4c4] rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[0px] z-20"></div>
              <div className="bg-[#c4c4c4] rounded-full w-8 h-8 border-[#15132b] border-2 relative right-[0px] z-20"></div>
            </div>
            <div className="flex gap-1 items-center text-[12px] text-[#A5A5A5]">
              <FiClock /> Due in 4 days
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default InprogressCard;
