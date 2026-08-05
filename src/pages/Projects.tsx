import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

const otherProjects = [
  {
    title: "RAG-Based Coding Assistant",
    description:
      "When Github-Copilot launched after the rise of ChatGPT, I was very curious how it worked with codebases so I tried to build a similar version of it on my own using RAG for dev-related projects. I used 384-dimensional vector embeddings in FAISS to perform quick vector search and retrieval and support LLM to answer project-related queries.",
    techStack: ["Python", "LlamaIndex", "FAISS", "Gemini"],
    githubUrl: "https://github.com/aatifahmad123/rag-based-coding-assistant"
  },
  {
    title: "HateCheck - Hate Speech Detection",
    description:
      "In recent times, twitter has become very unhinged, filled with a lot of hate content. I evaluated several ML and DL models on a dataset with over 24k tweets, achieving an F1-score of 0.8792 with an ensemble Voting Classifier. The idea is to block tweets flagged as hate.",
    techStack: ["Python", "Scikit-Learn", "PyTorch", "NLTK"],
    githubUrl: "https://github.com/aatifahmad123/twitter_hate_speech_detection",
    liveUrl: "https://twitter-hate-speech-detection.vercel.app/"
  },
  {
    title: "Virality - Tech Video Sharing App",
    description:
      "It is difficult to catch up with the fast-paced developments in the tech industry. So, I built a cross-platform mobile application using React Native which allows people to discover, upload and share trending tech videos. It is equipped with secure user authentication and personalized content feeds.",
    techStack: ["React Native", "NativeWind", "Appwrite"],
    githubUrl: "https://github.com/aatifahmad123/virality",
    demoUrl: "https://drive.google.com/file/d/16AUVeZHstYa9Eggdpsru874mjH6_S9R8/view"
  },
  {
    title: "Restaurant Review System",
    description:
      "ML-based web application to review dishes of a restaurant. Users can select dishes and submit reviews. The reviews are passed through a machine learning model to identify sentiment - positive or negative. Dish Name, Review and Sentiment Label are pushed to a Google Sheet which is further connected to Google Looker Studio for visualization.",
    techStack: ["Machine Learning", "Google Sheets", "Looker Studio"],
    githubUrl: "https://github.com/aatifahmad123/restaurant-review-system",
    liveUrl: "https://gastroinfeng.netlify.app/"
  },
  {
    title: "IIT Jodhpur Weather Dashboard",
    description:
      "Project for the Data Visualization course at IITJ, built using Dash and Plotly in Python. It displays temperature, rain and wind speed trends at the geographical location of IITJ for the period - Mar 2024 to Mar 2025. Credits to Open-Meteo for the reliable data.",
    techStack: ["Python", "Dash", "Plotly", "Pandas"],
    liveUrl: "https://aatifahmad234.pythonanywhere.com/"
  },
  {
    title: "Data Crawling for ICCV Papers",
    description:
      "Uses Beautiful Soup to crawl the webpage - https://openaccess.thecvf.com/ICCV2023?day=all and collect research paper titles, authors' names and pdf links which are combined to create a new csv file and save it in the current working directory.",
    techStack: ["Python", "Beautiful Soup", "Pandas"],
    githubUrl: "https://github.com/aatifahmad123/web-crawling"
  },
  {
    title: "DNA Encrypt Decrypt",
    description:
      "First project at IITJ. Simulates DNA-based data storage by converting text to binary, then encoding it as nitrogenous base sequences (A, G, C, T).",
    techStack: ["C", "Data Structures", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/aatifahmad123/dna-encrypt-decrypt",
    liveUrl: "https://aatifahmad123.github.io/dna-encrypt-decrypt/"
  }
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Aatif Ahmad</title>
        <meta 
          name="description" 
          content="Explore all projects by Aatif Ahmad - ML, AI, Data Science, and Full-Stack development projects." 
        />
        <link rel="canonical" href="https://aatifahmad123.dev/projects" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <section className="px-4 md:px-8 lg:px-12 py-4">
            <div className="rounded-lg border border-border bg-gradient-hero p-6 md:p-10">
              <Link
                to="/"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
              <p className="sp-eyebrow mb-2">Discography</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">Projects Directory</h1>
            </div>
          </section>

          <section className="px-4 md:px-8 lg:px-12 py-4">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <p className="sp-eyebrow mb-1.5">Top tracks</p>
              <h2 className="mb-5 text-2xl font-extrabold text-foreground">Featured</h2>
              <div className="mb-10 grid gap-4 md:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              <p className="sp-eyebrow mb-1.5">Deep cuts</p>
              <h2 className="mb-5 text-2xl font-extrabold text-foreground">Other Projects</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
