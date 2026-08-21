import { useEffect, useRef, type CSSProperties } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollY } from "@/hooks/use-scroll-y";
import ParticleField from "./ParticleField";
import FloatingSolids from "./FloatingSolids";

const TUNNEL_RINGS = Array.from({ length: 14 }, (_, i) => i);

const SceneBackdrop = () => {
  const y = useScrollY();
  const reduced = useReducedMotion();
  const spotlightRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const world = worldRef.current;
    if (!spotlight || !world || reduced) return;

    let frame = 0;
    let running = true;

    const onMove = (event: MouseEvent) => {
      pointer.current.tx = event.clientX / window.innerWidth - 0.5;
      pointer.current.ty = event.clientY / window.innerHeight - 0.5;
      spotlight.style.setProperty("--spot-x", `${event.clientX}px`);
      spotlight.style.setProperty("--spot-y", `${event.clientY}px`);
    };

    const tick = () => {
      if (!running) return;
      pointer.current.x += (pointer.current.tx - pointer.current.x) * 0.07;
      pointer.current.y += (pointer.current.ty - pointer.current.y) * 0.07;
      world.style.transform = `rotateX(${8 + pointer.current.y * -10}deg) rotateY(${pointer.current.x * 14}deg)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
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
      <div className="scene-aurora" />
      <div className="scene-nebula" />
      <ParticleField />
      <div
        className="scene-orb scene-orb-a"
        style={{ transform: reduced ? undefined : `translate3d(${y * 0.02}px, ${y * 0.14}px, 0)` }}
      />
      <div
        className="scene-orb scene-orb-b"
        style={{ transform: reduced ? undefined : `translate3d(0, ${y * -0.1}px, 0)` }}
      />
      <div
        className="scene-orb scene-orb-c"
        style={{ transform: reduced ? undefined : `translate3d(${y * -0.03}px, ${y * 0.06}px, 0)` }}
      />
      <div ref={worldRef} className="scene-world">
        <div className="scene-tunnel">
          {TUNNEL_RINGS.map((i) => (
            <span key={i} className="scene-tunnel-ring" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
        <FloatingSolids />
        <div className="scene-floor-wrap">
          <div ref={floorRef} className="scene-floor" />
        </div>
      </div>
      <div className="scene-horizon" />
      <div className="scene-vignette" />
      <div className="scene-grain" />
    </div>
  );
};

export default SceneBackdrop;
