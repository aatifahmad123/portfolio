import React from "react";

interface SpotifyCurrentProps {
  className?: string;
}

const SpotifyCurrent: React.FC<SpotifyCurrentProps> = ({ className = "" }) => {
  const profileUrl =
    "https://spotify-github-profile.kittinanx.com/api/view?uid=3136nvwkcr6btvi3te3cxvwdr4qi&redirect=true";
  const imageUrl =
    "https://spotify-github-profile.kittinanx.com/api/view?uid=3136nvwkcr6btvi3te3cxvwdr4qi&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false&profanity=false&hide_remaster=false&bar_color=53b14f&bar_color_cover=false";

  return (
    <div className={`flex w-full justify-center ${className}`}>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-[300px] overflow-hidden rounded-xl border border-border/80 bg-[#121212] p-1.5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:max-w-[320px]"
        aria-label="View Spotify Profile"
      >
        <img
          src={imageUrl}
          alt="Spotify Now Playing"
          className="block h-auto w-full rounded-lg"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default SpotifyCurrent;