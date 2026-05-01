const testimonials = [
    {
      name: "Manufacturing Client",
      text:
        "Horizon India helped us streamline workforce compliance and payroll management across multiple units.",
    },
    {
      name: "Industrial Operations Client",
      text:
        "Exceptional expertise in labour compliance and industrial relations consulting.",
    },
    {
      name: "Healthcare Client",
      text:
        "Professional HR consulting support with deep understanding of operational challenges.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="mb-20 text-center">
  
            <p className="text-blue-600 font-semibold uppercase mb-4">
              Testimonials
            </p>
  
            <h2 className="text-5xl font-bold">
              Trusted By Organizations Across India
            </h2>
  
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
  
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-slate-200 rounded-3xl p-8 hover:shadow-2xl transition"
              >
  
                <div className="flex gap-1 mb-6">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>
  
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
  
                <h3 className="font-bold text-xl">
                  {testimonial.name}
                </h3>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }