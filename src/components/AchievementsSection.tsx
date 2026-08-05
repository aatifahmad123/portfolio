import { Trophy, Award, ExternalLink } from "lucide-react";
import Section from "./Section";

const achievements = [
  { title: "Specialist at Codeforces", org: "Competitive Programming" },
  { title: "Expert at Kaggle", org: "High-Quality Datasets" },
  { title: "Finalist - DeepDive 1.0: Deep Learning Hackathon", org: "Mercer Mettl" }
];

const certifications = [
  {
    title: "AI Fluency: Framework and Foundations",
    org: "Anthropic",
    url: "https://verify.skilljar.com/c/bxg5xyvbkzhv"
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    org: "Google",
    url: "https://www.coursera.org/account/accomplishments/certificate/UZ7XRLXTCA1U"
  },
  {
    title: "Generative AI: Introduction and Applications",
    org: "IBM",
    url: "https://www.coursera.org/account/accomplishments/verify/TNC4XCPQFNW7"
  }
];

const AchievementsSection = () => {
  return (
    <Section id="achievements" eyebrow="Awards" title="Milestones & Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-background p-5">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <h3 className="sp-eyebrow">Milestones & Achievements</h3>
          </div>
          <div className="space-y-3">
            {achievements.map((ach, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-3">
                <p className="text-sm font-bold text-foreground">{ach.title}</p>
                <p className="text-xs text-muted-foreground">{ach.org}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-5">
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <h3 className="sp-eyebrow">Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="flex-1">
                  <span className="block text-sm font-bold text-foreground">{cert.title}</span>
                  <span className="block text-xs text-muted-foreground">{cert.org}</span>
                </span>
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AchievementsSection;
