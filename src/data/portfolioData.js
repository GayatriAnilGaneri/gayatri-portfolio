export const personalInfo = {
  name: "Gayatri Anil Ganeri",
  title: "AI & Data Science Student / Software Developer / AI Builder",
  tagline: "I build practical AI-powered software, full-stack applications, and real-world IoT technology that turns ideas into useful products.",
  aboutBrief: "B.Tech student in Artificial Intelligence & Data Science at N. K. Orchid College of Engineering & Technology, Solapur. Software Developer Intern at Uptiq.ai, experienced in building AI-powered web applications, async backend modules, and biological IoT wearable prototypes.",
  email: "gayatriganeri20@gmail.com",
  phone: "+91 8010606260",
  linkedin: "https://www.linkedin.com/in/gayatri-ganeri-12777b257",
  github: "https://github.com/GayatriAnilGaneri",
  resumeUrl: "/resume.pdf",
  location: "Solapur, Maharashtra, India",
  status: "Open for Software & AI Developer Roles"
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core programming languages for application logic, systems, and data pipelines.",
    skills: [
      { name: "Python", level: "Applied", tag: "AI / Data Science" },
      { name: "TypeScript", level: "Applied", tag: "Full-Stack Dev" },
      { name: "Java", level: "Applied", tag: "OOP / Systems" },
      { name: "JavaScript", level: "Applied", tag: "Web Scripting" },
      { name: "SQL", level: "Applied", tag: "Relational Queries" }
    ]
  },
  {
    category: "Frontend & Web",
    description: "Modern frameworks and UI libraries for responsive, user-friendly interfaces.",
    skills: [
      { name: "React", level: "Applied", tag: "UI Framework" },
      { name: "Tailwind CSS", level: "Applied", tag: "Styling" },
      { name: "HTML5 / CSS3", level: "Applied", tag: "Web Standards" },
      { name: "JavaScript", level: "Applied", tag: "ES6+ Web Logic" }
    ]
  },
  {
    category: "Backend & APIs",
    description: "High-performance asynchronous backends, REST APIs, and database ORMs.",
    skills: [
      { name: "FastAPI", level: "Applied", tag: "Async Python Backend" },
      { name: "Flask", level: "Applied", tag: "Microservices" },
      { name: "REST APIs", level: "Applied", tag: "Secure API Design" },
      { name: "Drizzle ORM", level: "Applied", tag: "Type-safe ORM" }
    ]
  },
  {
    category: "AI / ML & Data Science",
    description: "Machine learning frameworks, NLP toolkits, and cloud services.",
    skills: [
      { name: "TensorFlow", level: "Applied", tag: "Deep Learning" },
      { name: "Scikit-learn", level: "Applied", tag: "Machine Learning" },
      { name: "NLP Tools", level: "Applied", tag: "Text Processing" },
      { name: "Basic Cloud (AWS/GCP)", level: "Applied", tag: "Cloud Services" }
    ]
  },
  {
    category: "Databases & ORM",
    description: "Relational and document database management systems.",
    skills: [
      { name: "PostgreSQL", level: "Applied", tag: "Relational DB" },
      { name: "MySQL", level: "Applied", tag: "Relational DB" },
      { name: "MongoDB", level: "Applied", tag: "NoSQL DB" }
    ]
  },
  {
    category: "Hardware & IoT",
    description: "Microcontrollers, biological sensors, and hardware CAD/analytics tools.",
    skills: [
      { name: "ESP32", level: "Applied", tag: "Microcontroller" },
      { name: "Sensors", level: "Applied", tag: "MAX30102, RTD, DHT11" },
      { name: "Power BI", level: "Applied", tag: "Data Visualization" },
      { name: "SolidWorks", level: "Applied", tag: "CAD Modeling" }
    ]
  }
];

export const experienceData = [
  {
    id: "uptiq-ai",
    company: "Uptiq.ai",
    location: "Pune, India",
    role: "Software Developer Intern",
    period: "Feb 2026 – June 2026",
    badge: "Software Engineering Internship",
    description: "Contributed to core product development across commercial real estate AI lending platforms and document automation workflows.",
    highlights: [
      "Developed backend modules for an AI-powered Commercial Real Estate Loan Origination System using TypeScript, PostgreSQL, and Drizzle ORM for loan processing and credit workflows.",
      "Built full-stack features for Cedar Ground Flow real estate transaction platform using React, FastAPI, and PostgreSQL, implementing approval pipelines and secure REST APIs."
    ],
    technologies: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Drizzle ORM", "AWS/GCP"]
  }
];

