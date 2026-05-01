"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="relative w-16 h-16 lg:w-20 lg:h-20">

            <Image
              src="/logo.png"
              alt="Horizon India"
              fill
              className="object-contain"
              priority
            />

          </div>

          <div>

            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 leading-none">
              Horizon India
            </h1>

            <p className="text-sm text-slate-500 mt-1 tracking-wide">
              HR & Industrial Relations Consulting
            </p>

          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-blue-600 transition"
          >
            Services
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-2xl font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
          Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white border-t border-slate-200">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

          <button className="bg-slate-900 text-white px-5 py-3 rounded-xl mt-4">
            Consultation
          </button>

        </div>
      )}

    </nav>
  );
}