export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "CryptoVault",
      description: "A secure decentralized storage solution that leverages advanced encryption algorithms to protect user data. Built with Solidity and IPFS for maximum security and decentralization.",
      tags: ["Blockchain", "Security", "Web3", "IPFS"],
      status: "Active",
      github: "#",
    },
    {
      id: 2,
      title: "ChainMath",
      description: "Mathematical frameworks for blockchain consensus mechanisms. Research-driven project exploring novel approaches to distributed consensus using number theory and abstract algebra.",
      tags: ["Mathematics", "Consensus", "Research", "Blockchain"],
      status: "Active",
      github: "#",
    },
    {
      id: 3,
      title: "ZK-Proofs Lab",
      description: "Zero-knowledge proof implementations for privacy-preserving applications. Includes zk-SNARKs and zk-STARKs implementations with practical use cases.",
      tags: ["Privacy", "Cryptography", "ZK", "Security"],
      status: "Active",
      github: "#",
    },
    {
      id: 4,
      title: "DeFi Analytics",
      description: "Advanced analytics platform for DeFi protocols. Real-time monitoring, risk assessment, and predictive modeling for decentralized finance applications.",
      tags: ["DeFi", "Analytics", "Web3", "Data Science"],
      status: "In Development",
      github: "#",
    },
    {
      id: 5,
      title: "Smart Contract Auditor",
      description: "Automated smart contract auditing tool using static analysis and formal verification methods to identify vulnerabilities and security issues.",
      tags: ["Security", "Smart Contracts", "Solidity", "Auditing"],
      status: "In Development",
      github: "#",
    },
    {
      id: 6,
      title: "Quantum-Resistant Crypto",
      description: "Implementation of post-quantum cryptographic algorithms for blockchain applications. Preparing for the quantum computing era.",
      tags: ["Cryptography", "Quantum", "Research", "Security"],
      status: "Research",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore our comprehensive portfolio of Web3 projects that bridge ancient mathematical
            principles with cutting-edge blockchain technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-lighter border border-primary/10 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Active"
                      ? "bg-secondary/20 text-secondary"
                      : project.status === "In Development"
                      ? "bg-primary/20 text-primary"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark text-primary border border-primary/30 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="inline-flex items-center text-secondary hover:text-secondary-dark transition-colors font-medium"
              >
                View on GitHub
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
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
