// src/app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <>
      {/* Top bar con email */}
      <div
        className="h-8 flex items-center overflow-hidden
                      bg-gray-100 dark:bg-black"
      >
        <div
          className="whitespace-nowrap animate-marquee 
                        text-gray-900 dark:text-gray-200 
                        font-mono px-4"
        >
          leonardodelpino11@gmail.com
        </div>
      </div>

      {/* Main nav */}
      <nav className="py-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link
            href="/"
            className="text-xl font-bold 
                                    text-gray-900 dark:text-white"
          >
            Leo
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 
                         dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900 
                         dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 
                         dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>

            {/* Theme dropdown */}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
