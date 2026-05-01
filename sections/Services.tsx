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
      icon: ShieldCheck,
    },
    {
      title: "Factory Compliance Services",
      icon: Building2,
    },
    {
      title: "Establishment Compliance",
      icon: Scale,
    },
    {
      title: "Payroll Management",
      icon: BriefcaseBusiness,
    },
    {
      title: "Flexi Staffing Services",
      icon: Users,
    },
    {
      title: "Training & Development",
      icon: GraduationCap,
    },
  ];
  
  export default function Services() {
    return (
        <section id="services" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="mb-20">
  
            <p className="text-blue-600 font-semibold uppercase mb-4 tracking-wide">
              Services
            </p>
  
            <h2 className="text-4xl lg:text-5xl font-bold">
              Comprehensive HR Solutions
            </h2>
  
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
              key={service.title}
                className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
  
  <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 transition-all duration-300 rounded-2xl mb-6 flex items-center justify-center">

  <Icon className="text-blue-600 group-hover:text-white transition-all duration-300" />

</div>
  
                <h3 className="text-2xl font-bold mb-5">
                {service.title}
                </h3>
  
                <p className="text-slate-600 leading-relaxed">
                  Enterprise-grade HR consulting and compliance support
                  tailored for modern organizations.
                </p>
  
              </div>
            );
        })}
  
          </div>
  
        </div>
      </section>
    );
  }