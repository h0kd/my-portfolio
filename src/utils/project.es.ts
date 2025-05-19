import { ProjectData } from "./projects";

export const projectsEs: ProjectData[] = [
  {
    slug: "expense-tracker",
    title: "Registro de Gastos",
    description:
      "Aplicación web full-stack para registrar, visualizar y exportar tus gastos en un tablero limpio y responsivo.",
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
      "Registrar, editar y eliminar gastos (monto, categoría, fecha, descripción)",
      "Filtrado dinámico por año, mes y categoría",
      "Gráficos interactivos de barras y pastel",
      "Exportar datos filtrados a .xlsx",
      "Diseño mobile-first y responsivo",
      "Diálogos accesibles con Radix UI",
    ],
  },
  {
    slug: "climate-analytics",
    title: "Panel de Clima",
    description:
      "Plataforma full-stack para obtener, almacenar y visualizar datos meteorológicos en tiempo real e históricos.",
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
      "Consulta de clima en tiempo real vía API de OpenWeather",
      "Recolección diaria automática con Cron Jobs",
      "Gráficos históricos interactivos",
      "Exportación de reportes a CSV y PDF",
      "Autenticación de usuario con Clerk",
      "Interfaz limpia y responsiva",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portafolio",
    description:
      "Portafolio elegante en modo oscuro construido con Next.js y TailwindCSS para mostrar proyectos.",
    image: "/images/portfolio/preview.png",
    demoUrl: "https://your-portfolio.vercel.app",
    repoUrl: "https://github.com/h0kd/my-portfolio",
    techStack: ["Next.js 14", "TailwindCSS", "Framer Motion", "TypeScript"],
    features: [
      "Páginas de proyectos dinámicas cargadas desde MDX",
      "Transiciones suaves con Framer Motion",
      "Metadatos SEO-amigables",
      "Totalmente responsivo (móvil y escritorio)",
    ],
  },
];
