import Link from "next/link";
import AnimatedAvatar from "@/components/avatar/AnimatedAvatar";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-dark-lighter border border-primary/20 rounded-full mb-8 animate-fadeIn">
            <span className="text-primary text-sm font-medium">
              ✨ Ancient Math Meets Modern Blockchain
            </span>
          </div>

          {/* Animated Avatar - Centerpiece */}
          <div className="mb-8">
            <AnimatedAvatar />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            <span className="text-white">Welcome to </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cypher0x9
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn">
            Web3 Entrepreneur • Ancient Math Researcher • Content Creator
            <br />
            <span className="text-primary">Bridging Ancient Wisdom with Modern Innovation</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              View Projects
            </Link>
            <Link
              href="/research"
              className="px-8 py-3 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-dark transition-all duration-200 transform hover:scale-105"
            >
              Explore Research
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark-lighter border border-primary/10 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-400">Active Projects</div>
            </div>
            <div className="p-6 bg-dark-lighter border border-primary/10 rounded-lg">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-400">Research Papers</div>
            </div>
            <div className="p-6 bg-dark-lighter border border-primary/10 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
