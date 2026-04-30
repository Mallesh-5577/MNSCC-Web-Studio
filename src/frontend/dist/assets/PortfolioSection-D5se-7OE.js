import { c as createLucideIcon, j as jsxRuntimeExports, S as Slot, a as cn, b as cva, B as Button } from "./index-BARfDWsz.js";
import { m as motion } from "./proxy-BJ8T8B36.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const PROJECTS = [
  {
    id: "ecommerce",
    title: "NeonShop — E-Commerce",
    description: "A sleek fashion e-commerce store with product filtering, cart, and Stripe checkout. Built for conversion.",
    image: "/assets/generated/project-ecommerce.dim_800x500.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#portfolio",
    category: "E-Commerce"
  },
  {
    id: "saas",
    title: "Orbital SaaS Dashboard",
    description: "Analytics and project management SaaS with real-time charts, team roles, and subscription billing.",
    image: "/assets/generated/project-saas.dim_800x500.jpg",
    tags: ["React", "TypeScript", "REST API", "Charts"],
    liveUrl: "#portfolio",
    category: "SaaS"
  },
  {
    id: "agency",
    title: "CyberBank — FinTech UI",
    description: "Modern banking dashboard UI with transaction history, spending analytics, and dark/light theme.",
    image: "/assets/generated/project-agency.dim_800x500.jpg",
    tags: ["React", "Tailwind", "Figma", "Motion"],
    liveUrl: "#portfolio",
    category: "FinTech"
  },
  {
    id: "restaurant",
    title: "FlavorNest — Restaurant",
    description: "Full-featured restaurant website with online ordering, menu management, and table reservations.",
    image: "/assets/generated/project-restaurant.dim_800x500.jpg",
    tags: ["React", "Node.js", "MongoDB", "Maps"],
    liveUrl: "#portfolio",
    category: "Business"
  },
  {
    id: "startup",
    title: "LaunchPad — Startup Site",
    description: "High-converting startup landing page with waitlist signup, investor deck download, and blog.",
    image: "/assets/generated/project-startup.dim_800x500.jpg",
    tags: ["React", "TypeScript", "Email API", "SEO"],
    liveUrl: "#portfolio",
    category: "Startup"
  },
  {
    id: "portfolio-demo",
    title: "PixelCraft — Portfolio",
    description: "Award-winning designer portfolio with 3D hover effects, case study pages, and contact form.",
    image: "/assets/generated/project-portfolio.dim_800x500.jpg",
    tags: ["React", "Motion", "Three.js", "GSAP"],
    liveUrl: "#portfolio",
    category: "Portfolio"
  }
];
function handleDemoClick(liveUrl) {
  if (liveUrl === "#" || liveUrl === "#portfolio") {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(liveUrl, "_blank", "noopener,noreferrer");
  }
}
function ProjectCard({ project, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.08 },
      className: "glass rounded-xl overflow-hidden group hover-lift",
      "data-ocid": `portfolio-card-${project.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-44 sm:h-48 bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.image,
              alt: project.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon transition-smooth",
              onClick: () => handleDemoClick(project.liveUrl),
              "data-ocid": `portfolio-demo-${project.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Live Demo"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-background/80 text-primary border border-primary/30 text-xs backdrop-blur-sm", children: project.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2 text-base leading-tight", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: project.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground",
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "w-full border-border/30 hover:border-primary/50 hover:bg-primary/5 text-sm transition-smooth",
              onClick: () => handleDemoClick(project.liveUrl),
              "data-ocid": `portfolio-view-${project.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 mr-1.5" }),
                "Live Demo"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "portfolio", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-96 h-96 opacity-10 top-1/4 right-[-10%]",
        style: { background: "oklch(0.6 0.18 290)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container max-w-6xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
              "Our Work"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4", children: [
              "Featured ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "Projects" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base", children: "Each project is crafted with attention to detail, performance, and visual impact." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PROJECTS.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, index: i }, project.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.3 },
          className: "text-center mt-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "Want something like this for your business?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                className: "gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon hover:-translate-y-0.5 transition-smooth",
                "data-ocid": "portfolio-contact-cta",
                children: "Start Your Project"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  Portfolio as PortfolioSection
};
