export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  current: boolean;
}

export interface ExperienceGroup {
  label: string;
  items: ExperienceItem[];
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  citations: number;
  type: "Penelitian" | "Pengabdian";
}

export interface Certification {
  name: string;
  year: number;
}

export interface ProjectItem {
  title: string;
  description: string;
  period: string;
  partner: string;
  status: "Sedang berjalan" | "Selesai";
}

export const profile = {
  name: "Ir. Muhammad Alief Fahdal Imran Oemar",
  credentials: "S.T., M.Sc.",
  role: "Dosen Teknik Informatika",
  affiliation: "Fakultas Teknik, Universitas Hasanuddin",
  currentHighlight: "Kandidat PhD, Hiroshima University (2026–sekarang)",
  email: "alieffahdal@unhas.ac.id",
  bio: "IT developer dan dosen di Universitas Hasanuddin, dengan fokus pemrograman Java dan JavaScript untuk sistem backend dan solusi web. Aktif di Distributed Intelligence Research Group (DINT), membawa riset dari topik software engineering hingga penerapan teknologi informasi untuk UMKM, pendidikan, dan pemerintahan — sambil kini menempuh studi doktoral di Hiroshima University.",
  monogram: "MO",
};

export const stats = [
  { value: 36, suffix: "", label: "Publikasi terindeks" },
  { value: 7, suffix: "", label: "H-index (Scholar)" },
  { value: 10, suffix: "+", label: "Tahun pengalaman IT" },
  { value: 6, suffix: "", label: "Sertifikasi profesional" },
];

export const researchFocus = [
  "Software Engineering",
  "Web Engineering",
  "Machine Learning",
  "Data Science",
  "Sistem Informasi",
  "Transformasi Digital (SPBE)",
];

export const education: EducationItem[] = [
  {
    degree: "S1",
    field: "Teknik Informatika",
    institution: "Universitas Hasanuddin",
    location: "Makassar, Indonesia",
    period: "2012–2018",
  },
  {
    degree: "S2",
    field: "Software Engineering (M.Sc.)",
    institution: "Asia Pacific University",
    location: "Malaysia",
    period: "2019–2020",
  },
  {
    degree: "S3",
    field: "Informatics and Data Science / Software Engineering",
    institution: "Hiroshima University",
    location: "Jepang",
    period: "2026–sekarang",
  },
];

