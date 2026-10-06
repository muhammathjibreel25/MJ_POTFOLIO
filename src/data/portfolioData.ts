export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  concept: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isExperimental?: boolean;
  isMobile?: boolean;
  features: string[];
  overview: string;
  problem: string;
  approach: string;
  whatILearned: string[];
  futureImprovements: string[];
  metricsOrHighlight?: string;
}

export interface FrontendWorkItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  workType: string;
  description: string;
  roleScope: string;
  technologies: string[];
  githubUrl?: string;
  features: string[];
  overview: string;
  keyContributions: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'project' | 'learning';
  experienceDescription: string;
  practicalUse: string;
  relatedProjects: string[];
}

export interface InternshipItem {
  id: string;
  company: string;
  role: string;
  status: string;
  description: string;
  technologies: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  isCurrent?: boolean;
}

export interface FocusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export const portfolioConfig = {
  // Personal Brand & Identity
  fullName: "Muhammath Jibreel",
  displayName: "Muhammath Jibreel",
  brandName: "Muhammath Jibreel",
  role: "Frontend Developer + Final-Year CSE Student",
  targetRole: "Frontend Developer • Entry-Level Roles",
  college: "Aalim Muhammed Salegh College of Engineering",
  degree: "B.E. Computer Science Engineering",
  graduationYear: "2027",
  status: "Final-Year Student",
  location: "Tamil Nadu, India",
  tagline: "Building responsive, clean web interfaces and practical software solutions.",
  bioShort: "Frontend Developer and final-year B.E. Computer Science Engineering student at Aalim Muhammed Salegh College of Engineering (graduating 2027). Passionate about clean UI design, responsive experiences, and learning through hands-on project building.",
  
  // Contact & Social Links
  contact: {
    email: "muhammathjibreel22@gmail.com",
    github: "https://github.com/muhammathjibreel25",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    locationDisplay: "Tamil Nadu, India",
    statusNote: "Mobile App Developer Intern at Zithtech · Open for Frontend & Entry-Level Roles",
  },

  // Resume Configuration
  resume: {
    viewUrl: "#",
    downloadUrl: "#",
    fileName: "Muhammath_Jibreel_Resume.pdf",
    isPlaceholder: true,
  }
};

