import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface ScrollStageProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  style?: CSSProperties;
}

const ScrollStage = ({ children, className, intensity = 1, style }: ScrollStageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.style.transform = "none";
      el.style.opacity = "1";
      el.style.filter = "none";
      return;
    }

    let visible = false;
    let frame = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.96;
      const end = vh * 0.38;
      const raw = (start - rect.top) / Math.max(1, start - end);
      const p = Math.min(1, Math.max(0, raw));
      const eased = 1 - (1 - p) ** 3;

      el.style.transform = `translate3d(0, ${(1 - eased) * 88 * intensity}px, ${(1 - eased) * -180 * intensity}px) rotateX(${(1 - eased) * 18 * intensity}deg)`;
      el.style.opacity = String(Math.max(0.001, eased));
      el.style.filter = eased > 0.92 ? "none" : `blur(${(1 - eased) * 8}px)`;
    };

    const onScroll = () => {
      if (!visible) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update();
      },
      { rootMargin: "20% 0px" },
    );

    observer.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [intensity, reduced]);

  return (
    <div
      ref={ref}
      className={cn("scroll-stage", className)}
      style={{
        opacity: reduced ? 1 : 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollStage;
