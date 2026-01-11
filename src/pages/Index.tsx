import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import TopographicBackground from "@/components/TopographicBackground";
import ScrollIndicator from "@/components/ScrollIndicator";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "JustAnime",
      description: "Clean & ad-free anime streaming website, offering a smooth viewing experience.",
      tags: ["React", "Node.js"],
      link: "https://justanime.to",
      github: "https://github.com/tejaspanchall/justanime"
    },
    {
      title: "Profituals",
      description: "Earn Real INR For Simple Online Tasks.",
      tags: ["Next.js", "PostgreSQL"],
      link: "https://profituals.com"
    },
    {
      title: "BookCafe",
      description: "An educational platform designed for students and teachers to discover, read, and manage digital books.",
      tags: ["Next.js", "Laravel"],
      link: "https://bookcafe-frontend.vercel.app/",
      github: "https://github.com/tejaspanchall/BookCafe-Frontend"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <TopographicBackground />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading-xl text-foreground mb-6"
          >
            Tejas Panchal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="heading-md text-muted-foreground"
          >
            Developer & Engineer
          </motion.p>
        </div>

        <ScrollIndicator targetId="about" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-6 mb-12"
            >
              <span className="text-4xl">👋</span>
              <div>
                <p className="text-body text-foreground text-lg md:text-xl leading-relaxed mb-6">
                  I'm Tejas, a developer from India.
                </p>
                <p className="text-body leading-relaxed mb-6">
                  I build tools and services for the modern web, with focus on creating 
                  experiences designed for users first, while also taking care of business 
                  and brand needs.
                </p>
                <p className="text-body leading-relaxed">
                  I love working with React, TypeScript, Node.js, and Spring Boot, with an 
                  affinity towards startups and entrepreneurship.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about">
                <Button variant="secondary">
                  More about me <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-foreground mb-4">I make things.</h2>
            <p className="text-body max-w-2xl mx-auto">
              I'm always looking for new challenges, fancy new technologies, or just 
              exploring the endless world of possibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} delay={index * 0.1}>
                <div className="flex flex-col h-full">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-body-sm flex-grow mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        Visit <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        GitHub <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button variant="secondary">
                View all projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg text-foreground mb-6"
            >
              Let's work together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body mb-10"
            >
              Currently accepting job opportunities, freelance projects, and interesting 
              collaborations. Let's build something amazing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link to="/contact">
                <Button variant="primary">
                  Get in touch
                </Button>
              </Link>
              <Button 
                variant="secondary" 
                href="/Tejas Panchal Resume.pdf" 
                external
                download="Tejas Panchal Resume.pdf"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-6"
            >
              <a
                href="mailto:tejaspanchal127@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tejaspanchall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tejaspanchall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Tejas Panchal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
