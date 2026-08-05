import { Heart } from "lucide-react";
import Section from "./Section";

const favorites = [
  "Groq",
  "GitHub",
  "Vercel",
  "Scikit-learn",
  "Seaborn",
  "Metabase",
  "Supabase",
  "Docker",
  "Swagger",
  "Responsively",
  "FastAPI",
  "Cloudinary"
];

const FavoritesSection = () => {
  return (
    <Section eyebrow="Liked songs" title="Favorites" subtitle="Tools and platforms I genuinely enjoy working with">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((fav, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <span className="w-5 text-right text-xs font-bold text-muted-foreground">{index + 1}</span>
            <span className="flex-1 text-sm font-semibold text-foreground">{fav}</span>
            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FavoritesSection;
