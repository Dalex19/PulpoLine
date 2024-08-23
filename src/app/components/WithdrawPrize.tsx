import NoYet from "@assets/telescopio.png";
import Image from "next/image";

export default function WithdrawPrize() {
  return (
    <div className="flex-1 md:max-w-[40%] transition-all flex flex-col justify-center items-center gap-4">
      <Image src={NoYet} alt="empty post" />
      <span className=" text-xl text-black font-semibold">No post yet </span>
    </div>
  );
}
