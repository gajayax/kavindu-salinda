import { useCallback, useRef, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard = ({ children, className, intensity = 14 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const disabled = reduced || isMobile;

  const reset = useCallback(() => {
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    if (glare) glare.style.opacity = "0";
  }, []);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    const el = ref.current;
    const glare = glareRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -intensity;
    const ry = (px - 0.5) * intensity;

    el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(28px)`;
    if (glare) {
      glare.style.opacity = "1";
      glare.style.background = `radial-gradient(520px circle at ${px * 100}% ${py * 100}%, hsl(var(--primary-glow) / 0.28), transparent 42%)`;
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("tilt-card relative", className)}
    >
      {children}
      <div ref={glareRef} className="tilt-glare" aria-hidden />
    </div>
  );
};

export default TiltCard;
