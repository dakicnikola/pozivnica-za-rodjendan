export function Sway({
  dx = "3px",
  dy = "5px",
  dur = "20s",
  delay = "1s",
  className = "",
  children
}: {
  dx?: string;
  dy?: string;
  dur?: string;
  delay?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`z-10 left-0 top-0 right-0 aspect-[3/3] absolute sway ${className}`}
      style={
        {
          "--dx": dx,
          "--dy": dy,
          "--dur": dur,
          "--delay": delay,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Sway;
