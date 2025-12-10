export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  category: "simulation" | "technical" | "business" | "database";
}

export const certifications: Certification[] = [
  // Industry Job Simulations
  {
    id: "jpmorgan",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase",
    description: "Completed comprehensive simulation covering Project Setup, Kafka Integration, H2 Integration, and REST API Development.",
    date: "October 2025",
    category: "simulation"
  },
  {
    id: "hcltech",
    title: "AI Job Simulation",
    issuer: "HCLTech X",
    description: "Gained hands-on experience in Data Extraction & Analysis and AI-Powered Financial Chatbot Development.",
    date: "May-June 2025",
    category: "simulation"
  },
  {
    id: "deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    description: "Developed skills in Data Analysis and Forensic Technology through real-world simulation scenarios.",
    date: "May 2025",
    category: "simulation"
  },
  // Technical Certifications
  {
    id: "jncia-cloud",
    title: "JNCIA-Cloud",
    issuer: "Juniper Networks",
    description: "Certified in Cloud Computing fundamentals and Juniper cloud networking technologies.",
    date: "March 2025",
    category: "technical"
  },
  {
    id: "python-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    description: "Mastered Python programming fundamentals including syntax, data types, and basic programming concepts.",
    date: "April 2025",
    category: "technical"
  },
  {
    id: "python-2",
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    description: "Advanced Python programming including OOP, modules, exceptions, and file handling.",
    date: "April 2025",
    category: "technical"
  },
  {
    id: "linux",
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    description: "Comprehensive understanding of Linux operating system, commands, and system administration.",
    date: "April 2025",
    category: "technical"
  },
  {
    id: "powerbi",
    title: "Data Visualization in Power BI",
    issuer: "DataCamp",
    description: "Expertise in creating interactive dashboards and data visualizations using Microsoft Power BI.",
    date: "June 2025",
    category: "technical"
  },
  {
    id: "python-ai",
    title: "Python Using AI Workshop",
    issuer: "AI for Techies",
    description: "Hands-on workshop integrating Python programming with AI tools and methodologies.",
    date: "February 2025",
    category: "technical"
  },
  // Business & Process Analytics
  {
    id: "celonis-1",
    title: "Academic Process Mining Fundamentals",
    issuer: "Celonis",
    description: "Learned process mining techniques to analyze and optimize business processes.",
    date: "June 2025",
    category: "business"
  },
  {
    id: "celonis-2",
    title: "Deliver Business Value with Celonis",
    issuer: "Celonis",
    description: "Understanding how to drive business value through process intelligence and optimization.",
    date: "June 2025",
    category: "business"
  },
  {
    id: "celonis-3",
    title: "Rising Star - Business",
    issuer: "Celonis",
    description: "Recognition for excellence in business process analytics and process mining skills.",
    date: "June 2025",
    category: "business"
  },
  // Database & Systems
  {
    id: "dbms",
    title: "DBMS Course - Fundamentals and Advanced Concepts",
    issuer: "Scaler Topics",
    description: "Mastered database management systems including design, normalization, and query optimization.",
    date: "March 2025",
    category: "database"
  }
];