// PERSONAL PROJECTS (Only Native Bites Farming & AI Driven Precision Agriculture)
export const projectsData: Project[] = [
  {
    id: "native-bites",
    number: "01",
    title: "Native Bites Farming",
    category: "Web Application / Farm Storefront",
    year: "2025",
    tagline: "Farm-to-table web project connecting consumers with authentic country chicken, eggs, and farm products.",
    description: "A farm-to-table web storefront developed for country chicken, eggs, and regional farm products. Features clean product cataloging, relational data handling, and an inquiry assistant powered by the Gemini API.",
    concept: "Connecting rural poultry and produce sellers directly with consumers through an accessible, straightforward web interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Gemini API"],
    liveUrl: "https://nativebites.neocities.org",
    githubUrl: "https://github.com/muhammathjibreel25/Native_Bites_Farming_Eshop",
    isExperimental: false,
    isMobile: false,
    features: [
      "Responsive product showcase for authentic country poultry and farm-fresh eggs",
      "Direct farm-to-table inquiry and streamlined ordering layout",
      "MySQL database structure handling product categories, inventory data, and inquiry requests",
      "Node.js & Express REST endpoints for application routing and data retrieval",
      "Integrated Gemini API to provide answers to customer farm and produce queries"
    ],
    overview: "Native Bites Farming was built as a practical web platform to showcase farm products including country chicken and fresh eggs, exploring full frontend structure along with a Node.js backend and MySQL database.",
    problem: "Small-scale local farmers often lack an accessible web storefront to showcase fresh farm goods directly to consumers.",
    approach: "Built a responsive frontend using semantic HTML, custom CSS, and vanilla JavaScript. Backed by a Node.js/Express server and MySQL database, with Google's Gemini API integrated for conversational farm inquiries.",
    whatILearned: [
      "Structuring relational database schemas for product inventory and inquiries in MySQL",
      "Writing RESTful endpoints and managing asynchronous server requests in Node.js and Express",
      "Connecting client-side interfaces with backend APIs and the Gemini API for conversational assistance",
      "Designing responsive, accessible e-commerce style layouts with clean CSS"
    ],
    futureImprovements: [
      "Implement user order history and automated email notifications",
      "Add interactive delivery area checks and farm sourcing details"
    ]
  },
  {
    id: "precision-agriculture",
    number: "02",
    title: "AI Driven Precision Agriculture",
    category: "AI Advisory / Web Application",
    year: "2025",
    tagline: "Website-focused agricultural advisory platform using the Gemini API for crop guidance and soil tips.",
    description: "An agricultural web application that utilizes the Gemini API to provide interactive guidance on crop conditions, soil characteristics, and seasonal cultivation inquiries.",
    concept: "Making agricultural advisory assistance easily accessible through a clean, web-based conversational interface.",
    technologies: ["JavaScript", "HTML", "CSS", "Gemini API", "REST APIs"],
    isExperimental: false,
    isMobile: false,
    githubUrl: "https://github.com/muhammathjibreel25/AI_Precision_Agriculture",
    features: [
      "Conversational agricultural query assistant powered by the Gemini API",
      "Contextual prompt handling for crop condition diagnosis and general soil guidance",
      "Readable guidance cards presenting advisory tips and management suggestions",
      "Lightweight, accessible client-side interface built with clean modern web standards"
    ],
    overview: "Developed as a web project to explore how generative AI can be applied to agriculture, enabling users to enter crop queries and receive contextual farming advice via the Gemini API.",
    problem: "Agricultural advisories and soil health information are often hard to navigate quickly, making an interactive web assistant useful for instant guidance.",
    approach: "Designed a clean web interface where users input crop symptoms and soil factors, sending structured prompts to the Gemini API to return practical, readable guidance.",
    whatILearned: [
      "Designing prompt templates for domain-focused queries with the Gemini API",
      "Handling API requests, asynchronous responses, and error states cleanly in JavaScript",
      "Structuring clean card-based UI layouts to display structured advisory outputs clearly"
    ],
    futureImprovements: [
      "Add multilingual support for regional agricultural terms",
      "Implement client-side bookmarking for commonly referenced crop guidelines"
    ]
  }
];

// FRONTEND DEVELOPMENT WORK (Separate from personal projects)
export const frontendWorkData: FrontendWorkItem = {
  id: "doctor-app-work",
  title: "Doctor App",
  tagline: "Frontend mobile UI and screen workflows built with React Native.",
  category: "Mobile UI / Frontend Development Work",
  year: "2025 – Present",
  workType: "Frontend Development Work (In Progress)",
  description: "Cross-platform mobile UI development for Doctor App, focusing on screen layouts, multi-step profile onboarding, and mobile authentication workflows.",
  roleScope: "Frontend Mobile UI Development — Screens, Navigation & Component States",
  technologies: ["React Native", "JavaScript", "Mobile Navigation", "Component Architecture"],
  githubUrl: "https://github.com/muhammathjibreel25/Doctor_App_ReactNative",
  features: [
    "Phone number verification flow with dedicated 4-digit OTP input interface and error states",
    "Doctor consultation directory with specialization listings and scheduling UI cards",
    "Patient profile setup, onboarding screen states, and appointment confirmation screens",
    "Touch-friendly component architecture following cross-platform mobile patterns"
  ],
  overview: "Doctor App is frontend development work I am actively building in React Native. My focus is on mobile UI development, component architecture, screen navigation workflows, and authentication interfaces.",
  keyContributions: [
    "Developing reusable React Native components for form inputs, status cards, and action buttons",
    "Structuring mobile navigation stacks and passing parameters between onboarding and booking screens",
    "Managing form states, input validation logic, and responsive touch layouts across mobile screens"
  ]
};

// CURRENT INTERNSHIP / WORK EXPERIENCE
export const internshipData: InternshipItem = {
  id: "zithtech-internship",
  company: "Zithtech",
  role: "Mobile App Developer Intern",
  status: "Present",
  description: "Currently contributing to mobile application development and gaining practical experience with React Native and mobile UI development.",
  technologies: ["React Native", "Mobile UI Development"]
};

