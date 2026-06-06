import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education">
      <div className="container-page">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          intro="The academic foundation behind my work."
        />

        <div className="mt-12 max-w-2xl space-y-0">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="relative border-l border-border pb-8 pl-8 last:pb-0"
            >
              <span className="absolute -left-[14px] top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-accent">
                <GraduationCap size={15} />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {item.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="text-sm text-muted">{item.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
