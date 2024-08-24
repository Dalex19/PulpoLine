import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowLeftLong, FaCartShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

interface NavbarProp {
  title: string;
  cuantity: string;
}

const NavbarMob: React.FC<NavbarProp> = (props) => {
  return (
    <nav className="w-full p-2 h-[60px] bg-[#00A9E0] flex justify-between">
      <Link href="/" passHref className="flex items-center">
        <div className="flex gap-2 items-center">
          <FaArrowLeftLong />
          <span>{props.title}</span>
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex items-start gap-3">
          <li className="flex flex-col items-center ">
            <IoPersonOutline size={18} />
            <span className="text-xs">{props.cuantity} $</span>
          </li>
          <li>
            <FaCartShopping size={18} />
          </li>
          <li>
            <MdOutlineCancel size={18} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMob;
