import { CiHome } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function BottomBar() {
  return (
    <div className=" w-full h-[45px] flex items-center text-gray-500 border-t ">
      <ul className="flex-1 flex justify-around ">
        <li className="flex flex-col justify-center items-center">
          <CiHome size={20} /> <span className="text-xs">Home</span>
        </li>

        <li className="flex flex-col justify-center items-center">
          <TbWorld size={20} /> <span className="text-xs">Search</span>
        </li>

        <li className="flex flex-col justify-center items-center">
          <IoMdHelpCircleOutline size={20} />{" "}
          <span className="text-xs mx-auto">Ayuda</span>
        </li>
      </ul>
    </div>
  );
}
