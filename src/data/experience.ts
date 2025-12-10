export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "teacher",
    title: "Teacher",
    company: "Shree Mayuresh Tutorials, Kalyan",
    period: "May 2023 - Present",
    description: "Conducting supervised learning sessions and implementing effective classroom management techniques to foster positive learning environments.",
    responsibilities: [
      "Conduct supervised learning sessions to enhance learning experiences",
      "Implement effective classroom management techniques",
      "Assess student performance through tests and assignments",
      "Specialize in data analysis education for effective communication strategies"
    ]
  },
  {
    id: "design-head",
    title: "Design Co-Head",
    company: "DevOps Club, APSIT",
    period: "September 2024 - Present",
    description: "Leading visual design strategy for club events, workshops, and digital presence while establishing consistent brand identity.",
    responsibilities: [
      "Lead visual design strategy for club events, workshops, and digital presence",
      "Create branding assets including posters, presentations, and social media content",
      "Collaborate with core team members to establish consistent brand identity"
    ]
  },
  {
    id: "event-head",
    title: "Event Management Head",
    company: "Cyber Security Club, APSIT",
    period: "September 2024 - Present",
    description: "Organizing and managing multiple college-level technical events including cybersecurity workshops and seminars.",
    responsibilities: [
      "Organize and manage multiple college-level technical events",
      "Handle logistics, promotion, and execution for cybersecurity workshops",
      "Coordinate with cross-functional teams for smooth operations and impactful outcomes"
    ]
  },
  {
    id: "aiml-member",
    title: "AIML Club Member",
    company: "APSIT",
    period: "September 2024 - Present",
    description: "Active participation in workshops, discussions, and technical activities related to machine learning and AI.",
    responsibilities: [
      "Actively participate in workshops, discussions, and technical activities",
      "Contribute to machine learning and AI knowledge-sharing sessions"
    ]
  }
];
