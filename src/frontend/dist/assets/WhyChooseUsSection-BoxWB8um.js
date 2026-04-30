import { c as createLucideIcon, j as jsxRuntimeExports, B as Button } from "./index-BARfDWsz.js";
import { m as motion } from "./proxy-BJ8T8B36.js";
import { Z as Zap } from "./zap-C3URetTA.js";
import { A as ArrowRight } from "./arrow-right-DZ_BbJgR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$2);
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
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const WHY_ITEMS = [
  {
    id: "affordable",
    title: "Affordable Pricing",
    description: "Premium quality without the premium price tag. We offer competitive rates that respect your budget — no hidden fees.",
    icon: "dollar",
    IconComponent: DollarSign,
    color: "from-green-500/20 to-green-500/5"
  },
  {
    id: "fast",
    title: "Fast Delivery",
    description: "Mini websites delivered in 2-4 days. Major websites delivered in 4-6 days based on client requirements.",
    icon: "zap",
    IconComponent: Zap,
    color: "from-yellow-500/20 to-yellow-500/5"
  },
  {
    id: "design",
    title: "Modern Design",
    description: "Visually stunning, trend-forward designs that make your brand stand out and leave lasting impressions.",
    icon: "palette",
    IconComponent: Palette,
    color: "from-primary/20 to-primary/5"
  },
  {
    id: "client",
    title: "Client-Focused",
    description: "Your goals shape every decision. We listen deeply, communicate clearly, and iterate until you're thrilled.",
    icon: "users",
    IconComponent: Users,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "We're here when you need us. Quick responses, ongoing maintenance, and post-launch support included.",
    icon: "headphones",
    IconComponent: Headphones,
    color: "from-pink-500/20 to-pink-500/5"
  }
];
function WhyCard({
  item,
  index
}) {
  const Icon = item.IconComponent;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 25 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.09 },
      whileHover: { y: -5 },
      className: "glass-card relative overflow-hidden group",
      "data-ocid": `why-card-${item.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl gradient-cyan-accent flex items-center justify-center mb-4 shadow-neon-sm group-hover:shadow-neon transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-background", strokeWidth: 2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground mb-2", children: item.title }),
          item.id === "fast" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed", children: [
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
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
        ] })
      ]
    }
  );
}
function WhyChooseUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "why", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 section-bg-alt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-[450px] h-[450px] opacity-10 bottom-[-10%] left-[-10%]",
        style: { background: "oklch(0.7 0.25 260)" }
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
              "Why Us"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4", children: [
              "Why Choose",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "MNSCC Web Studio" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base", children: "We combine the energy of a new studio with the discipline of experienced professionals." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16", children: WHY_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { item, index: i }, item.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-cyan-accent opacity-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "orb w-64 h-64 opacity-20 -top-20 right-[-5%]",
                style: { background: "oklch(0.7 0.25 260)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-3", children: "Ready to Stand Out Online?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-lg mx-auto", children: "Join the businesses that trusted us to build their digital presence. Your success is our portfolio." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    },
                    className: "gradient-cyan-accent text-background font-bold px-8 shadow-neon hover:shadow-neon hover:-translate-y-0.5 transition-smooth group",
                    "data-ocid": "why-cta-primary",
                    children: [
                      "Get Your Website Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => {
                      const el = document.getElementById("portfolio");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    },
                    className: "border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-smooth",
                    "data-ocid": "why-cta-secondary",
                    children: "View Work"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  WhyChooseUs as WhyChooseUsSection
};
