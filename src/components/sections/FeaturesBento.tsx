"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  Clock3,
  QrCode,
  ListOrdered,
  Bell,
  Salad,
  LayoutDashboard,
  Zap,
  Banknote,
  FileText,
  ChefHat,
  GraduationCap,
  Store,
} from "lucide-react";
import PhoneMockup from "../mockups/PhoneMockups";

const STUDENT_FEATURES = [
  { icon: Clock3, title: "Pre-order anytime", desc: "Order before you arrive" },
  { icon: QrCode, title: "QR pickup bill", desc: "Scan and grab instantly" },
  { icon: ListOrdered, title: "Order history", desc: "Track past purchases" },
  { icon: Bell, title: "Push notifications", desc: "Ready alerts" },
  { icon: Salad, title: "Veg/non-veg filters", desc: "Dietary preferences" },
];

const VENDOR_FEATURES = [
  { icon: LayoutDashboard, title: "Shop dashboard", desc: "Real-time overview" },
  { icon: Zap, title: "Real-time order status", desc: "Live updates" },
  { icon: Banknote, title: "Sales analytics", desc: "Daily insights" },
  { icon: FileText, title: "Daily settlement report", desc: "Auto-generated" },
  { icon: ChefHat, title: "Menu management", desc: "Easy updates" },
];

function FeatureItem({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="feature-item flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm opacity-0 translate-y-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/20">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <div>
        <h4 className="text-sm font-bold text-slate-950">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesBento() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".features-badge",
        { y: 16, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 }
      )
        .fromTo(
          ".features-title",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".features-subtitle",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".features-header",
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
          "-=0.5"
        )
        .fromTo(
          ".feature-item",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.6"
        )
        .fromTo(
          ".mockup-android",
          { x: 48, y: 32, opacity: 0, scale: 0.92, rotate: -3 },
          { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, duration: 0.9 },
          "-=0.8"
        )
        .fromTo(
          ".mockup-ios",
          { x: -48, y: -32, opacity: 0, scale: 0.92, rotate: 3 },
          { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, duration: 0.9 },
          "-=0.7"
        );

      // Continuous float animation
      
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="features-badge mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Built for Everyone
          </span>
          <h2 className="features-title text-3xl font-extrabold text-slate-950 md:text-4xl">
            Features <span className="text-blue-600">Packed In</span>
          </h2>
          <p className="features-subtitle mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
            One experience for students, one dashboard for vendors, and one shared system in the middle.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="space-y-5">
            <div className="features-header flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-950">For Students</h3>
            </div>

            <div className="space-y-4">
              {STUDENT_FEATURES.map((item) => (
                <FeatureItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

          {/* Center */}
          <div className="relative flex items-center justify-center py-8 lg:py-0">
            <div className="mockup-glow absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="mockup-float relative flex items-center gap-5">
              <div className="mockup-android translate-y-6 scale-[0.92]">
                <PhoneMockup device="android" theme="blue" screen="dashboard" />
              </div>
              <div className="mockup-ios -translate-y-6 scale-[0.98]">
                <PhoneMockup device="ios" theme="white" screen="tracking" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <div className="features-header flex items-center gap-2">
              <Store className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-950">For Vendors</h3>
            </div>

            <div className="space-y-4">
              {VENDOR_FEATURES.map((item) => (
                <FeatureItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}