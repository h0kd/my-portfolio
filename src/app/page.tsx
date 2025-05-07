"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const links = [
    { Icon: Github, url: "https://github.com/h0kd", external: true },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/leonardo-vicente-del-pino-sanhueza-67b1012a2/",
      external: true,
    },
    { Icon: Mail, url: "/contact", external: false },
  ];

  return (
    <section className="text-center space-y-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Leonardo Del Pino
      </motion.h1>
      <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        Passionate Full Stack Developer building modern, scalable web
        applications.
      </p>
      <div className="flex justify-center gap-6">
        {links.map(({ Icon, url, external }, i) =>
          external ? (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Icon className="w-6 h-6" />
            </a>
          ) : (
            <Link
              key={i}
              href={url}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Icon className="w-6 h-6" />
            </Link>
          )
        )}
      </div>
    </section>
  );
}
