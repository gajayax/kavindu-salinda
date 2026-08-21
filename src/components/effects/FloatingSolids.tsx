const Cube = ({ className = "" }: { className?: string }) => (
  <div className={`solid-cube ${className}`}>
    <span className="face front" />
    <span className="face back" />
    <span className="face left" />
    <span className="face right" />
    <span className="face top" />
    <span className="face bottom" />
  </div>
);

const FloatingSolids = () => (
  <div className="floating-solids" aria-hidden>
    <div className="solid-slot slot-a">
      <Cube />
    </div>
    <div className="solid-slot slot-b">
      <div className="solid-ring" />
    </div>
    <div className="solid-slot slot-c">
      <div className="solid-diamond" />
    </div>
    <div className="solid-slot slot-d">
      <Cube className="cube-sm" />
    </div>
    <div className="solid-slot slot-e">
      <div className="solid-ring ring-sm" />
    </div>
    <div className="solid-slot slot-f">
      <div className="solid-pyramid" />
    </div>
  </div>
);

export default FloatingSolids;
