import Balloon from "@/app/magdin-prvi-rodjendan/Balloon";
import Clouds from "@/app/magdin-prvi-rodjendan/Clouds";
import Cloud from "@/app/magdin-prvi-rodjendan/Cloud";
import Sway from "@/app/magdin-prvi-rodjendan/Sway";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-full min-h-64 mb-0 bg-gradient-to-b from-[#fbeee9] via-[#fbeee9] to-[#eaf0f3]">
      <Sway dx={"15px"} dy={"5px"} dur={"20s"} delay={"1s"}>
        <Balloon />
      </Sway>
      <div className="scale-150">
        <Sway dx={"3px"} dy={"5px"} dur={"60s"} delay={"1s"} className="opacity-70">
          <Clouds />
        </Sway>
        <Sway dx="16px" dy="4px" dur="70s" delay="0s" className="top-0 -left-40 h-100 w-20 opacity-70">
          <Cloud />
        </Sway>
        <Sway dx="24px" dy="6px" dur="80s" delay="3s" className="z-5 top-10 left-24 h-20 opacity-90">
          <Cloud />
        </Sway>
        <Sway dx="12px" dy="3px" dur="90s" delay="-1s" className="absolute left-20 h-50 opacity-80">
          <Cloud />
        </Sway>
      </div>
      <div className="z-20 absolute items-center justify-center text-center text-white drop-shadow-lg top-35 right-5">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-wide text-[#cf7868] drop-shadow-pink-900">
          Magda
        </h1>
      </div>
      <div
        className="absolute z-20 flex flex-col justify-center text-center gap-2 bottom-30 right-5 mt-2 text-4xl md:text-4xl font-semibold text-[#cf7868]">
        <h2 className={"text-nowrap text-right"}>
          vas poziva na
        </h2>
        <h2 className="text-nowrap text-right">
          svoju prvu žurku
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
