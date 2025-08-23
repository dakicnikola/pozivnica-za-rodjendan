import GroundBg from "@/app/magdin-prvi-rodjendan/GroundBg";
import { PiCalendarHeart } from "react-icons/pi";
import { HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

const Details = () => {
  return (
    <div className="relative w-full mb-0 bg-[#eaf0f3]">
      <div className={"flex flex-col items-start ml-5 z-20 pb-10"}>
        <div
          className={"text-2xl inline-flex items-center gap-2 font-semibold  drop-shadow-pink-900"}>
          <PiCalendarHeart /> 12. septembar
        </div>
        <div
          className={"text-2xl inline-flex items-center gap-2 font-semibold  drop-shadow-pink-900"}>
          <HiOutlineClock /> 17h
        </div>
        <a
          href="https://www.google.com/maps?q=44.030717382109465,20.8895243423279"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className={"cursor-pointer text-2xl inline-flex items-center gap-2 font-semibold drop-shadow-pink-900"}>
            <HiOutlineLocationMarker /> Svetolika Mladenovića 7
          </div>
        </a>
      </div>
      <GroundBg />
    </div>
  );
};

export default Details;
