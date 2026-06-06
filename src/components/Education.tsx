import { motion } from "framer-motion";
import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { education, languages } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education">
      <div className="container-page">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          intro="Academic foundation and the languages I work in."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Education timeline */}
          <div className="space-y-0">
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

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-foreground">
              <LanguagesIcon size={18} className="text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Languages
              </h3>
            </div>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
