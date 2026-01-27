import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "JustAnime",
      description: "Clean & ad-free anime streaming website, offering a smooth viewing experience.",
      tech: ["React", "Node.js"],
      status: "In Progress",
      links: {
        code: "https://github.com/tejaspanchall/justanime",
        demo: "https://justanime.to"
      }
    },
    {
      title: "GinX Media",
      description: "Developing reward-based platforms with payment integrations and mobile-friendly websites.",
      tech: ["Web Development", "Payment Integration"],
      status: "Completed",
      links: {
        demo: "https://ginxmedia.co"
      }
    },
    {
      title: "Profituals",
      description: "Earn Real INR For Simple Online Tasks.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      status: "In Progress",
      links: {
        demo: "https://profituals.com"
      }
    },
    {
      title: "C75 Training",
      description: "More than just a gym - a community dedicated to helping you become your personal best.",
      tech: ["Next.js"],
      status: "Live",
      links: {
        demo: "https://c75training.com"
      }
    },
    {
      title: "Bank ATM Simulator",
      description: "End-to-end application that simulates ATM system with Java Spring Boot backend and PostgreSQL database.",
      tech: ["Spring Boot", "PostgreSQL", "ZXing"],
      status: "Completed",
      links: {
        code: "https://github.com/tejaspanchall/Bank-ATM-Simulator"
      }
    },
    {
      title: "BookCafe",
      description: "Educational platform for students and teachers to discover, read, and manage digital books.",
      tech: ["Next.js", "Laravel", "PostgreSQL"],
      status: "Completed",
      links: {
        code: "https://github.com/tejaspanchall/BookCafe-Frontend"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container-narrow flex-1 py-16">
        <h1 className="text-4xl font-bold mb-2 tracking-tighter">Projects</h1>
        <Navigation />
        <p>A collection of my recent development projects and experiments.</p>

        <div className="flex flex-wrap gap-4 mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <span>Live</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500/80" />
            <span>Completed</span>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full shrink-0 ${project.status === "Live" ? "bg-emerald-500/80" :
                  project.status === "In Progress" ? "bg-amber-500/80" :
                    "bg-blue-500/80"
                  }`} />
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-1">
                {project.description}
              </p>

              <div className="text-sm space-x-3">
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
