import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const PROJECTS: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Open the live e-commerce project.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Live Demo"],
    liveUrl: "https://mallesh-5577.github.io/E-Commerce-Website-for-Online-Shopping/",
    category: "E-Commerce",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Open the live portfolio project.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Live Demo"],
    liveUrl: "https://mallesh-5577.github.io/Mallesh-Portfolio/",
    category: "Portfolio",
  },
  {
    id: "iraa-restaurant",
    title: "IRAA Restaurant",
    description: "Open the live restaurant demo based on the IRAA Restaurant site.",
    image: "/assets/image.png",
    tags: ["Live Demo"],
    liveUrl: "https://restaurant-website-omega-five-49.vercel.app",
    category: "Restaurant",
  },
  {
    id: "Product Expairy Tracker",
    title: "Product Expiry Tracker",
    description: "Open the live product expiry tracker project.",
    image: "/assets/pet.jpg",
    tags: ["Live Demo"],
    liveUrl: "https://product-expiry-tracker-green.vercel.app",
    category: "Mini Project",
  }
];

function handleDemoClick(liveUrl: string) {
  if (liveUrl === "#" || liveUrl === "#portfolio") {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.open(liveUrl, "_blank", "noopener,noreferrer");
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-xl overflow-hidden group hover-lift"
      data-ocid={`portfolio-card-${project.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-48 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            size="sm"
            className="gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon transition-smooth"
            onClick={() => handleDemoClick(project.liveUrl)}
            data-ocid={`portfolio-demo-${project.id}`}
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
            Live Demo
          </Button>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-background/80 text-primary border border-primary/30 text-xs backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-foreground mb-2 text-base leading-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full border-border/30 hover:border-primary/50 hover:bg-primary/5 text-sm transition-smooth"
          onClick={() => handleDemoClick(project.liveUrl)}
          data-ocid={`portfolio-view-${project.id}`}
        >
          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
          Live Demo
        </Button>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="orb w-96 h-96 opacity-10 top-1/4 right-[-10%]"
        style={{ background: "oklch(0.6 0.18 290)" }}
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
            Our Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Each project is crafted with attention to detail, performance, and
            visual impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want something like this for your business?
          </p>
          <Button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon hover:-translate-y-0.5 transition-smooth"
            data-ocid="portfolio-contact-cta"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
