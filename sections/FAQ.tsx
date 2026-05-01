const faqs = [
    {
      question: "Do you provide PAN India compliance services?",
      answer:
        "Yes. Horizon India supports organizations across India with HR and compliance solutions.",
    },
    {
      question: "Do you handle payroll compliance?",
      answer:
        "Yes. We manage payroll processing, EPF, ESIC, PT, LWF, and statutory compliance support.",
    },
    {
      question: "Which industries do you support?",
      answer:
        "We support manufacturing, healthcare, education institutions, industrial operations, and corporate organizations.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section className="py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
  
          <div className="mb-16 text-center">
  
            <p className="text-blue-600 font-semibold uppercase mb-4">
              FAQ
            </p>
  
            <h2 className="text-5xl font-bold">
              Frequently Asked Questions
            </h2>
  
          </div>
  
          <div className="space-y-6">
  
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-3xl p-8 border border-slate-200"
              >
  
                <h3 className="text-2xl font-bold mb-4">
                  {faq.question}
                </h3>
  
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }