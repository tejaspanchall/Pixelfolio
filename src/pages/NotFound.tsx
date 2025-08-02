import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PixelButton from "@/components/PixelButton";
import PixelCard from "@/components/PixelCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative scanlines">
      <PixelCard className="max-w-md mx-4 text-center">
        <div className="text-pixel text-6xl text-destructive mb-4">404</div>
        <div className="text-pixel text-xl text-primary mb-4">ERROR.FILE_NOT_FOUND</div>
        <div className="text-terminal text-sm text-muted-foreground mb-6 space-y-2">
          <p>&gt; SYSTEM_ERROR: The requested resource does not exist</p>
          <p>&gt; PATH: {location.pathname}</p>
          <p>&gt; SUGGESTION: Return to main directory</p>
        </div>
        <Link to="/">
          <PixelButton variant="primary">
            RETURN_TO_HOME.EXE
          </PixelButton>
        </Link>
      </PixelCard>
    </div>
  );
};

export default NotFound;
