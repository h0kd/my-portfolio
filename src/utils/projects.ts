// src/utils/projects.ts

export type ProjectData = {
  /** Unique identifier for routing */
  slug: string;
  /** Human-readable title */
  title: string;
  /** Brief description (1-2 sentences) */
  description: string;
  /** Path to the main project image */
  image: string;
  /** Live demo URL */
  demoUrl: string;
  /** GitHub repository URL */
  repoUrl: string;
  /** List of technologies used */
  techStack: string[];
  /** Optional list of key features */
  features?: string[];
};

const projects: ProjectData[] = [
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Full-stack web app to log, visualize & export your expenses in a clean, responsive dashboard.",
    image: "/images/expense-tracker/dashboardInicio.png",
    demoUrl: "https://your-expense-tracker.vercel.app",
    repoUrl: "https://github.com/h0kd/expense-tracker-nextjs",
    techStack: [
      "Next.js 15",
      "TailwindCSS 4",
      "Prisma ORM",
      "SQLite",
      "Chart.js",
      "Radix UI",
      "XLSX.js",
    ],
    features: [
      "Record, edit & delete expenses (amount, category, date, description)",
      "Dynamic filtering by year, month & category",
      "Interactive bar & pie charts",
      "Export filtered data to .xlsx",
      "Mobile-first, responsive design",
      "Accessible dialogs with Radix UI",
    ],
  },

  {
    slug: "climate-analytics",
    title: "Climate Analytics Dashboard",
    description:
      "Full-stack platform to fetch, store, and visualize real-time and historical weather data.",
    image: "/images/climate-analytics/overview.png",
    demoUrl: "https://climate-analytics.vercel.app/",
    repoUrl: "https://github.com/h0kd/climate-analytics",
    techStack: [
      "Next.js (App Router)",
      "TailwindCSS",
      "Prisma ORM",
      "SQLite / PostgreSQL",
      "Chart.js + react-chartjs-2",
      "Clerk Auth",
      "papaparse, jsPDF + autotable",
      "node-cron / Vercel Cron Jobs",
    ],
    features: [
      "Real-time weather lookup via OpenWeather API",
      "Daily automated data collection with Cron Jobs",
      "Interactive historical charts",
      "CSV & PDF export of reports",
      "User authentication with Clerk",
      "Responsive, clean UI",
    ],
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A sleek, dark-mode portfolio built with Next.js and TailwindCSS to showcase projects.",
    image: "/images/portfolio/preview.png",
    demoUrl: "https://your-portfolio.vercel.app",
    repoUrl: "https://github.com/your-username/portfolio",
    techStack: ["Next.js 14", "TailwindCSS", "Framer Motion", "TypeScript"],
    features: [
      "Dynamic project pages fetched from MDX",
      "Smooth page transitions with Framer Motion",
      "SEO-friendly metadata",
      "Fully responsive (mobile & desktop)",
    ],
  },
];

export default projects;
