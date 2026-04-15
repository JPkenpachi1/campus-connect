// src/app/(standalone)/waitlist/layout.tsx

import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Simple Navbar ───────────────────────────────────── */}
      <header className="w-full border-b border-gray-100 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">

          {/* Logo */}
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

          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-blue-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

        </div>
      </header>

      {/* ── Page Content ────────────────────────────────────── */}
      <main>{children}</main>
    </>
  );
}