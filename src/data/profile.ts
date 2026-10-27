/**
 * Single source of truth for all site content.
 * Edit this file to update the portfolio — pages read everything from here.
 */

export type Link = { label: string; href: string };

export type SocialKind =
  | "email"
  | "github"
  | "linkedin"
  | "orcid"
  | "codeforces"
  | "codechef"
  | "atcoder"
  | "youtube"
  | "x"
  | "facebook"
  | "stackoverflow"
  | "instagram"
  | "discord"
  | "linktree"
  | "blog";

export type Social = { kind: SocialKind; label: string; href: string; handle?: string };

export const person = {
  name: "Md. Muhiminul Islam",
  shortName: "Muhiminul Islam",
  nickname: "Osim",
  roles: ["ML Researcher", "R&D Software Engineer", "ICPC Regional Judge"],
  headline: "I study how machines see the world through events, spikes and state spaces.",
  summary:
    "I'm an M.Sc. student in Computer Science & Engineering at Jahangirnagar University. My research is on event-based vision with spiking neural networks and state-space models (Mamba), focusing on parameter efficiency and robustness to real sensor imperfections. I've also spent four years as an R&D software engineer building real-time computer vision and GPU rendering for Android apps with over 50 million users. I teach undergraduate computer science courses at Southeast University and set problems for ICPC regional contests.",
  location: "Dhaka, Bangladesh",
  email: "muhiminul@gmail.com",
  /** Set to a file in /public (e.g. "/Md_Muhiminul_Islam_CV.pdf") to show the CV download button. */
  cvUrl: null as string | null,
  siteUrl: "https://muhiminosim.github.io",
  sourceUrl: "https://github.com/MuhiminOsim/muhiminosim.github.io",
  blogUrl: "https://muhiminosim.github.io/Art-of-Cognizance",
  lastUpdated: "October 2026",
};

export const socials: Social[] = [
  {
    kind: "email",
    label: "Email",
    href: "mailto:muhiminul@gmail.com",
    handle: "muhiminul@gmail.com",
  },
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/MuhiminOsim",
    handle: "MuhiminOsim",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhimin-osim/",
    handle: "muhimin-osim",
  },
  {
    kind: "orcid",
    label: "ORCID",
    href: "https://orcid.org/0009-0008-8524-6160",
    handle: "0009-0008-8524-6160",
  },
  {
    kind: "codeforces",
    label: "Codeforces",
    href: "https://codeforces.com/profile/Muhimin_Osim",
    handle: "Muhimin_Osim",
  },
  {
    kind: "codechef",
    label: "CodeChef",
    href: "https://www.codechef.com/users/muhimin_osim",
    handle: "muhimin_osim",
  },
  {
    kind: "atcoder",
    label: "AtCoder",
    href: "https://atcoder.jp/users/Muhimin_Osim",
    handle: "Muhimin_Osim",
  },
  {
    kind: "stackoverflow",
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/9038430/muhimin-osim",
  },
  {
    kind: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCZ89iuzMm3DUv7gTCA7jOGw",
  },
  {
    kind: "x",
    label: "X (Twitter)",
    href: "https://twitter.com/MuhiminulOsim",
    handle: "@MuhiminulOsim",
  },
  { kind: "facebook", label: "Facebook", href: "https://www.facebook.com/muhimin.osim" },
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/muhimin_osim/",
    handle: "muhimin_osim",
  },
  { kind: "discord", label: "Discord", href: "https://discordapp.com/users/517795903667568682" },
  {
    kind: "linktree",
    label: "Linktree",
    href: "https://linktr.ee/Muhimin_Osim",
    handle: "Muhimin_Osim",
  },
  {
    kind: "blog",
    label: "Blog: Art of Cognizance",
    href: "https://muhiminosim.github.io/Art-of-Cognizance",
  },
];

export const highlights = [
  { value: "50M+", label: "users of apps I've built" },
  { value: "2048", label: "max Codeforces rating" },
  { value: "2,500+", label: "algorithmic problems solved" },
  { value: "5 yrs", label: "ICPC Dhaka Regional judge" },
];

