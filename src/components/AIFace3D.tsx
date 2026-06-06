import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/*
 * Interactive 3D "AI face" hero visual.
 * A wireframe face sits at the center; glowing connector lines draw outward to
 * floating nodes that type in the name, skills, and details. The whole scene
 * tilts in 3D following the mouse (parallax), and falls back to a gentle resting
 * state on touch / reduced-motion.
 *
 * Coordinate space for the SVG + node anchors is a 400x400 grid (see viewBox).
 */

type Node = {
  id: string;
  label: string;
  sub?: string;
  x: number; // node point (label anchor) in 400-space
  y: number;
  sx: number; // line start, on/near the face
  sy: number;
  align: "left" | "right" | "center";
  depth: number; // translateZ in px
  delay: number; // seconds before the line draws
};

const NODES: Node[] = [
  {
    id: "name",
    label: "Andrew Attieh",
    sub: "Software Engineer",
    x: 200,
    y: 26,
    sx: 200,
    sy: 132,
    align: "center",
    depth: 90,
    delay: 0.2,
  },
  {
    id: "react",
    label: "React Native",
    x: 60,
    y: 100,
    sx: 150,
    sy: 158,
    align: "right",
    depth: 70,
    delay: 0.9,
  },
  {
    id: "net",
    label: "C# · .NET",
    x: 340,
    y: 100,
    sx: 250,
    sy: 158,
    align: "left",
    depth: 70,
    delay: 1.2,
  },
  {
    id: "ai",
    label: "AI & RAG Systems",
    x: 50,
    y: 202,
    sx: 146,
    sy: 200,
    align: "right",
    depth: 80,
    delay: 1.5,
  },
  {
    id: "db",
    label: "SQL · PostgreSQL",
    x: 350,
    y: 202,
    sx: 254,
    sy: 200,
    align: "left",
    depth: 80,
    delay: 1.8,
  },
  {
    id: "tools",
    label: "Docker · Git",
    x: 60,
    y: 300,
    sx: 150,
    sy: 244,
    align: "right",
    depth: 65,
    delay: 2.1,
  },
  {
    id: "loc",
    label: "Beirut, Lebanon",
    x: 340,
    y: 300,
    sx: 250,
    sy: 244,
    align: "left",
    depth: 65,
    delay: 2.4,
  },
];

const pct = (v: number) => `${(v / 400) * 100}%`;

export function AIFace3D() {
  // Normalized cursor position (-0.5 .. 0.5), smoothed into a 3D tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 140, damping: 18, mass: 0.4 };
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), spring);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), spring);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
      style={{ perspective: "1100px" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label="Andrew Attieh — Software Engineer. Skills: React Native, C#, .NET, AI & RAG systems, SQL, PostgreSQL, Docker, Git. Based in Beirut, Lebanon."
      role="img"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-6 rounded-full bg-accent/10 blur-[80px]" />

      {/* Tilting scene */}
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Connector lines (SVG, 400x400 space) */}
        <svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          style={{ transform: "translateZ(20px)" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {NODES.map((n) => (
            <g key={n.id} filter="url(#lineGlow)">
              <motion.line
                x1={n.sx}
                y1={n.sy}
                x2={n.x}
                y2={n.y}
                stroke="#22d3ee"
                strokeWidth={1.3}
                strokeOpacity={0.7}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: n.delay, duration: 0.6, ease: "easeOut" }}
              />
              {/* node endpoint dot */}
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={3}
                fill="#22d3ee"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: n.delay + 0.5, duration: 0.3 }}
              />
              {/* start dot on the face */}
              <motion.circle
                cx={n.sx}
                cy={n.sy}
                r={2}
                fill="#22d3ee"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
                transition={{ delay: n.delay, duration: 0.3 }}
              />
            </g>
          ))}
        </svg>

        {/* Center face — clean wireframe, no frame */}
        <div
          className="absolute left-1/2 top-1/2 w-[58%]"
          style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
        >
          <div className="relative aspect-square">
            {/* Soft glow so the face reads sharply on the dark background */}
            <div className="pointer-events-none absolute inset-6 rounded-full bg-accent/15 blur-3xl" />
            {/* Black background drops out via screen blend, leaving only the mesh */}
            <img
              src="/mypic.png"
              alt=""
              className="relative h-full w-full object-contain mix-blend-screen drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            />
          </div>
        </div>

        {/* Floating labels at line endpoints */}
        {NODES.map((n) => (
          <Label key={n.id} node={n} />
        ))}
      </motion.div>
    </div>
  );
}

function Label({ node }: { node: Node }) {
  const translate =
    node.align === "right"
      ? "translate(calc(-100% - 10px), -50%)"
      : node.align === "left"
      ? "translate(10px, -50%)"
      : "translate(-50%, -115%)";

  const textAlign =
    node.align === "right"
      ? "text-right"
      : node.align === "left"
      ? "text-left"
      : "text-center";

  // Start typing just after the line finishes drawing.
  const startDelay = (node.delay + 0.45) * 1000;

  return (
    <div
      className={`absolute whitespace-nowrap ${textAlign}`}
      style={{
        left: pct(node.x),
        top: pct(node.y),
        transform: `${translate} translateZ(${node.depth}px)`,
      }}
    >
      <div
        className={
          node.id === "name"
            ? "text-base font-extrabold tracking-tight text-foreground sm:text-lg"
            : "rounded-lg border border-border bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-lg backdrop-blur sm:text-xs"
        }
      >
        <TypeIn text={node.label} startDelay={startDelay} />
        {node.sub && (
          <span className="mt-0.5 block font-mono text-[10px] font-medium uppercase tracking-widest text-accent">
            <TypeIn text={node.sub} startDelay={startDelay + node.label.length * 45} />
          </span>
        )}
      </div>
    </div>
  );
}

/** Types out `text` character-by-character after `startDelay` ms. */
function TypeIn({
  text,
  startDelay = 0,
  speed = 45,
}: {
  text: string;
  startDelay?: number;
  speed?: number;
}) {
  const [shown, setShown] = useState("");
  const tick = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setShown("");
    let i = 0;
    const start = setTimeout(function step() {
      i += 1;
      setShown(text.slice(0, i));
      if (i < text.length) tick.current = setTimeout(step, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (tick.current) clearTimeout(tick.current);
    };
  }, [text, startDelay, speed]);

  return (
    <span>
      {shown}
      {shown.length < text.length && (
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[1px] animate-blink bg-accent align-middle" />
      )}
    </span>
  );
}
