const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C++"]
  },
  {
    category: "AI / ML / NLP",
    skills: ["Scikit-learn", "PyTorch", "LangChain", "GANs (WGAN-GP)", "CNNs", "RAG systems", "LLM fine-tuning (PEFT)", "NLP pipelines"]
  },
  {
    category: "Web & App",
    skills: ["React", "React Native", "Tailwind CSS", "Node.js", "FastAPI", "Streamlit", "Gradio", "Dash", "Responsively"]
  },
  {
    category: "Data & Visualization",
    skills: ["Pandas", "NumPy", "Seaborn", "Plotly", "Matplotlib", "Power BI", "Looker Studio", "Metabase"]
  },
  {
    category: "Databases & Backend",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Appwrite", "Supabase"]
  },
  {
    category: "Cloud, DevOps & APIs",
    skills: ["AWS (EC2, S3)", "GCP", "Docker", "Postman", "Groq", "Swagger", "Cloudinary"]
  },
];

import Section from "./Section";

const SkillsSection = () => {
  return (
    <Section eyebrow="Your top genres" title="Skills">
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((cat, index) => (
          <div key={index} className="rounded-lg border border-border bg-background p-5">
            <h3 className="sp-eyebrow mb-3">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, idx) => (
                <span key={idx} className="sp-chip cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