export const currently = [
  {
    label: "Thesis",
    text: "Building a corruption-robustness benchmark for event-based visual classification (M.Sc., JU).",
  },
  { label: "Under review", text: "RIPE-MambaSpike, submitted to ICLR 2027." },
  { label: "Teaching", text: "Undergraduate computer science courses, Southeast University." },
  { label: "Engineering", text: "Real-time CV and GPU rendering R&D at Kite Games Studio." },
];

/* ------------------------------------------------------------------ Research */

export const researchInterests = [
  "Event-based / neuromorphic vision",
  "Spiking neural networks",
  "State-space models (Mamba)",
  "Parameter-efficient deep learning",
  "Robustness & benchmarking",
  "Computer vision",
  "Machine learning for healthcare",
];

export type ResearchProject = {
  title: string;
  short?: string;
  period: string;
  status: "ongoing" | "under review" | "published";
  role: string;
  people: string;
  points: string[];
  links?: Link[];
};

export const research: ResearchProject[] = [
  {
    title: "A Benchmark for Corruption Robustness in Event-Based Visual Classification",
    period: "Sep 2026 – Present",
    status: "ongoing",
    role: "M.Sc. thesis",
    people: "Supervised by Prof. Dr. Liton Jude Rozario, Jahangirnagar University",
    points: [
      "Designing a standardized corruption-robustness benchmark for event-based vision models.",
      "Corruptions are modeled on physical sensor imperfections and hardware non-idealities of event cameras.",
      "Work in progress.",
    ],
  },
  {
    title:
      "RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision",
    short: "RIPE-MambaSpike",
    period: "Mar 2026 – Sep 2026",
    status: "under review",
    role: "Lead author",
    people: "In collaboration with Dr. Sayeed Shafayet Chowdhury, Indiana University",
    points: [
      "Introduced a parameter-efficient Spiking–Mamba hybrid architecture for event-based vision.",
      "Replaced a resolution-dependent projection with a hierarchical multi-resolution bridge, so the parameter count stays constant across input resolutions.",
      "State-of-the-art spiking results on DailyDVS-200, and Pareto-optimal accuracy–parameter trade-offs on other benchmarks with significantly fewer parameters than prior methods.",
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2609.32537" }],
  },
  {
    title: "Machine Learning Approaches for Survival Prediction in COVID-19 Patients",
    short: "COVID-19 survival prediction",
    period: "2021",
    status: "published",
    role: "B.Sc. thesis",
    people: "Supervised by Asst. Prof. Mohammad Insanur Rahman Shuvo, KUET",
    points: [
      "Cleaned and pre-processed a large, new, raw dataset of COVID-19 patients.",
      "Identified key survival indicators using impurity-based feature importance.",
      "Benchmarked neural networks, logistic regression, SVM, random forest, AdaBoost and XGBoost for mortality-risk prediction.",
      "Published at IEEE iCACCESS 2024.",
    ],
    links: [{ label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10499548" }],
  },
];

/* -------------------------------------------------------------- Publications */

export type Publication = {
  id: string;
  type: "preprint" | "conference";
  authors: string[];
  title: string;
  venue: string;
  year: number;
  note?: string;
  links: Link[];
  bibtex: string;
};

/** Author name as it appears in author lists; it gets highlighted. */
export const selfAuthor = "M. M. Islam";

export const publications: Publication[] = [
  {
    id: "islam2026ripe",
    type: "preprint",
    authors: ["M. M. Islam", "S. A. Dipu", "S. S. Chowdhury"],
    title:
      "RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision",
    venue: "arXiv preprint arXiv:2609.32537",
    year: 2026,
    note: "Under review at ICLR 2027",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2609.32537" },
      { label: "PDF", href: "https://arxiv.org/pdf/2609.32537" },
    ],
    bibtex: `@article{islam2026ripe,
  title   = {RIPE-MambaSpike: Resolution-Independent Spiking-State-Space Interfaces for Parameter-Efficient Event-Based Vision},
  author  = {Islam, Md. Muhiminul and Dipu, S. A. and Chowdhury, Sayeed Shafayet},
  journal = {arXiv preprint arXiv:2609.32537},
  year    = {2026}
}`,
  },
  {
    id: "islam2024covid",
    type: "conference",
    authors: ["M. M. Islam", "M. I. R. Shuvo"],
    title:
      "Machine Learning Approaches for Survival Prediction in Covid-19 Patients: A Comparative Analysis",
    venue:
      "2024 International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS), IEEE, pp. 1–6",
    year: 2024,
    note: "Presented at the conference",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10499548" },
      { label: "DOI", href: "https://doi.org/10.1109/iCACCESS61735.2024.10499548" },
    ],
    bibtex: `@inproceedings{islam2024covid,
  title     = {Machine Learning Approaches for Survival Prediction in Covid-19 Patients: A Comparative Analysis},
  author    = {Islam, Md. Muhiminul and Shuvo, Mohammad Insanur Rahman},
  booktitle = {2024 International Conference on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS)},
  pages     = {1--6},
  year      = {2024},
  publisher = {IEEE},
  doi       = {10.1109/iCACCESS61735.2024.10499548}
}`,
  },
];

export const service = [
  {
    title: "Reviewer, Knowledge-Based Systems",
    detail: "Elsevier journal · reviewed one paper",
    year: "2025",
  },
  {
    title: "Reviewer, Software Impacts",
    detail: "Elsevier journal · reviewed one paper",
    year: "2025",
  },
  {
    title: "Conference talk, iCACCESS 2024",
    detail: "Presented B.Sc. thesis research on COVID-19 survival prediction",
    year: "2024",
  },
];

/* ---------------------------------------------------------------- Experience */

export type Experience = {
  role: string;
  org: string;
  logo?: string;
  orgUrl?: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  metrics?: { value: string; label: string }[];
  points: { title?: string; text: string }[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Adjunct Lecturer",
    org: "Southeast University",
    logo: "seu",
    orgUrl: "https://seu.edu.bd/",
    location: "Dhaka, Bangladesh",
    period: "Jul 2025 – Present",
    current: true,
    summary: "Teaching undergraduate computer science courses.",
    points: [],
    tags: ["Teaching", "Computer science"],
  },
  {
    role: "Software Engineer (R&D)",
    org: "Kite Games Studio Ltd.",
    logo: "kgs",
    orgUrl: "https://www.kitegamesstudio.com/",
    location: "Mohakhali DOHS, Dhaka, Bangladesh",
    period: "Apr 2022 – Present",
    current: true,
    summary:
      "Building image-processing, computer-vision and ML features for Android apps with 50M+ total users. Best Employee Award, 2024.",
    metrics: [
      { value: "50M+", label: "total users" },
      { value: "30×", label: "faster body reshape" },
      { value: "10×", label: "faster contour rendering" },
      { value: "~100 ms", label: "live-edit latency" },
    ],
    points: [
      {
        title: "Generative AI",
        text: "Delivered an AI solution and refined a GAN-based model for black-and-white image colorization, deployed across multiple apps.",
      },
      {
        title: "Computer vision R&D",
        text: "Researched image-processing techniques for facial acne detection and removal.",
      },
      {
        title: "Architecture",
        text: "Designed an MVVM architecture and an optimized rendering pipeline enabling real-time live editing at ~100 ms latency on low-resource devices.",
      },
      {
        title: "GPU acceleration",
        text: "Re-built an auto body-reshape system with single-pass GPU rendering and batched vector values, achieving a 30× speedup.",
      },
      {
        title: "Face beautification",
        text: "Engineered beautification features using ML models, OpenCV and 50+ custom OpenGL shaders.",
      },
      {
        title: "3D geometry",
        text: "Moved highlight and contour rendering from CPU OpenCV to GPU projection of 2D masks onto 3D facial geometry, achieving a 10× speedup.",
      },
      {
        title: "Real-time camera",
        text: "Implemented a Camera2 pipeline and a GLSL-shader frame-manipulation engine for real-time effects.",
      },
      {
        title: "Leadership",
        text: "Led the engineering team that built Beauty Editor (100K+ downloads).",
      },
    ],
    tags: ["Kotlin", "Android", "OpenGL ES", "GLSL", "OpenCV", "PyTorch", "MVVM", "Coroutines"],
  },
];

/* ------------------------------------------------------------------ Projects */

export type Project = {
  name: string;
  tagline: string;
  href: string;
  metrics: string[];
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Beauty Editor",
    tagline: "Real-time face & body photo editor",
    href: "https://play.google.com/store/apps/details?id=com.app.beautyeditor",
    metrics: ["100K+ downloads", "~100 ms live edit", "30× faster reshape"],
    points: [
      "Architected a scalable app with MVVM, a Coroutines-based preprocessing pipeline and an optimized rendering pipeline for real-time editing on low-end devices.",
      "Face beautification built from ML models, OpenCV and 50+ custom OpenGL shaders.",
      "GPU highlight/contour rendering that projects 2D masks onto 3D facial geometry with realistic light blending, 10× faster than the CPU approach.",
      "Single-pass GPU auto body-reshape with batched vector values, 30× faster.",
    ],
    tags: ["Kotlin", "OpenGL ES", "OpenCV", "ML", "MVVM"],
  },
  {
    name: "Color Pop Effects Photo Editor",
    tagline: "AI colorization & color-splash editor",
    href: "https://play.google.com/store/apps/details?id=com.tasnim.colorsplash",
    metrics: ["10K+ daily active users", "GAN colorization", "IAP module in 10 apps"],
    points: [
      "Black-and-white image colorization using a GAN-based model.",
      "Secure REST APIs with Retrofit/OkHttp over SSL for reliable backend services.",
      "Generic MVVM in-app-purchase module, now reused across 10 Android apps.",
    ],
    tags: ["Kotlin", "GAN", "Retrofit", "MVVM"],
  },
  {
    name: "Time Warp Scan: Blue Line Cam",
    tagline: "Real-time camera effects engine",
    href: "https://play.google.com/store/apps/details?id=com.kgs.timewarpscan",
    metrics: ["14+ real-time effects", "Camera2 → GPU textures"],
    points: [
      "Camera2 API pipeline that captures frames directly as GPU textures for real-time processing.",
      "Frame-manipulation engine in GLSL shaders that powers 14+ Time Warp Scan effects.",
    ],
    tags: ["Camera2", "GLSL", "OpenGL ES", "Kotlin"],
  },
];

