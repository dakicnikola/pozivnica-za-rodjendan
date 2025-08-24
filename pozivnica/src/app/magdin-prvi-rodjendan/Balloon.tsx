import Image from "next/image";

const Balloon = () => {
  return (
    <div className="relative mx-auto w-[500px] h-[400px] [contain:none] scale-200 -top-5">
      <Image
        src="/balloon.png"
        alt="baloon"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-contain"
        loading="eager"
        priority
      />
      <div className="relative left-[210px] top-[285px] w-[60px] h-[40px] z-50">
        <Image
          src="/magda.png"
          alt="magda"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          className="object-contain z-50 [clip-path:inset(0_0_9%_0)] [transform:translateZ(0)] [backface-visibility:hidden]"
          loading="eager"
          priority
        />
      </div>
    </div>
  );
};

export default Balloon;
