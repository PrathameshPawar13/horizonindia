"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
      <section className="relative bg-slate-950 text-white py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-20">

            <Image
                src="/images/hero.png"
                alt="Hero Background"
                fill
                className="object-cover"
            />

        </div>
        {/* Background Glow */}
  
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 relative z-10"
        >
  
          <div className="max-w-4xl">
  
            <div className="inline-flex items-center gap-3 border border-slate-700 bg-slate-900/80 px-5 py-3 rounded-full mb-8">
  
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
  
              <p className="uppercase tracking-[0.2em] text-blue-400 text-xs font-semibold">
                PAN India HR Consulting
              </p>
  
            </div>
  
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1] mb-8">
              Strategic HR &
              <span className="text-blue-400"> Industrial Relations </span>
              Solutions
            </h1>
  
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl">
              Helping organizations achieve workforce compliance,
              operational excellence, and industrial harmony through
              integrated HR and IR solutions.
            </p>
  
            <div className="flex flex-wrap gap-5">
  
              <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 hover:-translate-y-1 hover:-translate-y-1">
                Schedule Consultation
              </button>
  
              <button className="border border-slate-700 bg-white/5 backdrop-blur-sm hover:border-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg hover:scale-105 hover:-translate-y-1">
                Explore Services
              </button>
  
            </div>
  
          </div>
  
        </motion.div>
      </section>
    );
  }