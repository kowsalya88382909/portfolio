export const personalInfo = {
  name: "Gowsalya M",
  title: "Full Stack Developer",
  subtitle: "Aspiring Full Stack Developer",
  tagline: "Building responsive, real-world web & mobile applications with React, Python & REST APIs.",
  location: "Chennai, Tamil Nadu",
  email: "gowsalyam@ptleecncet.com",
  phone: "+91 88382 96909",
  linkedin: "https://linkedin.com/in/kowsalya09",
  github: "https://github.com/kowsalya88382909",
  about: `I'm an aspiring Full Stack Developer with hands-on internship experience in web and mobile application development. I love building responsive user interfaces and integrating APIs to create seamless user experiences.

My internship at Circular Carbon Technologies gave me real-world exposure to React.js, React Native, .NET 8, and Flask — working on production-grade applications from day one.

I believe in writing clean, maintainable code and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.`,
  highlights: [
    { label: "Technologies", value: "10+" },
    { label: "Projects Built", value: "5+" },
    { label: "Internship", value: "5 Months" },
    { label: "CGPA", value: "8.4/10" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React.js", level: 85 },
      { name: "React Native", level: 75 },
      { name: "JavaScript", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: ".NET / C#", level: 65 },
      { name: "Flask (Python)", level: 72 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      { name: "GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 78 },
      { name: "Figma", level: 65 },
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Circular Carbon Technologies",
    type: "Internship",
    period: "Jan 2026 – May 2026",
    location: "Chennai, India",
    description:
      "Worked on frontend development using React.js and React Native for web and mobile applications in a real-world production environment.",
    responsibilities: [
      "Worked on frontend development using React.js and React Native for web and mobile applications.",
      "Developed responsive user interfaces using JavaScript and Tailwind CSS.",
      "Integrated REST APIs and collaborated with backend services using .NET 8.",
      "Worked on real-world application workflows and frontend-backend integration.",
      "Gained practical exposure to application architecture, API handling, and database workflows.",
    ],
    achievements: [
      "Delivered 2 production-ready features within the internship period.",
      "Improved UI responsiveness across mobile and web platforms.",
      "Received positive feedback for clean code and quick learning curve.",
    ],
    tech: ["React.js", "React Native", "JavaScript", "Tailwind CSS", ".NET 8", "REST APIs", "PostgreSQL", "Postman", "Figma", "GitHub"],
  },
];

export const projects = [
  {
    title: "Printing Management Web Application",
    category: "Full-Stack Development",
    status: "Completed",
    emoji: "🖨️",
    description:
      "A full-featured printing management web application for workflow handling, built with React.js and integrated with .NET backend services.",
    details: [
      "Developed a printing management web application for workflow handling.",
      "Built responsive frontend interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Integrated REST APIs and collaborated with .NET backend services.",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", ".NET", "REST APIs"],
    role: "Frontend Developer",
    duration: "2 months",
  },
  {
    title: "Insurance Mobile Application",
    category: "Mobile Development",
    status: "Completed",
    emoji: "📱",
    description:
      "A responsive mobile application for insurance workflow management, built with React Native and integrated with REST APIs.",
    details: [
      "Developed responsive mobile application interfaces using React.js and Tailwind CSS.",
      "Integrated REST APIs for application functionality and workflow management.",
    ],
    tech: ["React Native", "React.js", "Tailwind CSS", "REST APIs"],
    role: "Mobile Developer",
    duration: "1.5 months",
  },
  {
    title: "AI-Powered Coding Assistant",
    category: "AI & Python",
    status: "Completed",
    emoji: "🤖",
    description:
      "An AI chatbot built with Python and Flask that provides coding guidance and beginner-friendly programming support.",
    details: [
      "Developed an AI chatbot using Python and Flask for beginner programming learners.",
      "Implemented AI-based coding guidance and beginner-friendly learning support.",
    ],
    tech: ["Python", "Flask", "REST APIs", "AI/ML"],
    role: "Full Stack Developer",
    duration: "1 month",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "P.T. Lee Chengalvaraya Naicker College of Engineering and Technology",
    affiliation: "Anna University Affiliated",
    location: "Kanchipuram",
    period: "2022 – 2026",
    cgpa: "8.4 / 10",
    status: "Pursuing",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Operating Systems",
      "Software Engineering",
      "Artificial Intelligence",
    ],
    achievements: [
      "Maintaining 8.4 CGPA throughout the program.",
      "Secured internship at Circular Carbon Technologies in 3rd year.",
      "Built multiple full-stack projects during academic tenure.",
    ],
  },
];

export const certifications = [
  {
    title: "Full Stack Development Internship",
    issuer: "Circular Carbon Technologies",
    year: "2026",
    tags: ["React.js", "React Native", ".NET", "REST APIs"],
  },
  {
    title: "Data Science",
    issuer: "Eagle HiTech Pvt",
    year: "2025",
    tags: ["Python", "Data Analysis", "Machine Learning"],
  },
  {
    title: "Python Programming Certification",
    issuer: "Online Platform",
    year: "2024",
    tags: ["Python", "Programming", "OOP"],
  },
];

export const languages = ["English", "Tamil"];

export const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];
