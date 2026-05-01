"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  BriefcaseBusiness,
  Users,
  Scale,
  Building2,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "HR Due Diligence Audit",
    description:
      "Comprehensive HR audits covering workforce policies, compliance risks, operational gaps, and organizational governance frameworks.",
    icon: ShieldCheck,
  },

  {
    title: "Factory Compliance Services",
    description:
      "End-to-end labour law and factory compliance management for industrial and manufacturing operations across India.",
    icon: Building2,
  },

  {
    title: "Establishment Compliance",
    description:
      "Complete statutory compliance support including Shops & Establishments regulations, registers, filings, and documentation.",
    icon: Scale,
  },

  {
    title: "Payroll Management",
    description:
      "Accurate payroll processing with EPF, ESIC, PT, LWF, statutory deductions, and compliance administration.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Flexi Staffing Services",
    description:
      "Scalable workforce deployment solutions tailored to operational, seasonal, and project-based business requirements.",
    icon: Users,
  },

  {
    title: "Training & Development",
    description:
      "Professional capability development programs focused on workforce productivity, leadership, compliance, and HR excellence.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >

          <p className="text-blue-600 font-semibold uppercase mb-4 tracking-[0.2em]">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">

            Strategic HR &
            <span className="text-blue-600"> Workforce Solutions </span>
            For Modern Organizations

          </h2>

          <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-3xl">

            Horizon India delivers integrated HR, compliance,
            industrial relations, staffing, payroll, and workforce
            consulting solutions designed to improve operational
            efficiency and organizational stability.

          </p>

        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border border-slate-200 p-10 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mb-8">

                  <Icon className="text-blue-600 group-hover:text-white transition-all duration-300 w-7 h-7" />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-snug">

                  {service.title}

                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-lg">

                  {service.description}

                </p>

                {/* Learn More */}
                <div className="mt-8">

                  <a
                    href="#contact"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    Learn More →
                  </a>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}