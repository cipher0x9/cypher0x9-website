import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import EnhancedSocialHub from "@/components/sections/EnhancedSocialHub";
import WorldIntelligence from "@/components/dashboard/WorldIntelligence";
import ParticleBackground from "@/components/effects/ParticleBackground";

// Dynamically import 3D components to avoid SSR issues
const SolarSystem = dynamic(() => import("@/components/3d/SolarSystem"), {
  ssr: false,
  loading: () => 
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-dark-darker to-dark">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-pulse">🔮</div>
        <p className="text-primary text-xl font-bold animate-pulse">
          Initializing Universe...
        </p>
      </div>
    </div>});

export default function Home() {
  return (
    <>
      <ParticleBackground />

      {/* 3D Solar System Navigation */}
<Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="text-6xl animate-pulse">🔮</div></div>}>
            <SolarSystem />
        </Suspense>

      {/* Hero Section */}
      <Hero />

      {/* World Intelligence Dashboard */}
      <WorldIntelligence />

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Showcase */}
      <ProjectShowcase />

      {/* Enhanced Social Hub with 3D Flip Cards */}
      <EnhancedSocialHub />
    </>
  );
}
