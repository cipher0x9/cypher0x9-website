const skills = [
  {
    category: "Blockchain",
    items: [
      "Smart Contracts",
      "Solidity",
      "Web3.js",
      "Ethereum",
      "DeFi",
      "NFTs",
    ],
  },
  {
    category: "Cryptography",
    items: [
      "Zero-Knowledge Proofs",
      "Encryption Algorithms",
      "Hash Functions",
      "Digital Signatures",
      "Homomorphic Encryption",
      "Post-Quantum Crypto",
    ],
  },
  {
    category: "Mathematics",
    items: [
      "Number Theory",
      "Abstract Algebra",
      "Computational Math",
      "Game Theory",
      "Probability",
      "Discrete Math",
    ],
  },
  {
    category: "Development",
    items: [
      "TypeScript",
      "Rust",
      "Python",
      "Next.js",
      "React",
      "Node.js",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-dark-lighter/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Core </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning cryptography, blockchain technology,
            mathematics, and modern software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-dark border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 text-secondary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-dark border border-secondary/30 rounded-lg">
            <span className="text-secondary font-semibold mr-2">💡</span>
            <span className="text-gray-300">
              Continuously learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
