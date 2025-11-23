import React from 'react';
import { Experience, Project, Education, SkillCategory, SocialLink, DraftingBoardIdea } from './types';
import { Github, Linkedin, Mail, Phone, Code, Terminal, Database, Cpu, Globe, Twitter, MessageCircle } from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+91-9405678249",
  email: "patiljay32145@gmail.com",
  location: "Maharashtra, India"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/jay-patil-4ab857326/", icon: <Linkedin className="w-5 h-5" /> },
  { platform: "GitHub", url: "https://github.com/JayPatil165", icon: <Github className="w-5 h-5" /> },
  { platform: "Twitter", url: "https://x.com/_JayPatil", icon: <Twitter className="w-5 h-5" /> },
  { platform: "Discord", url: "https://discord.gg/mZ2bpxEU", icon: <MessageCircle className="w-5 h-5" /> },
  { platform: "LeetCode", url: "https://leetcode.com/u/JayPatil165/", icon: <Code className="w-5 h-5" /> },
  { platform: "Email", url: "https://mail.google.com/mail/?view=cm&fs=1&to=patiljay32145@gmail.com&su=Hi%20Jay", icon: <Mail className="w-5 h-5" /> },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Vishwakarma Institute of Information Technology, Pune",
    score: "8.95 CGPA",
    duration: "Sept 2024 – Nov 2027 (Expected)",
    location: "Pune, Maharashtra"
  },
  {
    degree: "Diploma in Industrial Electronics",
    institution: "Walchand College of Engineering, Sangli",
    score: "88.86 %",
    duration: "Sept 2021 – Sept 2024",
    location: "Sangli, Maharashtra"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Power Control Systems",
    role: "Internship Trainee",
    duration: "Jun 2023 – Jul 2023",
    location: "Sangli, Maharashtra",
    description: [
      "Participated in an on-site hands-on training program at the manufacturing unit.",
      "Assisted in the design, manufacturing, assembly, and packaging of industrial control panels.",
      "Gained practical knowledge of control system logic and industrial automation standards."
    ]
  },
  {
    company: "IT Solutions",
    role: "Intern (Computer Networking)",
    duration: "Aug 2021 – May 2023",
    location: "Sangli, Maharashtra",
    description: [
      "Gained extensive knowledge in computer hardware, sales, and service maintenance.",
      "Developed a thorough understanding of networking fundamentals and troubleshooting.",
      "Assisted senior technicians in resolving client hardware and network issues."
    ]
  },
  {
    company: "IT Solutions",
    role: "Internship Trainee",
    duration: "Aug 2020 – Jul 2021",
    location: "Sangli, Maharashtra",
    description: [
      "Trained as a junior engineer with hands-on, on-site experience in electronics repair.",
      "Performed basic maintenance and diagnostics for electronic equipment."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IV Monitoring and Control System",
    tech: "Arduino, IoT, Sensors",
    linkType: "Link",
    duration: "Dec 2023 – Apr 2024",
    url: "https://github.com/JayPatil165/IV-Monitoring-and-Control",
    description: [
      "Designed and developed an automated IV fluid monitoring system to enhance patient safety.",
      "Utilized Arduino and electronic sensors to detect fluid levels and alert medical staff.",
      "Integrated hardware sensors with software logic for real-time monitoring."
    ]
  },
  {
    title: "Wildlife Call Management System",
    tech: "PyWhatKit, Plotly, TypeScript",
    linkType: "Link",
    duration: "Oct 2025 - Iterating",
    url: "https://github.com/JayPatil165/Wildlife-Call-Management-Dashboard",
    description: [
      "Built a comprehensive management system to track and record wildlife incidents and data.",
      "Designed a Python (PyWhatKit) based application to alert WhatsApp groups regarding the incident.",
      "Created an interface for data analysis including various graphs and Key Performance Indices with the Raw Data Table."
    ]
  },
  {
    title: "WildVision",
    tech: "Python, Computer Vision, Machine Learning",
    linkType: "Private Repo",
    duration: "Sep 2025 - Developing",
    description: [
      "Developing a centralized system for storing and managing wildlife records (images) all over the area.",
      "Aimed at creating an informative, analytical dashboard as well as a locator tool for the past images."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript"]
  },
  {
    category: "Web Development",
    skills: ["ReactJS", "NextJS", "HTML", "CSS", "Tailwind"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "Neo4j"]
  },
  {
    category: "IoT & Embedded",
    skills: ["8051 Microcontroller", "Arduino", "Control Panels"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Arduino IDE", "Proteus"]
  },
  {
    category: "Spoken Languages",
    skills: ["English", "Hindi", "Marathi"]
  }
];

export const DRAFTING_BOARD: DraftingBoardIdea[] = [
  {
    title: "WildVision Edge Enhancement",
    description: "Optimizing WildVision by moving processing from the cloud to edge devices using TinyML. This enhancement reduces latency for wildlife alerts and enables real-time processing on low-power IoT devices, making the system faster and more distributed.",
    status: "Designing",
    tech: ["TinyML", "C++", "Computer Vision", "Edge Computing", "Python"],
    collaborateEmail: "patiljay32145@gmail.com?subject=Interested%20in%20WildVision%20Edge%20Enhancement"
  },
  {
    title: "Hospital IoT Monitoring Platform",
    description: "A comprehensive IV monitoring and hospital management system. Multiple IoT-enabled IV stations report patient data in real-time. Hospital staff get a dedicated web dashboard and mobile app for live monitoring, alerts, and patient data analytics across the facility.",
    status: "Concept Phase",
    tech: ["Arduino", "IoT", "React", "Node.js", "WebSocket", "PostgreSQL"],
    collaborateEmail: "patiljay32145@gmail.com?subject=Interested%20in%20Hospital%20IoT%20Platform"
  },
  {
    title: "Universal ML Model Analyzer",
    description: "An intelligent analytics platform where users upload datasets and patterns. The system automatically trains and runs multiple machine learning models on the data, generates comparative analysis dashboards, and intelligently recommends the best-performing model with insights on why it performs best.",
    status: "Need Co-founder",
    tech: ["Python", "scikit-learn", "TensorFlow", "React", "FastAPI", "Plotly"],
    collaborateEmail: "patiljay32145@gmail.com?subject=Interested%20in%20ML%20Model%20Analyzer"
  }
];
