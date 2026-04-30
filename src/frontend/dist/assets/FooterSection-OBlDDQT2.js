import { j as jsxRuntimeExports } from "./index-BARfDWsz.js";
import { G as GenIcon, S as SiGithub } from "./index-CPwbbpj4.js";
import { M as Mail } from "./mail-DHAzRCXE.js";
function FaLinkedin(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, "child": [] }] })(props);
}
const YEAR = (/* @__PURE__ */ new Date()).getFullYear();
const NAV_GROUPS = [
  {
    label: "Navigate",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#tools" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    label: "Services",
    links: [
      { label: "Business Sites", href: "#types" },
      { label: "E-Commerce", href: "#types" },
      { label: "Landing Pages", href: "#types" },
      { label: "Startup MVPs", href: "#types" },
      { label: "Custom Projects", href: "#types" }
    ]
  }
];
function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      className: "relative bg-card border-t border-border/20 pt-14 pb-8",
      "data-ocid": "footer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "orb w-72 h-72 opacity-5 top-0 left-1/2 -translate-x-1/2",
            style: { background: "oklch(0.7 0.25 260)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container max-w-6xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-2.5 group mb-4",
                  onClick: () => scrollToSection("#hero"),
                  "aria-label": "MNSCC Web Studio — back to top",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/image.png",
                      alt: "MNSCC Web Studio Logo",
                      className: "h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-xs mb-6", children: "Building beautiful, high-performance websites that help businesses grow. Fresh energy, expert execution." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "mailto:malleshmudavath449@gmail.com",
                    className: "w-9 h-9 rounded-lg glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-smooth",
                    "aria-label": "Gmail",
                    "data-ocid": "footer-gmail",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://github.com/Mallesh-5577",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-9 h-9 rounded-lg glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-smooth",
                    "aria-label": "GitHub",
                    "data-ocid": "footer-github",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGithub, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/mallesh-mudavath-06b579394",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-9 h-9 rounded-lg glass border border-border/20 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-smooth",
                    "aria-label": "LinkedIn",
                    "data-ocid": "footer-linkedin",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] }),
            NAV_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm mb-4", children: group.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: group.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => scrollToSection(link.href),
                  className: "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
                  "data-ocid": `footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`,
                  children: link.label
                }
              ) }, link.label)) })
            ] }, group.label))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/20 pt-6 grid grid-cols-1 sm:grid-cols-2 items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center sm:text-left", children: [
              "© ",
              YEAR,
              " MNSCC Web Studio. All rights reserved."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+918977259147",
                className: "justify-self-center sm:justify-self-end hover:text-foreground transition-colors duration-200",
                "data-ocid": "footer-contact-support",
                children: "Contact Support: +91 8977259147"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  Footer as FooterSection
};
