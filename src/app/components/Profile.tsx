import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPowerOutline } from "react-icons/io5";

export default function Profile() {
  return (
    <div className="w-[22%] h-full flex flex-col gap-2">
      <div className="shadow-lg border p-3 text-black flex flex-col gap-2 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-md">Hila Amanda </h3>
          <span className="text-sm p-1 bg-yellow-400 font-semibold ">
            Saldo 10,00 $
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <button className="p-1 flex-1 border border-black font-semibold rounded-md">
            Retirar Premio
          </button>
          <button className="p-1 flex-1 border font-semibold rounded-md text-white bg-blue-400">
            Recargar Saldo
          </button>
        </div>
      </div>

      <div className="border shadow-lg rounded-lg flex-1 p-2 flex flex-col justify-between gap-3 pb-4">
        <ProfileItems title="Mi Cuenta" />
        <ProfileItems title="Historial" />
        <ProfileItems title="Ayuda y contacto" />
        <p className="cursor-pointer underline inline-flex text-md text-black items-center gap-2 justify-center mt-3"> <IoPowerOutline /> Cerrar Sesión</p>
      </div>
    </div>
  );
}

interface profileItemsP  {
  title: string;
}

const ProfileItems:React.FC<profileItemsP> = (props) => {
  return (
    <div className="flex flex-col gap-2 pl-2">
      <h3 className="font-semibold text-black text-[14px]">{props.title}</h3>
      <ul className="pl-2 text-[12px] flex flex-col gap-2 text-black">
        <li className="flex items-center gap-1 cursor-pointer">
          <IoPersonCircleOutline size={20} /> Mis Datos Personales
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <MdOutlineAttachMoney size={20} /> Datos Bancarios
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <IoHomeOutline size={20} /> Direcciones
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <IoMdNotificationsOutline size={20} /> Mis Notificaciones
        </li>
      </ul>
    </div>
  );
};
