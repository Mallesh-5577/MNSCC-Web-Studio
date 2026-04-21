import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [40, 75, 100];
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setProgress(steps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 220);
        }, 120);
      }
    }, 140);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      data-ocid="loading-screen"
    >
      {/* Orbs */}
      <div
        className="orb w-96 h-96 bg-primary/20 top-[-10%] left-[-5%]"
        style={{ animationDelay: "0s" }}
      />
      <div className="orb w-64 h-64 bg-secondary/15 bottom-[-5%] right-[-5%]" />

      {/* Brand Logo */}
      <div className="relative mb-6 flex items-center justify-center animate-pulse">
        <img
          src="/image.png"
          alt="MNSCC Web Studio Logo"
          className="h-16 sm:h-20 w-auto object-contain drop-shadow-xl"
        />
      </div>
      <p className="text-muted-foreground text-sm mb-10 font-mono tracking-widest uppercase">
        Loading experience...
      </p>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full gradient-cyan-accent rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-3 text-xs text-muted-foreground font-mono tabular-nums">
        {progress}%
      </span>
    </div>
  );
}
