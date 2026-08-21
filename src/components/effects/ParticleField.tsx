import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
};

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let running = true;

    const makeParticles = (count: number): Particle[] =>
      Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.00028,
        vy: (Math.random() - 0.5) * 0.00022,
        size: 0.6 + Math.random() * 1.8,
      }));

    let particles = makeParticles(window.innerWidth < 768 ? 48 : 120);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = makeParticles(width < 768 ? 48 : 120);
    };

    const theme = () => {
      const dark = document.documentElement.classList.contains("dark");
      return dark
        ? { dot: "168, 140, 255", line: "90, 220, 230", glow: 0.9 }
        : { dot: "110, 80, 230", line: "20, 160, 170", glow: 0.55 };
    };

    const project = (p: Particle, camX: number, camY: number) => {
      const z = p.z * 1.15 + 0.18;
      const f = 0.62 / z;
      return {
        x: width * 0.5 + (p.x - 0.5 - camX * 0.22) * width * f,
        y: height * 0.5 + (p.y - 0.5 - camY * 0.18) * height * f,
        r: p.size * f * 3.4,
        a: Math.max(0, 1 - p.z) * 0.85,
      };
    };

    const tick = () => {
      if (!running) return;
      const colors = theme();
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const projected = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z -= 0.00135;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        if (p.z < 0) {
          p.z = 1;
          p.x = Math.random();
          p.y = Math.random();
        }
        return project(p, pointer.x, pointer.y);
      });

      const linkDist = width < 768 ? 86 : 118;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.22 * Math.min(a.a, b.a);
            ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const point of projected) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${colors.dot}, ${point.a * colors.glow})`;
        ctx.shadowColor = `rgba(${colors.dot}, 0.8)`;
        ctx.shadowBlur = 12;
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      pointer.tx = event.clientX / width - 0.5;
      pointer.ty = event.clientY / height - 0.5;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced]);

  if (reduced) return null;

  return <canvas ref={canvasRef} className="particle-field" aria-hidden />;
};

export default ParticleField;
