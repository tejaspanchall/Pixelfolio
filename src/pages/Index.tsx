import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";
import GitHubContributionChart from "@/components/GitHubContributionChart";
import gamerHero from "@/assets/gamer-hero.png";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    "SOFTWARE ENGINEER",
    "FULLSTACK DEVELOPER",
    "BACKEND DEVELOPER",
    "FRONTEND DEVELOPER"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentTitle = titles[currentTitleIndex];
    
    const interval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Wait 2 seconds then move to next title
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  return (
    <div className="min-h-screen bg-background relative game-scanlines pt-16">
      <PixelNavigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-gamer text-sm text-muted-foreground">
            ✨ WELCOME TO MY PORTFOLIO ✨
            </div>
            
            <h1 className="text-pixel text-3xl md:text-4xl text-primary">
              {displayText}
              <span className="animate-pulse text-accent">█</span>
            </h1>
            
            <div className="space-y-4 text-gamer">
              <p className="text-lg text-secondary">
                🎯 BUILDING INNOVATIVE DIGITAL SOLUTIONS
              </p>
              <p className="text-foreground leading-relaxed">
                Welcome to my development portfolio! I'm a passionate developer who 
                creates robust web applications with modern tech stacks and attention to detail.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <PixelButton 
                variant="accent" 
                size="lg" 
                href="/Tejas Panchal Resume.pdf" 
                external
                download="Tejas Panchal Resume.pdf"
              >
                📄 DOWNLOAD RESUME
              </PixelButton>
              <Link to="/contact">
                <PixelButton variant="primary" size="lg">
                  CONTACT_ME
                </PixelButton>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={gamerHero} 
              alt="Developer workspace"
              className="w-full h-auto rounded-lg shadow-lg border border-border/20"
            />
          </div>
        </div>
      </section>

      {/* Developer Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "PROJECTS BUILT", value: "8+", icon: "💻" },
            { label: "EXPERIENCE", value: "1Y", icon: "⭐" },
            { label: "TECH STACK", value: "15+", icon: "🛠️" },
            { label: "COFFEE CONSUMED", value: "∞", icon: "☕" }
          ].map((stat) => (
            <PixelCard key={stat.label} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-pixel text-xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-pixel text-xs text-muted-foreground">
                {stat.label}
              </div>
            </PixelCard>
          ))}
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="container mx-auto px-4 py-8">
        <GitHubContributionChart username="tejaspanchall" />
      </section>

      {/* Player Profile */}
      <section className="container mx-auto px-4 py-8">
        <PixelCard>
          <h2 className="text-pixel text-xl text-accent mb-6 neon-glow">🎮 PLAYER PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-gamer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-muted-foreground">CLASS:</span>
                  <span className="text-primary">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-muted-foreground">LEVEL:</span>
                  <span className="text-accent">Software Engineer</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-muted-foreground">STATUS:</span>
                  <span className="text-secondary">Available for opportunities</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-muted/20 p-3 rounded border border-accent/20">
                <p className="text-pixel text-xs text-accent mb-1">CURRENT QUEST:</p>
                <p className="text-gamer text-sm">Building innovative web solutions and mastering new technologies</p>
              </div>
              <div className="bg-muted/20 p-3 rounded border border-primary/20">
                <p className="text-pixel text-xs text-primary mb-1">MAIN_SKILLS:</p>
                <p className="text-gamer text-sm">React • Node.js • JavaScript • Java • Python</p>
              </div>
            </div>
          </div>
        </PixelCard>
      </section>
    </div>
  );
};

export default Index;
