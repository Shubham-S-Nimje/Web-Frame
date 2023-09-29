import React from "react";
import Navbar from "@/components/header/Navbar";
import MainCard from "./MainCard";

const PageContents = () => {
  return (
    <div className="w-full">
      <Navbar />
      <MainCard />
    </div>
  );
};

export default PageContents;
