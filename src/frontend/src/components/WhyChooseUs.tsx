import { Button } from "@/components/ui/button";
import type { WhyItem } from "@/types";
import {
  ArrowRight,
  DollarSign,
  Headphones,
  Palette,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const WHY_ITEMS: (WhyItem & {
  IconComponent: React.ElementType;
  color: string;
})[] = [
  {
    id: "affordable",
    title: "Affordable Pricing",
    description:
      "Premium quality without the premium price tag. We offer competitive rates that respect your budget — no hidden fees.",
    icon: "dollar",
    IconComponent: DollarSign,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    id: "fast",
    title: "Fast Delivery",
    description:
      "Most projects delivered in 3–7 days. We work efficiently without cutting corners on quality or performance.",
    icon: "zap",
    IconComponent: Zap,
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    id: "design",
    title: "Modern Design",
    description:
      "Visually stunning, trend-forward designs that make your brand stand out and leave lasting impressions.",
    icon: "palette",
    IconComponent: Palette,
    color: "from-primary/20 to-primary/5",
  },
  {
    id: "client",
    title: "Client-Focused",
    description:
      "Your goals shape every decision. We listen deeply, communicate clearly, and iterate until you're thrilled.",
    icon: "users",
    IconComponent: Users,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "We're here when you need us. Quick responses, ongoing maintenance, and post-launch support included.",
    icon: "headphones",
    IconComponent: Headphones,
    color: "from-pink-500/20 to-pink-500/5",
  },
];

function WhyCard({
  item,
  index,
}: { item: (typeof WHY_ITEMS)[number]; index: number }) {
  const Icon = item.IconComponent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      whileHover={{ y: -5 }}
      className="glass-card relative overflow-hidden group"
      data-ocid={`why-card-${item.id}`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl gradient-cyan-accent flex items-center justify-center mb-4 shadow-neon-sm group-hover:shadow-neon transition-smooth">
          <Icon className="w-5 h-5 text-background" strokeWidth={2} />
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 section-bg-alt" />
      <div
        className="orb w-[450px] h-[450px] opacity-10 bottom-[-10%] left-[-10%]"
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
            Why Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose{" "}
            <span className="gradient-text-cyan">MNSCC Web Studio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We combine the energy of a new studio with the discipline of
            experienced professionals.
          </p>
        </motion.div>

        {/* Cards — 2 + 3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {WHY_ITEMS.map((item, i) => (
            <WhyCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-cyan-accent opacity-5" />
          <div
            className="orb w-64 h-64 opacity-20 -top-20 right-[-5%]"
            style={{ background: "oklch(0.7 0.25 260)" }}
          />
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ready to Stand Out Online?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join the businesses that trusted us to build their digital
              presence. Your success is our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="gradient-cyan-accent text-background font-bold px-8 shadow-neon hover:shadow-neon hover:-translate-y-0.5 transition-smooth group"
                data-ocid="why-cta-primary"
              >
                Get Your Website Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const el = document.getElementById("portfolio");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-smooth"
                data-ocid="why-cta-secondary"
              >
                View Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
