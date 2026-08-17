import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse) return;

    document.body.classList.add("has-custom-cursor");

    if (!dotRef.current || !ringRef.current) return;
    const dot: HTMLDivElement = dotRef.current;
    const ring: HTMLDivElement = ringRef.current;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;

    function handleMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .scatter-chip, .cert-badge")) {
        ring.classList.add("hovering");
      }
    }
    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .scatter-chip, .cert-badge")) {
        ring.classList.remove("hovering");
      }
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    let raf = 0;
    function tick() {
      const ease = reduced ? 1 : 0.16;
      ringX += (targetX - ringX) * ease;
      ringY += (targetY - ringY) * ease;
      if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
