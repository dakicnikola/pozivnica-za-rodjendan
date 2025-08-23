import HeroSection from "@/app/magdin-prvi-rodjendan/HeroSection";
import Details from "@/app/magdin-prvi-rodjendan/Details";

const Page = () => {
  return (
    <div className="relative flex justify-center w-full h-svh overflow-x-hidden">
      <section className=" bg-[#fbeee9] overflow-x-hidden w-full max-w-xl ">
        <HeroSection />
        <Details />
      </section>
    </div>
  );
};

export default Page;
