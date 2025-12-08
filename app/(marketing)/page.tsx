'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Globe,
  Brain,
  Network,
  Video,
} from 'lucide-react';

// Animated star background component
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }

    const stars: Star[] = [];
    const numStars = 200;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Nebula clouds
    const drawNebula = () => {
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.4,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        300
      );
      gradient1.addColorStop(0, 'rgba(107, 33, 168, 0.15)');
      gradient1.addColorStop(0.5, 'rgba(107, 33, 168, 0.05)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7,
        canvas.height * 0.6,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        250
      );
      gradient2.addColorStop(0, 'rgba(0, 217, 255, 0.1)');
      gradient2.addColorStop(0.5, 'rgba(0, 217, 255, 0.03)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula
      drawNebula();

      // Draw and update stars
      stars.forEach((star) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity * (0.7 + twinkle * 0.3);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        // Move stars slowly
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

    if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// Role badges data
const roles = [
  { icon: Globe, label: 'Web3 Explorer', color: '#00D9FF' },
  { icon: Brain, label: 'AI Researcher', color: '#6B21A8' },
  { icon: Network, label: 'Network Engineer', color: '#FFD700' },
  { icon: Video, label: 'Content Creator', color: '#FF0080' },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030014]">
      {/* Animated Background */}
      <StarField />

      {/* Cosmic Grid Overlay */}
      <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Glowing orb behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#6B21A8]/20 to-[#00D9FF]/20 rounded-full blur-3xl animate-nebula" />

        {/* Content Container */}
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D9FF]/20 mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#00FFB2] animate-pulse" />
            <span className="text-sm text-white/70">
              System Online • Building the Future
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-responsive-hero font-bold mb-6 animate-fadeInUp">
            <span className="text-gradient-cosmic">CYPHER</span>
            <span className="text-[#FFD700]">0X9</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-8 animate-fadeInUp stagger-2">
            Exploring the intersection of decentralized technology, artificial
            intelligence, and digital innovation
          </p>

          {/* Role Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fadeInUp stagger-3">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:border-[#00D9FF]/30 transition-all group"
                >
                  <Icon
                    className="w-4 h-4 transition-colors"
                    style={{ color: role.color }}
                  />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {role.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp stagger-4">
            <Link href="/universe" className="group">
              <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-[#1A0A3D] via-[#6B21A8] to-[#00D9FF] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D9FF]/30 hover:scale-105">
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Enter Universe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>

            <Link href="/about">
              <button className="px-8 py-4 rounded-full border-2 border-[#00D9FF]/50 text-[#00D9FF] font-semibold text-lg hover:bg-[#00D9FF]/10 hover:border-[#00D9FF] transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Bottom Stats/Social Proof */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fadeInUp stagger-5">
            {[
              { label: 'Projects Built', value: '50+' },
              { label: 'Articles Written', value: '100+' },
              { label: 'Communities', value: '10K+' },
              { label: 'Years Experience', value: '8+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-cosmic mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

