export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding Zero-Knowledge Proofs in Web3",
      excerpt: "A deep dive into how zero-knowledge proofs work and their applications in blockchain technology.",
      author: "Cipher0x9",
      date: "2024-11-15",
      category: "Cryptography",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: 2,
      title: "The Mathematics Behind Blockchain Consensus",
      excerpt: "Exploring the mathematical foundations of various consensus mechanisms including PoW, PoS, and BFT.",
      author: "Cipher0x9",
      date: "2024-11-10",
      category: "Mathematics",
      readTime: "12 min read",
      link: "#",
    },
    {
      id: 3,
      title: "Building Secure Smart Contracts: Best Practices",
      excerpt: "Learn the essential security patterns and common vulnerabilities when developing smart contracts.",
      author: "Cipher0x9",
      date: "2024-11-05",
      category: "Security",
      readTime: "10 min read",
      link: "#",
    },
    {
      id: 4,
      title: "Ancient Ciphers and Modern Cryptography",
      excerpt: "How ancient encryption methods influenced modern cryptographic systems in blockchain.",
      author: "Cipher0x9",
      date: "2024-10-28",
      category: "History",
      readTime: "6 min read",
      link: "#",
    },
    {
      id: 5,
      title: "DeFi Economics: Game Theory in Action",
      excerpt: "Analyzing the game-theoretic principles that govern decentralized finance protocols.",
      author: "Cipher0x9",
      date: "2024-10-20",
      category: "DeFi",
      readTime: "9 min read",
      link: "#",
    },
    {
      id: 6,
      title: "Preparing for the Quantum Threat",
      excerpt: "Understanding quantum computing's impact on blockchain security and how to prepare.",
      author: "Cipher0x9",
      date: "2024-10-12",
      category: "Quantum",
      readTime: "11 min read",
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
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on cryptography, mathematics, and blockchain technology.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary text-dark rounded-full text-xs font-bold">
              FEATURED
            </span>
            <span className="text-gray-400 text-sm">{posts[0].category}</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{posts[0].title}</h2>
          <p className="text-gray-300 mb-6">{posts[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>{posts[0].author}</span>
              <span>•</span>
              <span>{posts[0].date}</span>
              <span>•</span>
              <span>{posts[0].readTime}</span>
            </div>
            <a
              href={posts[0].link}
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
            >
              Read More
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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-dark-lighter border border-primary/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-dark border border-secondary/30 text-secondary rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 flex-1">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a
                href={post.link}
                className="inline-flex items-center text-secondary hover:text-secondary-dark transition-colors font-medium"
              >
                Read More
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
