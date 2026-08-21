import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollY } from "@/hooks/use-scroll-y";

const SceneBackdrop = () => {
  const y = useScrollY();
  const reduced = useReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight || reduced) return;

    const onMove = (event: MouseEvent) => {
      spotlight.style.setProperty("--spot-x", `${event.clientX}px`);
      spotlight.style.setProperty("--spot-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  useEffect(() => {
    const floor = floorRef.current;
    if (!floor) return;
    const shift = reduced ? 0 : y;
    floor.style.transform = `rotateX(64deg) translate3d(0, ${-10 + shift * 0.035}%, ${-shift * 0.18}px) scale(2.15)`;
  }, [reduced, y]);

  return (
    <div className="scene-backdrop" aria-hidden>
      <div ref={spotlightRef} className="scene-spotlight" />
      <div
        className="scene-orb scene-orb-a"
        style={{ transform: reduced ? undefined : `translate3d(0, ${y * 0.14}px, 0)` }}
      />
      <div
        className="scene-orb scene-orb-b"
        style={{ transform: reduced ? undefined : `translate3d(0, ${y * -0.1}px, 0)` }}
      />
      <div className="scene-floor-wrap">
        <div ref={floorRef} className="scene-floor" />
      </div>
      <div className="scene-grain" />
    </div>
  );
};

export default SceneBackdrop;
