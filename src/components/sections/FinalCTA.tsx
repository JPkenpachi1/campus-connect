"use client";

import { useState } from "react";
import { Rocket, Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Campus Connect Signup",   // FinalCTA only collects email
          email,
          college: "Not specified",        // required field fallback
          year: "",
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSubmitted(true);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[620px] rounded-full bg-blue-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Badge */}
        <span className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
          <Rocket className="h-3.5 w-3.5" />
          Limited Beta Spots — Be First
        </span>

        <h2 className="mb-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Skip the Queue.
          <br />
          <span className="text-blue-600">Own Your Campus.</span>
        </h2>

        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-slate-500">
          Join hundreds of students who pre-order, pay instantly, and walk
          straight to pickup — no waiting, no cash, no stress.
        </p>

        {!submitted ? (
          <>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your college email"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-950 placeholder-slate-400 shadow-sm outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Error message */}
            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}
          </>
        ) : (
          <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-4 text-sm font-semibold text-blue-700">
            <CheckCircle2 className="h-5 w-5" />
            You&apos;re on the list! Check your inbox for confirmation.
          </div>
        )}

        <p className="mt-5 text-xs text-slate-400">
          No spam. Just your campus going digital.
        </p>
      </div>
    </section>
  );
}