export const skillsData: SkillItem[] = [
  // CORE SKILLS
  {
    name: "HTML",
    category: "core",
    experienceDescription: "Semantic document structuring, accessible landmark elements, forms, and clean DOM hierarchy.",
    practicalUse: "Built semantic, accessible web layouts for Native Bites Farming, Precision Agriculture, and web portfolio.",
    relatedProjects: ["Native Bites Farming", "AI Driven Precision Agriculture"]
  },
  {
    name: "CSS",
    category: "core",
    experienceDescription: "Modern CSS layout systems (Flexbox, Grid), responsive media queries, custom properties, and smooth UI transitions.",
    practicalUse: "Designed responsive layouts, dark aesthetics, and clean typography across web projects.",
    relatedProjects: ["Native Bites Farming", "Portfolio Platform"]
  },
  {
    name: "JavaScript",
    category: "core",
    experienceDescription: "Modern ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, API interactions, and modular code.",
    practicalUse: "Implemented dynamic UI logic, asynchronous API handling, client-side state, and interactive components.",
    relatedProjects: ["Native Bites Farming", "AI Driven Precision Agriculture", "Doctor App (Frontend Work)"]
  },
  {
    name: "Java",
    category: "core",
    experienceDescription: "Object-oriented programming (OOP), class hierarchies, data structures, and algorithmic logic.",
    practicalUse: "Studied through core university computer science coursework, algorithmic exercises, and OOP principles.",
    relatedProjects: ["Academic CS Curriculum", "Data Structures Practice"]
  },

  // PROJECT / ADDITIONAL EXPERIENCE
  {
    name: "React Native",
    category: "project",
    experienceDescription: "Cross-platform mobile UI development, component structuring, mobile navigation stacks, and touch-friendly layouts.",
    practicalUse: "Building mobile UI screens, OTP verification flows, and doctor consultation interfaces for Doctor App.",
    relatedProjects: ["Doctor App (Frontend Work)"]
  },
  {
    name: "Node.js",
    category: "project",
    experienceDescription: "Server-side JavaScript runtime environment, asynchronous event handling, and modular backend scripts.",
    practicalUse: "Developed backend server processes and application routing for Native Bites Farming.",
    relatedProjects: ["Native Bites Farming"]
  },
  {
    name: "Express",
    category: "project",
    experienceDescription: "Web routing framework for Node.js, RESTful endpoint structure, and basic request/response handling.",
    practicalUse: "Built REST API routes for product inquiries and catalog retrieval in Native Bites Farming.",
    relatedProjects: ["Native Bites Farming"]
  },
  {
    name: "MySQL",
    category: "project",
    experienceDescription: "Relational database schema design, basic table relationships, and SQL querying.",
    practicalUse: "Designed tables and executed queries for product inventory and customer inquiries in Native Bites Farming.",
    relatedProjects: ["Native Bites Farming"]
  },
  {
    name: "Gemini API",
    category: "project",
    experienceDescription: "Integrating Google's Gemini models via REST endpoints, structured prompts, and conversational responses.",
    practicalUse: "Implemented customer inquiry support in Native Bites Farming and agricultural advisory prompts in Precision Agriculture.",
    relatedProjects: ["Native Bites Farming", "AI Driven Precision Agriculture"]
  },
  {
    name: "Python Basics",
    category: "project",
    experienceDescription: "Core Python syntax, foundational data structures, script execution, and problem solving basics.",
    practicalUse: "Explored programming fundamentals and introductory computational problem solving.",
    relatedProjects: ["Academic CS Studies", "Introductory Scripts"]
  },
  {
    name: "UI/UX / Designing",
    category: "project",
    experienceDescription: "User-centric interface design, responsive layouts, visual hierarchy, spacing systems, and clean typography.",
    practicalUse: "Crafting modern, accessible web layouts and touch-friendly mobile interfaces across projects.",
    relatedProjects: ["Portfolio Platform", "Doctor App (Frontend Work)", "Native Bites Farming"]
  },

  // CURRENTLY LEARNING
  {
    name: "TypeScript",
    category: "learning",
    experienceDescription: "Currently learning TypeScript — static typing, interfaces, type annotations, and gradually applying it to frontend projects.",
    practicalUse: "Actively exploring TypeScript as a next step in frontend development to write more robust and maintainable code.",
    relatedProjects: ["Active Learning"]
  },
  {
    name: "Backend for React Native",
    category: "learning",
    experienceDescription: "Currently learning backend development concepts to better support React Native applications — API integration, server-side basics, and authentication flows.",
    practicalUse: "Learning alongside React Native mobile development to understand full application flow from frontend to backend.",
    relatedProjects: ["Doctor App (Frontend Work)", "Active Learning"]
  }
];