export const projectsData = [
  {
    id: "langbridge",
    name: "LangBridge",
    badge: "AI • Multilingual Assistant • IEEE Published",
    shortDescription: "LangBridge is a multilingual AI voice-text assistant framework designed to comprehend queries in regional languages and formulate responses in user-selected target languages.",
    positioningHighlight: "CRITICAL DISTINCTION: LangBridge is NOT just a translation tool. It is an Edge-AI general-purpose multilingual framework that understands complex user questions in regional languages (e.g. Marathi, Hindi) and answers in user-chosen languages (e.g. English, Kannada).",
    
    publicationTitle: "LangBridge: An Edge-AI Based Real-Time Multilingual Voice Translation Framework",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11376767/authors",
    
    problem: "Most AI assistants fail or produce inaccurate responses when queried in regional Indian languages, or require users to manually translate questions into English.",
    solution: "LangBridge provides an end-to-end voice-text assistant framework that automatically detects input language, processes semantic intent using NLP, and generates natural answers in the user's preferred output language.",
    technology: "NLP (OpenAI API) • Speech Recognition (GSR API) • Machine Translation • gTTS • FastAPI • React • Tailwind CSS",
    whatIBuilt: "Designed the full-stack architecture, integrated speech-to-text (GSR API) and text-to-speech (gTTS), built the FastAPI backend, and developed the React user interface for 5 Indian regional languages.",
    impactAndRecognition: "Presented and published live at the 2025 International IEEE Bombay Conference on Computing and Communications (COMPUTINGCON), DY Patil University, Pune.",
    
    capabilities: [
      "Multilingual voice & text query comprehension across 5 Indian regional languages",
      "Automatic speech recognition (GSR API integration)",
      "Natural text-to-speech synthesis (gTTS integration)",
      "OpenAI API & Machine Translation integration",
      "High-performance FastAPI asynchronous backend",
      "React + Tailwind CSS responsive interface"
    ],
    supportedLanguages: ["English", "Hindi", "Marathi", "Kannada", "Telugu"],
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "gTTS", "GSR API", "Tailwind CSS"],
    githubUrl: "https://github.com/GayatriAnilGaneri",
    liveUrl: "https://ieeexplore.ieee.org/document/11376767/authors",
    demoType: "langbridge"
  },
  {
    id: "adhyatma-bandha",
    name: "Adhyatma Bandha",
    badge: "Healthcare • IoT • Wearable Technology • Patent Filed",
    shortDescription: "Adhyatma Bandha is a wearable health-monitoring wristband concept developed to support elderly and at-risk users by tracking vital biological parameters during mass gatherings and pilgrimage environments.",
    positioningHighlight: "EVOLUTION & PATENTS: Conceptualized for elderly and pilgrim safety during mass gatherings. Features a Quad-Alert LED system, QR-based patient health access, and real-time volunteer dashboards. Design Patent filed & Utility Patent in progress.",
    
    problem: "Elderly individuals and at-risk participants in crowded pilgrimage gatherings face heightened risks of unmonitored physiological distress and delayed emergency response.",
    solution: "A wearable biological monitoring hardware prototype that tracks crucial vitals (Heart Rate, SpO₂, Body Temperature) in real time, displays telemetry locally, alerts volunteers via LEDs/buzzers, and provides QR-based patient identification.",
    technology: "ESP32 • MAX30102 Sensor • RTD / DS18B20 Temp Sensor • DHT11 • OLED Display • Quad-Alert LEDs • Power BI • SolidWorks",
    whatIBuilt: "Programmed ESP32 embedded firmware in C, integrated biological sensors (MAX30102, RTD, DHT11), designed SolidWorks CAD enclosure, built Power BI telemetry dashboards, and created QR patient identification workflows.",
    impactAndRecognition: "AAKRUTI Global Finalist 2025 (Dassault Systèmes), Design Patent Filed (No. 468746-001), Utility Patent In Process, and selected for 2nd round of incubation at KIT Kolhapur with ₹9.75 Lakh funding support.",

    monitoredParameters: [
      { name: "Heart Rate (BPM)", sensor: "MAX30102 Biological Pulse Sensor", detail: "Real-time cardiac pulse monitoring" },
      { name: "Blood Oxygen (SpO₂ %)", sensor: "MAX30102 Optical Oximeter", detail: "Continuous arterial oxygen saturation tracking" },
      { name: "Body Temperature (°C)", sensor: "RTD / DS18B20 Biological Temp Sensor", detail: "High-precision biological core temperature measurement" }
    ],
    prototypeTech: [
      "ESP32 Microcontroller platform",
      "MAX30102 Pulse Oximetry & Heart Rate sensor",
      "RTD / DS18B20 Temperature sensor",
      "DHT11 Environmental Temp & Humidity sensor",
      "OLED Graphic telemetry display",
      "Quad-Alert LED system & Buzzer alert indicators",
      "Power BI Real-time volunteer dashboard",
      "QR Code Patient Identification for emergency responders",
      "SolidWorks CAD 3D Wristband Enclosure Design"
    ],
    technologies: ["ESP32", "MAX30102", "RTD Sensor", "DHT11", "Embedded C", "OLED Display", "Power BI", "SolidWorks"],
    githubUrl: "https://github.com/GayatriAnilGaneri",
    liveUrl: "https://ieeexplore.ieee.org/document/11376767/authors",
    demoType: "adhyatma"
  },
  {
    id: "cedar-ground-flow",
    name: "Cedar Ground Flow",
    badge: "Full-Stack • Real Estate Platform",
    shortDescription: "Full-stack module development for a commercial real estate transaction management platform at Uptiq.ai.",
    positioningHighlight: "Enterprise product module built during Software Developer Internship at Uptiq.ai.",
    problem: "Real estate transaction pipelines suffer from fragmented document workflows and manual approval friction.",
    solution: "Implemented automated closing processes, approval pipelines, document workflows, and secure APIs.",
    technology: "React • TypeScript • FastAPI • PostgreSQL • AWS/GCP",
    whatIBuilt: "Built end-to-end full-stack features using React frontend and FastAPI backend connected to PostgreSQL database.",
    impactAndRecognition: "Deployed as part of Uptiq.ai enterprise transaction product suite.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "AWS/GCP"],
    githubUrl: "https://github.com/GayatriAnilGaneri",
    liveUrl: "#"
  },
  {
    id: "vector-loan-origination",
    name: "Vector AI Loan Origination System",
    badge: "AI & Backend • Fintech",
    shortDescription: "AI-driven lending platform backend modules for Commercial Real Estate built at Uptiq.ai.",
    positioningHighlight: "Commercial lending backend architecture developed during internship at Uptiq.ai.",
    problem: "Commercial real estate loan processing requires complex financial spreading and manual credit workflows.",
    solution: "Engineered scalable backend modules for automated credit workflows, financial spreading, and loan processing.",
    technology: "TypeScript • PostgreSQL • Drizzle ORM",
    whatIBuilt: "Developed type-safe database schemas and backend services using Drizzle ORM and PostgreSQL.",
    impactAndRecognition: "Streamlined commercial real estate loan origination workflows.",
    technologies: ["TypeScript", "PostgreSQL", "Drizzle ORM"],
    githubUrl: "https://github.com/GayatriAnilGaneri",
    liveUrl: "#"
  }
];

