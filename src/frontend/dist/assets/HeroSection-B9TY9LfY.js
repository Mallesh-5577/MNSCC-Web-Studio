import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-CsAPa9Tv.js";
import { m as motion } from "./proxy-qFm2k5Mj.js";
import { A as ArrowRight } from "./arrow-right-BD-UwMmT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function BackgroundOrbs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-[500px] h-[500px] opacity-25 top-[-10%] left-[-10%]",
        style: { background: "oklch(0.7 0.25 260)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-[350px] h-[350px] opacity-20 top-[20%] right-[-5%]",
        style: { background: "oklch(0.6 0.18 290)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "orb w-[250px] h-[250px] opacity-15 bottom-[10%] left-[30%]",
        style: { background: "oklch(0.75 0.25 200)" }
      }
    )
  ] });
}
function FloatingBadge({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `absolute glass rounded-xl px-4 py-2.5 text-sm font-mono text-muted-foreground border border-border/20 hidden lg:flex items-center gap-2 ${className}`,
      children
    }
  );
}
function Hero() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const particles = [];
    for (let i = 0; i < 36; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1
      });
    }
    let rafId;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(70% 0.25 260 / ${p.alpha})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundOrbs, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 w-full h-full pointer-events-none opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingBadge, { className: "bottom-1/3 right-[6%] animate-float-slow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400", children: "✓" }),
          "Fast Delivery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-8 border border-primary/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
                "Open for projects — Let's build something great",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.1 },
              className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6",
              children: [
                "We Build",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-cyan neon-text", children: "Stunning Websites" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                " That",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                  "Grow Your Business",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: "absolute -bottom-2 left-0 right-0 w-full",
                      viewBox: "0 0 300 12",
                      fill: "none",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M2 9 C75 2, 150 11, 298 4",
                          stroke: "oklch(0.7 0.25 260)",
                          strokeWidth: "3",
                          strokeLinecap: "round"
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.25 },
              className: "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed",
              children: "We craft high-performance, visually stunning websites using modern technologies, delivered fast, built to impress."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.4 },
              className: "flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: () => scrollToSection("contact"),
                    className: "gradient-cyan-accent text-background font-bold text-base px-8 py-6 shadow-neon hover:shadow-neon hover:-translate-y-1 transition-smooth group",
                    "data-ocid": "hero-cta-primary",
                    children: [
                      "Get Your Website Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    onClick: () => scrollToSection("portfolio"),
                    className: "border-border/40 text-foreground hover:border-primary/60 hover:bg-primary/5 font-semibold text-base px-8 py-6 transition-smooth group",
                    "data-ocid": "hero-cta-secondary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "mr-2 w-4 h-4 fill-current opacity-70 group-hover:opacity-100 transition-opacity" }),
                      "View Projects"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.6 },
              className: "flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-border/20",
              children: [
                { value: "15+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "4days", label: "Average Turnaround" },
                { value: "5★", label: "Quality Rating" }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold gradient-text-cyan", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-0.5", children: stat.label })
              ] }, stat.label))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 0.5 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono tracking-widest uppercase", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-8 rounded-full border border-border/40 flex items-start justify-center pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 rounded-full bg-primary animate-bounce" }) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Hero as HeroSection
};
