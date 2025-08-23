import Image from "next/image";

const Balloon = () => {
  return (
    <div className="absolute w-full aspect-[3/3] z-1 bg-[#eaf0f3]">
      <Image
        src="/ground-bg.png"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-cover [mask-image:linear-gradient(to_bottom,transparent_0,black_15px,black_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_15px,black_100%)]"
      />
    </div>
  );
};

export default Balloon;
