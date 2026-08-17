import logoUnhas from "../assets/logos/unhas.png";
import logoApu from "../assets/logos/apu.png";
import logoHiroshima from "../assets/logos/hiroshima-university.png";
import logoPuslantek from "../assets/logos/Puslantek-CoT.png";
import logoPanrb from "../assets/logos/panrb.png";
import logoDiskominfoMakassar from "../assets/logos/diskominfo-makassar.png";
import logoKemenkominfo from "../assets/logos/kemenkominfo.png";
import logoCiscoAcademy from "../assets/logos/cisco-networking-academy.png";
import logoAzure from "../assets/logos/Azure.png";
import logoCaripondokan from "../assets/logos/caripondokan.png";
import logoUpanaStudio from "../assets/logos/upana-studio.png";
import logoOracle from "../assets/logos/Oracle.jpeg";
import logoAws from "../assets/logos/AWS.png";
import logoPum from "../assets/logos/PUM.png";

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  logo?: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  current: boolean;
  logo?: string;
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
  level?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  logo?: string;
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
  bio: "IT developer dan dosen di Universitas Hasanuddin, dengan fokus pemrograman Java dan JavaScript untuk sistem backend dan solusi web. Aktif di Distributed Intelligence Research Group (DINT), membawa riset dari topik software engineering hingga penerapan teknologi informasi untuk UMKM, pendidikan, dan pemerintahan.",
  bioDetailed:
    "IT developer dan dosen di Departemen Teknik Informatika, Fakultas Teknik, Universitas Hasanuddin sejak 2020, dengan spesialisasi pemrograman Java dan JavaScript untuk sistem backend dan solusi web. Aktif sebagai anggota Distributed Intelligence Research Group (DINT), kelompok riset interdisipliner yang menggarap sistem terdistribusi, machine learning, dan analitik data.\n\nRiset yang dijalankan mencakup penerapan deep learning untuk prediksi gempa bumi, digitalisasi UMKM di Sulawesi, sistem informasi akuntansi untuk pelaku usaha kecil, hingga pemanfaatan metaverse dalam pendidikan — tercatat dalam 36 publikasi terindeks dengan h-index 7 di Google Scholar.\n\nDi luar kampus, aktif menjembatani teknologi dengan tata kelola pemerintahan sebagai Assessor SPBE di Kementerian PANRB, konsultan SPBE untuk Diskominfo Kota Makassar, dan Ketua Kelompok Kerja Satu Data UNHAS. Juga berperan sebagai instruktur bersertifikat — Cisco Instructor, Microsoft Certified Trainer, serta pengajar program Fresh Graduate Academic Kementerian Komunikasi dan Informatika RI.",
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
    logo: logoUnhas,
  },
  {
    degree: "S2",
    field: "Software Engineering (M.Sc.)",
    institution: "Asia Pacific University",
    location: "Malaysia",
    period: "2019–2020",
    logo: logoApu,
  },
  {
    degree: "S3",
    field: "Informatics and Data Science / Software Engineering",
    institution: "Hiroshima University",
    location: "Jepang",
    period: "2026–sekarang",
    logo: logoHiroshima,
  },
];

