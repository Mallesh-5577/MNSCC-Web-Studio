import type { Service } from "@/types";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

const SERVICES: Service[] = [
  {
    id: "html",
    title: "HTML5",
    description:
      "Semantic, accessible markup that forms the backbone of every great website.",
    icon: "🌐",
    tech: "Structure",
  },
  {
    id: "css",
    title: "CSS3 & Tailwind",
    description:
      "Pixel-perfect layouts and animations — from glassmorphism to fluid responsive grids.",
    icon: "🎨",
    tech: "Styling",
  },
  {
    id: "javascript",
    title: "JavaScript",
    description:
      "Smooth interactions and dynamic experiences powered by modern ES2024+ features.",
    icon: "⚡",
    tech: "Logic",
  },
  {
    id: "typescript",
    title: "TypeScript",
    description:
      "Strongly typed code for robust, maintainable architecture and significantly fewer runtime bugs.",
    icon: "📘",
    tech: "Language",
  },
  {
    id: "react",
    title: "React",
    description:
      "Component-driven UIs with hooks, context, and state management for complex apps.",
    icon: "⚛️",
    tech: "Frontend",
  },
  {
    id: "nextjs",
    title: "Next.js",
    description:
      "Server-side rendering, static site generation, and SEO optimization for your web apps.",
    icon: "▲",
    tech: "Framework",
  },
  {
    id: "nodejs",
    title: "Node.js",
    description:
      "Fast, scalable backend services and REST APIs built with Express and optimized routing.",
    icon: "🟢",
    tech: "Backend",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description:
      "Flexible, document-based data storage perfect for modern, dynamic applications.",
    icon: "🍃",
    tech: "Database",
  },
  {
    id: "figma",
    title: "Figma",
    description:
      "Collaborative interface design and interactive wireframing before writing a single line of code.",
    icon: "🖌️",
    tech: "Design",
  },
  {
    id: "git",
    title: "Git & GitHub",
    description:
      "Robust version control and seamless collaboration workflow for agile development teams.",
    icon: <SiGithub />,
    tech: "Version Control",
  },
  {
    id: "docker",
    title: "Docker",
    description:
      "Containerized environments ensuring consistent, reliable deployment across development and production.",
    icon: "🐳",
    tech: "DevOps",
  },
  {
    id: "aws",
    title: "Cloud & AWS",
    description:
      "Scalable infrastructure, serverless functions, and robust hosting for enterprise-grade applications.",
    icon: "☁️",
    tech: "Hosting",
  },
  {
    id: "vercel",
    title: "Vercel",
    description:
      "Lightning-fast frontend deployments with edge delivery, previews, and seamless CI/CD workflows.",
    icon: "▲",
    tech: "Hosting",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card relative group overflow-hidden cursor-default neon-glow-hover"
      data-ocid={`tool-card-${service.id}`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="text-4xl mb-4 select-none">{service.icon}</div>

      {/* Tech badge */}
      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
        {service.tech}
      </span>

      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Corner glow on hover */}
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function Tools() {
  return (
    <section id="tools" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="orb w-96 h-96 opacity-10 top-[-5%] left-[-10%]"
        style={{ background: "oklch(0.7 0.25 260)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Tech Stack
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tools We <span className="gradient-text-cyan">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We use the most in-demand technologies to build fast, scalable, and
            maintainable web solutions.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
