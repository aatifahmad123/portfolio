import { Github, Linkedin, Play, BadgeCheck, MapPin, ExternalLink, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const [daysLived, setDaysLived] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const birthDate = new Date(2005, 2, 15); // March 15, 2005
      const today = new Date();
      const diffTime = today.getTime() - birthDate.getTime();
      setDaysLived(Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-12 pt-24 pb-10">
      <div className="rounded-lg border border-border bg-gradient-hero px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end gap-10">
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="relative h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full border border-border shadow-2xl">
              <img src={profileImage} alt="Portrait of Aatif Ahmad" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1">
              <span className="flex h-3 items-end gap-[2px]">
                <span className="block w-[3px] bg-primary animate-equalize" style={{ height: "100%", animationDelay: "0ms" }} />
                <span className="block w-[3px] bg-primary animate-equalize" style={{ height: "100%", animationDelay: "200ms" }} />
                <span className="block w-[3px] bg-primary animate-equalize" style={{ height: "100%", animationDelay: "400ms" }} />
              </span>
              <p className="text-xs text-muted-foreground">
                Alive for <span className="font-bold text-primary">{daysLived.toLocaleString()}</span> days
              </p>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Verified Builder
            </p>
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
              Aatif Ahmad
            </h1>
            <p className="mb-4 max-w-2xl text-base md:text-lg font-semibold text-foreground/90 mx-auto lg:mx-0">
              Software Analyst at ICICI Bank (M1) and founder building Crevvy, a platform focused on elevating the
              Indian creator economy.
            </p>
            <p className="mb-7 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Mumbai, India
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="https://linkedin.com/in/aatifahmad123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                <Play className="h-4 w-4" fill="currentColor" />
                LinkedIn
              </a>
              <a
                href="https://github.com/aatifahmad123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://crevvy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Crevvy
              </a>
              <a
                href="https://drive.google.com/file/d/1MTI8WQmOosyE-jAKzwy959Kh5Kr-M_G2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
