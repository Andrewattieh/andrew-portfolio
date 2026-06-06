import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  FileText,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, social } from "@/data/portfolio";

/*
 * The form forwards the message via the visitor's choice of channel — WhatsApp
 * or email — with zero backend config. To collect/store submissions instead,
 * POST to a Formspree endpoint (https://formspree.io/f/XXXX) or a Supabase table.
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Built once from the form fields, reused by both channels.
  const composedText = () =>
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

  const sendWhatsApp = () => {
    // wa.me needs a plain international number with no "+" or spaces.
    const number = profile.phoneHref.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(composedText());
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(composedText());
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  // Pressing Enter / submitting the form defaults to email.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <Section id="contact" className="bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          intro="Available for freelance projects and full-time opportunities. Tell me what you're building."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                size="lg"
                onClick={sendWhatsApp}
                className="w-full sm:w-auto"
              >
                Send via WhatsApp
                <MessageCircle size={17} />
              </Button>
              <Button
                type="submit"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Send via Email
                <Send size={17} />
              </Button>
            </div>
          </form>

          {/* Direct details + socials */}
          <div className="space-y-8">
            <div className="space-y-4">
              <ContactRow
                icon={<Mail size={18} />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone size={18} />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phoneHref}`}
              />
              <ContactRow
                icon={<MapPin size={18} />}
                label="Location"
                value={profile.location}
              />
            </div>

            <div className="border-t border-border pt-6">
              <p className="mb-4 text-sm font-medium text-foreground">
                Find me online
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <SocialBtn href={social.linkedin} label="LinkedIn">
                  <Linkedin size={20} />
                </SocialBtn>
                {/* PLACEHOLDER: real GitHub URL */}
                <SocialBtn href={social.github} label="GitHub">
                  <Github size={20} />
                </SocialBtn>
                <SocialBtn href={social.email} label="Email">
                  <Mail size={20} />
                </SocialBtn>
                <a
                  href={social.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-surface text-accent">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialBtn({
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
