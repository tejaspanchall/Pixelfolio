import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        code: "https://github.com/tejaspanchall/BookCafe-Frontend",
        demo: "https://bookcafe-frontend.vercel.app/"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="container-narrow flex-1">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        
        <p className="mb-8">A collection of my recent development projects and experiments.</p>
        
        {projects.map((project, index) => (
          <div key={project.title} className={index !== projects.length - 1 ? "mb-8" : ""}>
            <p>
              <strong>{project.title}</strong>
              {" "}
              <span className="text-muted-foreground text-sm">({project.status})</span>
            </p>
            <p className="text-muted-foreground">{project.description}</p>
            <p className="text-sm">
              <span className="text-muted-foreground">Tech: </span>
              {project.tech.join(", ")}
            </p>
            <p className="text-sm">
              {project.links.code && (
                <>
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                  {project.links.demo && " · "}
                </>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </p>
            {index !== projects.length - 1 && <hr className="my-6" />}
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
