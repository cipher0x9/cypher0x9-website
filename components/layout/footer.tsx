'use client';

import Link from 'next/link';
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  ExternalLink,
} from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/cypher0x9', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/cypher0x9', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/cypher0x9', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@cypher0x9', icon: Youtube },
];

const quickLinks = [
  { name: 'Universe', href: '/universe' },
  { name: 'Learn', href: '/learn' },
  { name: 'Build', href: '/build' },
  { name: 'Lab', href: '/lab' },
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API', href: '/api/health' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-[#030014]">
      {/* Cosmic Grid Overlay */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gradient-cosmic">CYPHER</span>
                <span className="text-[#FFD700]">0X9</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-4 max-w-xs">
              Exploring the intersection of decentralized technology, artificial
              intelligence, and digital innovation.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#00D9FF]/10 hover:text-[#00D9FF] transition-all duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#00D9FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#00D9FF] transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Get the latest insights on Web3, AI, and digital innovation.
            </p>
            <form className="flex flex-col gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="btn-cosmic text-sm py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} CYPHER0X9. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <span className="flex items-center gap-1">
              Built with
              <span className="text-[#00D9FF]">♥</span>
              in the Cosmos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
