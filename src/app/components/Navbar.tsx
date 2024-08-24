"use client"

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import NavbarDesk from "./NavbarDesk";
import NavbarMob from "./NavbarMob";


const Navbar = () => {
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  return (
   <>
      {isMobile ? <NavbarMob title="Resumen" cuantity="20,00" /> : <NavbarDesk />}
   </>
  );
};

export default Navbar;
