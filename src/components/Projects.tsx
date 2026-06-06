import { motion } from "framer-motion";
import { Check, ExternalLink, Github } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Pill } from "@/components/ui/pill";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" className="bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          intro="A few things I've designed, built, and shipped."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              {/* Cover image — PLACEHOLDER art in public/projects/ */}
              <div className="aspect-video overflow-hidden border-b border-border bg-surface">
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <span className="mt-1 whitespace-nowrap rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {project.subtitle}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-muted"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 flex-shrink-0 text-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="mt-5 flex gap-4 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
