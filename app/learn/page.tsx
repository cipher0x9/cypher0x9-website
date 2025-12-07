import { Metadata } from 'next';
import {
  BookOpen,
  Video,
  FileText,
  Code,
  ArrowRight,
  Clock,
  Users,
  Star,
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AIAssistant } from '@/components/chat/ai-assistant';

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Educational content, tutorials, and deep dives into Web3, AI, and emerging technologies.',
};

const categories = [
  {
    id: 'web3',
    title: 'Web3 Fundamentals',
    description: 'Master blockchain, smart contracts, and decentralized systems.',
    icon: Code,
    color: '#00D9FF',
    courses: 12,
    articles: 45,
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Explore artificial intelligence, LLMs, and AI agent development.',
    icon: BookOpen,
    color: '#6B21A8',
    courses: 8,
    articles: 32,
  },
  {
    id: 'defi',
    title: 'DeFi Deep Dives',
    description: 'Understand decentralized finance protocols and strategies.',
    icon: FileText,
    color: '#FFD700',
    courses: 6,
    articles: 28,
  },
  {
    id: 'infra',
    title: 'Infrastructure',
    description: 'Build robust systems with cloud, DevOps, and security best practices.',
    icon: Video,
    color: '#FF0080',
    courses: 10,
    articles: 38,
  },
];

const featuredContent = [
  {
    title: 'Building Your First Smart Contract',
    category: 'Web3',
    type: 'Tutorial',
    duration: '45 min',
    difficulty: 'Beginner',
    color: '#00D9FF',
  },
  {
    title: 'AI Agents: From Concept to Production',
    category: 'AI',
    type: 'Course',
    duration: '4 hours',
    difficulty: 'Advanced',
    color: '#6B21A8',
  },
  {
    title: 'Understanding Token Economics',
    category: 'DeFi',
    type: 'Article',
    duration: '15 min',
    difficulty: 'Intermediate',
    color: '#FFD700',
  },
  {
    title: 'Zero-Knowledge Proofs Explained',
    category: 'Web3',
    type: 'Deep Dive',
    duration: '30 min',
    difficulty: 'Advanced',
    color: '#FF0080',
  },
];

export default function LearnPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-[#030014]">
        {/* Background */}
        <div className="fixed inset-0 cosmic-grid opacity-20 pointer-events-none" />
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl animate-nebula" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00D9FF]/20 mb-6">
              <BookOpen className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-sm text-white/70">Learning Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-cosmic">Learn</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Educational content, tutorials, and deep dives into Web3, AI, and
              emerging technologies. Start your journey through the cosmos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fadeInUp stagger-2">
            {[
              { icon: BookOpen, label: 'Courses', value: '36+' },
              { icon: FileText, label: 'Articles', value: '143+' },
              { icon: Video, label: 'Videos', value: '50+' },
              { icon: Users, label: 'Learners', value: '10K+' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <Icon className="w-6 h-6 text-[#00D9FF] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Categories */}
          <div className="mb-16 animate-fadeInUp stagger-3">
            <h2 className="text-2xl font-bold text-white mb-8">
              Learning Paths
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="glass-card p-6 hover-lift group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: category.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-white/50">
                          <span>{category.courses} courses</span>
                          <span>•</span>
                          <span>{category.articles} articles</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#00D9FF] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Content */}
          <div className="animate-fadeInUp stagger-4">
            <h2 className="text-2xl font-bold text-white mb-8">
              Featured Content
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredContent.map((content, index) => (
                <div
                  key={index}
                  className="glass-card p-5 hover-lift cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: `${content.color}20`,
                        color: content.color,
                      }}
                    >
                      {content.category}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/60">
                      {content.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                    {content.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {content.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {content.difficulty}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center glass-card p-8 animate-fadeInUp stagger-5">
            <h3 className="text-xl font-semibold text-white mb-4">
              More Content Coming Soon
            </h3>
            <p className="text-white/60 mb-6">
              We&apos;re constantly adding new courses, tutorials, and articles.
              Subscribe to stay updated.
            </p>
            <button className="btn-cosmic">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
