import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { FaceMobile } from "./FaceMobile";

/*
 * Chooses the right hero visual per device:
 * - Phones (<768px): the lightweight FaceMobile (face + skill pills, no
 *   animation library) — keeps first paint fast since framer-motion never loads.
 * - Desktop: the full interactive AIFace3D, code-split via React.lazy and
 *   mounted once it scrolls near the viewport, with a same-size placeholder.
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

const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MOBILE_QUERY).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

export function FaceVisual() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isMobile) return; // mobile renders the light version eagerly
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
  }, [isMobile]);

  if (isMobile) return <FaceMobile />;

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
