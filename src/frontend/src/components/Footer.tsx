import { Zap } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const YEAR = new Date().getFullYear();

const NAV_GROUPS = [
  {
    label: "Navigate",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#tools" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "Business Sites", href: "#types" },
      { label: "E-Commerce", href: "#types" },
      { label: "Landing Pages", href: "#types" },
      { label: "Startup MVPs", href: "#types" },
      { label: "Custom Projects", href: "#types" },
    ],
  },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  return (
    <footer
      className="relative bg-card border-t border-border/20 pt-14 pb-8"
      data-ocid="footer"
    >
      <div
        className="orb w-72 h-72 opacity-5 top-0 left-1/2 -translate-x-1/2"
        style={{ background: "oklch(0.7 0.25 260)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <button
              type="button"
              className="flex items-center gap-2.5 group mb-4"
              onClick={() => scrollToSection("#hero")}
              aria-label="MNSCC Web Studio — back to top"
            >
              <img
                src="/logo.png"
                alt="MNSCC Web Studio Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Building beautiful, high-performance websites that help businesses
              grow. Fresh energy, expert execution.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Mallesh-5577"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-smooth"
                aria-label="GitHub"
                data-ocid="footer-github"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mallesh-mudavath-06b579394"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-smooth"
                aria-label="LinkedIn"
                data-ocid="footer-linkedin"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      data-ocid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {YEAR} MNSCC Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
