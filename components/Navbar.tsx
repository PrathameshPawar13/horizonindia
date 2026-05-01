"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="relative w-10 h-10 lg:w-12 lg:h-12">

            <Image
                src="/logo.png"
                alt="Horizon India"
                width={42}
                height={42}
                className="object-contain"
                priority
            />

      </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        <button className="hidden md:block bg-slate-900 hover:bg-black transition text-white px-6 py-3 rounded-2xl font-medium shadow-lg">
          Consultation
        </button>

        {/* Mobile Button */}
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