export const experience: ExperienceGroup[] = [
  {
    label: "Akademik & Kepemimpinan Kampus",
    items: [
      { role: "Assistant Professor of Informatics Engineering", org: "Fakultas Teknik, Universitas Hasanuddin", period: "Mei 2020 – sekarang", current: true },
      { role: "Secretary of Student Affairs, Department of Informatics", org: "Fakultas Teknik, Universitas Hasanuddin", period: "Nov 2022 – sekarang", current: true },
      { role: "Ketua Tim Kelompok Kerja (POKJA) Satu Data UNHAS", org: "Universitas Hasanuddin", period: "Jul 2025 – sekarang", current: true },
      { role: "Tim Kelompok Kerja (POKJA) Tracer Study", org: "Universitas Hasanuddin", period: "Agu 2021 – Jun 2022", current: false },
      { role: "Information Technology Programmer", org: "Faculty of Economics and Business, Universitas Hasanuddin", period: "Apr 2020 – Des 2021", current: false },
      { role: "Consulting Specialist", org: "Puslantek-CoT Unhas", period: "Mei 2020 – Mei 2023", current: false },
    ],
  },
  {
    label: "Pemerintahan & Konsultasi SPBE",
    items: [
      { role: "Assessor SPBE (Sistem Pemerintahan Berbasis Elektronik)", org: "Kementerian PANRB", period: "Agu 2025 – sekarang", current: true },
      { role: "Software Engineering Consultant SPBE", org: "Diskominfo Kota Makassar", period: "Jan 2023 – Des 2023", current: false },
    ],
  },
  {
    label: "Instruktur & Training",
    items: [
      { role: "Instructor, Fresh Graduate Academic", org: "Kementerian Komunikasi dan Informatika RI", period: "Sep 2020 – Mei 2024", current: false },
      { role: "Cisco Instructor", org: "Cisco Networking Academy", period: "Sep 2020 – sekarang", current: true },
      { role: "Microsoft Certified Trainer", org: "Microsoft Azure Community", period: "Mei 2022 – Mei 2024", current: false },
    ],
  },
  {
    label: "Industri (Awal Karier)",
    items: [
      { role: "Web Programmer", org: "Digital Wireless Telecom Inc", period: "Feb 2016 – Mei 2016", current: false },
      { role: "Web Programmer", org: "caripondokan.com", period: "Jan 2017 – Nov 2018", current: false },
      { role: "Web Programmer", org: "Upana Studio", period: "Jan 2017 – Des 2018", current: false },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Satu Data UNHAS",
    description: "Memimpin kelompok kerja tata kelola data terintegrasi di lingkup Universitas Hasanuddin.",
    period: "2025–sekarang",
    partner: "Universitas Hasanuddin",
    status: "Sedang berjalan",
  },
  {
    title: "Asesmen SPBE Nasional",
    description: "Menjadi assessor Sistem Pemerintahan Berbasis Elektronik untuk instansi pemerintah.",
    period: "2025–sekarang",
    partner: "Kementerian PANRB",
    status: "Sedang berjalan",
  },
  {
    title: "Prediksi Gempa dengan Deep Learning",
    description: "Riset penerapan K-means clustering dan LSTM untuk meningkatkan prediksi gempa bumi.",
    period: "2025",
    partner: "Journal of Information and Communication Technology",
    status: "Selesai",
  },
  {
    title: "Konsultasi SPBE Kota Makassar",
    description: "Konsultan software engineering untuk penguatan sistem pemerintahan berbasis elektronik.",
    period: "2023",
    partner: "Diskominfo Kota Makassar",
    status: "Selesai",
  },
  {
    title: "Digitalisasi UMKM Sulawesi",
    description: "Pemberdayaan pelaku UMKM Sulawesi dalam implementasi digitalisasi usaha.",
    period: "2022–2023",
    partner: "Pengabdian Masyarakat",
    status: "Selesai",
  },
  {
    title: "Pembelajaran Berbasis Metaverse",
    description: "Strategi pembelajaran menggunakan metaverse untuk guru Madrasah Aliyah.",
    period: "2022",
    partner: "Jurnal Tepat",
    status: "Selesai",
  },
];

export const publications: Publication[] = [
  {
    title: "Deep learning approach in seismology: Enhancing earthquake forecasting using K-means clustering and LSTM networks",
    venue: "Journal of Information and Communication Technology",
    year: 2025,
    citations: 2,
    type: "Penelitian",
  },
  {
    title: "The effect of political will, information technology, and the quality of financial reporting information on fraud prevention",
    venue: "Public and Municipal Finance",
    year: 2025,
    citations: 2,
    type: "Penelitian",
  },
  {
    title: "The role of technology and accounting information systems in improving the operational activities of MSMEs",
    venue: "International Journal of Humanities Education and Social Sciences",
    year: 2023,
    citations: 18,
    type: "Penelitian",
  },
  {
    title: "Digitalisasi UMKM Dalam Rangka Membangun Ekosistem Digital",
    venue: "Panrita Abdi",
    year: 2023,
    citations: 11,
    type: "Pengabdian",
  },
  {
    title: "Pemberdayaan masyarakat UMKM Sulawesi dalam implementasi digitalisasi UMKM",
    venue: "Yumary: Jurnal Pengabdian kepada Masyarakat",
    year: 2022,
    citations: 46,
    type: "Pengabdian",
  },
  {
    title: "Strategi Pembelajaran Menggunakan Metaverse Bagi Guru Di Madrasah Aliyah Al Hidayah",
    venue: "Jurnal Tepat",
    year: 2022,
    citations: 29,
    type: "Penelitian",
  },
];

export const publicationMetrics = {
  hIndex: 7,
  i10Index: 6,
  totalArticles: 36,
  sintaScore: 542,
};

export const certifications: Certification[] = [
  { name: "Oracle Certified Java Programmer", year: 2024 },
  { name: "Red Hat Certified System Administrator (RHCSA)", year: 2023 },
  { name: "Processes and Management of Business Incubation", year: 2023 },
  { name: "AWS Academy Cloud Foundations", year: 2022 },
  { name: "Microsoft Azure Data & AI Fundamentals", year: 2022 },
  { name: "CCNA Service Provider Operations", year: 2020 },
];

export const contactLinks = [
  { label: "Email", href: "mailto:alieffahdal@unhas.ac.id", chip: "#F2B441" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=-XzpS1MAAAAJ&hl=en", chip: "#4285F4" },
  { label: "SINTA", href: "https://sinta.kemdiktisaintek.go.id/authors/profile/6791876", chip: "#E4572E" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-1381-4009", chip: "#A6CE39" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Muhammad-Alief-Imran-Oemar", chip: "#00CCBB" },
  { label: "LinkedIn", href: "https://id.linkedin.com/in/alieffahdal", chip: "#0A66C2" },
  { label: "Instagram", href: "https://www.instagram.com/alieffahdal/", chip: "#E1306C" },
];
