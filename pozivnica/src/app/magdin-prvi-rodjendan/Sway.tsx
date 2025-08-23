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
      className={`z-10 aspect-[1/1] absolute sway ${className}`}
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
