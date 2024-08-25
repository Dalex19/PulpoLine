"use client";

import { useState } from "react";
import RechargeBalance from "./RechargeBalance";
import WithdrawPrize from "./WithdrawPrize";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import Profile from "./Profile";
import TabButton from "./TabButton";

export default function Main() {
  const [changeView, setChangeView] = useState<boolean>(false);
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  return (
    <div className="md:flex-none flex flex-col w-full h-[84vh]  md:h-[95vh] p-2 md:justify-start md:pl-24 md:pr-10 md:pt-8 md:pb-10">
      <h2 className="hidden md:flex text-2xl font-bold text-black">Gestión de Saldo</h2>
      <div className="flex justify-between md:justify-start md:w-[40%]">
      <TabButton
          active={!changeView}
          onClick={() => setChangeView(false)}
          label="Recargar Saldo"
        />
         <TabButton
          active={changeView}
          onClick={() => setChangeView(true)}
          label="Retirar Premios"
        />
      </div>
      <div className="w-full md:flex md:justify-between">
        {!changeView ? <RechargeBalance /> : <WithdrawPrize />}
        {!isMobile && <Profile />}
      </div>
    </div>
  );
}
