import { useEffect, useState } from "react";

/**
 * Resolves the theme that is actually being rendered right now: an explicit
 * data-theme override on <html> wins, otherwise it follows the OS
 * prefers-color-scheme (mirrors the cascade in index.css). Updates live if
 * either the override or the system preference changes.
 */
export function useEffectiveTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    function resolve() {
      const explicit = document.documentElement.getAttribute("data-theme");
      if (explicit === "light" || explicit === "dark") return explicit;
      return mq.matches ? "dark" : "light";
    }

    setTheme(resolve());

    const onMqChange = () => setTheme(resolve());
    mq.addEventListener("change", onMqChange);

    const observer = new MutationObserver(() => setTheme(resolve()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      mq.removeEventListener("change", onMqChange);
      observer.disconnect();
    };
  }, []);

  return theme;
}
