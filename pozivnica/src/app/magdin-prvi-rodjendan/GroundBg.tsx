const Balloon = () => {
  return (
    <div className="h-screen overflow-hidden absolute w-full aspect-[3/3] z-1 bg-[#568dbd]">
      <video
        className="object-cover w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0,black_100px,black_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_100px,black_100%)]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cake-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Balloon;
