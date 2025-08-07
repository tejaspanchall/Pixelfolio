import { useState, useEffect } from "react";
import PixelCard from "./PixelCard";

interface GitHubContributionChartProps {
  username: string;
}

const GitHubContributionChart = ({ username }: GitHubContributionChartProps) => {
  const [imageError, setImageError] = useState(false);

  // Reset error state when username changes
  useEffect(() => {
    setImageError(false);
  }, [username]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <PixelCard>
      <h2 className="text-pixel text-xl text-gaming-green mb-6 neon-glow">📊 GITHUB ACTIVITY</h2>
      <div className="space-y-4">
        <div className="text-gamer text-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-muted-foreground">DEVELOPER:</span>
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              @{username}
            </a>
          </div>
        </div>
        
        <div className="bg-muted/20 p-4 rounded border border-gaming-green/20">
          {!imageError ? (
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt={`${username}'s GitHub contribution chart`}
              className="w-full h-auto rounded pixelated"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <div className="text-pixel text-4xl mb-4">⚠️</div>
              <p className="text-pixel text-sm text-center">
                CONTRIBUTION_CHART.ERROR
              </p>
              <p className="text-xs mt-2 text-center">
                Unable to load GitHub contributions for @{username}
              </p>
            </div>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground bg-muted/10 p-3 rounded border border-gaming-green/10">
          <p className="text-terminal">
            &gt; TRACKING_COMMITS: Daily code contributions and activity
          </p>
          <p className="text-terminal">
            &gt; DATA_SOURCE: GitHub API • UPDATED: Real-time
          </p>
        </div>
      </div>
    </PixelCard>
  );
};

export default GitHubContributionChart;