export const achievementsData = [
  {
    id: "dassault-aakruti",
    title: "Finalist — Aakruti 2025",
    organization: "Dassault Systèmes",
    description: "Recognized as an AAKRUTI Global Finalist (Top 5 among Top 11 – Geo Finale, AAKRUTI Global 2025) for 'Adhyatma Bandha – A Smart Health & Safety Wristband' for design innovation, social impact, and sustainability at an international level.",
    badge: "Global Finalist",
    icon: "Trophy"
  },
  {
    id: "patents-filed",
    title: "Design Patent Filed & Utility Patent In Process",
    organization: "Indian Patent Office",
    description: "Design Patent Filed for 'Adhyatma Bandha – A Smart Health & Safety Wristband' (Application No. 468746-001). Utility Patent currently in progress.",
    badge: "Patents",
    icon: "Award"
  },
  {
    id: "kit-incubation",
    title: "Semifinalist — KIT Kolhapur / Incubation Centre",
    organization: "KIT Innovation & Incubation Center, Kolhapur",
    description: "Adhyatma Bandha selected for 2nd round of incubation at KIT Innovation & Incubation Center, Kolhapur, with funding support of ₹9.75 Lakh for product development and commercialization.",
    badge: "Incubation Funding",
    icon: "Award"
  },
  {
    id: "wisotech-winner",
    title: "1st Winner — WISOTECH Paper Presentation",
    organization: "National Level Technical Symposium 2025 (VVP, Solapur)",
    description: "Awarded 1st Prize in Paper Presentation on 'NLP-Trends in AI' at National Level Technical Symposium 2025 VVP Solapur.",
    badge: "1st Prize",
    icon: "Trophy"
  },
  {
    id: "ieee-publication",
    title: "IEEE Conference Publication — 2025",
    organization: "IEEE COMPUTINGCON (DY Patil University, Pune)",
    description: "Presented and published research paper titled 'LangBridge: An Edge-AI Based Real-Time Multilingual Voice Translation Framework' at the 2025 International IEEE Conference.",
    badge: "IEEE Publication",
    icon: "Globe",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11376767/authors"
  },
  {
    id: "national-athlete",
    title: "National Baseball & Softball Player",
    organization: "National Sports Board",
    description: "Represented state at national level and awarded Best Captain for year 2018 showcasing leadership and teamwork.",
    badge: "National Player & Captain",
    icon: "Bookmark"
  }
];

export const educationData = {
  role: "AI & Data Science Student",
  degree: "B. Tech (Artificial Intelligence & Data Science)",
  college: "N. K. Orchid College of Engineering & Technology, Solapur",
  university: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere",
  graduationYear: "2022 – 2026",
  gpa: "79.5% (CGPA 9.0)",
  hsc: "67.54% (A. D. Joshi Junior College, Solapur)",
  ssc: "90.40% (Indian Model School, Solapur)",
  keyAreas: [
    "Artificial Intelligence & Data Science Core Curriculum",
    "Machine Learning, TensorFlow & Scikit-Learn Pipelines",
    "Natural Language Processing (NLP) & Speech Interfaces",
    "Full-Stack Web Development (React, FastAPI, TypeScript)",
    "Embedded Systems & IoT Hardware Prototyping (ESP32)"
  ]
};
