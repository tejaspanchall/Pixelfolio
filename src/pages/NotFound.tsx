import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container-narrow py-16">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="text-primary hover:underline hover:text-white">
            Go back home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
