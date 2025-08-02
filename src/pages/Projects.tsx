import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";

const Projects = () => {
  const projects = [
    {
      title: "E-COMMERCE.APP",
      tech: ["REACT", "NODE.JS", "MONGODB"],
      description: "Full-stack e-commerce platform with real-time inventory management and payment processing.",
      status: "DEPLOYED",
      color: "text-primary"
    },
    {
      title: "TASK_MANAGER.SYS",
      tech: ["TYPESCRIPT", "REACT", "SUPABASE"],
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      status: "IN_PROGRESS",
      color: "text-secondary"
    },
    {
      title: "WEATHER.API",
      tech: ["PYTHON", "FASTAPI", "DOCKER"],
      description: "RESTful API service providing weather data with caching and rate limiting.",
      status: "COMPLETED",
      color: "text-accent"
    },
    {
      title: "PORTFOLIO.WEB",
      tech: ["REACT", "TAILWIND", "VITE"],
      description: "Personal portfolio website with retro gaming aesthetic and responsive design.",
      status: "LIVE",
      color: "text-pixel-blue"
    },
    {
      title: "CHAT.BOT",
      tech: ["PYTHON", "NLP", "WEBSOCKETS"],
      description: "AI-powered chatbot with natural language processing and real-time communication.",
      status: "BETA",
      color: "text-pixel-purple"
    },
    {
      title: "GAME.ENGINE",
      tech: ["C++", "OPENGL", "SDL2"],
      description: "2D game engine with physics simulation and sprite animation system.",
      status: "ARCHIVED",
      color: "text-pixel-pink"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED":
      case "LIVE":
        return "text-primary";
      case "IN_PROGRESS":
      case "BETA":
        return "text-secondary";
      case "COMPLETED":
        return "text-accent";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background relative scanlines">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-pixel text-2xl text-primary mb-4">
            PROJECTS.DIR
          </h1>
          <p className="text-terminal text-muted-foreground">
            &gt; SHOWCASING_RECENT_WORK_AND_EXPERIMENTS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PixelCard key={project.title} className="h-full flex flex-col">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-pixel text-sm ${project.color}`}>
                    {project.title}
                  </h3>
                  <span className={`text-pixel text-xs ${getStatusColor(project.status)}`}>
                    [{project.status}]
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 border border-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-terminal text-sm text-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto flex gap-2">
                <PixelButton size="sm" variant="primary" className="flex-1">
                  VIEW_CODE
                </PixelButton>
                <PixelButton size="sm" variant="accent" className="flex-1">
                  LIVE_DEMO
                </PixelButton>
              </div>
            </PixelCard>
          ))}
        </div>

        {/* Featured Project */}
        <PixelCard className="mt-8">
          <h2 className="text-pixel text-xl text-accent mb-4">FEATURED_PROJECT.HIGHLIGHT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-pixel text-lg text-primary mb-3">REALTIME_COLLABORATION.SUITE</h3>
              <p className="text-terminal text-sm leading-relaxed mb-4">
                A comprehensive collaboration platform built with modern web technologies. 
                Features include real-time document editing, video conferencing, project 
                management, and team communication tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["REACT", "TYPESCRIPT", "WEBSOCKETS", "WEBRTC", "REDIS", "POSTGRESQL"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-accent text-accent-foreground px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <PixelButton variant="primary">VIEW_PROJECT</PixelButton>
                <PixelButton variant="secondary">READ_CASE_STUDY</PixelButton>
              </div>
            </div>
            <div className="bg-muted p-4 border border-primary">
              <div className="text-terminal text-xs space-y-1">
                <div className="text-primary">&gt; PROJECT_STATS.JSON</div>
                <div className="text-muted-foreground">├── users: 10,000+</div>
                <div className="text-muted-foreground">├── uptime: 99.9%</div>
                <div className="text-muted-foreground">├── performance: A+</div>
                <div className="text-muted-foreground">└── security: SSL/A+</div>
              </div>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default Projects;