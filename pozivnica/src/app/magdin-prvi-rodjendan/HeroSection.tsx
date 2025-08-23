import Balloon from "@/app/magdin-prvi-rodjendan/Balloon";
import Clouds from "@/app/magdin-prvi-rodjendan/Clouds";
import Cloud from "@/app/magdin-prvi-rodjendan/Cloud";
import Sway from "@/app/magdin-prvi-rodjendan/Sway";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen h-[800px] mb-0 bg-gradient-to-b from-[#fbeee9] via-[#568dbd] to-[#eaf0f3]">
      <Sway dx={"15px"} dy={"5px"} dur={"20s"} delay={"1s"} className={"-left-30 top-0 "}>
        <Balloon />
      </Sway>
      <div className="scale-150 z-50">
        <Sway dx={"3px"} dy={"5px"} dur={"20s"} delay={"1s"} className="left-40 top-0 h-80 opacity-70">
          <Clouds />
        </Sway>
        <Sway dx="16px" dy="4px" dur="70s" delay="0s" className="top-0 -left-40 h-100 w-20 opacity-70">
          <Cloud />
        </Sway>
        <Sway dx="24px" dy="6px" dur="80s" delay="3s" className="top-10 left-24 h-20 z-5 opacity-90">
          <Cloud />
        </Sway>
        <Sway dx="100px" dy="3px" dur="600s" delay="0s"
              className="absolute left-0 top-80 h-50 -z-1 opacity-20 scale-280">
          <Cloud />
        </Sway>
        <Sway dx="100px" dy="3px" dur="300s" delay="0s"
              className="absolute left-30 top-100 h-50 -z-1 opacity-40 scale-220">
          <Cloud />
        </Sway>
      </div>
      <Sway dx="160px" dy="3px" dur="75s" delay="0s" className="absolute -left-30 top-0 h-50 z-10 opacity-80">
        <Cloud />
      </Sway>
      <Sway dx="260px" dy="3px" dur="75s" delay="0s" className="absolute left-30 -top-10 h-50 z-10 opacity-90">
        <Cloud />
      </Sway>
      <Sway dx="100px" dy="3px" dur="75s" delay="0s" className="absolute left-30 top-25 h-50 z-10 opacity-70 scale-160">
        <Cloud />
      </Sway>
      <div
        className="z-20 absolute items-center justify-center text-center text-white drop-shadow-lg top-35 right-5 font-cloudy">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-wide text-[#cf7868] drop-shadow-pink-900 font-sans">
          MAGDA
        </h1>
      </div>
      <div
        className={"top-[min(530px,70vh)] z-20 absolute flex flex-col justify-center text-center text-3xl gap-2 right-5 font-semibold text-white font-(family-name:--font-cloudy)"}>
        <h2 className={"text-nowrap text-right"}>
          vas poziva na
        </h2>
        <h2 className="text-nowrap text-right relative">
          svoju prvu
          <span className="relative">
            {` zurku`}
            <span className="absolute text-xs right-[85px] bottom-[20px]">v</span>
          </span>

        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
