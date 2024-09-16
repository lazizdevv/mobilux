// components/Navbar.tsx
"use server"; // Bu yerda "use server" bo'ladi

import { Suspense } from "react";
import HamburgerMenu from "./client"; // Hambuger menyuni client qismi
import { Logo } from "@/assets/svgs/Logo";

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-[999] top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Logo/>
        </a>

        {/* Suspense bilan mijoz qismidagi menyuni kutib ochamiz */}
        <Suspense fallback={<div>Loading...</div>}>
          <HamburgerMenu />
        </Suspense>
      </div>
    </nav>
  );
};
