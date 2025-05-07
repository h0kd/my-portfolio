import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import PageTransition from "./components/PageTransition";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Leonardo Del Pino | Full Stack Developer",
  description:
    "Professional portfolio of Leonardo Del Pino, Full Stack Developer.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
