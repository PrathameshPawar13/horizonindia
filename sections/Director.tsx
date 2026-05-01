import Image from "next/image";


export default function Director() {
    return (
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid lg:grid-cols-2 gap-20 items-center">
  
          <div className="relative h-[500px] rounded-3xl overflow-hidden">

            <Image
                src="/images/director.png"
                alt="Director"
                fill
                className="object-cover"
            />

          </div>
  
            <div>
  
              <p className="text-blue-600 font-semibold uppercase mb-4 tracking-wide">
                Executive Leadership
              </p>
  
              <h2 className="text-5xl font-bold mb-8">
                Vivek Pawar
              </h2>
  
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A seasoned HR & Industrial Relations professional with over
                three decades of experience across Indian and multinational
                manufacturing organizations.
              </p>
  
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Expertise includes strategic HR leadership, labour law compliance,
                collective bargaining, union management, workforce productivity,
                and industrial relations consulting.
              </p>
  
              <div className="flex flex-wrap gap-4">
  
                <span className="bg-slate-100 px-5 py-3 rounded-xl">
                  HR Leadership
                </span>
  
                <span className="bg-slate-100 px-5 py-3 rounded-xl">
                  Industrial Relations
                </span>
  
                <span className="bg-slate-100 px-5 py-3 rounded-xl">
                  Labour Compliance
                </span>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }