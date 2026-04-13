import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers – PlutoPay",
  description: "Join the PlutoPay team.",
};

export default function CareersPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">We&apos;re Hiring</h1>
        <p className="text-gray-500 text-lg">
          Explore open roles and join the fintech revolution at PlutoPay.
        </p>
      </div>
    </section>
  );
}
