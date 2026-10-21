import Section from "./Section";

const AboutSection = () => {
  return (
    <Section title="About">
      <div className="rounded-lg border border-border bg-background p-5 md:p-6">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Graduated from IIT Jodhpur with a Bachelors degree in Artificial Intelligence and Data Science, I enjoy
            building products end-to-end, from designing scalable backend services and APIs to developing AI-powered
            applications and deploying them on the cloud.
          </p>
          <p>
            My interests lie at the intersection of Backend Engineering and LLMs. I primarily work with Python,
            FastAPI, SqlAlchemy, PostgreSQL, LangChain, LangGraph, JavaScript, React.js, Node.js, Docker, GCP and
            modern LLM frameworks.
          </p>
          <p>
            I have contributed to both fintech (ICICI Bank) and early startup (Robolens.ai) environments. Always open
            to collaborating with ambitious teams and exploring new ideas in software engineering and applied AI.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
