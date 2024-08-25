"use client";
import Image from "next/image";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";

import Watermark1 from "@assets/watermark1.png";
import Watermark2 from "@assets/watermark2.png";

export default function WaterMark() {
  const isMobile = useClientMediaQuery("(max-width: 600px");

  return (
    <>
      {!isMobile && (
        <div className="absolute  z-[10] top-[20%]  right-0 flex flex-col gap-4">
          <Image src={Watermark1} alt="watermark1" className="w-[400px]" />
          <Image src={Watermark2} alt="watermark2" className="w-[400px]" />
        </div>
      )}
    </>
  );
}
