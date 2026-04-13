"use client";

import { useState } from "react";
import { Rocket, Mail, ArrowRight, PartyPopper, Users, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[620px] rounded-full bg-blue-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Badge */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
          <Rocket className="h-3.5 w-3.5" />
          Limited Beta Spots — Be First
        </span>

        <h2 className="mb-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Skip the Queue.
          <br />
          <span className="text-blue-600">Own Your Campus.</span>
        </h2>

        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-slate-500">
          Join hundreds of students who pre-order, pay instantly, and walk straight
          to pickup — no waiting, no cash, no stress.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college email"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-950 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-sm font-semibold text-blue-700">
            <CheckCircle2 className="h-5 w-5" />
            You're on the list! We'll reach out soon.
          </div>
        )}

        <p className="mt-5 text-xs text-slate-400">
          No spam. Just your campus going digital.
        </p>

        {/* Social proof */}
        {/* <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-blue-600 shadow-sm"
              >
                <Users className="h-4 w-4" />
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-950">200+ students</span> already signed up
          </p>
        </div> */}
      </div>
    </section>
  );
}