// src/components/sections/Waitlist.tsx (or src/app/(standalone)/waitlist/page.tsx)

"use client";

import { useState } from "react";
import {
  GraduationCap,
  Loader2,
  PartyPopper,
  Share2,
  MessageCircle,
  ChevronDown,
  Mail,
  User,
  Building2,
  BookOpen,
} from "lucide-react";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");       // ← new: show errors to user

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");   // clear error on change
  };

  // ── Real API call ───────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);   // ✅ show success state

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
    <section
      id="waitlist"
      className="bg-gradient-to-b h-dvh from-white to-blue-50 px-6 py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Be the first on your campus
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Campus Connect is coming. Join the waitlist now for early access,
          exclusive perks, and priority onboarding.
        </p>
      </div>

      {/* Form / Success */}
      <div className="mx-auto mt-12 max-w-lg">
        {submitted ? (

          // ✅ Success State
          <div className="rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <PartyPopper className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              You&apos;re on the list!
            </h3>
            <p className="mt-2 text-gray-500">
              Welcome aboard! Check your inbox — we&apos;ve sent you a
              confirmation email. Refer your campus friends to move up the queue.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://twitter.com/intent/tweet?text=Just+joined+the+Campus+Connect+waitlist!+Join+me+at+campusconnect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                <Share2 className="h-4 w-4" />
                Share on X
              </a>
              <a
                href="https://wa.me/?text=I+just+joined+Campus+Connect!+Get+early+access+here:+campusconnect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                Share on WhatsApp
              </a>
            </div>
          </div>

        ) : (

          // 📋 Signup Form
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                >
                  <User className="h-3.5 w-3.5 text-gray-400" />
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                >
                  <Mail className="h-3.5 w-3.5 text-gray-400" />
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@college.edu"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* College */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label
                  htmlFor="college"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                >
                  <Building2 className="h-3.5 w-3.5 text-gray-400" />
                  College / University <span className="text-red-400">*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  type="text"
                  required
                  placeholder="Your college name"
                  value={formData.college}
                  onChange={handleChange}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Year of Study */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label
                  htmlFor="year"
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-700"
                >
                  <BookOpen className="h-3.5 w-3.5 text-gray-400" />
                  Year of Study{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="pg">Postgraduate</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* ── Error message ──────────────────────────────── */}
            {error && (
              <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  <GraduationCap className="h-4 w-4" />
                  Join the Waitlist
                </>
              )}
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
              <Mail className="h-3 w-3" />
              No spam. Ever. We&apos;ll only email you about Campus Connect updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}