"use client";

export default function SocialGarden() {
  const socialLinks = [
    {
      name: "Farcaster",
      url: "#",
      icon: "🟪",
      color: "from-purple-500 to-purple-700",
      hoverColor: "hover:border-purple-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/cipher0x9",
      icon: "💻",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:border-gray-500",
    },
    {
      name: "Substack",
      url: "#",
      icon: "📝",
      color: "from-orange-500 to-orange-700",
      hoverColor: "hover:border-orange-500",
    },
    {
      name: "Twitter/X",
      url: "#",
      icon: "𝕏",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:border-blue-500",
    },
    {
      name: "Instagram",
      url: "#",
      icon: "📷",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:border-pink-500",
    },
    {
      name: "TikTok",
      url: "#",
      icon: "🎵",
      color: "from-black to-cyan-500",
      hoverColor: "hover:border-cyan-500",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "💼",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:border-blue-600",
    },
    {
      name: "Zora",
      url: "#",
      icon: "🎨",
      color: "from-primary to-secondary",
      hoverColor: "hover:border-primary",
    },
    {
      name: "Base Network",
      url: "#",
      icon: "🔷",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:border-blue-400",
    },
    {
      name: "Apple Music",
      url: "#",
      icon: "🎧",
      color: "from-red-500 to-pink-600",
      hoverColor: "hover:border-red-500",
    },
    {
      name: "Spotify",
      url: "#",
      icon: "🎶",
      color: "from-green-500 to-green-700",
      hoverColor: "hover:border-green-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect With Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Join me across the digital landscape. Find me on your favorite platform.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-dark-lighter border-2 border-primary/10 rounded-xl p-8
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                ${social.hoverColor} hover:shadow-primary/20 animate-fadeIn`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {social.name}
                </h3>

                {/* Decorative line */}
                <div className="w-0 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg">
            <span className="text-2xl">✨</span>
            <p className="text-gray-300">
              <span className="text-primary font-semibold">Follow along</span> as I build, create, and explore
              the intersection of ancient wisdom and modern innovation.
            </p>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
