'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/planning', label: 'Planning' },
  { href: '/healing', label: 'Healing' },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">✨</span>
            </div>
            <span className="font-heading font-semibold text-lg hidden sm:inline-block">
              Empower & Thrive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button size="sm" className="hidden sm:flex">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Coach
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
