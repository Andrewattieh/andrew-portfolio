import { Github, Linkedin, Mail } from "lucide-react";
import { profile, social } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-page flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-md">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-tight text-foreground"
          >
            {profile.shortName}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {profile.shortBio}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterIcon href={social.linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </FooterIcon>
          {/* PLACEHOLDER: real GitHub URL */}
          <FooterIcon href={social.github} label="GitHub">
            <Github size={18} />
          </FooterIcon>
          <FooterIcon href={social.email} label="Email">
            <Mail size={18} />
          </FooterIcon>
        </div>
      </div>

      <div className="container-page mt-8 border-t border-border pt-6">
        <p className="text-center text-xs text-muted">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterIcon({
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
