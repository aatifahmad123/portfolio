import Section from "./Section";
import iciciLogo from "@/assets/logos/icici.jpg";
import robolensLogo from "@/assets/logos/robolens.jpg";


const experiences = [
  {
    role: "SWE - Agentic AI",
    company: "ICICI Bank",
    logo: iciciLogo,
    location: "Mumbai, India",
    period: "Jul 2026 - Present",
    description:
      "Engineered a hybrid RAG pipeline combining 2 retrieval strategies (FAISS + BM25) with custom RRF fusion and CrossEncoder reranking, supporting 6+ formats including PDF, DOCX, PPTX, XLSX, XLS and TXT. Deployed the FastAPI-based RAG service using Docker + Kubernetes, integrating Redis for chat memory/caching."
  },
  {
    role: "Technology Intern",
    company: "ICICI Bank",
    logo: iciciLogo,
    location: "Hyderabad, India",
    period: "May - Jul 2025",
    description:
      "Developed an AI-powered call analysis system using Google Cloud's Chirp3 HD voices, Speech-to-Text APIs and fine-tuned FLAN-T5 model using PEFT for generating summaries, resolutions and emotion insights. Designed MySQL-based data pipelines and deployed interactive performance dashboard via Metabase on GCP."
  },
  {
    role: "Software Engineering Intern",
    company: "Robolens.ai",
    logo: robolensLogo,
    location: "Remote",
    period: "Jan - Mar 2025",
    description:
      "Integrated a text-to-video generation feature capable of producing 6+ second videos at 24 FPS using Amazon Nova Reel from AWS Bedrock, contributing to a 40% increase in platform traffic. Developed responsive UI components using React and Tailwind CSS as part of a microfrontend architecture, improving modularity."
  }
];

const ExperienceSection = () => {
  return (
    <Section title="Experience">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-contain" loading="lazy" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company} {exp.location ? `· ${exp.location}` : null}</p>
                </div>
              </div>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
