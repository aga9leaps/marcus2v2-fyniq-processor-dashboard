'use client';

import { Bell, Search, ChevronDown, LayoutDashboard, Calendar, BarChart3, Settings, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CURRENT_PROCESSOR } from '@/lib/mock-data';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Top Navigation Bar */}
      <nav className="h-16 bg-surface border-b border-border-subtle sticky top-0 z-50 shadow-sm">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Left: Logo + Nav Items */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-text-primary">
                  FynIQ
                </h1>
                <p className="text-xs text-text-tertiary">
                  Processor Dashboard
                </p>
              </div>
            </Link>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      className={`gap-2 ${
                        isActive
                          ? 'bg-accent-light text-accent-primary'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                      }`}
                      onClick={(e) => {
                        if (item.href === '/dashboard/settings') {
                          e.preventDefault();
                          alert(`⚙️ ${item.label}\n\nSettings page is coming in Phase 2!\n\nWill include:\n• Profile settings\n• Notification preferences\n• Display options\n• Security settings`);
                        }
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Search, Notifications, Profile */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
              <Input
                type="text"
                placeholder="Search loans..."
                className="w-64 pl-9 h-9 text-sm border-border-medium"
                onClick={() => alert('🔍 Search\n\nQuick search across all loans by:\n• Borrower name\n• Property address\n• Loan ID\n• Status\n\nComing in Phase 2')}
              />
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => alert('🔔 Notifications\n\nYou have 3 new notifications:\n• Wilson Property - Document uploaded\n• Martinez Apts - Task due today\n• Chen Portfolio - Closing in 2 hours\n\nFull notification panel coming in Phase 2')}
            >
              <Bell className="w-5 h-5 text-text-secondary" />
              <span className="absolute -top-1 -right-1 bg-status-critical text-white text-xxs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Profile Dropdown */}
            <Button
              variant="ghost"
              className="gap-2 text-text-secondary hover:text-text-primary"
              onClick={() => alert(`👤 ${CURRENT_PROCESSOR.name}\n\nProfile Options:\n• View Profile\n• Settings\n• Help & Support\n• Sign Out\n\nComing in Phase 2`)}
            >
              <div className="w-8 h-8 rounded-full bg-accent-primary text-white flex items-center justify-center text-sm font-semibold">
                {CURRENT_PROCESSOR.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-sm font-medium">{CURRENT_PROCESSOR.name}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
