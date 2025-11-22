"use client";

import { useState } from "react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: "active" | "research" | "coming-soon";
  icon: string;
  link?: string;
}

export default function ProjectShowcase() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "cypher0x9",
      title: "Cypher0x9",
      tagline: "Main Web3 Project",
      description:
        "A revolutionary Web3 initiative bridging ancient mathematical wisdom with cutting-edge blockchain technology. Building decentralized solutions that emphasize security, scalability, and user empowerment. Exploring novel cryptographic primitives inspired by historical mathematical breakthroughs.",
      technologies: ["Blockchain", "Cryptography", "Smart Contracts", "Web3"],
      status: "active",
      icon: "🔐",
      link: "#",
    },
    {
      id: "ancient-math",
      title: "Ancient Mathematics Research",
      tagline: "Historical Mathematical Analysis",
      description:
        "Deep research into Ancient Indian Mathematics, focusing on the groundbreaking work of Brahmagupta, Aryabhata, and the invention of zero. Exploring how these ancient concepts influence modern cryptography, computer science, and blockchain consensus mechanisms.",
      technologies: ["Mathematics", "History", "Cryptography", "Research"],
      status: "research",
      icon: "📐",
      link: "/research",
    },
    {
      id: "farcaster-apps",
      title: "Farcaster Mini Apps",
      tagline: "Decentralized Social Innovation",
      description:
        "Building innovative mini applications for the Farcaster protocol. Creating tools that enhance the decentralized social experience, from analytics dashboards to creative content tools. Exploring the future of social networking on Web3.",
      technologies: ["Farcaster", "React", "TypeScript", "Web3"],
      status: "coming-soon",
      icon: "🟪",
    },
    {
      id: "content-hub",
      title: "Content Creation Hub",
      tagline: "Multi-Platform Content Strategy",
      description:
        "A comprehensive content creation initiative spanning multiple platforms. Sharing insights on blockchain, cryptography, ancient mathematics, and AI. Making complex technical concepts accessible through engaging videos, articles, and interactive content.",
      technologies: ["Video Production", "Writing", "Social Media", "Education"],
      status: "active",
      icon: "🎥",
      link: "/blog",
    },
    {
      id: "personal-brand",
      title: "Personal Brand Building",
      tagline: "Digital Identity & Presence",
      description:
        "Building a cohesive personal brand across the digital landscape. Creating a central hub for all projects, content, and connections. Establishing thought leadership at the intersection of ancient wisdom and modern innovation.",
      technologies: ["Branding", "Design", "Marketing", "Community"],
      status: "active",
      icon: "✨",
    },
    {
      id: "future-projects",
      title: "Future Innovations",
      tagline: "Coming Soon",
      description:
        "Exciting new projects in the pipeline! Stay tuned for announcements about upcoming Web3 tools, educational initiatives, and collaborative research projects. The journey is just beginning.",
      technologies: ["TBA"],
      status: "coming-soon",
      icon: "🚀",
    },
  ];

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const getStatusBadge = (status: Project["status"]) => {
    const badges = {
      active: "bg-green-500/20 text-green-400 border-green-500/50",
      research: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      "coming-soon": "bg-purple-500/20 text-purple-400 border-purple-500/50",
    };
    const labels = {
      active: "Active",
      research: "Research",
      "coming-soon": "Coming Soon",
    };
    return (
      <span className={`px-3 py-1 border rounded-full text-xs font-semibold ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 text-primary text-6xl">∅ π Σ ∞</div>
        <div className="absolute bottom-0 right-0 text-secondary text-6xl">√ ∆ θ ∫</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects & Ventures
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Exploring the frontiers of Web3, ancient mathematics, and digital innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-dark-lighter border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header - Always Visible */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon */}
                    <div className="text-5xl">{project.icon}</div>

                    {/* Title and tagline */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        {getStatusBadge(project.status)}
                      </div>
                      <p className="text-primary font-medium mb-3">{project.tagline}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark border border-secondary/30 text-secondary rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <button className="text-primary hover:text-secondary transition-colors ml-4">
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedProject === project.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-primary/10">
                  <p className="text-gray-300 leading-relaxed mb-4 mt-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Explore Project</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
