// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Leonardo Del Pino • Full Stack Developer",
    template: "%s | Leonardo Del Pino",
  },
  description:
    "Professional portfolio of Leonardo Del Pino, Full Stack Developer.",
  icons: {
    icon: "/favicon.ico", // tu favicon en public/favicon.ico
    shortcut: "/favicon-16x16.png", // opcional, si lo tienes
    apple: "/apple-touch-icon.png", // opcional, si lo tienes
  },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
