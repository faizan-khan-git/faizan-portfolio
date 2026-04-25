export const profile = {
  name: "Md Faizan Khan",
  phone: "+91-9631434648",
  email: "faizan.khan23b@iiitg.ac.in",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  location: "Patna, Bihar",
  headline:
    "B.Tech Computer Science student at IIIT Guwahati with hands-on backend, full-stack, cloud, and GenAI project experience.",
  summary:
    "B.Tech. Computer Science student at IIIT Guwahati (2027) with a strong foundation in Data Structures, Algorithms (DSA), and Software Engineering. Experienced in building scalable systems and conducting technical problem-solving to develop high-performance solutions. Eager to apply engineering rigor and algorithmic optimization to contribute to scientific advancement and intelligent systems.",
};

export const education = {
  institute: "Indian Institute of Information Technology, Guwahati",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  timeline: "Aug. 2023 - May 2027 (Expected)",
  location: "Guwahati, India",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "FastAPI",
      "LangChain",
      "jQuery",
      "Bootstrap",
      "JSP",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "ChromaDB (Vector Store)"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "AWS Fundamentals", "Linux CLI"],
  },
  {
    title: "Core Specialties",
    items: [
      "GenAI",
      "RAG Pipelines",
      "Local Embeddings",
      "Algorithmic Optimization",
      "RESTful APIs",
      "Performance Optimization",
      "OOD",
      "Multi-threading",
    ],
  },
];

export const experiences = [
  {
    company: "Emvo AI",
    role: "Backend Developer Intern",
    location: "Remote",
    timeline: "Apr. 2026 - Present",
    points: [
      "Designed and developed scalable server-side logic and RESTful APIs using FastAPI to support core application functionalities.",
      "Managed and optimized backend database structures, significantly improving data retrieval efficiency.",
      "Collaborated with cross-functional teams in a remote environment to ensure seamless integration between frontend and backend systems.",
      "Adhered to strict security and confidentiality protocols while handling sensitive project documents and software assets.",
    ],
  },
  {
    company: "Emigro Consulting IT",
    role: "Software development engineer - Intern",
    location: "Doha, Qatar (Remote)",
    timeline: "Dec. 2025 - Mar. 2026",
    points: [
      "Developing responsive web interfaces using React.js and Next.js, focusing on seamless integration with backend RESTful APIs.",
      "Optimizing frontend-to-backend communication and application state management for enterprise-level digital solutions.",
      "Designed and managed scalable AWS cloud infrastructure (ECS, SQS, EventBridge) with CI/CD pipelines, achieving 99.9% uptime.",
      "Collaborated within an agile team to deliver features, perform code reviews, and contribute to all phases of the software development lifecycle.",
    ],
  },
];

export const projects = [
  {
    title: "Full Stack RAG Chatbot",
    stack: "FastAPI, Gemini 2.0, LangChain, React, ChromaDB",
    points: [
      "Engineered a production-ready Retrieval Augmented Generation (RAG) pipeline to process and chat with PDF documents using Gemini 2.0 Flash.",
      "Integrated local sentence-transformer embeddings (all-MiniLM-L6-v2) to ensure zero API costs and unlimited document processing.",
      "Developed a robust FastAPI backend with persistent ChromaDB storage and a modern React/Tailwind frontend for seamless document interaction.",
    ],
  },
  {
    title: "Donate Life - Blood Donation Platform",
    stack: "React.js, Node.js, Express.js, MongoDB",
    points: [
      "Developed and deployed a full-stack MERN application to facilitate blood donation requests and hospital resource tracking, integrating real-time data for nearest blood banks, hospitals, and available ICU beds.",
      "Engineered a secure authentication system using bcryptjs and jsonwebtoken for session management, and automated deployments with AWS S3, CodeBuild, and GitHub Actions CI/CD pipelines to ensure seamless production updates and achieving 99.4% uptime.",
    ],
  },
];
