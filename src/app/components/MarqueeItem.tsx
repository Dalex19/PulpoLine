import Image from "next/image"
import MarqueeIcon from "@assets/marqueeIcon.png"

export default function MarqueeItem() {
  return (
    <div className="w-[140px] flex flex-col items-center font-semibold text-black px-4">
        <Image src={MarqueeIcon} alt="marqueIcon" />
        <h2>Euromillones <br/>17.000.000 $</h2>
    </div>
  )
}
