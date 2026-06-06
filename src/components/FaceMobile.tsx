import { Pill } from "@/components/ui/pill";

/*
 * Lightweight mobile version of the hero visual: the wireframe face plus the
 * skills as pills (no connector lines, no animation library). This keeps phones
 * fast — framer-motion is never loaded for the hero on small screens.
 */

const faceSkills = [
  "React Native",
  "C# · .NET",
  "AI & RAG Systems",
  "SQL · PostgreSQL",
  "Docker · Git",
];

const faceMask =
  "radial-gradient(ellipse 72% 82% at 50% 46%, #000 58%, transparent 92%)";

export function FaceMobile() {
  return (
    <div className="mx-auto w-full max-w-sm">
      {/* Face */}
      <div className="relative mx-auto aspect-square w-[66%]">
        <div className="pointer-events-none absolute inset-4 rounded-full bg-accent/15 blur-3xl" />
        <img
          src="/mypic.webp"
          alt="Wireframe portrait of Andrew Attieh"
          width={480}
          height={600}
          fetchPriority="high"
          decoding="async"
          className="relative h-full w-full object-contain mix-blend-screen drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]"
          style={{ maskImage: faceMask, WebkitMaskImage: faceMask }}
        />
      </div>

      {/* Skills as pills (replaces the desktop connector lines) */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {faceSkills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </div>
  );
}
