// src/lib/gsap/index.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText }    from 'gsap/SplitText';   // ✅ free as of v3.13
import { CustomEase }   from 'gsap/CustomEase';   // ✅ free as of v3.13
import { useGSAP }      from '@gsap/react';        // ← ADD THIS

// Register ALL plugins ONCE here
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP); // ← add useGSAP

// Global defaults
gsap.defaults({
  duration: 0.618,
  ease: 'power3.out',
});

// Engine config
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP };