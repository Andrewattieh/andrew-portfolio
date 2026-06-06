import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/portfolio";

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Services() {
  return (
    <Section id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I Build"
          title="Services"
          intro="Available for freelance projects. Here's how I can help."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors group-hover:border-accent/50">
                <service.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button size="lg" onClick={() => scrollToId("contact")}>
            Start a Project
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </Section>
  );
}