/* --------------------------------------------------------------------- Skills */

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C", "C++", "Java", "Kotlin", "Bash"] },
  {
    group: "Deep learning & vision",
    items: ["PyTorch", "TensorFlow", "OpenCV", "CUDA", "GANs", "ViT", "LLMs"],
  },
  {
    group: "Graphics & mobile",
    items: ["OpenGL ES", "GLSL", "Android SDK", "Jetpack Compose", "Camera2"],
  },
  {
    group: "Engineering",
    items: [
      "MVVM",
      "SOLID",
      "Design patterns",
      "SQLite",
      "MySQL",
      "Laravel / PHP",
      "Git",
      "Linux",
      "LaTeX",
    ],
  },
];

/* ------------------------------------------------------------------ Education */

export type Degree = {
  degree: string;
  field: string;
  school: string;
  short: string;
  url: string;
  logo?: "ju" | "kuet" | "dc";
  period: string;
  grade: string;
  notes: string[];
};

export const education: Degree[] = [
  {
    degree: "M.Sc. (Professional)",
    field: "Computer Science and Engineering",
    school: "Jahangirnagar University",
    short: "JU",
    url: "https://juniv.edu/",
    logo: "ju",
    period: "Expected Jan 2027",
    grade: "CGPA 4.00 / 4.00 (so far)",
    notes: [
      "Thesis: A Benchmark for Corruption Robustness in Event-Based Visual Classification.",
      "Supervisor: Prof. Dr. Liton Jude Rozario.",
    ],
  },
  {
    degree: "B.Sc.",
    field: "Computer Science and Engineering",
    school: "Khulna University of Engineering & Technology",
    short: "KUET",
    url: "https://www.kuet.ac.bd/",
    logo: "kuet",
    period: "2017 – Apr 2022",
    grade: "CGPA 3.80 / 4.00 · 9th of 134",
    notes: [
      "Dean's Award for four consecutive academic years (2016–2020).",
      "Thesis: ML approaches for survival prediction in COVID-19 patients (published at IEEE iCACCESS 2024).",
      "President & Instructor, SGIPC (the university's programming-contest club).",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science",
    school: "Dhaka College",
    short: "DC",
    url: "https://dhakacollege.edu.bd/",
    logo: "dc",
    period: "2014 – 2016",
    grade: "Government scholarship for HSC results",
    notes: [],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  logo: "stanford" | "dlai" | "algoexpert" | "icpc";
  href: string;
  cta: string;
};

export const certifications: Certification[] = [
  {
    title: "Machine Learning",
    issuer: "Stanford University · Andrew Ng (Coursera)",
    logo: "stanford",
    href: "https://www.coursera.org/account/accomplishments/certificate/A9M67MSJKKC3",
    cta: "View certificate",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI · Andrew Ng (Coursera)",
    logo: "dlai",
    href: "https://www.coursera.org/account/accomplishments/certificate/7MMFFYCVKJW5",
    cta: "View certificate",
  },
  {
    title: "AlgoExpert Course Completion",
    issuer: "AlgoExpert",
    logo: "algoexpert",
    href: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-5d8f8134b4",
    cta: "View certificate",
  },
  {
    title: "ICPC ID",
    issuer: "ICPC Foundation",
    logo: "icpc",
    href: "https://icpc.global/ICPCID/A8OZXHZSPAO3",
    cta: "View ICPC profile",
  },
];

/* ------------------------------------------------------- Competitive programming */

export const ratings = [
  {
    site: "Codeforces",
    kind: "codeforces" as const,
    rating: 2048,
    title: "Candidate Master",
    percentile: "Top 3.5% worldwide",
    href: "https://codeforces.com/profile/Muhimin_Osim",
  },
  {
    site: "CodeChef",
    kind: "codechef" as const,
    rating: 2113,
    title: "5★",
    percentile: "Top 0.69% worldwide",
    href: "https://www.codechef.com/users/muhimin_osim",
  },
  {
    site: "AtCoder",
    kind: "atcoder" as const,
    rating: 1594,
    title: "Max rating",
    percentile: "Top 4.16% worldwide",
    href: "https://atcoder.jp/users/Muhimin_Osim",
  },
];

export const contests: { name: string; result: string; link?: string }[] = [
  { name: "Google Code Jam", result: "Round 2 qualifier, 2020 & 2021" },
  {
    name: "Meta Hacker Cup 2022",
    result: "Round 2 qualifier · top 1006 worldwide",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/round-2/scoreboard",
  },
  { name: "Google Kick Start Round G 2020", result: "340th of 8098 · 3rd in Bangladesh" },
  { name: "Google Hash Code 2022", result: "681st of 9031 teams · 5th in Bangladesh" },
  {
    name: "SUST Inter-University Programming Contest 2019",
    result: "9th of 161 teams",
    link: "https://toph.co/c/sust-iupc-2019/standings",
  },
  {
    name: "Red.Digital Digi-Thor 2020",
    result: "4th of 224 contestants nationwide",
    link: "https://toph.co/c/reddotdigital-digi-thor-2020/standings",
  },
];

export const problemSetting = {
  items: [
    {
      title: "ICPC Dhaka Regional",
      detail: "Problem setter & judge · 2021, 2022, 2023, 2024, 2025",
    },
    { title: "ICPC Mathura–Kanpur Regional", detail: "Problem setter & judge · 2022" },
    { title: "Bangladesh Association of Problem Setters (BAPS)", detail: "Member" },
    {
      title: "NCPC, IUPCs & online contests",
      detail: "Problem setter & judge on Toph and other platforms",
    },
  ],
};

export const leadership = [
  {
    title: "President & Instructor",
    org: "SGIPC, KUET",
    detail: "University club for programming contests",
  },
  { title: "Competitive Programming Trainer", org: "University of Chittagong", detail: "" },
  {
    title: "Competitive Programming Trainer",
    org: "Mawlana Bhashani Science and Technology University",
    detail: "",
  },
];

export type Volunteering = {
  role: string;
  org: string;
  href: string;
  logo: string;
  period: string;
  place: string;
  text: string;
};

export const volunteering: Volunteering[] = [
  {
    role: "President & Instructor",
    org: "Special Group Interested in Programming Contest (SGIPC)",
    href: "https://www.facebook.com/sgipc.kuet",
    logo: "sgipc",
    period: "Feb 2020 – Jan 2022",
    place: "KUET, Khulna",
    text: "Led KUET's competitive-programming club and ran its training sessions.",
  },
  {
    role: "Coordinator, Problem Setter & Judge",
    org: "Intra KUET Programming Contest 2020",
    href: "https://toph.co/c/intra-kuet-2020",
    logo: "ikpc",
    period: "Jul 2020",
    place: "KUET, Khulna",
    text: "As SGIPC president, coordinated the whole event and set and judged problems.",
  },
  {
    role: "Organizing Volunteer",
    org: "Bangladesh Olympiad in Informatics, Khulna Divisional",
    href: "https://olympiad.org.bd/",
    logo: "bdoi",
    period: "2019",
    place: "KUET, Khulna",
    text: "Helped organize the divisional round hosted at KUET.",
  },
];

/* ------------------------------------------------------------ Open source */

export type PersonalProject = {
  name: string;
  tagline: string;
  href: string;
  description: string;
  features: string[];
  tags: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Stock Alpha Terminal",
    tagline: "Quant analysis terminal for the Dhaka Stock Exchange",
    href: "https://stockalphaterminal.com/",
    description:
      "A modern stock-analysis terminal for the Dhaka Stock Exchange. It offers real-time index tracking, interactive technical charts, and deterministic quantitative Buy/Sell direction indicators.",
    features: [
      "Live DSEX / DSES / DS30 tracking, scanners, movers, heatmap and market breadth",
      "Interactive charts with strategy backtesting and ATR-based volatility & target forecasts",
      "Quant scoring engine, chart-pattern detection, support/resistance pivots and trend-confluence matrix",
      "Graham intrinsic-value advisor, financial reports, dividends, seasonality and AI market insights",
      "Watchlists, portfolio tracking and alerts",
    ],
    tags: ["Web app", "Quantitative finance", "Technical analysis", "Data visualization"],
  },
];

export const repositories: { name: string; href: string; description: string; tags: string[] }[] = [
  {
    name: "RIPE-MambaSpike",
    href: "https://github.com/MuhiminOsim/RIPE-MambaSpike",
    description:
      "Reference implementation of RIPE-MambaSpike, a resolution-independent spiking–state-space model for event-based vision that keeps a constant 0.87M parameters across input sizes.",
    tags: ["Python", "PyTorch", "Research"],
  },
  {
    name: "Collaborative-Code-Editor",
    href: "https://github.com/MuhiminOsim/Collaborative-Code-Editor",
    description: "A real-time collaborative code editor in the browser.",
    tags: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Jira-Issue-Tracker-for-IntelliJ-based-IDEs",
    href: "https://github.com/MuhiminOsim/Jira-Issue-Tracker-for-IntelliJ-based-IDEs",
    description:
      "A JetBrains IDE plugin for managing Jira issues without leaving the editor, with a drag-and-drop sprint board, JQL search, comments and status transitions.",
    tags: ["Kotlin", "IntelliJ Platform"],
  },
  {
    name: "Traffic-Speed-Violation-Detection-System",
    href: "https://github.com/MuhiminOsim/Traffic-Speed-Violation-Detection-System",
    description: "An automated system to detect and help prevent traffic speed violations.",
    tags: ["Java"],
  },
  {
    name: "Android-OpenGL-Shared-Context",
    href: "https://github.com/MuhiminOsim/Android-OpenGL-Shared-Context",
    description:
      "An Android demo of shared EGL contexts, rendering the same textures on-screen with a TextureView and off-screen to a bitmap shown in Jetpack Compose.",
    tags: ["Kotlin", "OpenGL ES", "Jetpack Compose"],
  },
  {
    name: "Competitive-Programming",
    href: "https://github.com/MuhiminOsim/Competitive-Programming",
    description: "Solutions, templates, and the full list of problems I've set and judged.",
    tags: ["C++", "Algorithms"],
  },
];

/* --------------------------------------------------------------------- Honors */

export const honors: { title: string; detail: string; year: string }[] = [
  {
    title: "Dean's Award",
    detail: "Khulna University of Engineering & Technology, four consecutive years",
    year: "2016–20",
  },
  { title: "Best Employee Award", detail: "Kite Games Studio Ltd.", year: "2024" },
  {
    title: "Government Scholarships",
    detail: "For excellent results in the JSC (2011) and HSC (2016) examinations",
    year: "2011, 2016",
  },
  {
    title: "National Math Olympiad, 3rd place",
    detail: "DCSC National Science Exposition",
    year: "2015",
  },
];
