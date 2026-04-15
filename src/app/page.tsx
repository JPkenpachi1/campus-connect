// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FeaturesBento from "@/components/sections/FeaturesBento";
import FinalCTA from "@/components/sections/FinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero />
      <section id="bento">
        <FeaturesBento />
      </section>
      <section id="features">   {/* ← wrap or add id directly */}
        <Features />
      </section>
      
      <section id="cta">
        <FinalCTA />
      </section>
      
    </main>
    <Footer/>
    </>
  );
}