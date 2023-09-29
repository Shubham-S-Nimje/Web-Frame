import React from "react";
import Link from "next/link";
import { CgMenu } from "react-icons//cg";
import routes from "./routes/sidebarData";

const Sidebar = () => {
  return (
    <div className="w-[17%] p-8 shadow-2xl h-full bg-[#15132b] text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold font-sans">weframetech</h1>
        <CgMenu className="text-[#7879F1] text-3xl" />
      </div>

      <ul>
        <li className="flex items-center">
          <Link href="/dashboard">
            <p className="my-4 font-semibold text-xl font-sans">MAIN MENU</p>
          </Link>
        </li>
        {routes.map((data, i) => {
          return (
            <li key={i} className="mb-2 items-center">
              <Link href={data.path} className="flex my-6 justify-between">
                <div className="flex justify-start text-gray-600 text-lg font-semibold">
                  {data.icon}
                  <p className="mx-2">{data.name}</p>
                </div>
                <div className="flex items-center">
                  {data.messages && (
                    <p className="bg-[#5ECFFF] rounded-full text-md mx-2 px-1">
                      {data.messages}
                    </p>
                  )}
                  {data.submenu && <p>{data.submenu}</p>}
                  {data.notification && (
                    <p className="bg-[#E328AF] px-3 rounded-full">
                      {data.notification}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
        <li class="mt-8 w-48 h-48 relative">
          <div class="w-48 h-48 bg-gradient-to-b from-[#076ECD] via-blue-300 to-[#1CBBFF] rounded-xl absolute top-0 left-0"></div>
          <div class="w-48 h-48 absolute top-0 left-0">
            <img
              src="https://c.animaapp.com/AVj2O5BR/img/mask-group@2x.png"
              class="w-48 h-48"
            />
          </div>
          <div class="w-6 h-8 absolute top-8 left-8">
            <img
              src="https://c.animaapp.com/AVj2O5BR/img/vector.svg"
              class="w-6 h-8"
            />
          </div>
          <div class="w-8 h-4 absolute bottom-4 left-8">
            <img
              src="https://c.animaapp.com/AVj2O5BR/img/vector-1.svg"
              class="w-8 h-4"
            />
          </div>
          <p class="absolute top-20 mx-8 text-white text-xl font-semibold">
            <span class="text-white">Increase your </span>
            <span class="text-white text-md">work with kanban</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
