import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Animated background orbs
function BackgroundOrbs() {
  return (
    <>
      <div
        className="orb w-[500px] h-[500px] opacity-25 top-[-10%] left-[-10%]"
        style={{ background: "oklch(0.7 0.25 260)" }}
      />
      <div
        className="orb w-[350px] h-[350px] opacity-20 top-[20%] right-[-5%]"
        style={{ background: "oklch(0.6 0.18 290)" }}
      />
      <div
        className="orb w-[250px] h-[250px] opacity-15 bottom-[10%] left-[30%]"
        style={{ background: "oklch(0.75 0.25 200)" }}
      />
    </>
  );
}

// Floating code badge
function FloatingBadge({
  children,
  className,
}: { children: React.ReactNode; className: string }) {
  return (
    <div
      className={`absolute glass rounded-xl px-4 py-2.5 text-sm font-mono text-muted-foreground border border-border/20 hidden lg:flex items-center gap-2 ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 36; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let rafId: number;
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <BackgroundOrbs />

      {/* Particle canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Floating badges */}

      <FloatingBadge className="bottom-1/3 right-[6%] animate-float-slow">
        <span className="text-green-400">✓</span>
        Fast Delivery
      </FloatingBadge>

      {/* Main content */}
      <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-8 border border-primary/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Open for projects — Let's build something great
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          We Build{" "}
          <span className="gradient-text-cyan neon-text">
            Stunning Websites
          </span>
          <br className="hidden sm:block" /> That{" "}
          <span className="relative">
            Grow Your Business
            <svg
              className="absolute -bottom-2 left-0 right-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 9 C75 2, 150 11, 298 4"
                stroke="oklch(0.7 0.25 260)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft high-performance, visually stunning websites using modern
          technologies, delivered fast, built to impress.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="gradient-cyan-accent text-background font-bold text-base px-8 py-6 shadow-neon hover:shadow-neon hover:-translate-y-1 transition-smooth group"
            data-ocid="hero-cta-primary"
          >
            Get Your Website Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("portfolio")}
            className="border-border/40 text-foreground hover:border-primary/60 hover:bg-primary/5 font-semibold text-base px-8 py-6 transition-smooth group"
            data-ocid="hero-cta-secondary"
          >
            <Play className="mr-2 w-4 h-4 fill-current opacity-70 group-hover:opacity-100 transition-opacity" />
            View Projects
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t border-border/20"
        >
          {[
            { value: "15+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "4days", label: "Average Turnaround" },
            { value: "5★", label: "Quality Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold gradient-text-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-border/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
