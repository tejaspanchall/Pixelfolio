import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";

const Projects = () => {
  const projects = [
    {
      title: "JUSTANIME",
      tech: ["REACT", "NODE.JS"],
      description: "Clean & ad-free anime streaming website, offering a smooth viewing experience.",
      status: "IN_PROGRESS",
      color: "text-primary",
      codeUrl: "https://github.com/tejaspanchall/justanime",
      demoUrl: "https://justanime.to"
    },
    {
      title: "PROFITUALS",
      tech: ["NEXT.JS", "NODE.JS", "POSTGRESQL"],
      description: "Earn Real INR For Simple Online Tasks.",
      status: "IN_PROGRESS",
      color: "text-secondary",
      codeUrl: "https://github.com/tejaspanchall/profituals",
      demoUrl: "https://profituals.com"
    },
    {
      title: "GINX MEDIA",
      tech: ["REACT"],
      description: "Digital Marketing Agency.",
      status: "LIVE",
      color: "text-primary",
      codeUrl: "https://github.com/tejaspanchall/ginx-media",
      demoUrl: "https://ginxmedia.co"
    },
    {
      title: "C75 TRAINING",
      tech: ["NEXT.JS"],
      description: "More than just a gym - we're a community dedicated to helping you become your personal best.",
      status: "LIVE",
      color: "text-accent",
      codeUrl: "https://github.com/username/weather-api",
      demoUrl: "https://c75training.com"
    },
    {
      title: "BANK ATM SIMULATOR",
      tech: ["SPRING BOOT", "POSTGRESQL", "ZXING"],
      description: "It is an end-to-end application that simulates ATM system with a Java Spring Boot backend and PostgreSQL database.",
      status: "COMPLETED",
      color: "text-pixel-blue",
      codeUrl: "https://github.com/tejaspanchall/Bank-ATM-Simulator",
      demoUrl: "https://portfolio-web-demo.vercel.app"
    },
    {
      title: "BOOKCAFE",
      tech: ["NEXT.JS", "LARAVEL", "POSTGRESQL"],
      description: "An educational platform designed for students and teachers to discover, read, and manage digital books.",
      status: "COMPLETED",
      color: "text-pixel-purple",
      codeUrl: "https://github.com/tejaspanchall/BookCafe-Frontend",
      demoUrl: "https://bookcafe-frontend.vercel.app/"
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
    <div className="min-h-screen bg-background game-scanlines pt-16">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-pixel text-3xl text-primary mb-2">PROJECTS.EXE</h1>
          <p className="text-terminal text-sm text-foreground">
            A collection of my recent development projects and experiments.
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
              
              <div className="mt-auto flex gap-4 justify-center">
                {project.title !== "PROFITUALS" && project.title !== "GINX MEDIA" && project.title !== "C75 TRAINING" && (
                  <PixelButton 
                    size="sm" 
                    variant="primary" 
                    className="w-24 text-center"
                    href={project.codeUrl}
                    external
                  >
                    VIEW_CODE
                  </PixelButton>
                )}
                {project.title !== "BANK ATM SIMULATOR" && (
                  <PixelButton 
                    size="sm" 
                    variant="accent" 
                    className="w-24 text-center"
                    href={project.demoUrl}
                    external
                  >
                    LIVE_DEMO
                  </PixelButton>
                )}
              </div>
            </PixelCard>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
