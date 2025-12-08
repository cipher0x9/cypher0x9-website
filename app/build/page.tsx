import { Metadata } from 'next';
import {
  Wrench,
  Github,
  ExternalLink,
  Star,
  GitFork,
  Code,
  Globe,
  Brain,
  Shield,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIAssistant } from '@/components/chat/ai-assistant';

export const metadata: Metadata = {
  title: 'Build',
  description:
    'Projects, tools, and applications built by CYPHER0X9 pushing the boundaries of innovation.',
};

const projects = [
  {
    title: 'Cosmic AI Agent',
    description:
      'Multi-model AI routing system with intelligent task delegation across Claude, GPT-4, Grok, and Gemini.',
    tags: ['AI', 'TypeScript', 'Vercel AI SDK'],
    icon: Brain,
    color: '#6B21A8',
    stars: 128,
    forks: 34,
    status: 'Active',
    github: '#',
    demo: '#',
  },
  {
    title: 'DeFi Portfolio Tracker',
    description:
      'Real-time portfolio tracking across multiple chains with yield optimization suggestions.',
    tags: ['Web3', 'React', 'Wagmi', 'Viem'],
    icon: Globe,
    color: '#00D9FF',
    stars: 256,
    forks: 67,
    status: 'Active',
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Contract Security Kit',
    description:
      'Comprehensive toolkit for auditing and securing Solidity smart contracts.',
    tags: ['Security', 'Solidity', 'Foundry'],
    icon: Shield,
    color: '#FFD700',
    stars: 189,
    forks: 45,
    status: 'Active',
    github: '#',
    demo: '#',
  },
  {
    title: 'NFT Collection Generator',
    description:
      'AI-powered NFT art generation with on-chain metadata and IPFS storage.',
    tags: ['NFT', 'AI', 'IPFS', 'Solidity'],
    icon: Code,
    color: '#FF0080',
    stars: 312,
    forks: 89,
    status: 'Completed',
    github: '#',
    demo: '#',
  },
];

const techStack = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Solidity', category: 'Smart Contracts' },
  { name: 'Rust', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Vercel', category: 'Platform' },
];

export default function BuildPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-[#030014]">
        {/* Background */}
        <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />
        <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-nebula" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FFD700]/20 mb-6">
              <Wrench className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm text-white/70">Project Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Build</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Projects, tools, and applications built to push the boundaries of
              innovation. Open source contributions to the cosmos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fadeInUp stagger-2">
            {[
              { label: 'Projects', value: '50+' },
              { label: 'GitHub Stars', value: '2.5K+' },
              { label: 'Contributors', value: '100+' },
              { label: 'Open Source', value: '85%' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mb-16 animate-fadeInUp stagger-3">
            <h2 className="text-2xl font-bold text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="glass-card p-6 hover-lift group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: project.color }}
                        />
                      </div>
                      <span
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor:
                            project.status === 'Active'
                              ? 'rgba(0, 255, 178, 0.2)'
                              : 'rgba(255, 215, 0, 0.2)',
                          color:
                            project.status === 'Active' ? '#00FFB2' : '#FFD700',
                        }}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {project.forks}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <Github className="w-4 h-4 text-white/60 hover:text-white" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white/60 hover:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="animate-fadeInUp stagger-4">
            <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
            <div className="glass-card p-6">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00D9FF]/30 transition-colors"
                  >
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-white/40 text-xs ml-2">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fadeInUp stagger-5">
            <a
              href="https://github.com/cypher0x9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-cosmic"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}

export const dynamic = 'force-dynamic';
