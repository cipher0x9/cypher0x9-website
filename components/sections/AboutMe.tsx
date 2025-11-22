export default function AboutMe() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 text-primary/10 text-9xl font-bold">∅</div>
      <div className="absolute bottom-20 left-10 text-secondary/10 text-9xl font-bold">Σ</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-dark-lighter border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span>🌐</span> Web3 Entrepreneur
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building the <span className="text-primary font-semibold">Cypher0x9 project</span>,
                a groundbreaking Web3 initiative that bridges ancient mathematical wisdom with
                cutting-edge blockchain technology. Creating innovative solutions in the
                decentralized space while maintaining a focus on security, scalability, and user
                empowerment.
              </p>
            </div>

            <div className="bg-dark-lighter border border-secondary/20 rounded-lg p-8 hover:border-secondary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <span>📚</span> Mathematics Researcher
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Deep diving into <span className="text-secondary font-semibold">Ancient Indian Mathematics</span>,
                studying the revolutionary work of scholars like Brahmagupta and Aryabhata.
                Exploring the invention of zero, the development of decimal systems, and how these
                ancient concepts continue to shape modern cryptography and computational systems.
              </p>
            </div>
          </div>

          {/* Right Column - More Details */}
          <div className="space-y-6">
            <div className="bg-dark-lighter border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <span>🎥</span> Content Creator
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sharing knowledge and insights across multiple platforms, making complex topics
                accessible and engaging. Creating content about blockchain technology,
                cryptography, historical mathematics, and the future of decentralized systems.
              </p>
            </div>

            <div className="bg-dark-lighter border border-secondary/20 rounded-lg p-8 hover:border-secondary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                <span>🔍</span> My Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-dark border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                  Blockchain
                </span>
                <span className="px-4 py-2 bg-dark border border-secondary/30 text-secondary rounded-full text-sm font-medium hover:bg-secondary/10 transition-colors">
                  Cryptography
                </span>
                <span className="px-4 py-2 bg-dark border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                  Ancient Math
                </span>
                <span className="px-4 py-2 bg-dark border border-secondary/30 text-secondary rounded-full text-sm font-medium hover:bg-secondary/10 transition-colors">
                  AI & ML
                </span>
                <span className="px-4 py-2 bg-dark border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                  Web3
                </span>
                <span className="px-4 py-2 bg-dark border border-secondary/30 text-secondary rounded-full text-sm font-medium hover:bg-secondary/10 transition-colors">
                  Historical Research
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">My Journey</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Ancient Wisdom Discovery</h4>
                <p className="text-gray-400">
                  Fascinated by how ancient mathematicians like Brahmagupta and Aryabhata
                  revolutionized mathematics with concepts that still power modern computing.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 border-2 border-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold">2</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2">Blockchain Innovation</h4>
                <p className="text-gray-400">
                  Exploring the intersection of cryptography and blockchain, building
                  decentralized solutions that empower users and reshape digital interactions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Building Cypher0x9</h4>
                <p className="text-gray-400">
                  Creating a personal brand and Web3 project that bridges ancient mathematical
                  principles with modern blockchain technology, sharing knowledge across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
