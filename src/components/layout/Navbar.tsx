// src/components/layout/Navbar.tsx

"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const NAV_LINKS = [
  { label: "Why Campus Connect", href: "#bento" },
  { label: "How It Works", href: "#features" },
  { label: "Early Access", href: "#cta" },
];

// ── smooth scroll helper ──────────────────────────────────────────────────────
function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── GSAP entrance ────────────────────────────────────────────────────────
  useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }
      );
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      style={{ visibility: "hidden" }}
      className=" top-4 left-0 right-0 z-50 px-4"
    >
      {/* ── Grid container ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-3 items-center  bg-white/80 px-6 py-3 backdrop-blur-md">

          {/* Col 1 — Logo (left) */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <GraduationCap className="h-4 w-4 text-white" />
            </span>
            <span className="text-base font-semibold tracking-tight">
              Campus Connect
            </span>
          </Link>

          {/* Col 2 — Nav links (center) */}
          <nav className="hidden items-center justify-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Col 3 — CTA (right) */}
          <div className="flex items-center justify-end gap-3">
            {/* Bordered "Get Early Access" button → scrolls to #waitlist */}
            <Link
              href="/waitlist"
              className="hidden rounded-full border border-blue-600 px-4 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white md:inline-flex"
            >
              Get Early Access
            </Link>

            {/* Mobile hamburger */}
            <button
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ──────────────────────────────────────────── */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-white/20 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-md md:hidden">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href);
                    setMobileOpen(false);
                  }}
                  className="text-left text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-gray-100" />
              <button
                onClick={() => {
                  scrollToSection("#waitlist");
                  setMobileOpen(false);
                }}
                className="rounded-full border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Get Early Access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}