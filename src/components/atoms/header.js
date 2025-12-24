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
              src="/assets/images/logo-with-bg.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-12 md:w-16 h-auto"
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
            className={`fixed inset-0 top-24 flex flex-col items-start px-8 py-6 gap-0 md:hidden z-[101] overflow-y-auto ${
              isDark ? "bg-[#1f1f1f]" : "bg-black"
            }`}
          >
            {/* Close Button */}
            <div className="w-full flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-80 transition-opacity p-2"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {MENU.map((data, idx) => (
              <Link
                key={idx}
                href={data.path}
                className="text-xl w-full border-b border-white/30 py-4 cursor-pointer hover:opacity-80 transition-opacity uppercase"
                onClick={() => setIsOpen(false)}
              >
                {data.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
