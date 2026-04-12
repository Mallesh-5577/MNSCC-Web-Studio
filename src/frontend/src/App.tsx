import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { useCallback, useState } from "react";

// Lazy section imports to keep initial bundle fast
import { Suspense, lazy } from "react";

const HeroSection = lazy(() =>
  import("@/pages/HeroSection").then((m) => ({ default: m.HeroSection })),
);
const AboutSection = lazy(() =>
  import("@/pages/AboutSection").then((m) => ({ default: m.AboutSection })),
);
const ToolsSection = lazy(() =>
  import("@/pages/ToolsSection").then((m) => ({ default: m.ToolsSection })),
);
const WebsiteTypesSection = lazy(() =>
  import("@/pages/WebsiteTypesSection").then((m) => ({
    default: m.WebsiteTypesSection,
  })),
);
const PortfolioSection = lazy(() =>
  import("@/pages/PortfolioSection").then((m) => ({
    default: m.PortfolioSection,
  })),
);
const WhyChooseUsSection = lazy(() =>
  import("@/pages/WhyChooseUsSection").then((m) => ({
    default: m.WhyChooseUsSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("@/pages/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const ContactSection = lazy(() =>
  import("@/pages/ContactSection").then((m) => ({ default: m.ContactSection })),
);
const FooterSection = lazy(() =>
  import("@/pages/FooterSection").then((m) => ({ default: m.FooterSection })),
);

export default function App() {
  const [loaded, setLoaded] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("mnscc-loader-seen-v1") === "1";
  });

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem("mnscc-loader-seen-v1", "1");
    setLoaded(true);
  }, []);

  return (
    <div className="dark min-h-screen bg-background">
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        <main>
          <Suspense fallback={null}>
            <HeroSection />
            <AboutSection />
            <ToolsSection />
            <WebsiteTypesSection />
            <PortfolioSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <FooterSection />
        </Suspense>
      </div>
    </div>
  );
}
