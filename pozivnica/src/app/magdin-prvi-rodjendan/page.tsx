import HeroSection from "@/app/magdin-prvi-rodjendan/HeroSection";
import Details from "@/app/magdin-prvi-rodjendan/Details";

const Page = () => {
  return (
    <section className="flex flex-col bg-[#fbeee9] overflow-x-hidden">
      <HeroSection />
      <Details />
    </section>
  );
};

export default Page;
