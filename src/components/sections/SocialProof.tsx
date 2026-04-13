"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Daily Active Students", icon: "🎓" },
  { value: 4, suffix: "", label: "Campus Shops Integrated", icon: "🏪" },
  { value: 20, suffix: " min", label: "Avg. Time Saved / Day", icon: "⚡" },
  { value: 40, suffix: "", prefix: "₹", label: "Average Order Value", icon: "💳" },
];

function CountUp({
  target, prefix = "", suffix = "", active,
}: {
  target: number; prefix?: string; suffix?: string; active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            By The Numbers
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Real <span className="text-primary">Impact</span> on Campus
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-950 rounded-3xl p-6 flex flex-col items-center text-center border border-gray-800 hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4">{stat.icon}</span>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  active={active}
                />
              </div>
              <p className="text-xs text-gray-400 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}