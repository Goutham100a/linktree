
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import RetroBackground from "@/components/RetroBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <RetroBackground />
      <div className="retro-card px-8 py-10 text-center">
        <h1 className="text-6xl font-bold mb-4 text-retro-navy">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page not found</p>
        <div className="inline-block">
          <a 
            href="/" 
            className="link-button inline-flex items-center px-6 py-3 rounded-lg"
            style={{ animationDelay: '0.1s' }}
          >
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
