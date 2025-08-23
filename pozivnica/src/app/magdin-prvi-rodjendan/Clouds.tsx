import Image from "next/image";

export function Clouds() {
  return (
    <div className={`z-10 left-0 top-0 right-0 aspect-[3/3] opacity-55 absolute`}>
      <Image
        src="/clouds.png"
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        className="object-cover"
      />
    </div>
  );
};

export default Clouds;
