import type { Bilingual } from "../i18n/LanguageContext";
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
  field: Bilingual;
  institution: string;
  location: Bilingual;
  period: Bilingual;
  current: boolean;
  logo?: string;
}

export interface ExperienceItem {
  role: Bilingual;
  org: Bilingual;
  period: Bilingual;
  current: boolean;
  logo?: string;
}

export interface ExperienceGroup {
  label: Bilingual;
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

export interface Course {
  name: Bilingual;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  logo?: string;
}

export interface ProjectItem {
  title: Bilingual;
  description: Bilingual;
  period: Bilingual;
  partner: Bilingual;
  status: "ongoing" | "done";
}

export const profile = {
  name: "Ir. Muhammad Alief Fahdal Imran Oemar",
  credentials: "S.T., M.Sc.",
  role: { id: "Dosen Teknik Informatika", en: "Informatics Engineering Lecturer" } satisfies Bilingual,
  affiliation: {
    id: "Fakultas Teknik, Universitas Hasanuddin",
    en: "Faculty of Engineering, Universitas Hasanuddin",
  } satisfies Bilingual,
  email: "alieffahdal@unhas.ac.id",
  bio: {
    id: "IT developer dan dosen di Universitas Hasanuddin, dengan fokus pemrograman Java dan JavaScript untuk sistem backend dan solusi web. Aktif di Distributed Intelligence Research Group (DINT), membawa riset dari topik software engineering hingga penerapan teknologi informasi untuk UMKM, pendidikan, dan pemerintahan.",
    en: "IT developer and lecturer at Universitas Hasanuddin, focused on Java and JavaScript programming for backend systems and web solutions. Active in the Distributed Intelligence Research Group (DINT), carrying research from software engineering topics through to IT applications for MSMEs, education, and government.",
  } satisfies Bilingual,
  bioDetailed: {
    id: "IT developer dan dosen di Departemen Teknik Informatika, Fakultas Teknik, Universitas Hasanuddin sejak 2020, dengan spesialisasi pemrograman Java dan JavaScript untuk sistem backend dan solusi web. Aktif sebagai anggota Distributed Intelligence Research Group (DINT), kelompok riset interdisipliner yang menggarap sistem terdistribusi, machine learning, dan analitik data.\n\nRiset yang dijalankan mencakup penerapan deep learning untuk prediksi gempa bumi, digitalisasi UMKM di Sulawesi, sistem informasi akuntansi untuk pelaku usaha kecil, hingga pemanfaatan metaverse dalam pendidikan — tercatat dalam 36 publikasi terindeks dengan h-index 7 di Google Scholar.\n\nDi luar kampus, aktif menjembatani teknologi dengan tata kelola pemerintahan sebagai Assessor SPBE di Kementerian PANRB, konsultan SPBE untuk Diskominfo Kota Makassar, dan Ketua Kelompok Kerja Satu Data UNHAS. Juga berperan sebagai instruktur bersertifikat — Cisco Instructor, Microsoft Certified Trainer, serta pengajar program Fresh Graduate Academic Kementerian Komunikasi dan Informatika RI.",
    en: "IT developer and lecturer in the Department of Informatics Engineering, Faculty of Engineering, Universitas Hasanuddin since 2020, specializing in Java and JavaScript programming for backend systems and web solutions. Active member of the Distributed Intelligence Research Group (DINT), an interdisciplinary research group working on distributed systems, machine learning, and data analytics.\n\nResearch carried out spans deep learning applications for earthquake prediction, MSME digitalization in Sulawesi, accounting information systems for small businesses, and the use of the metaverse in education — recorded across 36 indexed publications with an h-index of 7 on Google Scholar.\n\nBeyond campus, active in bridging technology with government governance as an e-Government (SPBE) Assessor at the Ministry of PANRB, an SPBE consultant for the Makassar City Communication and Informatics Office, and Chair of the UNHAS One Data Working Group. Also serves as a certified instructor — Cisco Instructor, Microsoft Certified Trainer, and instructor for the Fresh Graduate Academic program of the Ministry of Communication and Informatics of the Republic of Indonesia.",
  } satisfies Bilingual,
  currentHighlight: "Kandidat PhD, Hiroshima University (2026–sekarang)",
  monogram: "MO",
};

export const stats: { value: number; suffix: string; label: Bilingual }[] = [
  { value: 36, suffix: "", label: { id: "Publikasi terindeks", en: "Indexed publications" } },
  { value: 7, suffix: "", label: { id: "H-index (Scholar)", en: "H-index (Scholar)" } },
  { value: 10, suffix: "+", label: { id: "Tahun pengalaman IT", en: "Years of IT experience" } },
  { value: 6, suffix: "", label: { id: "Sertifikasi profesional", en: "Professional certifications" } },
];

export const teaching: Course[] = [
  { name: { id: "Dasar Pemrograman Komputer", en: "Introduction to Computer Programming" } },
  { name: { id: "Pemrograman Web", en: "Web Programming" } },
  { name: { id: "Pemrograman Mobile", en: "Mobile Programming" } },
  { name: { id: "Jaringan Komputer", en: "Computer Networks" } },
  { name: { id: "Animasi dan Pemodelan 3D", en: "3D Animation and Modeling" } },
  { name: { id: "Manajemen Pengelolaan Teknologi Informasi", en: "IT Management" } },
  { name: { id: "Rekayasa Web", en: "Web Engineering" } },
  { name: { id: "Rekayasa Perangkat Lunak", en: "Software Engineering" } },
  { name: { id: "Proyek Rekayasa Perangkat Lunak", en: "Software Engineering Project" } },
  { name: { id: "Topik Khusus Rekayasa Perangkat Lunak", en: "Special Topics in Software Engineering" } },
  { name: { id: "Pemrograman Visual", en: "Visual Programming" } },
];

export interface ResearchArea {
  name: Bilingual;
  description: Bilingual;
}

export const researchFocus: ResearchArea[] = [
  {
    name: { id: "Software Engineering", en: "Software Engineering" },
    description: {
      id: "Praktik rekayasa perangkat lunak untuk sistem backend dan solusi web, dari kampus hingga pemerintahan.",
      en: "Software engineering practice for backend systems and web solutions, from campus to government.",
    },
  },
  {
    name: { id: "Web Engineering", en: "Web Engineering" },
    description: {
      id: "Arsitektur dan pengembangan aplikasi web menggunakan Java dan JavaScript.",
      en: "Architecture and development of web applications using Java and JavaScript.",
    },
  },
  {
    name: { id: "Machine Learning", en: "Machine Learning" },
    description: {
      id: "Penerapan deep learning untuk masalah nyata, termasuk prediksi gempa bumi berbasis LSTM.",
      en: "Applying deep learning to real-world problems, including LSTM-based earthquake prediction.",
    },
  },
  {
    name: { id: "Data Science", en: "Data Science" },
    description: {
      id: "Analitik data untuk mendukung pengambilan keputusan di sektor pendidikan dan pemerintahan.",
      en: "Data analytics to support decision-making in the education and government sectors.",
    },
  },
  {
    name: { id: "Sistem Informasi", en: "Information Systems" },
    description: {
      id: "Perancangan sistem informasi untuk UMKM dan tata kelola data instansi.",
      en: "Designing information systems for MSMEs and institutional data governance.",
    },
  },
  {
    name: { id: "Transformasi Digital (SPBE)", en: "Digital Transformation (e-Government)" },
    description: {
      id: "Asesmen dan konsultasi Sistem Pemerintahan Berbasis Elektronik untuk instansi pemerintah.",
      en: "Assessment and consulting for Electronic-Based Government Systems (SPBE) for government institutions.",
    },
  },
  {
    name: { id: "Pemodelan Stokastik", en: "Stochastic Modeling" },
    description: {
      id: "Penerapan model probabilistik untuk analisis ketidakpastian dan prediksi pada sistem yang kompleks.",
      en: "Applying probabilistic models to analyze uncertainty and prediction in complex systems.",
    },
  },
  {
    name: { id: "Internet of Things (IoT)", en: "Internet of Things (IoT)" },
    description: {
      id: "Perancangan dan integrasi perangkat IoT untuk solusi cerdas di bidang kota pintar dan otomasi.",
      en: "Designing and integrating IoT devices for smart solutions in smart city and automation applications.",
    },
  },
];

export const education: EducationItem[] = [
  {
    degree: "S1",
    field: { id: "Teknik Informatika", en: "Informatics Engineering" },
    institution: "Universitas Hasanuddin",
    location: { id: "Makassar, Indonesia", en: "Makassar, Indonesia" },
    period: { id: "2012–2018", en: "2012–2018" },
    current: false,
    logo: logoUnhas,
  },
  {
    degree: "S2",
    field: { id: "Software Engineering (M.Sc.)", en: "Software Engineering (M.Sc.)" },
    institution: "Asia Pacific University",
    location: { id: "Malaysia", en: "Malaysia" },
    period: { id: "2019–2020", en: "2019–2020" },
    current: false,
    logo: logoApu,
  },
  {
    degree: "S3",
    field: {
      id: "Informatics and Data Science / Software Engineering",
      en: "Informatics and Data Science / Software Engineering",
    },
    institution: "Hiroshima University",
    location: { id: "Jepang", en: "Japan" },
    period: { id: "2026–sekarang", en: "2026–present" },
    current: true,
    logo: logoHiroshima,
  },
];

export const experience: ExperienceGroup[] = [
  {
    label: { id: "Akademik & Kepemimpinan Kampus", en: "Academia & Campus Leadership" },
    items: [
      {
        role: { id: "Assistant Professor of Informatics Engineering", en: "Assistant Professor of Informatics Engineering" },
        org: { id: "Fakultas Teknik, Universitas Hasanuddin", en: "Faculty of Engineering, Universitas Hasanuddin" },
        period: { id: "Mei 2020 – sekarang", en: "May 2020 – present" },
        current: true,
        logo: logoUnhas,
      },
      {
        role: {
          id: "Secretary of Student Affairs, Department of Informatics",
          en: "Secretary of Student Affairs, Department of Informatics",
        },
        org: { id: "Fakultas Teknik, Universitas Hasanuddin", en: "Faculty of Engineering, Universitas Hasanuddin" },
        period: { id: "Nov 2022 – sekarang", en: "Nov 2022 – present" },
        current: true,
        logo: logoUnhas,
      },
      {
        role: {
          id: "Ketua Tim Kelompok Kerja (POKJA) Satu Data UNHAS",
          en: "Head of the UNHAS One Data Working Group (POKJA)",
        },
        org: { id: "Universitas Hasanuddin", en: "Universitas Hasanuddin" },
        period: { id: "Jul 2025 – sekarang", en: "Jul 2025 – present" },
        current: true,
        logo: logoUnhas,
      },
      {
        role: {
          id: "Tim Kelompok Kerja (POKJA) Tracer Study",
          en: "Tracer Study Working Group (POKJA) Member",
        },
        org: { id: "Universitas Hasanuddin", en: "Universitas Hasanuddin" },
        period: { id: "Agu 2021 – Jun 2022", en: "Aug 2021 – Jun 2022" },
        current: false,
        logo: logoUnhas,
      },
      {
        role: { id: "Information Technology Programmer", en: "Information Technology Programmer" },
        org: {
          id: "Faculty of Economics and Business, Universitas Hasanuddin",
          en: "Faculty of Economics and Business, Universitas Hasanuddin",
        },
        period: { id: "Apr 2020 – Des 2021", en: "Apr 2020 – Dec 2021" },
        current: false,
        logo: logoUnhas,
      },
      {
        role: { id: "Consulting Specialist", en: "Consulting Specialist" },
        org: { id: "Puslantek-CoT Unhas", en: "Puslantek-CoT Unhas" },
        period: { id: "Mei 2020 – Mei 2023", en: "May 2020 – May 2023" },
        current: false,
        logo: logoPuslantek,
      },
    ],
  },
  {
    label: { id: "Pemerintahan & Konsultasi SPBE", en: "Government & e-Government (SPBE) Consulting" },
    items: [
      {
        role: {
          id: "Assessor SPBE (Sistem Pemerintahan Berbasis Elektronik)",
          en: "SPBE Assessor (Electronic-Based Government System)",
        },
        org: { id: "Kementerian PANRB", en: "Ministry of PANRB" },
        period: { id: "Agu 2025 – sekarang", en: "Aug 2025 – present" },
        current: true,
        logo: logoPanrb,
      },
      {
        role: { id: "Software Engineering Consultant SPBE", en: "SPBE Software Engineering Consultant" },
        org: {
          id: "Diskominfo Kota Makassar",
          en: "Makassar City Communication and Informatics Office (Diskominfo)",
        },
        period: { id: "Jan 2023 – Des 2023", en: "Jan 2023 – Dec 2023" },
        current: false,
        logo: logoDiskominfoMakassar,
      },
    ],
  },
  {
    label: { id: "Instruktur & Training", en: "Instructor & Training" },
    items: [
      {
        role: { id: "Instructor, Fresh Graduate Academic", en: "Instructor, Fresh Graduate Academic" },
        org: {
          id: "Kementerian Komunikasi dan Informatika RI",
          en: "Ministry of Communication and Informatics of the Republic of Indonesia",
        },
        period: { id: "Sep 2020 – Mei 2024", en: "Sep 2020 – May 2024" },
        current: false,
        logo: logoKemenkominfo,
      },
      {
        role: { id: "Cisco Instructor", en: "Cisco Instructor" },
        org: { id: "Cisco Networking Academy", en: "Cisco Networking Academy" },
        period: { id: "Sep 2020 – sekarang", en: "Sep 2020 – present" },
        current: true,
        logo: logoCiscoAcademy,
      },
      {
        role: { id: "Microsoft Certified Trainer", en: "Microsoft Certified Trainer" },
        org: { id: "Microsoft Azure Community", en: "Microsoft Azure Community" },
        period: { id: "Mei 2022 – Mei 2024", en: "May 2022 – May 2024" },
        current: false,
        logo: logoAzure,
      },
    ],
  },
  {
    label: { id: "Industri (Awal Karier)", en: "Industry (Early Career)" },
    items: [
      {
        role: { id: "Web Programmer", en: "Web Programmer" },
        org: { id: "Digital Wireless Telecom Inc", en: "Digital Wireless Telecom Inc" },
        period: { id: "Feb 2016 – Mei 2016", en: "Feb 2016 – May 2016" },
        current: false,
      },
      {
        role: { id: "Web Programmer", en: "Web Programmer" },
        org: { id: "caripondokan.com", en: "caripondokan.com" },
        period: { id: "Jan 2017 – Nov 2018", en: "Jan 2017 – Nov 2018" },
        current: false,
        logo: logoCaripondokan,
      },
      {
        role: { id: "Web Programmer", en: "Web Programmer" },
        org: { id: "Upana Studio", en: "Upana Studio" },
        period: { id: "Jan 2017 – Des 2018", en: "Jan 2017 – Dec 2018" },
        current: false,
        logo: logoUpanaStudio,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: { id: "Satu Data UNHAS", en: "UNHAS One Data" },
    description: {
      id: "Memimpin kelompok kerja tata kelola data terintegrasi di lingkup Universitas Hasanuddin.",
      en: "Leading the integrated data governance working group within Universitas Hasanuddin.",
    },
    period: { id: "2025–sekarang", en: "2025–present" },
    partner: { id: "Universitas Hasanuddin", en: "Universitas Hasanuddin" },
    status: "ongoing",
  },
  {
    title: { id: "Asesmen SPBE Nasional", en: "National SPBE Assessment" },
    description: {
      id: "Menjadi assessor Sistem Pemerintahan Berbasis Elektronik untuk instansi pemerintah.",
      en: "Serving as assessor for Electronic-Based Government Systems across government institutions.",
    },
    period: { id: "2025–sekarang", en: "2025–present" },
    partner: { id: "Kementerian PANRB", en: "Ministry of PANRB" },
    status: "ongoing",
  },
  {
    title: { id: "Prediksi Gempa dengan Deep Learning", en: "Earthquake Prediction with Deep Learning" },
    description: {
      id: "Riset penerapan K-means clustering dan LSTM untuk meningkatkan prediksi gempa bumi.",
      en: "Research applying K-means clustering and LSTM to improve earthquake prediction.",
    },
    period: { id: "2025", en: "2025" },
    partner: {
      id: "Journal of Information and Communication Technology",
      en: "Journal of Information and Communication Technology",
    },
    status: "done",
  },
  {
    title: { id: "Konsultasi SPBE Kota Makassar", en: "Makassar City SPBE Consulting" },
    description: {
      id: "Konsultan software engineering untuk penguatan sistem pemerintahan berbasis elektronik.",
      en: "Software engineering consultant strengthening the city's electronic-based government system.",
    },
    period: { id: "2023", en: "2023" },
    partner: {
      id: "Diskominfo Kota Makassar",
      en: "Makassar City Communication and Informatics Office (Diskominfo)",
    },
    status: "done",
  },
  {
    title: { id: "Digitalisasi UMKM Sulawesi", en: "Sulawesi MSME Digitalization" },
    description: {
      id: "Pemberdayaan pelaku UMKM Sulawesi dalam implementasi digitalisasi usaha.",
      en: "Empowering Sulawesi MSME owners in implementing business digitalization.",
    },
    period: { id: "2022–2023", en: "2022–2023" },
    partner: { id: "Pengabdian Masyarakat", en: "Community Service Program" },
    status: "done",
  },
  {
    title: { id: "Pembelajaran Berbasis Metaverse", en: "Metaverse-Based Learning" },
    description: {
      id: "Strategi pembelajaran menggunakan metaverse untuk guru Madrasah Aliyah.",
      en: "Learning strategy using the metaverse for Madrasah Aliyah teachers.",
    },
    period: { id: "2022", en: "2022" },
    partner: { id: "Jurnal Tepat", en: "Jurnal Tepat" },
    status: "done",
  },
];

// publication titles/venues are the actual published record and are intentionally
// left untranslated regardless of site language.
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

// certification names/issuers are official credential names and are kept
// unchanged across languages.
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
