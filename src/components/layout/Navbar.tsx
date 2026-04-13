"use client"
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import Link from "next/link";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

 
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out',  }
    );
  }, { scope: navRef });
  return (
    <header ref={navRef } style={{
      visibility:'hidden'
    }} className=" w-11/12  mx-auto  absolute top-0 rounded-xl left-0 right-0 z-50  text-white  ">
      <div className=" mx-auto px-6 h-16 flex justify-between items-center  ">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl"></span> Campus Connect 
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button size="sm">Get Early Access</Button>
      </div>
    </header>
  );
}
