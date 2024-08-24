"use client";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import BottomBar from "./BottomBar";
import FooterDesk from "./FooterDesk";

export default function Footer() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  return <>{isMobile ? <BottomBar /> : <FooterDesk />}</>;
}
