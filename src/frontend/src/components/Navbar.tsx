import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Brain,
  FileText,
  Home,
  LayoutDashboard,
  Menu,
  Moon,
  Sun,
  Target,
  Trophy,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDarkMode } from "../hooks/useDarkMode";
import { GoldButton } from "./ui/GoldButton";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/subjects", label: "Subjects", icon: BookOpen },
  { to: "/quiz", label: "Quiz", icon: Brain },
  { to: "/mock-test", label: "Mock Test", icon: FileText },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/notes", label: "Notes", icon: Target },
  { to: "/english-mastery", label: "English", icon: Zap },
  { to: "/daily-challenge", label: "Daily", icon: Trophy },
  { to: "/profile", label: "Profile", icon: User },
];

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, login, logout, isLoading } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_rgba(213,175,97,0.08)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          data-ocid="navbar-logo"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-accent/30 shadow-[0_0_12px_0_rgba(213,175,97,0.25)] group-hover:shadow-[0_0_20px_0_rgba(213,175,97,0.45)] transition-all duration-300">
            <img
              src="/assets/generated/cuet-elite-logo-transparent.dim_200x200.png"
              alt="CUET ELITE AI"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-base text-accent tracking-wide leading-none">
              CUET ELITE
            </span>
            <span className="block text-[10px] text-muted-foreground font-mono tracking-widest uppercase leading-none mt-0.5">
              AI Platform
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "text-muted-foreground hover:text-foreground hover:bg-accent/8",
                "[&.active]:text-accent [&.active]:bg-accent/10",
              )}
              data-ocid={`nav-${label.toLowerCase()}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleDark}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
            aria-label="Toggle theme"
            data-ocid="theme-toggle"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {isAuthenticated ? (
            <GoldButton
              variant="outline"
              size="sm"
              onClick={logout}
              data-ocid="logout-btn"
            >
              Disconnect
            </GoldButton>
          ) : (
            <GoldButton
              size="sm"
              loading={isLoading}
              onClick={login}
              data-ocid="login-btn"
            >
              Connect ID
            </GoldButton>
          )}

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="menu-toggle"
          >
            {menuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border px-4 py-3 grid grid-cols-3 gap-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-all duration-200",
                "text-muted-foreground hover:text-foreground hover:bg-accent/8",
                "[&.active]:text-accent [&.active]:bg-accent/10",
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
