"use client";

import { useState } from "react";
import RechargeBalance from "./RechargeBalance";
import WithdrawPrize from "./WithdrawPrize";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import Profile from "./Profile";

export default function Main() {
  const [changeView, setChangeView] = useState<boolean>(false);
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  return (
    <div className="flex-1 md:flex-none flex flex-col w-full md:h-[95vh] p-2 md:justify-start md:px-24 md:pt-8 md:pb-10">
      <h2 className="hidden md:flex text-2xl font-bold text-black">Gestión de Saldo</h2>
      <div className="flex justify-between md:justify-start md:w-[40%]">
        <button
          className={`${
            !changeView
              ? "transition-all border-b-4 border-blue-500 text-black"
              : "text-gray-500"
          } py-2 px-4`}
          onClick={() => setChangeView(false)}
        >
          Recargar Saldo
        </button>
        <button
          className={`${
            changeView
              ? "transition-all border-b-4 border-blue-500 text-black"
              : "text-gray-500"
          } py-2 px-4`}
          onClick={() => setChangeView(true)}
        >
          Retirar Premios
        </button>
      </div>

      <div className="w-full md:flex md:justify-between">
      {!changeView ? <RechargeBalance /> : <WithdrawPrize />}
      {!isMobile && <Profile />}
      </div>
    </div>
  );
}
