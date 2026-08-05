import { ExternalLink } from "lucide-react";
import Section from "./Section";
import kaggleLogo from "@/assets/logos/kaggle.png";
import gfgLogo from "@/assets/logos/gfg.svg";

const codingProfiles = [
  { name: "Kaggle", url: "https://www.kaggle.com/aatifahmad123", handle: "aatifahmad123", logo: kaggleLogo },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/aatifahmad123",
    handle: "aatifahmad123",
    logo: gfgLogo
  }
];

const CodingProfilesSection = () => {
  return (
    <Section id="profiles" eyebrow="Playlists" title="Coding Profiles">
      <div className="grid gap-4 sm:grid-cols-2">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card p-2">
              <img src={profile.logo} alt={`${profile.name} logo`} className="h-full w-full object-contain" loading="lazy" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold text-foreground">{profile.name}</span>
              <span className="block text-xs text-muted-foreground">@{profile.handle}</span>
            </span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default CodingProfilesSection;
