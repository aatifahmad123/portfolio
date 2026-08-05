import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 text-center">
        <p className="sp-eyebrow mb-2">Track not found</p>
        <h1 className="mb-3 text-5xl font-extrabold text-foreground">404</h1>
        <p className="mb-6 text-sm text-muted-foreground">We couldn't find the page you were looking for.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
