import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Pill } from "@/components/ui/pill";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <div className="container-page">
        <SectionHeading
          eyebrow="My Toolkit"
          title="Technical Skills"
          intro="The languages, frameworks, and platforms I use to ship reliable products."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 60}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
