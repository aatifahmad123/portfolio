import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorGuesserGame from "@/components/ColorGuesserGame";
import SpotifyCurrent from "@/components/SpotifyCurrent";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const curiosities = [
  {
    title: "OnlyPGs",
    description:
      "Find PG listings across major cities of India with all details - room types, prices, amenities. Listings are crowdsourced, so anyone can add one. Search your PG without the noise.",
    tech: ["Crowdsourced"],
    link: "https://onlypgs.in",
    linkLabel: "Visit site",
  },
  {
    title: "Caesar Cipher Challenge",
    description: (
      <>
        Connect to <strong className="text-foreground">65.0.11.146</strong> and port{" "}
        <strong className="text-foreground">6000</strong>. Send a JSON object: {"{"}"get": "cipher"{"}"}. You will
        receive a fun challenge - decode the hidden message and see if you got it right!
      </>
    ),
    tech: ["AWS EC2"],
    stats: "🎯 28 correct solves so far",
  },
  {
    title: "Docker Essentials",
    description: "Practical guide to Docker for smooth deployments, written for beginners.",
    note: "Just follow the article step by step and get ahead of the rest.",
    tech: ["Medium"],
    stats: "👏 53 claps",
    link: "https://medium.com/@aatifahmad123/docker-essentials-ensuring-smooth-deployments-anytime-anywhere-33588bead5cb",
    linkLabel: "Read article",
  },
  {
    title: "PlanShort",
    description:
      "Minimal task management web app with auth & storage. Features: dark, minimal theme, auth, tasks, deadlines, profile, updates, calendar.",
    tech: ["Supabase"],
    stats: "👥 17 registered users",
    link: "https://planshort.online",
    linkLabel: "Try app",
  },
  {
    title: "Cricket × Google Trends",
    description:
      "Kaggle notebook comparing search interest of Fab Four of modern cricket: Kohli, Smith, Root and Williamson.",
    tech: ["Kaggle"],
    stats: "🏅 Bronze Medal",
    link: "https://www.kaggle.com/code/aatifahmad123/a-fun-google-trends-look-at-cricket-s-fab-four",
    linkLabel: "View notebook",
  },
  {
    title: "Slate Extension",
    description:
      "A lightweight Chrome extension for high-quality speech-to-text dictation that works on any website. Download the CRX file from the repository and enjoy the extension!",
    note: "Coming soon on Chrome Web Store",
    tech: ["Chrome Extension"],
    link: "https://github.com/aatifahmad123/slate",
    linkLabel: "View repository",
  },
];

const Curiosities = () => {


  return (
    <>
      <Helmet>
        <title>Curiosities | Aatif Ahmad</title>
        <meta
          name="description"
          content="Curiosities and interests of Aatif Ahmad - thoughts, explorations, and things I find fascinating."
        />
        <link rel="canonical" href="https://aatifahmad123.dev/curiosities" />
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
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <p className="sp-eyebrow mb-2">Radio</p>
                  <h1 className="mb-3 text-4xl md:text-5xl font-extrabold text-foreground">Curiosities</h1>
                  <p className="text-sm text-muted-foreground">Fun projects, experiments, and things I've been exploring.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-8 lg:px-12 py-4">
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">

              <div className="grid gap-4 md:grid-cols-2">
                {curiosities.map((item, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-col rounded-lg border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-accent"
                  >
                    <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tech.map((t, i) => (
                        <span key={i} className="sp-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <span className="text-xs text-muted-foreground">{item.stats}</span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
                        >
                          {item.linkLabel}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <SpotifyCurrent />
                <p className="text-sm text-muted-foreground">
                  Spotify widget powered by{" "}
                  <a
                    href="https://github.com/kittinan/spotify-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    kittinan/spotify-github-profile
                  </a>
                </p>
              </div>

              {/* Color Guesser Game */}
              <div className="mt-10">
                <p className="sp-eyebrow mb-1.5">Mini game</p>
                <h2 className="mb-2 text-2xl font-extrabold text-foreground">Guess the Color</h2>
                <p className="mb-5 max-w-2xl text-sm text-muted-foreground">
                  The target color name is provided - use the color picker to create the closest possible match. Hit a
                  score of 90 or above for a celebration.
                </p>
                <ColorGuesserGame />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Curiosities;
