import React from "react";
import Navbar from "@/components/header/Navbar";
import TitleCard from "./TitleCard";
import TodolistCard from "./TodolistCard";
import InprogressCard from "./InprogressCard";
import DoneCard from "./DoneCard";
import RevisedCard from "./RevisedCard";
import TodolistData from "../sidebar/routes/TodolistData";
import InprogressData from "../sidebar/routes/InprogressData ";
import DoneData from "../sidebar/routes/DoneData";
import RevisedData from "../sidebar/routes/RevisedData";

const PageContents = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="m-5">
        <TitleCard />
        <div className="flex justify-between mt-5">
          <div className="text-white">
            <div className="flex justify-between m-2">
              <p>To-Do List ({TodolistData[0].masseges})</p>
              <div className="w-[30px] h-[30px] bg-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold cursor-pointer ml-2">
                +
              </div>
            </div>
            <TodolistCard tododata={TodolistData[0].data} />
          </div>

          <div className="text-white">
            <div className="flex justify-between m-2">
              <p>In Progress ({InprogressData[0].masseges})</p>
              <div className="w-[30px] h-[30px] bg-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold cursor-pointer ml-2">
                +
              </div>
            </div>
            <InprogressCard inprogressData={InprogressData[0].data} />
          </div>

          <div className="text-white">
            <div className="flex justify-between m-2">
              <p>Done ({DoneData[0].masseges})</p>
              <div className="w-[30px] h-[30px] bg-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold cursor-pointer ml-2">
                +
              </div>
            </div>
            <DoneCard doneData={DoneData[0].data} />
          </div>

          <div className="text-white">
            <div className="flex justify-between m-2">
              <p>Revised ({RevisedData[0].masseges})</p>
              <div className="w-[30px] h-[30px] bg-[#6418C3] rounded-lg text-[20px] flex justify-center items-center font-bold cursor-pointer ml-2">
                +
              </div>
            </div>
            <RevisedCard revisedData={RevisedData[0].data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContents;
