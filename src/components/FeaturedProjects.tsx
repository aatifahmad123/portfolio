import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import FeaturedProjectCard from "./FeaturedProjectCard";

const featuredProjects = [
  {
    title: "Linux-Native Desktop Music Player",
    description:
      "The Spotify desktop application felt too feature-loaded to me when I just wanted to listen to my saved playlist. So, I developed a Linux-native desktop music player in C++ with Qt GUI and SFML, using a circular doubly linked list to model real-world playlist behavior. Features a clean, minimal interface, album artwork display and smooth next/previous navigation.",
    techStack: ["C++", "Qt", "SFML", "Data Structures", "Linux"],
    githubUrl: "https://github.com/aatifahmad123/qt-sfml-playlist"
  },
  {
    title: "LitRAG: Harry Potter Edition",
    description:
      "Built a CPU-only RAG system that answers queries by retrieving relevant passages from a custom document corpus (Harry Potter Books [1-3]). Combined semantic search (FAISS) with a Groq-hosted LLaMA model to generate grounded, source-backed answers.",
    techStack: ["LangChain", "FAISS", "Groq-hosted LLaMA", "RAG"],
    githubUrl: "https://github.com/aatifahmad123/rag-harry-potter"
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
          <p className="sp-eyebrow mb-1.5">Made for you</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Featured</h2>
        </div>

        {/* Milestones */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Milestones</h3>
            <a
              href="#achievements"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              Show all
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-accent">
              <p className="text-base font-bold text-foreground">Expert at Kaggle</p>
              <p className="mb-4 text-sm text-muted-foreground">High-Quality Datasets</p>
              <div className="mt-auto">
                <a
                  href="https://www.kaggle.com/aatifahmad123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
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
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
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
