import Link from "next/link";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function AddBalance() {
  return (
    <div className=" flex-1 p-4 flex flex-col gap-4 md:justify-end ">
      <div className="flex gap-2 items-center">
        <IoCheckmarkCircleOutline color="green" size={20} />{" "}
        <span className="font-bold text-black md:text-xl">¡Saldo Añadido!</span>
      </div>
      <p className="text-xs leading-4 text-black font-semibold md:text-lg">
        Tu saldo ya esta añadido y puedes usarlo para realizar tus compras.
        ¿Listo para ganar?
      </p>
      <div className="bg-white shadow-md py-3 border rounded-lg text-black flex items-center justify-around">
        <p className="text-md md:text-lg">
          10,00 $ <br />
          Antes
        </p>{" "}
        <FaArrowRight size={20}/>
        <p className="text-xl md:text-2xl font-bold text-green-600">20,00 $ <br/><span className="text-md md:text-lg font-normal text-black">Ahora</span></p>
      </div>
        <Link href="/" className="flex justify-center p-3 rounded-md bg-blue-400 md:w-[20%] md:ml-auto">Ir a Inicio</Link>
    </div>
  );
}
