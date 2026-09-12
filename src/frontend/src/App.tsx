import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Tools } from "@/components/Tools";
import { WebsiteTypes } from "@/components/WebsiteTypes";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { useCallback, useState } from "react";

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
          <Hero />
          <About />
          <Tools />
          <WebsiteTypes />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
