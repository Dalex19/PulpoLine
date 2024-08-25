import { navbarItems } from "../utils/utils";

import { FaCartShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

const NavbarDesk = () => {
  return (
  
      <nav className=" w-full py-3 px-6 h-[60px] bg-[#00A9E0] flex justify-between">
      <ul className="flex gap-6">
        {navbarItems.map((item,_) => <li key={_}>{item}</li>)}
      </ul>
      <div className=" flex items-center gap-6">
        <li className="flex flex-col items-center ">
          <IoPersonOutline size={20} />
          <span className="text-sm">1000 $</span>
        </li>

        <FaCartShopping size={20} />
      </div>
    </nav>
  
   
  );
};

export default NavbarDesk;

