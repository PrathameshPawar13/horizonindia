export default function Contact() {
    return (
      <section
        id="contact"
        className="py-28 bg-slate-950 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
  
          <p className="uppercase tracking-[0.2em] text-blue-400 mb-4 text-sm font-semibold">
            Contact Us
          </p>
  
          <h2 className="text-5xl font-bold mb-8">
            Talk to Our HR Experts
          </h2>
  
          <p className="text-slate-300 text-xl leading-relaxed mb-14">
            Get in touch for strategic HR consulting,
            payroll compliance, staffing, and
            industrial relations solutions.
          </p>
  
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-6"
          >

            <input
              type="hidden"
              name="access_key"
              value="0a408b8b-52df-493d-a1b3-feb994b3305b"
            />
  
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-5 rounded-2xl bg-white text-black"
            />
  
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-5 rounded-2xl bg-white text-black"
            />
  
            <textarea
              placeholder="Message"
              name="message"
              rows={6}
              className="p-5 rounded-2xl bg-white text-black"
            />
  
            <button className="bg-blue-600 hover:bg-blue-700 transition py-5 rounded-2xl font-semibold text-lg">
              Submit Inquiry
            </button>
  
          </form>
  
        </div>
      </section>
    );
  }