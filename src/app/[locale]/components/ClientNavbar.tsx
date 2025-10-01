"use client";

import dynamic from "next/dynamic";

// Importar Navbar dinámicamente para evitar problemas de hidratación
const DynamicNavbar = dynamic(() => import("./Navbar"), {
  ssr: false,
  loading: () => (
    <>
      {/* Top bar con email */}
      <div className="h-8 flex items-center overflow-hidden bg-gray-100 dark:bg-black">
        <div className="whitespace-nowrap animate-marquee text-gray-900 dark:text-gray-200 font-mono px-4">
          leonardodelpino11@gmail.com
        </div>
      </div>

      {/* Main nav skeleton */}
      <nav className="py-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo skeleton */}
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Leo
          </div>

          {/* Controls skeleton */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              <div className="h-4 w-12 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="flex space-x-2">
              <div className="px-2 py-1 rounded bg-gray-200 animate-pulse w-8 h-6"></div>
              <div className="px-2 py-1 rounded bg-gray-200 animate-pulse w-8 h-6"></div>
            </div>
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </nav>
    </>
  ),
});

export default function ClientNavbar() {
  return <DynamicNavbar />;
}
