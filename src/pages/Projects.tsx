import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
    {
      title: "JustAnime",
      description: "Clean & ad-free anime streaming website, offering a smooth viewing experience.",
      links: {
        code: "https://github.com/tejaspanchall/justanime",
        demo: "https://justanime.to"
      }
    },
    {
      title: "GinX Media",
      description: "Performance marketing platform for brands to reach their target audience.",
      links: {
        demo: "https://ginxmedia.co"
      }
    },
    {
      title: "Profituals",
      description: "Earn Real INR For Simple Online Tasks.",
      links: {
        demo: "https://profituals.com"
      }
    },
    {
      title: "C75 Training",
      description: "More than just a gym - a community dedicated to helping you become your personal best.",
      links: {
        demo: "https://c75training.com"
      }
    },
    {
      title: "Bank ATM Simulator",
      description: "End-to-end application that simulates ATM system with Java Spring Boot backend and PostgreSQL database.",
      links: {
        code: "https://github.com/tejaspanchall/Bank-ATM-Simulator"
      }
    },
    {
      title: "BookCafe",
      description: "Educational platform for students and teachers to discover, read, and manage digital books.",
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
        <p className="mb-8">A collection of my recent development projects and experiments.</p>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.title}>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {project.title}
              </h3>

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
