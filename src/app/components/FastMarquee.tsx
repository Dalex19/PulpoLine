import React from "react";
import MarqueeItem from "./MarqueeItem";

import Marquee from "react-fast-marquee";
import { useClientMediaQuery } from "../hooks/useClientMediaQuery";

export default function FastMarquee() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");
  return (
    <>
      {!isMobile && (
        <div className="w-full px-2 pt-3">
          <Marquee>
            {Array.from({ length: 12 }).map((_, i) => (
              <MarqueeItem key={i} />
            ))}
          </Marquee>
        </div>
      )}
    </>
  );
}
