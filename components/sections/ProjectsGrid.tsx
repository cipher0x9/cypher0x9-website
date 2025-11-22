import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "CryptoVault",
    description: "Secure decentralized storage solution using advanced encryption algorithms.",
    tags: ["Blockchain", "Security", "Web3"],
    link: "/projects",
  },
  {
    id: 2,
    title: "ChainMath",
    description: "Mathematical frameworks for blockchain consensus mechanisms.",
    tags: ["Mathematics", "Consensus", "Research"],
    link: "/projects",
  },
  {
    id: 3,
    title: "ZK-Proofs Lab",
    description: "Zero-knowledge proof implementations for privacy-preserving applications.",
    tags: ["Privacy", "Cryptography", "ZK"],
    link: "/projects",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our cutting-edge Web3 projects that combine ancient mathematical principles
            with modern blockchain technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-lighter border border-primary/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark text-primary border border-primary/30 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center text-secondary hover:text-secondary-dark transition-colors font-medium"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark transition-all duration-200 transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
