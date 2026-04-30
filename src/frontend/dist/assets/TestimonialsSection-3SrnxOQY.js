import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-CsAPa9Tv.js";
import { m as motion } from "./proxy-qFm2k5Mj.js";
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "Founder",
    company: "LaunchPad Ventures",
    content: "MNSCC Web Studio delivered a stunning MVP landing page in just 4 days. The design blew our investors away. Honestly couldn't believe this was their first client project — felt like working with a seasoned agency.",
    avatar: "AM",
    rating: 5
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "CEO",
    company: "NeonShop Boutique",
    content: "Our e-commerce store went from idea to live in under a week. The attention to detail, the animations, the mobile responsiveness — everything was perfect. Sales are up 40% since launch.",
    avatar: "PS",
    rating: 5
  },
  {
    id: "t3",
    name: "David Okonkwo",
    role: "Creative Director",
    company: "PixelForge Agency",
    content: "I was skeptical about working with a new studio, but MNSCC proved me wrong immediately. Their code quality is exceptional, communication is proactive, and they genuinely care about outcomes.",
    avatar: "DO",
    rating: 5
  }
];
const ACCENT_COLORS = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-primary/15 to-secondary/10"
];
function TestimonialCard({
  testimonial,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: index * 0.1 },
      className: "glass-card relative overflow-hidden group hover-lift",
      "data-ocid": `testimonial-card-${testimonial.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute inset-0 bg-gradient-to-br ${ACCENT_COLORS[index % ACCENT_COLORS.length]} opacity-40`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-0.5 gradient-cyan-accent opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4", children: Array.from({ length: testimonial.rating }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-foreground/90 text-sm leading-relaxed mb-6 italic", children: [
            '"',
            testimonial.content,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full gradient-cyan-accent flex items-center justify-center text-background font-display font-bold text-sm flex-shrink-0", children: testimonial.avatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm truncate", children: testimonial.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", children: [
                testimonial.role,
                " · ",
                testimonial.company
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "testimonials",
      className: "relative py-20 md:py-28 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "orb w-80 h-80 opacity-10 top-0 right-[-5%]",
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
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary" }),
                  "Client Love"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-4", children: [
                  "What Our ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan", children: "Clients Say" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-lg mx-auto text-sm", children: "Real feedback from real clients who trusted us with their digital presence." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { testimonial: t, index: i }, t.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.4 },
              className: "text-center text-xs text-muted-foreground mt-8",
              children: "⭐ 5.0 average rating across all projects · 100% would recommend"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Testimonials as TestimonialsSection
};
