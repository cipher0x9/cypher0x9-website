export default function ResearchPage() {
  const papers = [
    {
      id: 1,
      title: "Ancient Mathematical Algorithms in Modern Blockchain Consensus",
      authors: "Cipher0x9 Research Team",
      date: "2024-11",
      abstract: "This paper explores the application of ancient mathematical algorithms, particularly those from Greek and Islamic mathematics, in modern blockchain consensus mechanisms.",
      topics: ["Mathematics", "Blockchain", "Consensus"],
      link: "#",
    },
    {
      id: 2,
      title: "Zero-Knowledge Proofs: A Comprehensive Survey",
      authors: "Cipher0x9 Research Team",
      date: "2024-10",
      abstract: "A comprehensive survey of zero-knowledge proof systems, including zk-SNARKs, zk-STARKs, and emerging post-quantum alternatives.",
      topics: ["Cryptography", "ZK-Proofs", "Privacy"],
      link: "#",
    },
    {
      id: 3,
      title: "Post-Quantum Cryptography for Blockchain Applications",
      authors: "Cipher0x9 Research Team",
      date: "2024-09",
      abstract: "Analyzing the threat of quantum computing to current blockchain cryptographic systems and proposing quantum-resistant alternatives.",
      topics: ["Quantum", "Cryptography", "Security"],
      link: "#",
    },
    {
      id: 4,
      title: "Game Theory and Economic Models in DeFi Protocols",
      authors: "Cipher0x9 Research Team",
      date: "2024-08",
      abstract: "Mathematical modeling of economic incentives and game-theoretic strategies in decentralized finance protocols.",
      topics: ["DeFi", "Game Theory", "Economics"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Research
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our research explores the intersection of mathematics, cryptography, and blockchain technology.
            We publish peer-reviewed papers and contribute to the advancement of Web3 technology.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-dark-lighter border border-primary/20 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="text-xl font-bold text-primary mb-2">Cryptography</h3>
            <p className="text-gray-400">Advanced cryptographic protocols and zero-knowledge proofs</p>
          </div>
          <div className="bg-dark-lighter border border-secondary/20 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">📐</div>
            <h3 className="text-xl font-bold text-secondary mb-2">Mathematics</h3>
            <p className="text-gray-400">Number theory, algebra, and computational mathematics</p>
          </div>
          <div className="bg-dark-lighter border border-primary/20 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">⛓️</div>
            <h3 className="text-xl font-bold text-primary mb-2">Blockchain</h3>
            <p className="text-gray-400">Consensus mechanisms, scalability, and security</p>
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Publications</h2>
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-dark-lighter border border-primary/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white flex-1">{paper.title}</h3>
                <span className="text-gray-500 text-sm ml-4">{paper.date}</span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{paper.authors}</p>
              <p className="text-gray-400 mb-4">{paper.abstract}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {paper.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-dark text-secondary border border-secondary/30 rounded-full text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <a
                href={paper.link}
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
              >
                Read Paper
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
