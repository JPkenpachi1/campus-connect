"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import PhoneMockup from "../mockups/PhoneMockups";

const STEPS = [
  {
    number: "01",
    title: "Browse",
    subtitle: "Find your shop & item",
    description:
      "Open the app, explore nearby shops, and pick exactly what you want — groceries, snacks, or essentials.",
    screen: "dashboard" as const,
  },
  {
    number: "02",
    title: "Pay",
    subtitle: "Instant online payment",
    description:
      "Tap to pay securely — UPI, card, or wallet. No cash, no queues. Your payment is confirmed in seconds.",
    screen: "cart" as const,
  },
  {
    number: "03",
    title: "Pick Up",
    subtitle: "Show QR, grab & go",
    description:
      "Get your QR bill instantly. Walk to the counter, show your code, and you're out — no waiting in line.",
    screen: "tracking" as const,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const active = STEPS[activeStep];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".how-badge",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          ".how-title",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.25"
        )
        .fromTo(
          ".how-step-card",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          ".how-phone-shell",
          { x: 60, opacity: 0, scale: 0.94, rotate: -4 },
          { x: 0, opacity: 1, scale: 1, rotate: 0, duration: 0.9 },
          "-=0.75"
        );

      gsap.to(".how-phone-float", {
        y: -10,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".how-phone-glow", {
        scale: 1.08,
        opacity: 0.9,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(
        ".step-copy-active",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 }
      ).fromTo(
        ".phone-stage",
        { y: 22, opacity: 0, scale: 0.985 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55 },
        "-=0.35"
      );
    },
    {
      scope: sectionRef,
      dependencies: [activeStep],
      revertOnUpdate: true,
    }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="how-badge mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Simple Process
          </span>

          <h2 className="how-title text-3xl font-extrabold text-slate-950 md:text-4xl">
            How It <span className="text-blue-600">Works</span>
            <span className="text-slate-400"> — 3 Simple Steps</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-12 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`how-step-card group flex items-start gap-5 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeStep === i
                    ? "border-blue-200 bg-blue-50 shadow-lg shadow-blue-100"
                    : "border-slate-200 bg-white hover:border-blue-100 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-colors duration-300 ${
                    activeStep === i
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {step.number}
                </span>

                <div>
                  <div className="step-copy-active mb-1 flex items-center gap-2">
                    <span className="text-base font-bold text-slate-950">
                      {step.title}
                    </span>
                    <span className="text-sm text-slate-500">
                      — {step.subtitle}
                    </span>
                  </div>

                  <p className="step-copy-active text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="how-phone-shell relative">
              <div className="how-phone-glow absolute -inset-8 rounded-[3rem] bg-blue-100/60 blur-3xl" />

              <div className="how-phone-float relative">
                <div key={activeStep} className="phone-stage">
                  <PhoneMockup
                    device="ios"
                    theme={activeStep % 2 === 0 ? "white" : "blue"}
                    screen={active.screen}
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`transition-all duration-300 ${
                      activeStep === i
                        ? "h-1.5 w-6 rounded-full bg-blue-600"
                        : "h-1.5 w-1.5 rounded-full bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden -mx-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="w-72 shrink-0 snap-center rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">
                  {step.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Step {i + 1}
                </span>
              </div>

              <div className="mb-5 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-2">
                <PhoneMockup
                  device="android"
                  theme={i % 2 === 0 ? "blue" : "white"}
                  screen={step.screen}
                  className="origin-top scale-[0.82]"
                />
              </div>

              <h3 className="mb-1 text-lg font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>

              {i < STEPS.length - 1 && (
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                  Next: {STEPS[i + 1].title} <span>→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}