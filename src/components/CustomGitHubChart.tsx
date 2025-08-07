import { useState, useEffect } from "react";
import PixelCard from "./PixelCard";

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4 intensity level
}

interface CustomGitHubChartProps {
  username: string;
}

const CustomGitHubChart = ({ username }: CustomGitHubChartProps) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  // Generate mock data for demonstration (replace with real API call)
  useEffect(() => {
    const generateMockData = () => {
      const data: ContributionDay[] = [];
      const today = new Date();
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const count = Math.random() > 0.7 ? Math.floor(Math.random() * 15) : 0;
        const level = count === 0 ? 0 : Math.min(Math.floor(count / 3) + 1, 4);
        
        data.push({
          date: d.toISOString().split('T')[0],
          count,
          level
        });
      }
      return data;
    };

    // Simulate API loading delay
    setTimeout(() => {
      setContributions(generateMockData());
      setLoading(false);
    }, 1000);
  }, [username]);

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "bg-muted/20";
      case 1: return "bg-gaming-green/30";
      case 2: return "bg-gaming-green/60";
      case 3: return "bg-gaming-green/80";
      case 4: return "bg-gaming-green";
      default: return "bg-muted/20";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleMouseMove = (e: React.MouseEvent, day: ContributionDay) => {
    setHoveredDay(day);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  // Group contributions by weeks
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  contributions.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay();
    
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
    
    currentWeek.push(day);
    
    if (index === contributions.length - 1) {
      weeks.push(currentWeek);
    }
  });

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <PixelCard>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-pixel text-xl text-gaming-green neon-glow">📊 GITHUB ACTIVITY</h2>
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors text-gamer text-sm"
          >
            @{username}
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-pixel text-sm text-muted-foreground">
              LOADING_CONTRIBUTIONS<span className="animate-pulse">...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="text-gamer text-sm mb-4">
              <span className="text-muted-foreground">TOTAL CONTRIBUTIONS: </span>
              <span className="text-accent font-bold">{totalContributions}</span>
              <span className="text-muted-foreground"> in the last year</span>
            </div>

            <div className="relative">
              <div className="grid grid-cols-53 gap-1 overflow-x-auto">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-rows-7 gap-1">
                    {week.map((day, dayIndex) => (
                      <div
                        key={day.date}
                        className={`w-3 h-3 rounded-sm border border-border/20 cursor-pointer transition-all hover:border-gaming-green hover:scale-110 ${getContributionColor(day.level)}`}
                        onMouseMove={(e) => handleMouseMove(e, day)}
                        onMouseLeave={handleMouseLeave}
                        title={`${day.count} contributions on ${formatDate(day.date)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Tooltip */}
              {hoveredDay && (
                <div
                  className="fixed z-50 bg-popover border border-border rounded px-3 py-2 text-xs pointer-events-none"
                  style={{
                    left: mousePosition.x + 10,
                    top: mousePosition.y - 10,
                    transform: 'translateY(-100%)'
                  }}
                >
                  <div className="text-pixel text-foreground">
                    {hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'}
                  </div>
                  <div className="text-muted-foreground">
                    {formatDate(hoveredDay.date)}
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm border border-border/20 ${getContributionColor(level)}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>

            <div className="text-xs text-muted-foreground bg-muted/10 p-3 rounded border border-gaming-green/10">
              <p className="text-terminal">
                &gt; HOVER_ENABLED: Mouse over squares to see daily contributions
              </p>
              <p className="text-terminal">
                &gt; DATA_SOURCE: GitHub API simulation • REAL-TIME updates available
              </p>
            </div>
          </>
        )}
      </div>
    </PixelCard>
  );
};

export default CustomGitHubChart;