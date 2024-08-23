
"use client";
import BottomBar from "./components/BottomBar";
import Main from "./components/Main";
import MarqueeItem from "./components/MarqueeItem";
import Navbar from "./components/Navbar";
import NavbarDesk from "./components/NavbarDesk";


import { useClientMediaQuery } from "./hooks/useClientMediaQuery";
import Footer from "./components/Footer";
import FastMarquee from "./components/FastMarquee";

export default function Home() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <main className="flex min-h-screen md:h-auto flex-col items-center justify-between md:justify-start bg-white">
      {isMobile ? (
        <Navbar title="Gestión de saldo" cuantity="10,00" />
      ) : (
        <NavbarDesk />
      )}

      <FastMarquee />

      <Main />
      {isMobile ? <BottomBar /> : <Footer />}
    </main>
  );
}
