import { Suspense, lazy } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

/*
 * Only the navbar + hero are in the initial bundle. Everything below the fold
 * is code-split and streamed in, keeping first paint light. Each lazy section
 * reserves vertical space via a min-height fallback to avoid layout shift.
 */
const Services = lazy(() =>
  import("@/components/Services").then((m) => ({ default: m.Services }))
);
const Experience = lazy(() =>
  import("@/components/Experience").then((m) => ({ default: m.Experience }))
);
const Skills = lazy(() =>
  import("@/components/Skills").then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import("@/components/Projects").then((m) => ({ default: m.Projects }))
);
const Education = lazy(() =>
  import("@/components/Education").then((m) => ({ default: m.Education }))
);
const Contact = lazy(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);

const SectionFallback = () => <div className="min-h-[60vh]" aria-hidden="true" />;

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
