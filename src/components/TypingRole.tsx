import { useEffect, useState } from "react";

/** Typewriter that cycles through a list of roles. */
export function TypingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? 45 : 90;
    if (done && !deleting) delay = 1600; // pause when fully typed
    if (empty && deleting) delay = 300; // pause before next word

    const timeout = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="text-accent">
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent animate-blink"
        aria-hidden="true"
      />
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
