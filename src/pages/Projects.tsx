import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "JustAnime",
      tech: ["React", "Node.js"],
      description: "Clean & ad-free anime streaming website, offering a smooth viewing experience.",
      status: "In Progress",
      codeUrl: "https://github.com/tejaspanchall/justanime",
      demoUrl: "https://justanime.to"
    },
    {
      title: "Profituals",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      description: "Earn Real INR For Simple Online Tasks.",
      status: "In Progress",
      demoUrl: "https://profituals.com"
    },
    {
      title: "GinX Media",
      tech: ["React"],
      description: "Digital Marketing Agency.",
      status: "Live",
      demoUrl: "https://ginxmedia.co"
    },
    {
      title: "C75 Training",
      tech: ["Next.js"],
      description: "More than just a gym - we're a community dedicated to helping you become your personal best.",
      status: "Live",
      demoUrl: "https://c75training.com"
    },
    {
      title: "Bank ATM Simulator",
      tech: ["Spring Boot", "PostgreSQL", "ZXing"],
      description: "An end-to-end application that simulates ATM system with a Java Spring Boot backend and PostgreSQL database.",
      status: "Completed",
      codeUrl: "https://github.com/tejaspanchall/Bank-ATM-Simulator"
    },
    {
      title: "BookCafe",
      tech: ["Next.js", "Laravel", "PostgreSQL"],
      description: "An educational platform designed for students and teachers to discover, read, and manage digital books.",
      status: "Completed",
      codeUrl: "https://github.com/tejaspanchall/BookCafe-Frontend",
      demoUrl: "https://bookcafe-frontend.vercel.app/"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h1 className="heading-lg text-foreground mb-4">Projects</h1>
            <p className="text-body">
              A collection of my recent development projects and experiments. Each project 
              represents a unique challenge and learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} delay={index * 0.1} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-body-sm flex-grow mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2 border-t border-border/50">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
