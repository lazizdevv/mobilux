// components/HamburgerMenu.tsx
"use client";

import { Aside } from "@/layouts/aside";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Menyu holatini boshqarish
  const menuRef = useRef<HTMLDivElement>(null); // Menyu elementini reference qilish uchun

  // Menyu holatini o'zgartirish funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menyu tashqarisiga bosilganda yopish
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Agar tashqariga bosilsa, menyuni yopamiz
      }
    };

    // Documentga 'click' listener qo'shamiz
    document.addEventListener("mousedown", handleClickOutside);

    // Component unmount bo'lganda listenerni tozalaymiz
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex">
      {/* Menyuni ochadigan tugma */}
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white transition-all rounded-lg lg:hidden bg-primary hover:bg-primary/80"
      >
        <Menu/>
      </button>

      {/* Menyu ochilganda */}
      {isOpen && (
        <button onClick={() => setIsOpen(false)}>
          <div
            ref={menuRef}
            className="absolute top-0 right-0 w-full bg-white z-50 dark:bg-gray-900 p-4 shadow-md"
          >
            {/* Menyuni yopish uchun 'X' tugmasi */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)} // X tugmasi bosilganda menyuni yopamiz
                type="button"
                className="inline-flex items-center p-2 w-8 h-8 justify-center text-white rounded-lg bg-red-500 hover:bg-red-700"
              >
                <X/>
              </button>
            </div>

            {/* Menyu tarkibi (Aside komponenti) */}
            <Aside />
          </div>
        </button>
      )}
    </div>
  );
};

export default HamburgerMenu;
