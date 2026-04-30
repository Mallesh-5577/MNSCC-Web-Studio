import { c as createLucideIcon, j as jsxRuntimeExports, B as Button } from "./index-CsAPa9Tv.js";
import { m as motion } from "./proxy-qFm2k5Mj.js";
import { Z as Zap } from "./zap-zZHChOJd.js";
import { R as Rocket } from "./rocket-BXLq07T7.js";
import { A as ArrowRight } from "./arrow-right-BD-UwMmT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode);
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
const SKILLS = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "UI/UX Design",
  "Responsive CSS"
];
const VALUES = [
  {
    icon: CodeXml,
    title: "Clean Code",
    description: "Every line written with purpose and readability in mind."
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Fresh perspectives that turn ideas into impactful digital experiences."
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Your vision drives every decision. We listen, then we build."
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description: "Fast without cutting corners — quality shipped in record time."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 section-bg-alt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-80 h-80 opacity-10 top-1/2 right-[-5%]",
        style: { background: "oklch(0.6 0.18 290)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container max-w-6xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1", children: "MNSCC Web Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mb-4", children: "Full-Stack Web Developer & Designer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6 text-sm", children: "Passionate about building beautiful, functional websites that make a real impact. Self-taught and hungry to prove that quality knows no age." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SKILLS.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 text-primary",
                  children: skill
                },
                skill
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-0.5 gradient-cyan-accent opacity-60" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.12 },
                className: "glass-card mt-6 relative overflow-hidden border border-primary/25",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl gradient-cyan-accent flex items-center justify-center mb-4 shadow-neon-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-background", strokeWidth: 2.2 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-bold text-foreground mb-3", children: "Fast Delivery" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Mini websites" }),
                      " ",
                      "delivered in ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "2-4 days" }),
                      ".",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Major websites" }),
                      " ",
                      "delivered in ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "4-6 days" }),
                      " based on client requirements."
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "absolute -bottom-16 -right-4 glass rounded-xl px-4 py-3 border border-primary/20",
                animate: { y: [0, -8, 0] },
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold gradient-text-cyan", children: "100%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Client Satisfaction" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.1 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
              "About Us"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6", children: [
              "Fresher Energy,",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "Expert Results" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4 text-base", children: "We're a passionate web design startup led by a self-driven developer with an obsession for pixel-perfect design and clean, maintainable code. We may be new to the industry, but we've spent countless hours mastering modern web technologies." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "border-l-2 border-primary pl-4 my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium italic", children: `"We may be new, but we deliver like experts — because we've prepared like them."` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 text-base", children: "Every project gets our full attention and creative energy. No cookie-cutter templates, no shortcuts — just thoughtful design and solid engineering that helps your business grow." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-8", children: VALUES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: 0.2 + i * 0.08 },
                className: "glass rounded-lg p-3 border border-border/20 hover-lift-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-4 h-4 text-primary mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm text-foreground", children: v.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: v.description })
                ]
              },
              v.title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: () => scrollToSection("contact"),
                className: "gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon hover:-translate-y-0.5 transition-smooth group",
                "data-ocid": "about-cta",
                children: [
                  "Let's Build Together",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" })
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  About as AboutSection
};