export const experience: ExperienceGroup[] = [
  {
    label: "Akademik & Kepemimpinan Kampus",
    items: [
      {
        role: "Assistant Professor of Informatics Engineering",
        org: "Fakultas Teknik, Universitas Hasanuddin",
        period: "Mei 2020 – sekarang",
        current: true,
        logo: logoUnhas,
      },
      {
        role: "Secretary of Student Affairs, Department of Informatics",
        org: "Fakultas Teknik, Universitas Hasanuddin",
        period: "Nov 2022 – sekarang",
        current: true,
        logo: logoUnhas,
      },
      {
        role: "Ketua Tim Kelompok Kerja (POKJA) Satu Data UNHAS",
        org: "Universitas Hasanuddin",
        period: "Jul 2025 – sekarang",
        current: true,
        logo: logoUnhas,
      },
      {
        role: "Tim Kelompok Kerja (POKJA) Tracer Study",
        org: "Universitas Hasanuddin",
        period: "Agu 2021 – Jun 2022",
        current: false,
        logo: logoUnhas,
      },
      {
        role: "Information Technology Programmer",
        org: "Faculty of Economics and Business, Universitas Hasanuddin",
        period: "Apr 2020 – Des 2021",
        current: false,
        logo: logoUnhas,
      },
      {
        role: "Consulting Specialist",
        org: "Puslantek-CoT Unhas",
        period: "Mei 2020 – Mei 2023",
        current: false,
        logo: logoPuslantek,
      },
    ],
  },
  {
    label: "Pemerintahan & Konsultasi SPBE",
    items: [
      {
        role: "Assessor SPBE (Sistem Pemerintahan Berbasis Elektronik)",
        org: "Kementerian PANRB",
        period: "Agu 2025 – sekarang",
        current: true,
        logo: logoPanrb,
      },
      {
        role: "Software Engineering Consultant SPBE",
        org: "Diskominfo Kota Makassar",
        period: "Jan 2023 – Des 2023",
        current: false,
        logo: logoDiskominfoMakassar,
      },
    ],
  },
  {
    label: "Instruktur & Training",
    items: [
      {
        role: "Instructor, Fresh Graduate Academic",
        org: "Kementerian Komunikasi dan Informatika RI",
        period: "Sep 2020 – Mei 2024",
        current: false,
        logo: logoKemenkominfo,
      },
      {
        role: "Cisco Instructor",
        org: "Cisco Networking Academy",
        period: "Sep 2020 – sekarang",
        current: true,
        logo: logoCiscoAcademy,
      },
      {
        role: "Microsoft Certified Trainer",
        org: "Microsoft Azure Community",
        period: "Mei 2022 – Mei 2024",
        current: false,
        logo: logoAzure,
      },
    ],
  },
  {
    label: "Industri (Awal Karier)",
    items: [
      { role: "Web Programmer", org: "Digital Wireless Telecom Inc", period: "Feb 2016 – Mei 2016", current: false },
      {
        role: "Web Programmer",
        org: "caripondokan.com",
        period: "Jan 2017 – Nov 2018",
        current: false,
        logo: logoCaripondokan,
      },
      {
        role: "Web Programmer",
        org: "Upana Studio",
        period: "Jan 2017 – Des 2018",
        current: false,
        logo: logoUpanaStudio,
      },
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
    level: "Q1",
  },
  {
    title: "The effect of political will, information technology, and the quality of financial reporting information on fraud prevention",
    venue: "Public and Municipal Finance",
    year: 2025,
    citations: 2,
    type: "Penelitian",
    level: "Q1",
  },
  {
    title: "The role of technology and accounting information systems in improving the operational activities of MSMEs",
    venue: "International Journal of Humanities Education and Social Sciences",
    year: 2023,
    citations: 18,
    type: "Penelitian",
    level: "S4",
  },
  {
    title: "Digitalisasi UMKM Dalam Rangka Membangun Ekosistem Digital",
    venue: "Panrita Abdi",
    year: 2023,
    citations: 11,
    type: "Pengabdian",
    level: "S4",
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
    type: "Pengabdian",
  },
];

export const publicationMetrics = {
  hIndex: 7,
  i10Index: 6,
  totalArticles: 36,
  sintaScore: 542,
};

export const certifications: Certification[] = [
  { name: "Oracle Certified Java Programmer", issuer: "Oracle", year: 2024, logo: logoOracle },
  {
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    year: 2023,
    logo: "https://cdn.simpleicons.org/redhat",
  },
  {
    name: "Processes and Management of Business Incubation",
    issuer: "PUM Netherlands Senior Experts",
    year: 2023,
    logo: logoPum,
  },
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", year: 2022, logo: logoAws },
  { name: "Microsoft Azure Data & AI Fundamentals", issuer: "Microsoft", year: 2022, logo: logoAzure },
  {
    name: "CCNA Service Provider Operations",
    issuer: "Cisco",
    year: 2020,
    logo: logoCiscoAcademy,
  },
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
