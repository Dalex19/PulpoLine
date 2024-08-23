"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import Image from "next/image";

import Bg1 from "@assets/wallpaper2.jpg";
import Bg2 from "@assets/myWallpaper.jpg";
import Bg3 from "@assets/download.png";

const sliderItems = [Bg1, Bg2, Bg3];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    setSlidesCount(emblaApi.slideNodes().length);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const renderDots = () => {
    return Array.from({ length: slidesCount }).map((_, index) => (
      <button
        key={index}
        className={`embla__dot ${
          index === selectedIndex ? "embla__dot--active" : ""
        }`}
        onClick={() => emblaApi!!.scrollTo(index)}
      />
    ));
  };

  return (
    <>
      <div className="embla h-[80%] w-full " ref={emblaRef}>
        <div className="embla__container h-full">
          {sliderItems.map((item, _) => (
            <div className="embla__slide bg-red-500" key={_}>
              <Image
                src={item}
                alt="img_1"
                className="object-cover h-full w-full "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots absolute left-1/2 transform -translate-x-1/2 bottom-2">
        {renderDots()}
      </div>
    </>
  );
}
