const industries = [
    "Manufacturing",
    "Engineering",
    "Healthcare",
    "Education",
    "Industrial Operations",
    "Corporate Enterprises",
  ];
  
  export default function Industries() {
    return (
      <section className="py-28 bg-white">
  
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
          <div className="max-w-3xl mb-20">
  
            <p className="text-blue-600 font-semibold uppercase mb-4 tracking-wide">
              Industries We Serve
            </p>
  
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              HR & Industrial Relations Solutions Across Multiple Sectors
            </h2>
  
            <p className="text-slate-600 text-lg leading-relaxed">
              Horizon India partners with organizations across diverse industries
              to deliver workforce compliance, industrial relations stability,
              payroll governance, and strategic HR consulting solutions.
            </p>
  
          </div>
  
          {/* Industry Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {industries.map((industry) => (
              <div
                key={industry}
                className="group border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
  
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 transition-all duration-300 rounded-2xl mb-6"></div>
  
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {industry}
                </h3>
  
                <p className="text-slate-600 leading-relaxed">
                  Specialized HR consulting, compliance support,
                  and workforce management solutions tailored
                  for the {industry.toLowerCase()} sector.
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }