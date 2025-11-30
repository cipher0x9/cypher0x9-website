"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Planet from "./Planet";
import CentralSun from "./CentralSun";
export interface PlanetConfig {
  name: string;
  color: string;
  glowColor: string;
  orbitRadius: number;
  size: number;
  speed: number;
  href: string;
  icon: string;
}

const planets: PlanetConfig[] = [
  {
    name: "Home",
    color: "#00d4ff",
    glowColor: "#00d4ff",
    orbitRadius: 4,
    size: 0.4,
    speed: 0.3,
    href: "/",
    icon: "🏠",
  },
  {
    name: "Projects",
    color: "#00ff88",
    glowColor: "#00ff88",
    orbitRadius: 5.5,
    size: 0.45,
    speed: 0.25,
    href: "/projects",
    icon: "🚀",
  },
  {
    name: "Social Hub",
    color: "#ff00ff",
    glowColor: "#ff00ff",
    orbitRadius: 7,
    size: 0.5,
    speed: 0.2,
    href: "#social-hub",
    icon: "🌐",
  },
  {
    name: "Research",
    color: "#ffff00",
    glowColor: "#ffff00",
    orbitRadius: 8.5,
    size: 0.4,
    speed: 0.18,
    href: "/research",
    icon: "🔬",
  },
  {
    name: "Content",
    color: "#ff8800",
    glowColor: "#ff8800",
    orbitRadius: 10,
    size: 0.42,
    speed: 0.15,
    href: "/blog",
    icon: "📝",
  },
  {
    name: "Live Feed",
    color: "#ff0088",
    glowColor: "#ff0088",
    orbitRadius: 11.5,
    size: 0.38,
    speed: 0.13,
    href: "#live-feed",
    icon: "📡",
  },
  {
    name: "World Clock",
    color: "#8800ff",
    glowColor: "#8800ff",
    orbitRadius: 13,
    size: 0.45,
    speed: 0.11,
    href: "#world-clock",
    icon: "🌍",
  },
  {
    name: "Files",
    color: "#00ffff",
    glowColor: "#00ffff",
    orbitRadius: 14.5,
    size: 0.4,
    speed: 0.09,
    href: "#files",
    icon: "📁",
  },
  {
    name: "Settings",
    color: "#88ff00",
    glowColor: "#88ff00",
    orbitRadius: 16,
    size: 0.35,
    speed: 0.08,
    href: "#settings",
    icon: "⚙️",
  },
];
export default function SolarSystem() {
  return (
      <div className="w-full h-screen relative">
        {/* Instructions overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg px-6 py-3">
          <p className="text-primary text-sm font-mono">
            🖱️ Drag to rotate • Scroll to zoom • Click planets to navigate
          </p>
        </div>

        <Canvas
          camera={{ position: [0, 5, 20], fov: 60 }}
          className="bg-gradient-to-b from-dark-darker to-dark"
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />

          {/* Stars background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Central Sun (Avatar) */}
          <CentralSun />

          {/* Planets */}
          {planets.map((planet, index) => (
            <Planet key={planet.name} {...planet} index={index} />
          ))}

          {/* Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={10}
            maxDistance={50}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-primary/30 rounded-lg p-4 max-w-xs">
        <h3 className="text-primary font-bold mb-2 text-sm">Navigation Planets</h3>
        <div className="grid grid-cols-3 gap-2">
          {planets.slice(0, 9).map((planet) => (
            <div key={planet.name} className="flex items-center gap-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: planet.color, boxShadow: `0 0 8px ${planet.color}` }}
              />
              <span className="text-xs text-gray-300">{planet.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </ErrorBoundary>
}
