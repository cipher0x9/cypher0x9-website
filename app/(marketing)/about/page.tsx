'use client';
import { Metadata } from 'next';
import {
  Globe,
  Brain,
  Network,
  Video,
  Code,
  Shield,
  Zap,
  Award,
  Github,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about CYPHER0X9 - Web3 Explorer, AI Researcher, Network Engineer, and Content Creator.',
};

const skills = [
  {
    category: 'Web3 & Blockchain',
    icon: Globe,
    color: '#00D9FF',
    items: [
      'Smart Contract Development',
      'DeFi Protocols',
      'NFT Architecture',
      'DAO Governance',
      'Token Economics',
      'Cross-chain Development',
    ],
  },
  {
    category: 'Artificial Intelligence',
    icon: Brain,
    color: '#6B21A8',
    items: [
      'Machine Learning',
      'Natural Language Processing',
      'AI Agent Development',
      'Prompt Engineering',
      'Model Fine-tuning',
      'Computer Vision',
    ],
  },
  {
    category: 'Network Engineering',
    icon: Network,
    color: '#FFD700',
    items: [
      'Cloud Architecture',
      'DevOps & CI/CD',
      'Security & Cryptography',
      'Distributed Systems',
      'API Design',
      'Infrastructure as Code',
    ],
  },
  {
    category: 'Content Creation',
    icon: Video,
    color: '#FF0080',
    items: [
      'Technical Writing',
      'Video Production',
      'Community Building',
      'Educational Content',
      'Social Media Strategy',
      'Brand Development',
    ],
  },
];

const achievements = [
  { icon: Code, value: '50+', label: 'Projects Built' },
  { icon: Award, value: '100+', label: 'Articles Published' },
  { icon: Shield, value: '10K+', label: 'Community Members' },
  { icon: Zap, value: '8+', label: 'Years Experience' },
];

const socials = [
  { name: 'Twitter', href: 'https://twitter.com/cypher0x9', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/cypher0x9', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/cypher0x9', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@cypher0x9', icon: Youtube },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#030014]">
      {/* Background Effects */}
      <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#6B21A8]/10 rounded-full blur-3xl animate-nebula" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-nebula" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D9FF]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FFB2] animate-pulse" />
            <span className="text-sm text-white/70">About the Architect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-cosmic">Building the Future</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            I&apos;m CYPHER0X9, a digital architect working at the intersection of
            decentralized systems, artificial intelligence, and emerging
            technologies. My mission is to explore, build, and share knowledge
            that pushes the boundaries of what&apos;s possible.
          </p>
        </div>

        {/* Avatar & Bio */}
        <div className="glass-card p-8 mb-16 animate-fadeInUp stagger-2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[#1A0A3D] via-[#6B21A8] to-[#00D9FF] p-1">
                <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient-cosmic">
                    C9
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#00FFB2] flex items-center justify-center animate-pulse">
                <Zap className="w-5 h-5 text-[#030014]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">CYPHER0X9</h2>
              <p className="text-[#00D9FF] mb-4">
                Web3 Explorer | AI Researcher | Network Engineer | Content Creator
              </p>
              <p className="text-white/60 mb-6">
                With over 8 years of experience in technology, I&apos;ve dedicated my
                career to understanding and building the infrastructure of
                tomorrow. From smart contracts to AI agents, from network
                architecture to content creation - I believe in learning
                everything and sharing that knowledge with the community.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/5 hover:bg-[#00D9FF]/10 hover:text-[#00D9FF] transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fadeInUp stagger-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.label}
                className="glass-card p-6 text-center hover-lift"
              >
                <Icon className="w-8 h-8 text-[#00D9FF] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient-cosmic mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-white/60">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-white mb-8 animate-fadeInUp">
            Expertise & Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6 animate-fadeInUp stagger-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.category} className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/70 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div className="glass-card p-8 text-center animate-fadeInUp stagger-5">
          <h2 className="text-2xl font-bold text-white mb-4">My Philosophy</h2>
          <blockquote className="text-xl text-white/70 italic max-w-2xl mx-auto">
            &quot;In a universe of infinite possibilities, the only limit is our
            imagination. Technology is not just about building tools—it&apos;s about
            expanding what humanity can achieve.&quot;
          </blockquote>
          <p className="mt-4 text-[#00D9FF]">— CYPHER0X9</p>
        </div>
      </div>
    </div>
  );
}
