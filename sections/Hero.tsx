"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">

        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-20"
        />

      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/70"></div>

      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-slate-700 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-10">

            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>

            <p className="uppercase tracking-[0.2em] text-blue-400 text-xs font-semibold">
              PAN India HR & Industrial Relations Consulting
            </p>

          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">

            Strategic Workforce,
            <span className="text-blue-400"> Compliance & </span>
            Industrial Relations Consulting

          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl">

            Horizon India partners with organizations across India to deliver
            workforce compliance, industrial relations stability, payroll
            governance, and strategic HR consulting solutions that drive
            operational excellence.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mb-16">

            <a
              href="https://calendly.com/kunal-pawar357/30minutes"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/30 hover:scale-105 hover:-translate-y-1 inline-block"
            >
              Schedule Consultation
            </a>

            <a
              href="#services"
              className="border border-slate-700 bg-white/5 backdrop-blur-sm hover:border-white transition-all duration-300 px-8 py-5 rounded-2xl text-lg hover:scale-105 hover:-translate-y-1 inline-block"
            >
              Explore Services
            </a>

          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                30+
              </h3>

              <p className="text-sm uppercase tracking-wide text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                PAN India
              </h3>

              <p className="text-sm uppercase tracking-wide text-slate-400">
                Operations
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                20+
              </h3>

              <p className="text-sm uppercase tracking-wide text-slate-400">
                Compliance Domains
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                100%
              </h3>

              <p className="text-sm uppercase tracking-wide text-slate-400">
                Compliance Focus
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}