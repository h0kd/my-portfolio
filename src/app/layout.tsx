import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import PageTransition from "./components/PageTransition";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  titleTemplate: "%s | Leonardo Del Pino",
  defaultTitle: "Leonardo Del Pino • Full Stack Developer",
  description:
    "Professional portfolio of Leonardo Del Pino, Full Stack Developer.",
  openGraph: {
    title: "Leonardo Del Pino • Full Stack Developer",
    description:
      "Professional portfolio of Leonardo Del Pino, Full Stack Developer.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Leonardo Del Pino Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leonardo Del Pino Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Del Pino • Full Stack Developer",
    description:
      "Professional portfolio of Leonardo Del Pino, Full Stack Developer.",
    creator: "@your_twitter",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <PageTransition>{children}</PageTransition>
          </main>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
