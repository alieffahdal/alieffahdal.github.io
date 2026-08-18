import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

export interface Bilingual {
  id: string;
  en: string;
}

export function t(field: Bilingual, lang: Lang): string {
  return field[lang];
}

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getStoredLang(): Lang {
  const stored = window.localStorage.getItem("site-lang");
  return stored === "en" ? "en" : "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getStoredLang);

  useEffect(() => {
    window.localStorage.setItem("site-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "id" ? "en" : "id"));

  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
