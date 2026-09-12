import type { Testimonial } from "@/types";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "Founder",
    company: "LaunchPad Ventures",
    content:
      "MNSCC Web Studio delivered a stunning MVP landing page in just 4 days. The design blew our investors away. Honestly couldn't believe this was their first client project — felt like working with a seasoned agency.",
    avatar: "AM",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "CEO",
    company: "NeonShop Boutique",
    content:
      "Our e-commerce store went from idea to live in under a week. The attention to detail, the animations, the mobile responsiveness — everything was perfect. Sales are up 40% since launch.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: "t3",
    name: "David Okonkwo",
    role: "Creative Director",
    company: "PixelForge Agency",
    content:
      "I was skeptical about working with a new studio, but MNSCC proved me wrong immediately. Their code quality is exceptional, communication is proactive, and they genuinely care about outcomes.",
    avatar: "DO",
    rating: 5,
  },
];

const ACCENT_COLORS = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-primary/15 to-secondary/10",
];

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card relative overflow-hidden group hover-lift"
      data-ocid={`testimonial-card-${testimonial.id}`}
    >
      {/* Gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${ACCENT_COLORS[index % ACCENT_COLORS.length]} opacity-40`}
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-cyan-accent opacity-60" />

      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => i).map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-cyan-accent flex items-center justify-center text-background font-display font-bold text-sm flex-shrink-0">
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <div className="font-medium text-foreground text-sm truncate">
              {testimonial.name}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {testimonial.role} · {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div
        className="orb w-80 h-80 opacity-10 top-0 right-[-5%]"
        style={{ background: "oklch(0.6 0.18 290)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Client Love
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text-cyan">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Real feedback from real clients who trusted us with their digital
            presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          ⭐ 5.0 average rating across all projects · 100% would recommend
        </motion.p>
      </div>
    </section>
  );
}