export const journeyTimeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Commenced B.E. Computer Science Engineering",
    subtitle: "Aalim Muhammed Salegh College of Engineering",
    description: "Began undergraduate engineering studies in Computer Science. Built foundations in computational logic, programming concepts, and computer science basics.",
    focus: ["Computer Science Fundamentals", "C / Programming Basics", "Problem Solving Logic"]
  },
  {
    year: "2024",
    title: "Web Foundations & Object-Oriented Java",
    subtitle: "Core Frontend & Java Principles",
    description: "Strengthened programming with Object-Oriented Java. Began crafting web interfaces using semantic HTML, CSS, and modern JavaScript, discovering a strong interest in frontend development.",
    focus: ["Java OOP Principles", "Semantic HTML & Responsive CSS", "Modern JavaScript & DOM Logic"]
  },
  {
    year: "2025",
    title: "Practical Web Projects & Applied AI",
    subtitle: "Native Bites Farming & Precision Agriculture",
    description: "Applied skills to practical projects. Built Native Bites Farming with Node.js and MySQL, developed an AI-assisted agricultural advisory web app with the Gemini API, and began frontend mobile UI development on Doctor App.",
    focus: ["Responsive Frontend Layouts", "Node.js & MySQL Schemas", "Gemini API Integration", "React Native Mobile UI"]
  },
  {
    year: "2026",
    title: "Final-Year B.E. CSE & Frontend Focus",
    subtitle: "Active Phase (Present)",
    description: "Currently in my final year of B.E. Computer Science Engineering. Interning as Mobile App Developer at Zithtech, deepening JavaScript and frontend skills, learning TypeScript, expanding React Native and backend knowledge, and preparing for entry-level software opportunities.",
    focus: ["Final-Year B.E. CSE", "Internship @ Zithtech", "Learning TypeScript", "React Native & Backend", "Career Preparation"],
    isCurrent: true
  },
  {
    year: "2027",
    title: "B.E. CSE Graduation",
    subtitle: "Degree Completion Milestone",
    description: "Graduation from Aalim Muhammed Salegh College of Engineering with B.E. in Computer Science Engineering. Prepared to contribute to engineering teams as a frontend developer.",
    focus: ["B.E. CSE Graduation", "Frontend Development", "Continuous Practical Learning"]
  }
];

export const currentFocusList: FocusItem[] = [
  {
    id: "focus-1",
    number: "01",
    title: "Strengthening JavaScript & Frontend Development",
    description: "Deepening knowledge of modern JavaScript, asynchronous patterns, modular code, and building responsive, accessible user interfaces.",
    status: "Active Daily",
    tags: ["JavaScript", "HTML / CSS", "Clean UI", "Responsive Design"]
  },
  {
    id: "focus-2",
    number: "02",
    title: "Learning TypeScript",
    description: "Currently learning TypeScript — exploring static typing, interfaces, and type annotations to write more robust frontend code.",
    status: "Currently Learning",
    tags: ["TypeScript", "Static Typing", "Frontend", "Currently Learning"]
  },
  {
    id: "focus-3",
    number: "03",
    title: "React Native & Mobile UI Development",
    description: "Building cross-platform mobile UI screens, OTP authentication flows, and component states through practical internship and project work.",
    status: "In Progress",
    tags: ["React Native", "Mobile UI", "Screen Workflows", "Components"]
  },
  {
    id: "focus-4",
    number: "04",
    title: "Backend Development for React Native",
    description: "Learning backend development concepts to better connect React Native applications with server-side APIs, databases, and authentication flows.",
    status: "Currently Learning",
    tags: ["Backend Learning", "API Integration", "Currently Learning", "Full Flow"]
  },
  {
    id: "focus-5",
    number: "05",
    title: "Responsive UI/UX & Career Preparation",
    description: "Refining visual hierarchy, responsive layouts, and design consistency while preparing for entry-level frontend developer opportunities graduating in 2027.",
    status: "Active Goal",
    tags: ["UI/UX", "Responsive Design", "Entry-Level Roles", "Class of 2027"]
  }
];

export const terminalCommands: Record<string, string | string[]> = {
  whoami: [
    "Muhammath Jibreel",
    "Role: Frontend Developer + Final-Year CSE Student",
    "Degree: B.E. Computer Science Engineering",
    "College: Aalim Muhammed Salegh College of Engineering",
    "Graduation: 2027",
    "Location: Tamil Nadu, India",
    "Current: Mobile App Developer Intern @ Zithtech",
    "Focus: Clean, responsive user interfaces and practical mobile/web applications."
  ],
  skills: [
    "CORE SKILLS: HTML, CSS, JavaScript, Java",
    "PROJECT / EXPERIENCE: React Native, Node.js, Express, MySQL, Gemini API, Python Basics, UI/UX / Designing",
    "CURRENTLY LEARNING: TypeScript, Backend Development for React Native"
  ],
  projects: [
    "PERSONAL PROJECTS:",
    "1. Native Bites Farming — Farm-to-table web platform (HTML, CSS, JS, Node.js, Express, MySQL, Gemini API)",
    "   Live: https://nativebites.neocities.org",
    "   Repo: https://github.com/muhammathjibreel25/Native_Bites_Farming_Eshop",
    "2. AI Driven Precision Agriculture — Agricultural advisory web application (JS, Gemini API)",
    "   Repo: https://github.com/muhammathjibreel25/AI_Precision_Agriculture",
    "",
    "FRONTEND DEVELOPMENT WORK (In Progress):",
    "• Doctor App — Mobile healthcare UI & OTP authentication workflow (React Native)",
    "  Repo: https://github.com/muhammathjibreel25/Doctor_App_ReactNative"
  ],
  focus: [
    "Current Learning Direction:",
    "• Strengthening JavaScript & modern frontend development",
    "• Learning TypeScript (currently exploring static typing)",
    "• Responsive UI/UX and clean design principles",
    "• React Native mobile screen workflows",
    "• Learning backend development for React Native applications",
    "• Career preparation for entry-level frontend roles"
  ],
  experience: [
    "CURRENT INTERNSHIP:",
    "• Mobile App Developer Intern — Zithtech (Present)",
    "  Contributing to mobile application development with React Native.",
    "",
    "FRONTEND DEVELOPMENT WORK:",
    "• Doctor App — Mobile healthcare UI & OTP authentication workflow (React Native)"
  ],
  learning: [
    "Approach: Learning by building practical projects.",
    "Writing clean code, debugging real challenges, and refining user interfaces.",
    "Currently interning at Zithtech as a Mobile App Developer Intern.",
    "Preparing for entry-level software opportunities as a 2027 CSE graduate."
  ],
  contact: [
    "Email: muhammathjibreel22@gmail.com",
    "GitHub: https://github.com/muhammathjibreel25",
    "LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    "Location: Tamil Nadu, India",
    "Status: Open for frontend developer and entry-level opportunities."
  ],
  clear: "CLEAR",
  help: [
    "Available commands:",
    "  whoami      - Personal identity, college, degree, and graduation timeline",
    "  skills      - Core skills and project/learning experience",
    "  projects    - Personal projects and frontend development work",
    "  experience  - Current internship and work experience",
    "  focus       - Present learning direction and focus areas",
    "  learning    - How I learn and approach software development",
    "  contact     - Direct channels to reach me",
    "  help        - Show available commands",
    "  clear       - Clear terminal screen"
  ]
};

