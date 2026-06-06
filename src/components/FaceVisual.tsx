import { Suspense, lazy, useEffect, useRef, useState } from "react";

/*
 * Defers the heavy interactive face scene out of the initial bundle.
 * - React.lazy code-splits AIFace3D into its own chunk (kept off first paint).
 * - It only mounts once the container scrolls near the viewport.
 * - A lightweight, same-size placeholder holds the space (no layout shift).
 */

const AIFace3D = lazy(() =>
  import("./AIFace3D").then((m) => ({ default: m.AIFace3D }))
);

function FacePlaceholder() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute inset-6 rounded-full bg-accent/10 blur-[80px]" />
      <div className="h-40 w-40 animate-pulse rounded-full border border-accent/20 bg-accent/5" />
    </div>
  );
}

export function FaceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show ? (
        <Suspense fallback={<FacePlaceholder />}>
          <AIFace3D />
        </Suspense>
      ) : (
        <FacePlaceholder />
      )}
    </div>
  );
}
