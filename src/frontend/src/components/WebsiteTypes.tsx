import type { WebsiteType } from "@/types";
import {
  Building2,
  Megaphone,
  Rocket,
  ShoppingCart,
  User,
  Wand2,
} from "lucide-react";
import { motion } from "motion/react";

const WEBSITE_TYPES: (WebsiteType & { IconComponent: React.ElementType })[] = [
  {
    id: "business",
    title: "Business Websites",
    description:
      "Professional corporate sites that establish credibility and convert visitors into customers.",
    icon: "building",
    IconComponent: Building2,
    features: ["SEO optimized", "Contact forms", "Google Maps", "CMS ready"],
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    description:
      "Showcase your work in style with a unique portfolio that makes you unforgettable.",
    icon: "user",
    IconComponent: User,
    features: [
      "Project galleries",
      "Smooth animations",
      "Case studies",
      "Resume integration",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    description:
      "Fully functional online stores with cart, checkout, and payment integration.",
    icon: "cart",
    IconComponent: ShoppingCart,
    features: [
      "Product catalog",
      "Secure payments",
      "Order tracking",
      "Inventory mgmt",
    ],
  },
  {
    id: "landing",
    title: "Landing Pages",
    description:
      "High-converting single-page experiences designed to capture leads and drive action.",
    icon: "megaphone",
    IconComponent: Megaphone,
    features: [
      "A/B tested layouts",
      "Lead capture",
      "Fast load",
      "Analytics ready",
    ],
  },
  {
    id: "startup",
    title: "Startup MVPs",
    description:
      "Rapid MVP builds that let you validate your idea and attract early users or investors.",
    icon: "rocket",
    IconComponent: Rocket,
    features: ["Fast prototyping", "Auth flows", "Dashboard UI", "API ready"],
  },
  {
    id: "custom",
    title: "Custom Projects",
    description:
      "Have something unique in mind? We love a challenge — let's build it from scratch.",
    icon: "wand",
    IconComponent: Wand2,
    features: [
      "Tailored solution",
      "Any tech stack",
      "Full support",
      "Iterative dev",
    ],
  },
];

function TypeCard({
  item,
  index,
}: { item: (typeof WEBSITE_TYPES)[number]; index: number }) {
  const Icon = item.IconComponent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -5 }}
      className="glass-card relative group overflow-hidden"
      data-ocid={`type-card-${item.id}`}
    >
      {/* Gradient orb in corner */}
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl gradient-cyan-accent flex items-center justify-center mb-5 shadow-neon-sm group-hover:shadow-neon transition-smooth">
        <Icon className="w-6 h-6 text-background" strokeWidth={2} />
      </div>

      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.features.map((f) => (
          <span
            key={f}
            className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-cyan-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </motion.div>
  );
}

export function WebsiteTypes() {
  return (
    <section id="types" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 section-bg-alt" />
      <div
        className="orb w-80 h-80 opacity-10 bottom-0 right-[-5%]"
        style={{ background: "oklch(0.7 0.25 260)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            What We Build
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Types of <span className="gradient-text-cyan">Websites</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            From simple landing pages to complex web applications — we cover the
            full spectrum.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 inline-flex max-w-2xl items-center justify-center rounded-xl border border-primary/35 bg-primary/10 px-5 py-3 text-sm sm:text-base font-semibold text-foreground shadow-neon-sm"
            data-ocid="types-custom-note"
          >
            Based on your exact requirements, we shape and refine every part of
            your website until it feels uniquely yours.
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WEBSITE_TYPES.map((item, i) => (
            <TypeCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
