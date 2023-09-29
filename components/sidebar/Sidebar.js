import React from "react";
import Link from "next/link";
import { CgMenu } from "react-icons//cg";
import routes from "./routes/sidebarData";
import { setSidebar } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarVisible = useSelector((state) => state.sidebar);
  // console.log(sidebarVisible);
  const showSidebarHandler = (e) => {
    e.preventDefault();
    dispatch(setSidebar(!sidebarVisible));
  };
  return (
    <div
      className={`max-md:${
        sidebarVisible === true ? "absolute" : "hidden"
      } z-50 max-md:w-96 w-[17%] p-8 shadow-[18px_4px_35px_0px_#00000026] min-h-full bg-[#15132b] text-white`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold font-sans">weframetech</h1>
        <button onClick={showSidebarHandler}>
          <CgMenu className="text-[#b7b7f3] text-3xl" />
        </button>
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
                <div
                  className={`flex justify-start text-[${data.iconcolor}] text-lg font-semibold`}
                >
                  {data.icon}
                  <p className={`mx-2 text-[${data.textcolor}]`}>{data.name}</p>
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
        <li class="mt-8 w-48 h-36 relative">
          <div class="w-48 h-36 bg-gradient-to-br from-[#076ECD] to-[#1CBBFF] rounded-3xl absolute top-0 left-0"></div>

          <div class="w-4 h-8 absolute top-6 left-4">
            <img src="https://c.animaapp.com/AVj2O5BR/img/vector.svg" />
          </div>
          <div class="w-4 h-4 absolute bottom-4 left-4">
            <img src="https://c.animaapp.com/AVj2O5BR/img/vector-1.svg" />
          </div>
          <div class="absolute w-fit">
            <img
              src="https://c.animaapp.com/AVj2O5BR/img/mask-group@2x.png"
              className="h-36 z-10 ml-4"
            />
          </div>
          <p class="absolute top-12 mx-4 text-white text-lg font-semibold">
            Increase your work with kanban
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
