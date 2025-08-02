import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";
import heroImage from "@/assets/pixel-hero.png";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "SOFTWARE_ENGINEER.EXE";

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
    <div className="min-h-screen bg-background relative scanlines">
      <PixelNavigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-terminal text-sm text-muted-foreground">
              &gt; INITIALIZING_PORTFOLIO_SYSTEM...
            </div>
            
            <h1 className="text-pixel text-3xl md:text-4xl text-primary">
              {displayText}
              <span className="animate-pulse">_</span>
            </h1>
            
            <div className="space-y-4 text-terminal">
              <p className="text-lg text-accent">
                &gt; TRANSFORMING_IDEAS_INTO_CODE
              </p>
              <p className="text-foreground leading-relaxed">
                Welcome to my digital realm! I'm a passionate developer who crafts 
                exceptional web experiences with modern technologies and pixel-perfect attention to detail.
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
              src={heroImage} 
              alt="Pixel art developer"
              className="w-full h-auto border-2 border-primary shadow-pixel"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground px-2 py-1">
              <span className="text-pixel text-xs">ONLINE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "PROJECTS", value: "25+" },
            { label: "EXPERIENCE", value: "5Y" },
            { label: "TECHNOLOGIES", value: "20+" },
            { label: "COFFEE_CUPS", value: "9999+" }
          ].map((stat) => (
            <PixelCard key={stat.label} className="text-center">
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

      {/* Featured Work */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-pixel text-2xl text-accent mb-8 text-center">
          FEATURED_WORK.SHOWCASE
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "E-COMMERCE.PLATFORM",
              tech: ["REACT", "NODE.JS"],
              status: "LIVE"
            },
            {
              title: "TASK_MANAGER.APP",
              tech: ["TYPESCRIPT", "SUPABASE"],
              status: "BETA"
            },
            {
              title: "AI_CHATBOT.SYS",
              tech: ["PYTHON", "ML"],
              status: "DEV"
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
