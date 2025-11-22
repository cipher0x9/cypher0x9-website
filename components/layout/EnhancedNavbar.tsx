"use client";

import Link from "next/link";
import { useState } from "react";

interface SubLink {
  name: string;
  href: string;
  description?: string;
}

interface NavLink {
  name: string;
  href: string;
  subLinks?: SubLink[];
}

export default function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Projects",
      href: "/projects",
      subLinks: [
        { name: "Cypher0x9", href: "/projects#cypher0x9", description: "Main Web3 Project" },
        { name: "Ancient Math Research", href: "/research", description: "Historical Mathematics" },
        { name: "Farcaster Apps", href: "/projects#farcaster", description: "Coming Soon" },
        { name: "All Projects", href: "/projects", description: "View All" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      subLinks: [
        { name: "Ancient Math", href: "/research#ancient", description: "Historical Studies" },
        { name: "Blockchain", href: "/research#blockchain", description: "Web3 Research" },
        { name: "Publications", href: "/research", description: "All Papers" },
      ],
    },
    {
      name: "Content",
      href: "/blog",
      subLinks: [
        { name: "Blog", href: "/blog", description: "Latest Articles" },
        { name: "Videos", href: "#videos", description: "YouTube & TikTok" },
        { name: "Social", href: "#social", description: "All Platforms" },
      ],
    },
    {
      name: "About",
      href: "/about",
      subLinks: [
        { name: "Bio", href: "/about#bio", description: "My Story" },
        { name: "Skills", href: "/about#skills", description: "What I Do" },
        { name: "Journey", href: "/about#journey", description: "Timeline" },
      ],
    },
    {
      name: "Connect",
      href: "/contact",
      subLinks: [
        { name: "Social Links", href: "#social", description: "All Platforms" },
        { name: "Contact", href: "/contact", description: "Get in Touch" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">
              <span className="text-primary group-hover:text-secondary transition-colors">
                Cypher
              </span>
              <span className="text-secondary group-hover:text-primary transition-colors">
                0x9
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-gray-300 hover:text-primary transition-colors duration-200 relative flex items-center gap-1"
                >
                  {link.name}
                  {link.subLinks && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
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
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-dark-lighter border border-primary/20 rounded-lg shadow-xl overflow-hidden animate-fadeIn">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-3 hover:bg-primary/10 transition-colors border-b border-primary/5 last:border-b-0"
                      >
                        <div className="font-medium text-white hover:text-primary transition-colors">
                          {subLink.name}
                        </div>
                        {subLink.description && (
                          <div className="text-sm text-gray-400 mt-1">
                            {subLink.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter border-t border-primary/10 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-dark transition-colors duration-200 rounded-md"
                  onClick={() => !link.subLinks && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="ml-4 space-y-1">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-secondary hover:bg-dark transition-colors duration-200 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
