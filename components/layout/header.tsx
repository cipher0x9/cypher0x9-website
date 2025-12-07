'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WalletButton } from '@/components/web3/wallet-button';

const navigation = [
  { name: 'Universe', href: '/universe', icon: '🌌' },
  { name: 'Learn', href: '/learn', icon: '📚' },
  { name: 'Build', href: '/build', icon: '🔧' },
  { name: 'Lab', href: '/lab', icon: '🧪' },
  { name: 'About', href: '/about', icon: '👤' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-dark shadow-lg shadow-[#00D9FF]/5'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#6B21A8] blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A0A3D] to-[#6B21A8] border border-[#00D9FF]/30">
                <Sparkles className="w-5 h-5 text-[#00D9FF]" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient-cosmic">CYPHER</span>
              <span className="text-[#FFD700]">0X9</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-[#00D9FF]/10 text-[#00D9FF] shadow-lg shadow-[#00D9FF]/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span className="mr-1.5">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* AI Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
              <Zap className="w-3 h-3 text-[#00D9FF] animate-pulse" />
              <span className="text-white/70">AI Online</span>
            </div>

            {/* Wallet Button */}
            <WalletButton />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-all',
                      isActive
                        ? 'bg-[#00D9FF]/10 text-[#00D9FF]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
