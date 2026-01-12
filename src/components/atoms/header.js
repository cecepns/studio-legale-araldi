"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MENU = [
  { name: "HOME", path: "/" },
  { name: "FAQ", path: "/faq" },
  { name: "ABOUT", path: "/about" },
  { name: "CONSULTATION", path: "/consultation" },
];

export const Header = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`min-h-24 z-[102] relative ${
          isDark ? "bg-[#1f1f1f]" : ""
        }`}
      >
        <div className="container mx-auto w-full text-white flex justify-between items-center p-5 relative z-[102]">
          <Link href="/">
            <Image
              src="/assets/images/logo-with-text.jpg"
              alt="Logo"
              width={64}
              height={64}
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </Link>

          <div className="hidden md:flex gap-5 items-center text-md">
            {MENU.map((data, idx) => (
              <Link
                key={idx}
                href={data.path}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {data.name}
              </Link>
            ))}
          </div>

          <div
            className="md:hidden flex flex-col justify-center items-end gap-1 w-8 h-6 cursor-pointer z-[102] relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <div
              className={`w-8 h-[3px] bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-8 h-[3px] bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div
            className={`fixed inset-0 pt-24 flex flex-col md:hidden z-[101] overflow-y-auto ${
              isDark ? "bg-[#1f1f1f]" : "bg-black"
            }`}
          >
            <div className="flex-1 w-full px-8 py-6">
              {MENU.map((data, idx) => (
                <Link
                  key={idx}
                  href={data.path}
                  className="block text-xl w-full border-b border-white/30 py-4 cursor-pointer hover:opacity-80 transition-opacity uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
