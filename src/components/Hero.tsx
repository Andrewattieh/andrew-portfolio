import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingRole } from "@/components/TypingRole";
import { FaceVisual } from "@/components/FaceVisual";
import { profile, social } from "@/data/portfolio";

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28"
    >
      {/* Ambient glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-page grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-x-20">
        <div className="animate-fade-up">
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-accent">
            Hello, I'm
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold sm:text-2xl">
            <TypingRole roles={profile.roles} />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={() => scrollToId("contact")}>
              Work With Me
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToId("projects")}
            >
              View My Work
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <IconLink href={social.linkedin} label="LinkedIn">
                <Linkedin size={20} />
              </IconLink>
              <IconLink href={social.email} label="Email">
                <Mail size={20} />
              </IconLink>
              {/* PLACEHOLDER: add real GitHub URL in data/portfolio.ts */}
              <IconLink href={social.github} label="GitHub">
                <Github size={20} />
              </IconLink>
            </div>

            <a
              href={social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Interactive 3D AI-face scene (lazy-loaded, mounts on scroll-in) */}
        <div className="order-last w-full animate-fade-up [animation-delay:150ms] lg:pl-6 xl:pl-10">
          <FaceVisual />
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
