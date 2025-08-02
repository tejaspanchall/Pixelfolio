import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";
import gamerHero from "@/assets/gamer-hero.png";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "LEVEL UP YOUR CODE!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background relative game-scanlines">
      <PixelNavigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-gamer text-sm text-muted-foreground">
              ⚡ PLAYER READY... INITIALIZING PORTFOLIO ⚡
            </div>
            
            <h1 className="text-pixel text-3xl md:text-4xl text-primary neon-glow">
              {displayText}
              <span className="animate-pulse text-accent">█</span>
            </h1>
            
            <div className="space-y-4 text-gamer">
              <p className="text-lg text-secondary neon-glow">
                🎯 CRAFTING EPIC DIGITAL EXPERIENCES
              </p>
              <p className="text-foreground leading-relaxed">
                Welcome to my gaming-inspired dev world! I'm a passionate developer who 
                creates legendary web applications with modern tech stacks and pixel-perfect precision.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <PixelButton variant="primary" size="lg">
                  VIEW_PROJECTS
                </PixelButton>
              </Link>
              <Link to="/contact">
                <PixelButton variant="accent" size="lg">
                  CONTACT_ME
                </PixelButton>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={gamerHero} 
              alt="Gaming developer character"
              className="w-full h-auto border-2 border-primary shadow-neon"
            />
            <div className="absolute -bottom-2 -right-2 achievement">
              <span className="text-pixel text-xs">🔥 ONLINE</span>
            </div>
            <div className="absolute -top-2 -left-2 bg-gaming-green text-black px-2 py-1">
              <span className="text-pixel text-xs">LVL 99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "GAMES COMPLETED", value: "25+", icon: "🎮" },
            { label: "XP YEARS", value: "5Y", icon: "⭐" },
            { label: "TECH STACK", value: "20+", icon: "🛠️" },
            { label: "COFFEE RESPAWNS", value: "∞", icon: "☕" }
          ].map((stat) => (
            <PixelCard key={stat.label} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-pixel text-xl text-primary mb-2 neon-glow">
                {stat.value}
              </div>
              <div className="text-pixel text-xs text-muted-foreground">
                {stat.label}
              </div>
            </PixelCard>
          ))}
        </div>
      </section>

      {/* Featured Quests */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-pixel text-2xl text-accent mb-8 text-center neon-glow">
          🏆 FEATURED QUESTS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-SHOP ADVENTURE",
              tech: ["REACT", "NODE.JS"],
              status: "COMPLETED",
              difficulty: "⭐⭐⭐"
            },
            {
              title: "TASK MASTER RPG",
              tech: ["TYPESCRIPT", "SUPABASE"],
              status: "IN PROGRESS",
              difficulty: "⭐⭐⭐⭐"
            },
            {
              title: "AI COMPANION",
              tech: ["PYTHON", "ML"],
              status: "BETA TEST",
              difficulty: "⭐⭐⭐⭐⭐"
            }
          ].map((project, index) => (
            <PixelCard key={project.title}>
              <h3 className="text-pixel text-sm text-primary mb-3">
                {project.title}
              </h3>
              <div className="flex gap-2 mb-3">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 border border-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pixel text-xs text-accent">
                  [{project.status}]
                </span>
                <PixelButton size="sm" variant="secondary">
                  VIEW
                </PixelButton>
              </div>
            </PixelCard>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/projects">
            <PixelButton variant="primary">
              LOAD_ALL_PROJECTS.EXE
            </PixelButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
