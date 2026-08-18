import type { Bilingual } from "./LanguageContext";

export const ui = {
  nav: {
    about: { id: "Tentang", en: "About" },
    riset: { id: "Riset", en: "Research" },
    publikasi: { id: "Publikasi", en: "Publications" },
    pengalaman: { id: "Pengalaman", en: "Experience" },
    proyek: { id: "Proyek", en: "Projects" },
    pendidikan: { id: "Pendidikan", en: "Education" },
    kontak: { id: "Kontak", en: "Contact" },
    openMenuAria: { id: "Buka menu navigasi", en: "Open navigation menu" },
  },
  theme: {
    enableLight: { id: "Aktifkan mode terang", en: "Enable light mode" },
    enableDark: { id: "Aktifkan mode gelap", en: "Enable dark mode" },
  },
  lang: {
    switchToEn: { id: "Ganti ke Bahasa Inggris", en: "Switch to Indonesian" },
  },
  hero: {
    viewExperience: { id: "Lihat pengalaman", en: "View experience" },
    scholar: { id: "Google Scholar", en: "Google Scholar" },
    contact: { id: "Kontak", en: "Contact" },
    scroll: { id: "scroll", en: "scroll" },
  },
  about: {
    heading: { id: "Tentang Saya", en: "About Me" },
    eyebrow: { id: "01 — profil", en: "01 — profile" },
  },
  research: {
    heading: { id: "Riset & Bidang Keahlian", en: "Research & Expertise" },
    eyebrow: { id: "02 — keahlian", en: "02 — expertise" },
  },
  publications: {
    heading: { id: "Publikasi", en: "Publications" },
    eyebrow: { id: "03 — jurnal & pengabdian", en: "03 — journals & community service" },
    articles: { id: "Artikel (Scholar)", en: "Articles (Scholar)" },
    hIndex: { id: "H-index", en: "H-index" },
    i10Index: { id: "i10-index", en: "i10-index" },
    sintaScore: { id: "Skor SINTA", en: "SINTA Score" },
    filterTypeAria: { id: "Filter tipe publikasi", en: "Filter publication type" },
    filterYearAria: { id: "Filter tahun publikasi", en: "Filter publication year" },
    all: { id: "Semua", en: "All" },
    allYears: { id: "Semua tahun", en: "All years" },
    typePenelitian: { id: "Penelitian", en: "Research" },
    typePengabdian: { id: "Pengabdian", en: "Community Service" },
    citations: { id: "sitasi", en: "citations" },
    empty: { id: "Tidak ada publikasi yang cocok dengan filter ini.", en: "No publications match this filter." },
  },
  teaching: {
    heading: { id: "Pengalaman Mengajar", en: "Teaching Experience" },
    eyebrow: { id: "04 — mata kuliah", en: "04 — courses taught" },
  },
  experience: {
    heading: { id: "Pengalaman Profesional", en: "Professional Experience" },
    eyebrow: { id: "05 — akademik, pemerintahan & industri", en: "05 — academia, government & industry" },
  },
  projects: {
    heading: { id: "Proyek & inisiatif", en: "Projects & Initiatives" },
    eyebrow: { id: "06 — berjalan & selesai", en: "06 — ongoing & completed" },
    statusOngoing: { id: "Sedang berjalan", en: "Ongoing" },
    statusDone: { id: "Selesai", en: "Completed" },
  },
  education: {
    heading: { id: "Pendidikan", en: "Education" },
    eyebrow: { id: "07 — riwayat akademik", en: "07 — academic history" },
  },
  certifications: {
    heading: { id: "Sertifikasi", en: "Certifications" },
    eyebrow: { id: "08 — profesional", en: "08 — professional" },
  },
  contact: {
    eyebrow: { id: "Kontak", en: "Contact" },
    heading: {
      id: "Terbuka untuk kolaborasi riset, konsultasi SPBE, dan bimbingan mahasiswa.",
      en: "Open to research collaboration, e-government consulting, and student mentoring.",
    },
  },
  notFound: {
    codeDesc: { id: "Halaman Tidak Ditemukan", en: "Page Not Found" },
    title: { id: "Ups! Halaman tidak ditemukan", en: "Oops! Page not found" },
    description: {
      id: "Halaman yang Anda cari sepertinya tersesat. Mungkin sudah dipindahkan, diganti nama, atau memang tidak pernah ada.",
      en: "The page you're looking for seems to have wandered off. It might have been moved, renamed, or never existed in the first place.",
    },
    backHome: { id: "Kembali ke Beranda", en: "Back to Home" },
    goBack: { id: "Kembali", en: "Go Back" },
    orNavigate: { id: "Atau navigasi ke:", en: "Or navigate to:" },
    linkHome: { id: "Beranda", en: "Home" },
    linkAbout: { id: "Tentang", en: "About" },
    linkProjects: { id: "Proyek", en: "Projects" },
    linkPublications: { id: "Publikasi", en: "Publications" },
    linkContact: { id: "Kontak", en: "Contact" },
  },
} satisfies Record<string, Record<string, Bilingual>>;
