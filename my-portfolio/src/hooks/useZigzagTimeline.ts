import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useZigzagTimeline<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fill = el.querySelector<HTMLElement>(".zigzag-line-fill");
    const rows = el.querySelectorAll<HTMLElement>(".zigzag-row");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (fill) fill.style.transform = "scaleY(1)";
      return;
    }

    const ctx = gsap.context(() => {
      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      }
      if (rows.length) {
        gsap.from(rows, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
