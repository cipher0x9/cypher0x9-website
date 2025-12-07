'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon?: string;
  description?: string;
}

interface NavProps {
  items: NavItem[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Nav({
  items,
  orientation = 'horizontal',
  className,
}: NavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'flex gap-1',
        orientation === 'vertical' ? 'flex-col' : 'flex-row items-center',
        className
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-[#00D9FF]/10 text-[#00D9FF] shadow-lg shadow-[#00D9FF]/20'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            )}
          >
            {item.icon && <span className="mr-1.5">{item.icon}</span>}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
