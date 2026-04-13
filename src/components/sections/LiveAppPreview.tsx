"use client";

import { useEffect, useRef } from "react";

const SCREENS = [
  {
    title: "Browse & Order",
    content: (
      <div className="flex flex-col gap-2 p-3 w-full">
        <div className="text-xs text-gray-400 font-medium mb-1">Today's Menu</div>
        {[
          { name: "Masala Dosa", price: "₹40", emoji: "🫓" },
          { name: "Veg Sandwich", price: "₹30", emoji: "🥪" },
          { name: "Filter Coffee", price: "₹15", emoji: "☕" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2 bg-gray-800 rounded-xl px-3 py-2">
            <span>{item.emoji}</span>
            <span className="text-xs text-gray-200 flex-1">{item.name}</span>
            <span className="text-xs text-primary font-bold">{item.price}</span>
            <span className="text-xs bg-primary/20 text-primary rounded-lg px-2 py-0.5 font-semibold">+</span>
          </div>
        ))}
        <div className="bg-primary rounded-xl py-2 text-center text-xs font-bold text-white mt-2">
          Place Order →
        </div>
      </div>
    ),
  },
  {
    title: "Live Tracking",
    content: (
      <div className="flex flex-col gap-3 p-3 w-full">
        <div className="text-xs text-gray-400 font-medium">Live Status</div>
        {[
          { label: "Order Received", done: true },
          { label: "Being Prepared", done: true },
          { label: "Ready for Pickup", done: false },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
              s.done ? "bg-primary text-white" : "bg-gray-700 text-gray-400"
            }`}>
              {s.done ? "✓" : i + 1}
            </div>
            <span className={`text-xs font-medium ${s.done ? "text-white" : "text-gray-500"}`}>
              {s.label}
            </span>
          </div>
        ))}
        <div className="mt-2 bg-gray-800 rounded-xl px-3 py-2 text-xs text-gray-400">
          Estimated ready in <span className="text-primary font-bold">~8 min</span>
        </div>
      </div>
    ),
  },
  {
    title: "QR Pickup Bill",
    content: (
      <div className="flex flex-col items-center gap-3 p-3 w-full">
        <div className="text-xs text-gray-400 font-medium self-start">Show this at counter</div>
        <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 80 80" width="80" height="80">
            <rect x="1" y="1" width="21" height="21" rx="3" fill="none" stroke="#111827" strokeWidth="2" />
            <rect x="4" y="4" width="15" height="15" rx="2" fill="#111827" />
            <rect x="58" y="1" width="21" height="21" rx="3" fill="none" stroke="#111827" strokeWidth="2" />
            <rect x="61" y="4" width="15" height="15" rx="2" fill="#111827" />
            <rect x="1" y="58" width="21" height="21" rx="3" fill="none" stroke="#111827" strokeWidth="2" />
            <rect x="4" y="61" width="15" height="15" rx="2" fill="#111827" />
            {[30, 40, 50].flatMap((x) =>
              [30, 40, 50].map((y) => (
                <rect key={`${x}-${y}`} x={x} y={y} width="7" height="7" rx="1.5" fill="#111827" />
              ))
            )}
          </svg>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400">Order #2847 — ₹40.00</div>
          <div className="text-xs font-semibold text-green-400 mt-0.5">✓ Paid & Confirmed</div>
        </div>
      </div>
    ),
  },
];

export default function LiveAppPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const screensRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(0);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const load = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      // Set initial states
      screensRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 });
      });

      function switchScreen(to: number) {
        if (to === activeRef.current) return;
        const prev = screensRef.current[activeRef.current];
        const next = screensRef.current[to];
        if (prev) gsap.to(prev, { opacity: 0, y: -14, duration: 0.3, ease: "power2.in" });
        if (next) gsap.fromTo(next, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
        activeRef.current = to;
      }

      SCREENS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: `${i * (70 / SCREENS.length)}% center`,
          end: `${(i + 1) * (70 / SCREENS.length)}% center`,
          onEnter: () => switchScreen(i),
          onEnterBack: () => switchScreen(i),
        });
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    load();
    return () => cleanup?.();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-950 py-24 px-6"
      style={{ minHeight: "280vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            See It In Action
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Live <span className="text-primary">App Preview</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Scroll to explore the experience ↓</p>
        </div>

        {/* Phone frame */}
        <div className="w-56 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-black/80 border border-gray-700">
          <div className="w-20 h-5 bg-gray-900 rounded-full mx-auto -mt-1 flex items-center justify-center">
            <div className="w-10 h-3 bg-gray-800 rounded-full" />
          </div>
          <div className="bg-gray-950 rounded-[2rem] overflow-hidden min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center px-4 py-2 shrink-0">
              <span className="text-xs text-gray-400">9:41</span>
              <span className="text-xs text-gray-400">●●●</span>
            </div>
            <div className="relative flex-1">
              {SCREENS.map((screen, i) => (
                <div
                  key={screen.title}
                  ref={(el) => { screensRef.current[i] = el; }}
                  className="absolute inset-0 flex flex-col"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <div className="px-4 py-2 border-b border-gray-800 shrink-0">
                    <span className="text-xs font-bold text-white">{screen.title}</span>
                  </div>
                  <div className="flex-1 flex">{screen.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pill indicators */}
        <div className="flex gap-3 mt-6">
          {SCREENS.map((s, i) => (
            <span
              key={s.title}
              className="text-xs text-gray-500 bg-gray-900 border border-gray-700 rounded-full px-3 py-1.5"
            >
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}