"use client";

import { useState } from "react";
import Link from "next/link.js";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image.js";
import { base } from "../data/base.js";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Properti", href: "/properti" },
  { name: "kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/10 py-4 px-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-black">
          {" "}
          <Image
            alt={`${base.name} logo`}
            src="/assets/logo.webp"
            width={40}
            height={40}
            className="brightness-0"
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-black">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <Link
            href="/kontak"
            className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-black transition-colors duration-300 shadow-sm"
          >
            Konsultasi
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-black hover:text-primary transition-colors cursor-pointer"
        >
          {isOpen ? (
            <FaXmark className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden max-w-6xl mx-auto flex flex-col gap-4 pt-4 pb-4 mt-4 border-t border-black/10">
          <ul className="flex flex-col gap-4 text-sm font-medium text-black">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors duration-300 block py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-black transition-colors duration-300 mt-2"
          >
            Konsultasi
          </Link>
        </div>
      )}
    </header>
  );
}
