import Image from "next/image";

const Balloon = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[2/2] -left-30 top-20">
      <Image
        src="/balloon.png"
        alt="baloon"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-contain"
      />
    </div>
  );
};

export default Balloon;
