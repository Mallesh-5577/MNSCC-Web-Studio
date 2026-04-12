import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Heart, Lightbulb, Rocket, Zap } from "lucide-react";
import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SKILLS = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "UI/UX Design",
  "Responsive CSS",
];

const VALUES = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Every line written with purpose and readability in mind.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Fresh perspectives that turn ideas into impactful digital experiences.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Your vision drives every decision. We listen, then we build.",
  },
  {
    icon: Rocket,
    title: "Rapid Delivery",
    description:
      "Fast without cutting corners — quality shipped in record time.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Alt background */}
      <div className="absolute inset-0 section-bg-alt" />
      <div
        className="orb w-80 h-80 opacity-10 top-1/2 right-[-5%]"
        style={{ background: "oklch(0.6 0.18 290)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass-card relative overflow-hidden">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                MNSCC Web Studio
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                Full-Stack Web Developer & Designer
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Passionate about building beautiful, functional websites that
                make a real impact. Self-taught and hungry to prove that quality
                knows no age.
              </p>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary/20 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-0.5 gradient-cyan-accent opacity-60" />
            </div>

            {/* Delivery highlight card to fill the left-side space */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="glass-card mt-6 relative overflow-hidden border border-yellow-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl gradient-cyan-accent flex items-center justify-center mb-4 shadow-neon-sm">
                  <Zap className="w-4 h-4 text-background" strokeWidth={2.2} />
                </div>

                <h4 className="font-display text-lg font-bold text-foreground mb-3">
                  Fast Delivery
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Mini websites</span>{" "}
                  delivered in <span className="font-semibold text-foreground">2-4 days</span>.
                  <br />
                  <span className="font-semibold text-foreground">Major websites</span>{" "}
                  delivered in <span className="font-semibold text-foreground">4-6 days</span> based
                  on client requirements.
                </p>
              </div>
            </motion.div>

            {/* Floating metric cards */}
            <motion.div
              className="absolute -bottom-16 -right-4 glass rounded-xl px-4 py-3 border border-primary/20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="font-display text-xl font-bold gradient-text-cyan">
                100%
              </div>
              <div className="text-xs text-muted-foreground">
                Client Satisfaction
              </div>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About Us
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Fresher Energy,{" "}
              <span className="gradient-text-cyan">Expert Results</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              We're a passionate web design startup led by a self-driven
              developer with an obsession for pixel-perfect design and clean,
              maintainable code. We may be new to the industry, but we've spent
              countless hours mastering modern web technologies.
            </p>

            <blockquote className="border-l-2 border-primary pl-4 my-6">
              <p className="text-foreground font-medium italic">
                "We may be new, but we deliver like experts — because we've
                prepared like them."
              </p>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Every project gets our full attention and creative energy. No
              cookie-cutter templates, no shortcuts — just thoughtful design and
              solid engineering that helps your business grow.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="glass rounded-lg p-3 border border-border/20 hover-lift-sm"
                >
                  <v.icon className="w-4 h-4 text-primary mb-2" />
                  <div className="font-medium text-sm text-foreground">
                    {v.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {v.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="gradient-cyan-accent text-background font-semibold shadow-neon-sm hover:shadow-neon hover:-translate-y-0.5 transition-smooth group"
              data-ocid="about-cta"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
