import Image from "next/image";

const Balloon = () => {
  return (
    <div className="absolute w-full aspect-[3/3] z-1">
      <Image
        src="/ground-bg.png"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-cover"
      />
    </div>
  );
};

export default Balloon;
