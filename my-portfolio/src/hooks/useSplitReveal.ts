import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useSplitReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let split: SplitText | null = null;
    let tween: gsap.core.Tween | null = null;

    const frame = requestAnimationFrame(() => {
      split = SplitText.create(el, {
        type: "words, chars",
        wordsClass: "split-word",
        charsClass: "split-char",
      });

      tween = gsap.fromTo(
        split.chars,
        { opacity: 0, y: 36, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.014,
          delay: 0.15,
        },
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      tween?.kill();
      split?.revert();
    };
  }, []);

  return ref;
}
