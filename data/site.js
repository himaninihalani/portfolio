// All portfolio content lives here. Edit this file, the pages update automatically.

export const site = {
  name: "Himani Nihalani",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  url: "https://himaniportfolio.xyz",
  intro:
    "Third-year Computer Science (AI) student who builds modern web applications and solves problems through code.",
  links: {
    github: "https://github.com/himaninihalani",
    linkedin: "https://www.linkedin.com/in/himani-nihalani-346291326/",
    resume: "/Himani_Nihalani_Resume.pdf",
  },
};

export const summary =
  "I am a third-year Computer Science (AI) student passionate about building modern web applications and solving problems through code. Right now I am strengthening my foundations in Data Structures & Algorithms while developing projects with modern web technologies.";

export const results = [
  {
    place: "3rd",
    event: "META MIND Hackathon 2025",
    detail: "Competed as part of Team TheUnderdogs",
  },
  {
    place: "8th",
    event: "HackStorm Hackathon",
    detail: "Out of 300 teams in a 24-hour competition",
  },
  {
    place: "3rd",
    event: "Smart India Hackathon (SIH)",
    detail: "College round, Hardware category",
  },
];

export const resultsNote =
  "In every hackathon I worked with a team to design solutions, build prototypes, and present ideas under strict time constraints.";

export const experience = [
  {
    period: "1.5 months",
    title: "Intern",
    org: "STPI (Software Technology Parks of India)",
    points: [
      "Recently completed a 1.5-month internship at STPI.",
      "Built the PaperSetu conference management system as part of the internship.",
    ],
  },
  {
    period: "2024 – 2026",
    title: "Vice Captain & Captain",
    org: "WISE (Women in Science and Engineering) Club, Students' Council · Poornima Institute of Engineering & Technology",
    points: [
      "Led and coordinated student-led technical and community initiatives within the WISE (Women in Science and Engineering) Club.",
      "Assisted in organizing technical events, workshops, and collaborative activities for students.",
      "Worked closely with the student council team to improve participation and engagement.",
      "Developed leadership, teamwork, and communication skills while managing club responsibilities.",
    ],
  },
  {
    period: "30 days",
    title: "Industrial IoT Training",
    org: "CSIR CEERI, Jaipur · RIICO Skill Development Initiative",
    points: [
      "Completed a Skill Development Training Program on Advanced Industrial Internet of Things (IIoT).",
      "Gained hands-on exposure to industrial automation systems and IoT architecture.",
      "Learned how connected devices are used in real-world industrial monitoring and control systems.",
      "Explored practical applications of IoT technologies in manufacturing and industrial environments.",
    ],
  },
];

export const skills = [
  { label: "Languages", items: ["C", "C++", "Java", "Python"] },
  { label: "Frontend", items: ["HTML", "CSS", "Next.js (React)"] },
  { label: "Tools", items: ["Git", "GitHub"] },
  {
    label: "Currently learning",
    items: ["Data Structures & Algorithms", "Problem Solving Patterns"],
  },
];

export const competencies = [
  "Problem Solving",
  "Technical Leadership",
  "Secure Coding Practices",
  "Performance Optimization",
];

export const education = {
  degree: "Bachelor of Technology (B.Tech), Computer Science – AI",
  school: "Poornima Institute of Engineering & Technology",
  period: "2024 – 2028",
};

export const projects = [
  {
    name: "Python Voice Assistant",
    description:
      "A voice assistant that understands spoken commands through LLM-powered intent understanding. It uses a hybrid design: a fast local intent matcher handles known commands, with an LLM fallback for everything else. It has a growing set of tools and a data logging pipeline that collects interactions, aimed at fine-tuning a small open-source model (e.g. Llama 3.2 3B) on my own data.",
    tech: ["Python", "Groq API", "llama-3.3-70b-versatile"],
  },
  {
    name: "PaperSetu, Conference Management System",
    description:
      "A team-built, full-stack conference management system with an integrated payment gateway, made during my internship. It is structured as three Django apps (accounts, conference, dashboard) and runs on PostgreSQL in production on Render, with SQLite for local development. As Database Engineer I designed the schema, the custom User model and the Conference and Paper models, wrote the Django ORM data layer and CRUD operations, and handled module testing, bug-fixing and migration diagnostic scripts.",
    tech: ["Django", "SQLite", "PostgreSQL", "Render"],
  },
];
