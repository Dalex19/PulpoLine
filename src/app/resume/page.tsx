"use client";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import AddBalance from "./components/AddBalance";
import Slider from "./components/Slider";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import Profile from "../components/Profile";
import NavbarDesk from "../components/NavbarDesk";
import Footer from "../components/Footer";
import FastMarquee from "../components/FastMarquee";

export default function ResumePage() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <div className="h-screen w-screen md:h-auto md:w-full flex flex-col justify-between bg-white">
      {isMobile ? <Navbar title="Resumen" cuantity="20,00" /> : <NavbarDesk />}
      <FastMarquee />

      <div className="h-full w-full md:flex md:justify-around md:items-center py-6">
        <div className="border flex flex-col justify-around items-around flex-1 md:flex-none md:w-[40%] ">
          <AddBalance />
          <div className=" md:h-[250px]  flex items-end relative md:items-start">
            <Slider />
          </div>
        </div>

        {!isMobile && <Profile />}
      </div>

      {isMobile ? <BottomBar /> : <Footer />}
    </div>
  );
}
