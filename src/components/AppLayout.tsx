"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  UserCircle, 
  ListChecks, 
  ArrowRightLeft, 
  FileText, 
  Map, 
  MessageSquare,
  Calculator,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/recommendations", icon: LayoutDashboard },
  { name: "My Profile", href: "/profile", icon: UserCircle },
  { name: "Recommendations", href: "/recommendations", icon: ListChecks },
  { name: "Compare Schemes", href: "/scheme/compare", icon: ArrowRightLeft },
  { name: "Financial Calculator", href: "/calculator", icon: Calculator },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Partner Locator", href: "/locator", icon: MapPin },
  { name: "Application Roadmap", href: "/roadmap", icon: Map },
  { name: "AI Assistant", href: "/assistant", icon: MessageSquare },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // No sidebar on landing page or analyzing page
  const hideSidebar = pathname === "/" || pathname === "/analyzing";

  if (hideSidebar) {
    return <div className="min-h-dvh bg-background">{children}</div>;
  }

  return (
    <div className="flex min-h-dvh bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[260px] flex-col bg-brown text-honey h-dvh sticky top-0">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-brown font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wide">SchemeSaathi</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/recommendations" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                  isActive
                    ? "bg-primary text-brown font-medium"
                    : "text-honey/80 hover:bg-honey/10 hover:text-honey"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 m-4 rounded-xl bg-honey/10 border border-honey/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-beige/20 flex items-center justify-center text-honey">
              <UserCircle />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Rahul Patil</p>
              <p className="text-xs text-honey/70">Goa, India</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header & Nav */}
      <div className="flex-1 flex flex-col min-w-0 h-dvh overflow-y-auto">
        <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between p-4 bg-brown text-white shadow-md">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-brown font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-bold">SchemeSaathi</span>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-honey hover:bg-honey/10 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-brown overflow-y-auto">
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/recommendations" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "flex items-center gap-4 px-4 py-4 rounded-xl transition-colors text-lg",
                      isActive
                        ? "bg-primary text-brown font-medium"
                        : "text-honey/80 hover:bg-honey/10 hover:text-honey"
                    )}
                  >
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
