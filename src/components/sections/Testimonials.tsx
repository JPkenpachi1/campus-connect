"use client";

const TESTIMONIALS = [
  {
    quote: "I ordered my dosa during class and picked it up in 30 seconds. No queue, no stress.",
    name: "Priya R.",
    tag: "3rd Year CS Student",
    avatar: "👩‍💻",
  },
  {
    quote: "Finally I don't have to leave 20 minutes early just to get lunch before the rush.",
    name: "Arjun M.",
    tag: "2nd Year ECE Student",
    avatar: "👨‍🔬",
  },
  {
    quote: "The QR pickup is seamless. I just show my phone and grab my order. It's that simple.",
    name: "Sneha K.",
    tag: "Final Year MBA Student",
    avatar: "👩‍🎓",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            Student Love
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What Students <span className="text-primary">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-3xl p-7 flex flex-col gap-5 border transition-transform duration-200 hover:-translate-y-1
                ${i === 1
                  ? "bg-primary border-transparent text-white shadow-2xl shadow-primary/20 md:scale-105"
                  : "bg-gray-950 border-gray-800 text-white"
                }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={`text-sm ${i === 1 ? "text-white/80" : "text-primary"}`}>★</span>
                ))}
              </div>

              <blockquote className={`text-sm leading-relaxed flex-1 ${i === 1 ? "text-white/90" : "text-gray-300"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <span className="text-2xl w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                  {t.avatar}
                </span>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className={`text-xs ${i === 1 ? "text-white/60" : "text-gray-500"}`}>{t.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}