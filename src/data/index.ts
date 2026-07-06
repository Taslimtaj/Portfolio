export const personalInfo = {
  name: "Taslim",
  title: "Backend Engineer, DevOps & AI",
  tagline:
    "I build scalable backend systems, automate deployments, and integrate Agentic AI and LLM-powered workflows into production platforms.",
  email: "tashuguddadamane@gmail.com",
  github: "https://github.com/Taslimtaj",
  linkedin: "https://www.linkedin.com/in/taslim-guddadamane-618362b5",
  location: "India",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const overview = {
  label: "Introduction",
  heading: "Overview.",
  description:
    "I'm a Backend Engineer and DevOps professional at Ola, where I build high-throughput backend systems, manage cloud infrastructure, and integrate Agentic AI and LLM-based solutions into production workflows. I work with RAG pipelines, multi-agent orchestration, and prompt-driven automation alongside Grafana, Prometheus, Java, Spring Boot, and cloud-native tooling. Previously at Test Yantra as an SDET, I developed robust test automation practices. I hold a Master's in Computer Science.",
  highlights: [
    { title: "Backend", icon: "server" },
    { title: "DevOps", icon: "cloud" },
    { title: "Agentic AI", icon: "bot" },
    { title: "LLM / RAG", icon: "sparkles" },
  ],
};

export const experiences = [
  {
    role: "Backend Engineer & DevOps",
    company: "Ola",
    period: "Feb 2022 - Present",
    bullets: [
      "Built and maintained scalable backend services supporting high-traffic ride-hailing and mobility platforms.",
      "Designed REST APIs and microservices with a focus on reliability, performance, and clean architecture.",
      "Managed CI/CD pipelines, cloud deployments, and infrastructure automation for zero-downtime releases.",
      "Set up observability with Grafana dashboards, Prometheus metrics, and alerting for production health monitoring.",
      "Integrated LLM-powered services and Agentic AI workflows for intelligent automation, semantic search, and multi-step task orchestration.",
      "Built RAG pipelines with vector embeddings and retrieval layers to enable context-aware AI responses over internal data.",
      "Collaborated with cross-functional teams to optimize system performance and reduce operational incidents.",
      "Implemented logging, tracing, and DevOps best practices to improve production stability and incident response.",
    ],
  },
  {
    role: "SDET (Software Development Engineer in Test)",
    company: "Test Yantra",
    period: "2019 - 2022",
    bullets: [
      "Designed and implemented automated test frameworks for API, UI, and integration testing.",
      "Built end-to-end test suites to improve release quality and reduce manual regression effort.",
      "Collaborated with development teams to shift-left testing and catch defects early in the SDLC.",
      "Maintained test pipelines in CI/CD workflows for continuous quality validation.",
      "Documented test strategies, test cases, and defect reports to support agile delivery.",
    ],
  },
  {
    role: "Master in Computer Science",
    company: "University",
    period: "2022",
    bullets: [
      "Completed postgraduate studies in computer science with a focus on software engineering and systems.",
      "Strengthened foundations in algorithms, distributed systems, advanced programming, and AI/ML concepts.",
      "Explored LLM architectures, retrieval-augmented generation, and agent-based system design.",
      "Applied academic learning to real-world backend development and quality engineering roles.",
    ],
  },
];

export const skills = [
  { name: "Java", category: "Languages" },
  { name: "Spring Boot", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "Kafka", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Maven", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Linux", category: "Tools" },
  { name: "JUnit", category: "Testing" },
  { name: "Selenium", category: "Testing" },
  { name: "Test Automation", category: "Testing" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Marathon", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Grafana", category: "DevOps" },
  { name: "Prometheus", category: "DevOps" },
  { name: "LLMs", category: "AI / Agentic" },
  { name: "Agentic AI", category: "AI / Agentic" },
  { name: "RAG", category: "AI / Agentic" },
  { name: "LangChain", category: "AI / Agentic" },
  { name: "LangGraph", category: "AI / Agentic" },
  { name: "Prompt Engineering", category: "AI / Agentic" },
  { name: "Vector Embeddings", category: "AI / Agentic" },
  { name: "MCP", category: "AI / Agentic" },
  { name: "OpenAI API", category: "AI / Agentic" },
];

export const projects = [
  {
    title: "Agentic AI Platform",
    description:
      "Intelligent automation platform using Agentic AI and LLM orchestration. Combines multi-agent workflows, RAG over internal knowledge bases, and tool-calling via MCP for context-aware, multi-step task execution.",
    tags: ["Agentic AI", "LLM", "RAG", "LangGraph"],
    github: "https://github.com/Taslimtaj",
    live: "",
  },
  {
    title: "LLM-Powered Semantic Search",
    description:
      "Backend service enabling natural language querying over structured and unstructured data using vector embeddings, retrieval-augmented generation, and prompt-engineered LLM responses.",
    tags: ["LLM", "RAG", "Vector DB", "Python"],
    github: "https://github.com/Taslimtaj",
    live: "",
  },
  {
    title: "Employee Database",
    description:
      "Backend employee management system with a Spring Boot REST API and web UI. Supports CRUD operations, input validation, error handling, and unit tests.",
    tags: ["Java", "Spring Boot", "REST", "Maven"],
    github: "https://github.com/Taslimtaj/EmplyeeDatabase",
    live: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth scroll animations, responsive design, and a contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Taslimtaj",
    live: "",
  },
];

export const testimonials = [
  {
    quote:
      "Taslim demonstrates strong problem-solving skills across backend, DevOps, and Agentic AI integration. A reliable team member who ships LLM-powered features and production systems with equal rigor.",
    name: "Team Lead",
    role: "Engineering Manager",
  },
  {
    quote:
      "Great collaborator with solid backend and DevOps skills — CI/CD, monitoring with Grafana and Prometheus, and Spring Boot services. Consistently ships quality work.",
    name: "Senior Developer",
    role: "Software Engineer",
  },
  {
    quote:
      "Showed exceptional dedication during our project work. Strong programming fundamentals and a proactive attitude throughout the development process.",
    name: "Project Mentor",
    role: "University Faculty",
  },
];
