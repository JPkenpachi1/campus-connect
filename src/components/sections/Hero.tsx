"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import PhoneMockup from "../mockups/PhoneMockups";

function CampusConnetLogo() {
  return (
    <div className="hero-logo flex items-center gap-3 opacity-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
        <svg
          viewBox="0 0 64 64"
          className="h-8 w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Campus Connet logo"
        >
          <path d="M32 10L10 20L32 30L54 20L32 10Z" fill="currentColor" />
          <path
            d="M18 27V38C18 42 24 46 32 46C40 46 46 42 46 38V27"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54 20V34"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="54" cy="38" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
          College platform
        </p>
        <p className="text-sm text-slate-500">Food, orders, pickup, tracking</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 }
      )
        .fromTo(
          ".hero-logo",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-title-line",
          { y: 80, opacity: 0, rotateX: 12 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.2"
        )
        .fromTo(
          ".hero-text",
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(
          ".hero-meta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.45"
        )
        .fromTo(
          ".hero-mockup-wrap",
          { x: 60, opacity: 0, scale: 0.92, rotate: -4 },
          { x: 0, opacity: 1, scale: 1, rotate: 0, duration: 1 },
          "-=1.0"
        )
        .fromTo(
          ".hero-glow",
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.9"
        );

      gsap.to(".hero-float", {
        y: -12,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-glow", {
        scale: 1.08,
        opacity: 0.8,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow absolute left-[-120px] top-[80px] h-[280px] w-[280px] rounded-full bg-blue-100 blur-3xl opacity-70" />
        <div className="absolute right-[-100px] bottom-[-40px] h-[260px] w-[260px] rounded-full bg-sky-100 blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,rgba(239,246,255,0.65))]" />
      </div>

      <div className="relative mx-auto flex min-h-dvh max-w-7xl items-center px-6 py-16 md:px-10 lg:px-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col items-start justify-center text-left">
           
            

            <div className="mt-8 perspective-[1200px]">
              <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                <span className="hero-title-line block opacity-0">Campus Connet</span>
                <span className="hero-title-line block opacity-0 text-slate-700">
                  Skip queues.
                </span>
                <span className="hero-title-line block opacity-0 text-blue-600">
                  Order smarter.
                </span>
              </h1>
            </div>

            <p className="hero-text mt-5 max-w-xl text-base leading-7 text-slate-600 opacity-0 md:text-lg">
              A modern campus ordering experience for students to discover
              canteens, place orders quickly, track pickups in real time, and
              move through college life with less waiting and more flow.
            </p>

            {/* CTA buttons below, left aligned */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="hero-cta opacity-0">
                <Link href="/demo">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    View Demo
                  </Button>
                </Link>
              </div>

              <div className="hero-cta opacity-0">
                <Link href="/about">
                  <Button className="border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">
                    Explore Platform
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span className="hero-meta opacity-0">Built for college campuses</span>
              <span className="hero-meta h-1 w-1 rounded-full bg-slate-300 opacity-0" />
              <span className="hero-meta opacity-0">Pre-order and pickup</span>
              <span className="hero-meta h-1 w-1 rounded-full bg-slate-300 opacity-0" />
              <span className="hero-meta opacity-0">Live order tracking</span>
            </div>
          </div>

          {/* Right */}
          <div className="hero-mockup-wrap opacity-0 flex justify-center lg:justify-end">
            <div className="hero-float relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-blue-100/60 blur-2xl" />
              <div className="relative">
                <PhoneMockup
                  device="ios"
                  theme="white"
                  screen="dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}