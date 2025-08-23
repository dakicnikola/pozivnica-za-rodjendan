import Image from "next/image";

const Balloon = () => {
  return (
    <div className="relative mx-auto aspect-[2/2] -left-30 -top-30 w-[500px] h-[400px] scale-250">
      {/*<div className="relative mx-auto aspect-[2/2] -left-30 top-20 scale-200 w-full max-w-sm ">*/}
      <Image
        src="/balloon.png"
        alt="baloon"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-contain"
      />
      <div className={"relative w-15 h-10 right-0 z-50 left-[210px] top-[285px]"}>
        <Image
          src="/magda.png"
          alt="magda"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          className="object-contain z-50 [clip-path:inset(0_0_9%_0)]"
        />
      </div>
    </div>
  );
};

export default Balloon;
