export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "taskmate",
    title: "TaskMate",
    description: "A lightweight Python-based task manager that helps you organize your daily to-dos efficiently using SQLite as a local database.",
    techStack: ["Python 3", "SQLite3", "CLI"],
    githubUrl: "https://github.com/Esskay1945/TaskMate",
    features: [
      "Add tasks with due dates quickly",
      "View pending and completed tasks",
      "Auto database setup with local tasks.db",
      "Status tracking with Pending/Completed states"
    ]
  },
  {
    id: "liveboard",
    title: "LiveBoard",
    description: "A sleek, real-time data visualization app built with Streamlit. Watch your scores come to life with dynamic bar charts and instant updates.",
    techStack: ["Python", "Streamlit", "Pandas"],
    githubUrl: "https://github.com/Esskay1945/LiveBoard",
    features: [
      "Interactive data filtering by names",
      "Real-time visualization with 2-second refresh",
      "Instant insights with avg, max, min scores",
      "Trend detection for rising/falling scores"
    ]
  },
  {
    id: "cryptoview",
    title: "CryptoView",
    description: "Track multiple cryptocurrencies in real-time with a clean UI and secure user login system. A mini TradingView dashboard.",
    techStack: ["Python", "Streamlit", "SQLite", "Plotly", "CoinGecko API"],
    githubUrl: "https://github.com/Esskay1945/CryptoView-A-Mini-Trading-Dashboard",
    features: [
      "Real-time crypto price tracking",
      "User authentication via email",
      "Interactive Plotly charts",
      "24h high/low price metrics"
    ]
  },
  {
    id: "legaleaseai",
    title: "LegalEase AI",
    description: "An AI-powered legal research assistant for Indian case law. Features RAG with Google Gemini, FAISS, and Indian Kanoon API integration.",
    techStack: ["Node.js", "Express", "Python", "FastAPI", "Google Gemini", "FAISS", "LangChain"],
    githubUrl: "https://github.com/Esskay1945/LegalEaseAi",
    features: [
      "AI-powered legal chat assistant",
      "Case law semantic retrieval",
      "Contract generator with 6+ templates",
      "JWT-based authentication"
    ]
  },
  {
    id: "pingmyheart",
    title: "Ping My Heart",
    description: "A creative project exploring connection and communication through code. Simple yet meaningful.",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Esskay1945/Ping-my-heart",
    features: [
      "Interactive heartbeat visualization",
      "Minimal and expressive design",
      "Responsive animations"
    ]
  },
  {
    id: "facefusion",
    title: "FaceFusion",
    description: "AI-powered face averager using OpenCV and MediaPipe. Detects facial landmarks, aligns faces, and blends them into a composite image.",
    techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    githubUrl: "https://github.com/Esskay1945/FaceFusion",
    features: [
      "Face detection with MediaPipe Face Mesh",
      "Face alignment and warping",
      "Automatic size normalization",
      "Generate merged average face"
    ]
  }
];
