import { Link } from "react-router-dom";
import PixelButton from "@/components/PixelButton";
import PixelCard from "@/components/PixelCard";
import PixelNavigation from "@/components/PixelNavigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background game-scanlines pt-16">
      <PixelNavigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <PixelCard className="max-w-md mx-4 text-center">
          <div className="text-pixel text-6xl text-destructive mb-4">404</div>
          <h1 className="text-pixel text-2xl text-primary mb-6">GAME OVER</h1>
          <p className="text-gamer text-muted-foreground mb-6">
            The level you're looking for doesn't exist or has been moved to another castle.
          </p>
          <Link to="/">
            <PixelButton variant="accent">
              CONTINUE [HOME]
            </PixelButton>
          </Link>
        </PixelCard>
      </div>
    </div>
  );
};

export default NotFound;
