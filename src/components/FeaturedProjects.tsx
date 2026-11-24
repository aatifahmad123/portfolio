import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import FeaturedProjectCard from "./FeaturedProjectCard";

const featuredProjects = [
  {
    title: "AI Newsroom with Crew AI",
    description:
      "I found Crew.ai very interesting so engineered a multi-agent system that turns any topic into a fact-checked news article using 3 agents (Researcher, Fact-checker, Editor) chained sequentially. Integrated DuckDuckGo web search tool so articles use current information and made the agents flag unverified claims.",
    techStack: ["Python", "Crew Agents", "Gradio"],
    githubUrl: "https://github.com/aatifahmad123/playing-with-crewai"
  },
  {
    title: "Intelligent LLM Routing with Jev",
    description:
      "First project at the first job. Built a RAG-based chatbot that answers questions from a finance textbook (Hull's book on Equity and Derivatives). Used the trending decision model Jev from Typesafe.ai to route queries between Ollama-run local Llama 3.2 (3B) model and Groq-hosted GPT-OSS (120B) model based on complexity. Featured Chroma DB as the vector store and Sqlite to store chat history.",
    techStack: ["RAG", "Jev", "Ollama", "Llama 3.2", "GPT-OSS", "Chroma DB", "Sqlite"],
    githubUrl: "https://github.com/aatifahmad123/jev-llm-routing"
  },
  {
    title: "SVD-based Book Recommendation System",
    description:
      "Developed an ISBN-based book recommendation system using Singular Value Decomposition (SVD) on the Book-Crossing dataset by filtering the data into a 3,312 × 4,493 user-item matrix with 50 latent factors to generate the top 5 most similar book recommendations based on cosine similarity.",
    techStack: ["Python", "Scikit-Learn", "SVD", "Streamlit"],
    githubUrl: "https://github.com/aatifahmad123/svd_book_recommender",
    liveUrl: "https://svd-book-recommender.streamlit.app/"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="scroll-mt-24 px-4 md:px-8 lg:px-12 py-4">
      <div className="rounded-lg border border-border bg-card p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Featured</h2>
        </div>

        {/* Milestones */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Milestones</h3>
            <a
              href="#achievements"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent hover:text-primary"
            >
              Show all
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="group flex h-full flex-col rounded-lg border border-border bg-background p-4">
              <p className="text-base font-bold text-foreground">Expert at Kaggle</p>
              <p className="mb-4 text-sm text-muted-foreground">High-Quality Datasets</p>
              <div className="mt-auto">
                <a
                  href="https://www.kaggle.com/aatifahmad123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Projects</h3>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-accent hover:text-primary"
            >
              Show all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
