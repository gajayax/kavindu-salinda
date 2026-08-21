import { useScrollY } from "@/hooks/use-scroll-y";

const ScrollProgress = () => {
  const y = useScrollY();
  const height =
    typeof document === "undefined"
      ? 1
      : Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, y / height);

  return (
    <div className="scroll-progress" aria-hidden>
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
};

export default ScrollProgress;
