import GroundBg from "@/app/magdin-prvi-rodjendan/GroundBg";
import { PiCalendarHeart } from "react-icons/pi";
import { HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

const Details = () => {
  return (
    <div className="relative w-svw h-[60svh] mb-0 bg-[#eaf0f3]">
      <div className={"flex flex-col items-start ml-5 mb-5 z-20"}>
        <div
          className={"text-2xl inline-flex items-center gap-2 font-semibold text-[#cf7868] drop-shadow-pink-900"}>
          <PiCalendarHeart /> 12. septembar
        </div>
        <div
          className={"text-2xl inline-flex items-center gap-2 font-semibold text-[#cf7868] drop-shadow-pink-900"}>
          <HiOutlineClock /> 17h
        </div>
        <div
          className={"text-2xl inline-flex items-center gap-2 font-semibold text-[#cf7868] drop-shadow-pink-900"}>
          <HiOutlineLocationMarker /> Svetolika Mladenovića 7
        </div>
      </div>
      <GroundBg />
    </div>
  );
};

export default Details;
