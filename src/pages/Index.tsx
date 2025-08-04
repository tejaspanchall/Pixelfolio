import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";
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
    <div className="min-h-screen bg-background relative game-scanlines">
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

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-pixel text-2xl text-accent mb-8 text-center">
          🏆 FEATURED PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-COMMERCE PLATFORM",
              tech: ["REACT", "NODE.JS"],
              status: "COMPLETED",
              complexity: "⭐⭐⭐"
            },
            {
              title: "TASK MANAGEMENT APP",
              tech: ["TYPESCRIPT", "SUPABASE"],
              status: "IN PROGRESS",
              complexity: "⭐⭐⭐⭐"
            },
            {
              title: "AI CHATBOT",
              tech: ["PYTHON", "ML"],
              status: "BETA",
              complexity: "⭐⭐⭐⭐⭐"
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
              VIEW_ALL_PROJECTS
            </PixelButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
