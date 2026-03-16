import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <p className="text-8xl mb-6">🍕</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Ups! Ta pizza nie istnieje
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8">
          Strona, której szukasz, nie została znaleziona. Może wróć do menu?
        </p>
        <Link to="/" className="btn-primary text-base px-8 py-4">
          🏠 Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
