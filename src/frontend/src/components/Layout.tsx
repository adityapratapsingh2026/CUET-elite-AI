import type { ReactNode } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Navbar } from "./Navbar";
import { ToastContainer } from "./ui/Toast";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar isDark={isDark} toggleDark={toggle} />

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-card border-t border-border py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold font-display">
              CUET ELITE AI
            </span>
            <span>—</span>
            <span>Crack CUET with Smart AI Practice</span>
          </div>
          <p>
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      <ToastContainer />
    </div>
  );
}
