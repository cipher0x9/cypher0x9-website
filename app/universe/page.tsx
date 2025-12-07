'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Wrench,
  FlaskConical,
  Globe,
  Brain,
  Network,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIAssistant } from '@/components/chat/ai-assistant';
import type { LucideIcon } from 'lucide-react';

interface Node {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  connections: string[];
}

const nodes: Node[] = [
  {
    id: 'learn',
    title: 'Learn',
    description: 'Educational content, tutorials, and deep dives into Web3, AI, and emerging tech.',
    icon: BookOpen,
    color: '#00D9FF',
    href: '/learn',
    connections: ['build', 'lab'],
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Projects, tools, and applications built to push the boundaries of innovation.',
    icon: Wrench,
    color: '#FFD700',
    href: '/build',
    connections: ['learn', 'lab'],
  },
  {
    id: 'lab',
    title: 'Lab',
    description: 'Experimental projects, research, and bleeding-edge explorations.',
    icon: FlaskConical,
    color: '#FF0080',
    href: '/lab',
    connections: ['learn', 'build'],
  },
];

const domains = [
  {
    id: 'web3',
    title: 'Web3 & Blockchain',
    icon: Globe,
    color: '#00D9FF',
    topics: ['DeFi', 'NFTs', 'DAOs', 'Smart Contracts', 'Tokenomics'],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: Brain,
    color: '#6B21A8',
    topics: ['LLMs', 'AI Agents', 'Machine Learning', 'NLP', 'Computer Vision'],
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    icon: Network,
    color: '#FFD700',
    topics: ['Cloud', 'DevOps', 'Security', 'Distributed Systems', 'APIs'],
  },
];

export default function UniversePage() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-[#030014]">
        {/* Background Effects */}
        <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />
        <div className="fixed top-1/3 left-1/4 w-[500px] h-[500px] bg-[#6B21A8]/10 rounded-full blur-3xl animate-nebula" />
        <div className="fixed bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#00D9FF]/10 rounded-full blur-3xl animate-nebula" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D9FF]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-sm text-white/70">Knowledge Graph</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-cosmic">The Universe</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Explore the interconnected knowledge graph of CYPHER0X9&apos;s digital
              universe. Navigate through learning paths, projects, and
              experimental research.
            </p>
          </div>

          {/* Knowledge Graph Visualization */}
          <div className="relative mb-20 animate-fadeInUp stagger-2">
            {/* Central Hub */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-[#1A0A3D] via-[#6B21A8] to-[#00D9FF] p-1 animate-rotate-slow">
                <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient-cosmic">C9</span>
                </div>
              </div>
            </div>

            {/* Node Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isHovered = hoveredNode === node.id;
                const isConnected = hoveredNode && nodes.find(n => n.id === hoveredNode)?.connections.includes(node.id);

                return (
                  <Link
                    key={node.id}
                    href={node.href}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`glass-card p-6 transition-all duration-300 ${
                      isHovered ? 'scale-105 shadow-2xl' : ''
                    } ${isConnected ? 'border-[#00D9FF]/50' : ''}`}
                    style={{
                      boxShadow: isHovered ? `0 0 40px ${node.color}40` : undefined,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${node.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: node.color }} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {node.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {node.description}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: node.color }}>
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Domain Areas */}
          <div className="animate-fadeInUp stagger-3">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Knowledge Domains
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {domains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div key={domain.id} className="glass-card p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${domain.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: domain.color }} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {domain.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {domain.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center animate-fadeInUp stagger-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-[#FFD700]/20">
              <Sparkles className="w-5 h-5 text-[#FFD700]" />
              <span className="text-white/70">
                Interactive 3D Knowledge Graph coming soon
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
