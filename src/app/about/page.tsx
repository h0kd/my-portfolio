// src/app/about/page.tsx
"use client";

import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16 space-y-16">
      {/* 1. Cabecera con foto + intro */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-48 h-48 mx-auto md:mx-0 relative rounded-full overflow-hidden border-4 border-gray-700">
          <Image
            src="/images/profile.jpg"
            alt="Leonardo Del Pino"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi! I’m <strong>Leonardo Del Pino</strong>, a Full Stack Developer
            based in Concepción, Chile. I have a passion for building modern,
            scalable web applications and a strong background in both frontend
            and backend technologies.
          </p>
        </div>
      </div>

      {/* 2. Education */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Education 🎓
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <div className="font-medium text-gray-900 dark:text-white">
            Universidad Técnica Federico Santa María
          </div>
          <div>Associate Degree in Computer Science</div>
          <div>2022 – 2024</div>
          <p className="mt-2">
            Strong foundation in software development, databases, system
            analysis, and full stack web technologies.
          </p>
        </div>
      </div>

      {/* 3. Work Experience */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Work Experience 💼
        </h2>
        <ul className="space-y-8 text-gray-700 dark:text-gray-300">
          <li>
            <div className="text-xl font-medium text-gray-900 dark:text-white">
              INSPECCIÓN Y CERTIFICACIÓN BBF LTDA. — Full Stack Developer
            </div>
            <div>Nov 2024 – Present | Concepción, Chile</div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Developed internal tools for investment tracking and expense
                management.
              </li>
              {/* resto de puntos igual */}
            </ul>
          </li>

          {/* segundo item */}
        </ul>
      </div>

      {/* 4. Technical Skills */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Technical Skills 🛠️
        </h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Frontend
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              HTML5, CSS3, JavaScript (ES6+), React.js, Next.js (App Router),
              TailwindCSS, shadcn/ui
            </p>
          </div>
          {/* repetido para Backend y Tools & Libraries */}
        </div>
      </div>

      {/* 5. Contact */}
      <div className="text-center space-x-6">
        <a
          href="mailto:leonardodelpino11@gmail.com"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Mail className="w-5 h-5" /> leonardodelpino11@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/leonardo-vicente-del-pino-sanhueza-67b1012a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
