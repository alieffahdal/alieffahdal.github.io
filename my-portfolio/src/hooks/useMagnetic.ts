import { useEffect, useRef } from "react";

/**
 * Magnetic button effect: the element nudges toward the cursor while the
 * pointer is within `radius` px, and eases back to rest on mouse leave.
 * Disabled for touch pointers and prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    function handleMove(e: MouseEvent) {
      const r = el!.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      el!.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    }
    function handleLeave() {
      el!.style.transform = "";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
