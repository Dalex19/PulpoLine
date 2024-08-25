"use client";

import AddBalance from "./components/AddBalance";
import Slider from "./components/Slider";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import Profile from "../components/Profile";

export default function ResumePage() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <div className="h-[84vh] md:h-[95vh] w-screen md:w-full flex flex-col justify-between bg-white">
      <div className="h-full w-full md:flex md:justify-between md:pl-24 md:pr-10 md:items-start py-8">
        <div className="md:border  flex flex-col justify-around items-around flex-1 md:flex-none md:w-[40%] ">
          <AddBalance />
          <div className=" md:h-[250px]  flex items-end relative md:items-start">
            <Slider />
          </div>
        </div>

        {!isMobile && <Profile />}
      </div>
    </div>
  );
}
