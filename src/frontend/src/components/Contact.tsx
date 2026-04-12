import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  websiteType: string;
  otherWebsiteName: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  websiteType?: string;
  otherWebsiteName?: string;
  message?: string;
}

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Invalid email address";
  if (!form.phone.trim()) errors.phone = "Phone number is required";
  if (!form.websiteType.trim()) errors.websiteType = "Please choose a website type";
  if (form.websiteType === "Others" && !form.otherWebsiteName.trim()) {
    errors.otherWebsiteName = "Please enter your website type";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 20)
    errors.message = "Please provide more detail (20+ chars)";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    otherWebsiteName: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBlur = (field: keyof FormState) => {
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5ef205c3-f740-4307-a566-e3da2da44c10",
          name: form.name,
          email: form.email,
          phone: form.phone,
          website_type: form.websiteType,
          other_website_name:
            form.websiteType === "Others" ? form.otherWebsiteName : "",
          message: form.message,
          subject: `New Project Inquiry from ${form.name}`,
          from_name: "MNSCC Web Studio Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrors({
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch {
      setErrors({
        message: "A network error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 section-bg-alt" />
      <div
        className="orb w-96 h-96 opacity-15 top-0 left-[-10%]"
        style={{ background: "oklch(0.7 0.25 260)" }}
      />
      <div
        className="orb w-72 h-72 opacity-10 bottom-0 right-[-5%]"
        style={{ background: "oklch(0.6 0.18 290)" }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-primary font-medium border border-primary/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Let's Talk
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Your <span className="gradient-text-cyan">Website</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Ready to elevate your online presence? Drop us a message and we'll
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card mb-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you have a specific project in mind or just want to
                explore possibilities, we'd love to hear from you. Every great
                website starts with a conversation.
              </p>

              {/* Quick links */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/918977259147?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20built"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/15 transition-smooth group"
                  data-ocid="contact-whatsapp"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-foreground text-sm">
                      Chat on WhatsApp
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Instant replies, quick discussion
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:malleshmudavath449@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary/40 hover:bg-primary/15 transition-smooth group"
                  data-ocid="contact-email"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-foreground text-sm">
                      Send an Email
                    </div>
                    <div className="text-xs text-muted-foreground">
                      malleshmudavath449@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-lg p-4 flex items-center gap-3 border border-border/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">
                  Currently accepting projects.
                </span>{" "}
                Average response time: under 4 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="glass-card flex flex-col items-center justify-center text-center py-12"
                data-ocid="contact-success"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-4 border border-green-500/30">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you for reaching out. We'll review your message and get
                  back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-border/40 hover:border-primary/40 transition-smooth"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      websiteType: "",
                      otherWebsiteName: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card space-y-5"
                noValidate
                data-ocid="contact-form"
              >
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    onBlur={() => handleBlur("name")}
                    className="bg-muted/40 border-border/30 focus:border-primary/50 transition-smooth"
                    data-ocid="contact-input-name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mnsccwebstudio@gmail.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    onBlur={() => handleBlur("email")}
                    className="bg-muted/40 border-border/30 focus:border-primary/50 transition-smooth"
                    data-ocid="contact-input-email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    onBlur={() => handleBlur("phone")}
                    className="bg-muted/40 border-border/30 focus:border-primary/50 transition-smooth"
                    data-ocid="contact-input-phone"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="websiteType"
                    className="text-sm font-medium text-foreground"
                  >
                    Type of Website
                  </Label>
                  <Select
                    value={form.websiteType}
                    onValueChange={(value) => {
                      setForm((f) => ({
                        ...f,
                        websiteType: value,
                        otherWebsiteName:
                          value === "Others" ? f.otherWebsiteName : "",
                      }));
                      setErrors((prev) => ({
                        ...prev,
                        websiteType: undefined,
                        otherWebsiteName:
                          value === "Others" ? prev.otherWebsiteName : undefined,
                      }));
                    }}
                  >
                    <SelectTrigger
                      id="websiteType"
                      onBlur={() => handleBlur("websiteType")}
                      className="w-full bg-muted/40 border-border/30 focus:border-primary/50"
                      data-ocid="contact-input-website-type"
                    >
                      <SelectValue placeholder="Select website type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/30">
                      <SelectItem value="Business Website">Business Website</SelectItem>
                      <SelectItem value="E-Commerce Website">E-Commerce Website</SelectItem>
                      <SelectItem value="Portfolio Website">Portfolio Website</SelectItem>
                      <SelectItem value="Landing Page">Landing Page</SelectItem>
                      <SelectItem value="Blog/News Website">Blog/News Website</SelectItem>
                      <SelectItem value="Custom Web App">Custom Web App</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.websiteType && (
                    <p className="text-xs text-destructive">{errors.websiteType}</p>
                  )}
                </div>

                {form.websiteType === "Others" && (
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="otherWebsiteName"
                      className="text-sm font-medium text-foreground"
                    >
                      Your Website Type
                    </Label>
                    <Input
                      id="otherWebsiteName"
                      type="text"
                      placeholder="Enter your website type"
                      value={form.otherWebsiteName}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          otherWebsiteName: e.target.value,
                        }))
                      }
                      onBlur={() => handleBlur("otherWebsiteName")}
                      className="bg-muted/40 border-border/30 focus:border-primary/50 transition-smooth"
                      data-ocid="contact-input-other-website-type"
                    />
                    {errors.otherWebsiteName && (
                      <p className="text-xs text-destructive">{errors.otherWebsiteName}</p>
                    )}
                  </div>
                )}

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Tell Us About Your Project
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Ex... I need a business website with e-commerce functionality..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    onBlur={() => handleBlur("message")}
                    rows={5}
                    className="bg-muted/40 border-border/30 focus:border-primary/50 transition-smooth resize-none"
                    data-ocid="contact-input-message"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-cyan-accent text-background font-bold shadow-neon-sm hover:shadow-neon hover:-translate-y-0.5 transition-smooth disabled:opacity-60 disabled:cursor-not-allowed"
                  data-ocid="contact-submit"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
