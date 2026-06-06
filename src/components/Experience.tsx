import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/Section";
import { Pill } from "@/components/ui/pill";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Experience"
          intro="A track record across enterprise software, AI infrastructure, and financial systems."
        />

        <div className="mt-12 space-y-0">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="relative grid gap-2 border-l border-border pb-10 pl-8 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-8"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="text-sm text-muted">
                  {item.company} · {item.location}
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
