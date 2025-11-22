"use client";

import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
  followers?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter/X",
    url: "https://x.com/Cypher0x9",
    icon: "𝕏",
    color: "from-black via-gray-800 to-blue-600",
    description: "Latest updates & thoughts",
    followers: "Follow for Web3 insights",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/Cypher0x9",
    icon: "📷",
    color: "from-purple-600 via-pink-600 to-orange-500",
    description: "Visual journey & stories",
    followers: "Daily inspiration",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@cypher0x9",
    icon: "🎵",
    color: "from-black via-cyan-500 to-pink-500",
    description: "Short-form content",
    followers: "Educational clips",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@Cypher0x9",
    icon: "🧵",
    color: "from-gray-800 via-gray-600 to-black",
    description: "Threaded discussions",
    followers: "Join the conversation",
  },
  {
    name: "Farcaster",
    url: "https://farcaster.xyz/~/code/O8GOVV",
    icon: "🟪",
    color: "from-purple-700 via-purple-500 to-purple-900",
    description: "Decentralized social",
    followers: "Web3 community",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61582822815469",
    icon: "👥",
    color: "from-blue-700 via-blue-500 to-blue-900",
    description: "Community updates",
    followers: "Connect & engage",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/16038013/",
    icon: "💼",
    color: "from-blue-800 via-blue-600 to-blue-900",
    description: "Professional network",
    followers: "Business insights",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Cypher0X9_Youtube",
    icon: "📺",
    color: "from-red-600 via-red-500 to-red-700",
    description: "Video content & tutorials",
    followers: "Subscribe for deep dives",
  },
  {
    name: "Substack",
    url: "https://substack.com/@cypher0x9",
    icon: "📝",
    color: "from-orange-600 via-orange-400 to-orange-700",
    description: "Long-form articles",
    followers: "Newsletter & research",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/cypher0x9.bsky.social",
    icon: "🦋",
    color: "from-blue-400 via-sky-400 to-blue-600",
    description: "Decentralized microblogging",
    followers: "Early adopter community",
  },
  {
    name: "Zora",
    url: "https://zora.co/invite/cypher0x9",
    icon: "🎨",
    color: "from-primary via-secondary to-purple-600",
    description: "NFT creations",
    followers: "Digital art & collectibles",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/u/cypher0x09",
    icon: "🤖",
    color: "from-orange-600 via-orange-500 to-red-600",
    description: "Community discussions",
    followers: "AMAs & threads",
  },
  {
    name: "StockTwits",
    url: "http://www.stocktwits.com/cypher0x9",
    icon: "📈",
    color: "from-green-600 via-emerald-500 to-green-700",
    description: "Market insights",
    followers: "Trading & crypto analysis",
  },
];

export default function EnhancedSocialHub() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <section id="social-hub" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="text-6xl mb-4 animate-float">🌐</div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-purple-500 bg-clip-text text-transparent animate-gradient">
              Social Universe
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-6">
            Connect across 13 platforms. Click cards to flip and discover more.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className="flip-card-container perspective-1000"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`flip-card-inner ${flippedCards.has(index) ? "flipped" : ""}`}
                onClick={() => toggleFlip(index)}
              >
                {/* Front of card */}
                <div className="flip-card-front glass-card p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[200px]">
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {social.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to flip ↻
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back glass-card p-6 rounded-2xl border-2 border-secondary/20 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-20 rounded-2xl`}></div>

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[200px]">
                    <div>
                      <div className="text-4xl mb-3">{social.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {social.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        {social.description}
                      </p>
                      {social.followers && (
                        <p className="text-xs text-primary">
                          {social.followers}
                        </p>
                      )}
                    </div>

                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-dark font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Profile →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 glass-card border-2 border-primary/30 rounded-2xl hover:border-primary/50 transition-all duration-300">
            <span className="text-3xl animate-pulse">✨</span>
            <div className="text-left">
              <p className="text-gray-300 text-lg">
                <span className="text-primary font-bold">Join the journey</span> across the digital cosmos
              </p>
              <p className="text-gray-400 text-sm">
                Ancient mathematics meets blockchain innovation
              </p>
            </div>
            <span className="text-3xl animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
