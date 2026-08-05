import { Github, ExternalLink } from "lucide-react";

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const FeaturedProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}: FeaturedProjectCardProps) => {
  return (
    <div className="group relative flex h-full flex-col rounded-lg border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-accent">
      <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {techStack.map((tech, index) => (
          <span key={index} className="sp-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
