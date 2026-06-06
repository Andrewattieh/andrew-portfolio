import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/*
 * Sections are imported eagerly: without framer-motion they're tiny, so loading
 * them up front renders the whole page immediately (no blank scroll pop-in).
 * The only heavy dependency, framer-motion, now lives solely in the desktop
 * face (AIFace3D), which is still lazy-loaded — so phones never download it.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
