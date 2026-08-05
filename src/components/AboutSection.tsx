import Section from "./Section";

const AboutSection = () => {
  return (
    <Section eyebrow="Profile" title="About">
      <div className="rounded-lg border border-border bg-background p-5 md:p-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Graduated from IIT Jodhpur with a degree in Artificial Intelligence and Data Science, I enjoy building
            products end-to-end, from designing scalable backend services and APIs to developing AI-powered
            applications and deploying them on the cloud.
          </p>
          <p>
            My interests lie at the intersection of Backend Engineering and LLMs. I've worked on applications involving
            LLM-powered call summarization, RAG pipelines, fine-tuning and full-stack development. I primarily work
            with C++, Python, JavaScript/TypeScript, React, Node.js, PostgreSQL, Docker, GCP and modern LLM frameworks.
          </p>
          <p>
            I have contributed to both fintech (ICICI Bank) and early startup (Robolens.ai) environments, focusing on
            building systems that are scalable and impactful.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
