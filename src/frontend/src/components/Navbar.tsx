import { Button } from "@/components/ui/button";
import type { NavLink } from "@/types";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Types", href: "#types" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-glass" : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2.5 group"
            onClick={() => scrollToSection("#hero")}
            aria-label="MNSCC Web Studio — back to top"
            data-ocid="nav-logo"
          >
            <img
              src="/image.png"
              alt="MNSCC Web Studio"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />{" "}
            <h3>MNSCC Web Studio</h3>
          </button>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth relative group"
                  data-ocid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px gradient-cyan-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon transition-smooth hover:-translate-y-0.5"
              data-ocid="nav-cta"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-smooth"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav-mobile-toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        data-ocid="nav-mobile-menu"
      >
        <div className="glass-nav border-t border-border/10 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-smooth"
                  data-ocid={`nav-mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border/10">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full gradient-cyan-accent text-background font-semibold shadow-neon-sm"
              data-ocid="nav-mobile-cta"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
