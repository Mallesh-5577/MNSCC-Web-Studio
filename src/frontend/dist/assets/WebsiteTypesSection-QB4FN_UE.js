import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-BARfDWsz.js";
import { m as motion } from "./proxy-BJ8T8B36.js";
import { R as Rocket } from "./rocket-Pds4DBlg.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode$1);
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
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
const WEBSITE_TYPES = [
  {
    id: "business",
    title: "Business Websites",
    description: "Professional corporate sites that establish credibility and convert visitors into customers.",
    icon: "building",
    IconComponent: Building2,
    features: ["SEO optimized", "Contact forms", "Google Maps", "CMS ready"]
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    description: "Showcase your work in style with a unique portfolio that makes you unforgettable.",
    icon: "user",
    IconComponent: User,
    features: [
      "Project galleries",
      "Smooth animations",
      "Case studies",
      "Resume integration"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    description: "Fully functional online stores with cart, checkout, and payment integration.",
    icon: "cart",
    IconComponent: ShoppingCart,
    features: [
      "Product catalog",
      "Secure payments",
      "Order tracking",
      "Inventory mgmt"
    ]
  },
  {
    id: "landing",
    title: "Landing Pages",
    description: "High-converting single-page experiences designed to capture leads and drive action.",
    icon: "megaphone",
    IconComponent: Megaphone,
    features: [
      "A/B tested layouts",
      "Lead capture",
      "Fast load",
      "Analytics ready"
    ]
  },
  {
    id: "startup",
    title: "Startup MVPs",
    description: "Rapid MVP builds that let you validate your idea and attract early users or investors.",
    icon: "rocket",
    IconComponent: Rocket,
    features: ["Fast prototyping", "Auth flows", "Dashboard UI", "API ready"]
  },
  {
    id: "custom",
    title: "Custom Projects",
    description: "Have something unique in mind? We love a challenge — let's build it from scratch.",
    icon: "wand",
    IconComponent: WandSparkles,
    features: [
      "Tailored solution",
      "Any tech stack",
      "Full support",
      "Iterative dev"
    ]
  }
];
function TypeCard({
  item,
  index
}) {
  const Icon = item.IconComponent;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.07 },
      whileHover: { y: -5 },
      className: "glass-card relative group overflow-hidden",
      "data-ocid": `type-card-${item.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-cyan-accent flex items-center justify-center mb-5 shadow-neon-sm group-hover:shadow-neon transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-background", strokeWidth: 2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: item.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground",
            children: f
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 gradient-cyan-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" })
      ]
    }
  );
}
function WebsiteTypes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "types", className: "relative py-24 md:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 section-bg-alt" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-80 h-80 opacity-10 bottom-0 right-[-5%]",
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
              "What We Build"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4", children: [
              "Types of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "Websites" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base", children: "From simple landing pages to complex web applications — we cover the full spectrum." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 14 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                className: "mt-6 inline-flex max-w-2xl items-center justify-center rounded-xl border border-primary/35 bg-primary/10 px-5 py-3 text-sm sm:text-base font-semibold text-foreground shadow-neon-sm",
                "data-ocid": "types-custom-note",
                children: "Based on your exact requirements, we shape and refine every part of your website until it feels uniquely yours."
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: WEBSITE_TYPES.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TypeCard, { item, index: i }, item.id)) })
    ] })
  ] });
}
export {
  WebsiteTypes as WebsiteTypesSection
};
