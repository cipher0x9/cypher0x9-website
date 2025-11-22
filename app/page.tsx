import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import SocialGarden from "@/components/sections/SocialGarden";
import ParticleBackground from "@/components/effects/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <AboutMe />
      <ProjectShowcase />
      <SocialGarden />
    </>
  );
}
