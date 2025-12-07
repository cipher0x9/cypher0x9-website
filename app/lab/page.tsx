import { Metadata } from 'next';
import {
  FlaskConical,
  Sparkles,
  Atom,
  Zap,
  Lock,
  Cpu,
  AlertTriangle,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIAssistant } from '@/components/chat/ai-assistant';

export const metadata: Metadata = {
  title: 'Lab',
  description:
    'Experimental projects, research, and bleeding-edge explorations by CYPHER0X9.',
};

const experiments = [
  {
    title: 'Quantum-Resistant Encryption',
    description:
      'Exploring post-quantum cryptographic algorithms for future-proof blockchain security.',
    status: 'Research',
    progress: 35,
    icon: Lock,
    color: '#00D9FF',
    tags: ['Cryptography', 'Quantum', 'Security'],
  },
  {
    title: 'Autonomous AI Agents',
    description:
      'Self-improving AI agents that can learn, adapt, and collaborate in decentralized networks.',
    status: 'Active',
    progress: 60,
    icon: Cpu,
    color: '#6B21A8',
    tags: ['AI', 'Agents', 'Autonomous'],
  },
  {
    title: 'Zero-Knowledge Identity',
    description:
      'Privacy-preserving identity verification using ZK-proofs and decentralized identifiers.',
    status: 'Prototype',
    progress: 45,
    icon: Atom,
    color: '#FFD700',
    tags: ['ZK-Proofs', 'Identity', 'Privacy'],
  },
  {
    title: 'Neural Network on Chain',
    description:
      'Running machine learning inference directly on blockchain with optimized smart contracts.',
    status: 'Concept',
    progress: 15,
    icon: Zap,
    color: '#FF0080',
    tags: ['ML', 'Blockchain', 'Innovation'],
  },
];

const researchAreas = [
  {
    title: 'Decentralized AI',
    description: 'Distributed machine learning without central control',
  },
  {
    title: 'MEV Protection',
    description: 'Novel approaches to preventing value extraction',
  },
  {
    title: 'Cross-chain Messaging',
    description: 'Secure and efficient inter-blockchain communication',
  },
  {
    title: 'On-chain Governance',
    description: 'Improved voting mechanisms and delegation systems',
  },
];

export default function LabPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-[#030014]">
        {/* Background */}
        <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />
        <div className="fixed top-1/3 right-1/3 w-96 h-96 bg-[#FF0080]/10 rounded-full blur-3xl animate-nebula" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FF0080]/20 mb-6">
              <FlaskConical className="w-4 h-4 text-[#FF0080]" />
              <span className="text-sm text-white/70">Experimental Zone</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-aurora">The Lab</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Experimental projects, cutting-edge research, and bleeding-edge
              explorations. Warning: Highly experimental code ahead.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="mb-12 animate-fadeInUp stagger-2">
            <div className="glass-card p-4 border-[#FFD700]/30 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-[#FFD700]/20">
                <AlertTriangle className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">
                  Experimental Territory
                </h3>
                <p className="text-white/60 text-sm">
                  Projects in the lab are works in progress. Code may be
                  unstable, incomplete, or purely theoretical.
                </p>
              </div>
            </div>
          </div>

          {/* Experiments */}
          <div className="mb-16 animate-fadeInUp stagger-3">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#FF0080]" />
              Active Experiments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {experiments.map((experiment) => {
                const Icon = experiment.icon;
                return (
                  <div
                    key={experiment.title}
                    className="glass-card p-6 hover-lift group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${experiment.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: experiment.color }}
                        />
                      </div>
                      <span
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
                      >
                        {experiment.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FF0080] transition-colors">
                      {experiment.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      {experiment.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {experiment.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-white/60">Progress</span>
                        <span className="text-white">{experiment.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${experiment.progress}%`,
                            background: `linear-gradient(90deg, ${experiment.color}, ${experiment.color}80)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Research Areas */}
          <div className="animate-fadeInUp stagger-4">
            <h2 className="text-2xl font-bold text-white mb-8">
              Research Interests
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {researchAreas.map((area) => (
                <div
                  key={area.title}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <h3 className="text-white font-semibold mb-2">{area.title}</h3>
                  <p className="text-white/50 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration CTA */}
          <div className="mt-16 text-center glass-card p-8 animate-fadeInUp stagger-5">
            <FlaskConical className="w-12 h-12 text-[#FF0080] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              The lab is always open for researchers, developers, and curious
              minds who want to push the boundaries of what&apos;s possible.
            </p>
            <button className="btn-cosmic">
              Get in Touch
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
