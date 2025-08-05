import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";

const About = () => {
  const skills = [
    { name: "JAVASCRIPT", level: 95, color: "bg-gaming-yellow" },
    { name: "REACT", level: 90, color: "bg-accent" },
    { name: "TYPESCRIPT", level: 85, color: "bg-primary" },
    { name: "NODE.JS", level: 80, color: "bg-gaming-green" },
    { name: "PYTHON", level: 75, color: "bg-gaming-purple" },
    { name: "DATABASE", level: 70, color: "bg-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background relative game-scanlines">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Player Profile */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-accent mb-6 neon-glow">🎮 PLAYER PROFILE</h2>
            <div className="space-y-4 text-gamer">
              <p className="text-sm leading-relaxed">
                ⚡ SPAWNING DEVELOPER INSTANCE...
              </p>
              <p className="text-sm leading-relaxed">
                Greetings, fellow gamers! I'm a passionate software developer who transforms 
                creative ideas into epic digital adventures. With mastery in modern web 
                technologies and a quest for clean, efficient code.
              </p>
              <p className="text-sm leading-relaxed">
                🏆 SPECIALIZATION: Full-stack development, React ecosystems, 
                and creating legendary user experiences.
              </p>
              <p className="text-sm leading-relaxed">
                When not grinding code, you'll find me exploring new tech dungeons, 
                contributing to open source guilds, or speed-running classic games for inspiration.
              </p>
              <div className="mt-6">
                <PixelButton variant="accent">
                  📄 DOWNLOAD RESUME
                </PixelButton>
              </div>
            </div>
          </PixelCard>

          {/* Skill Tree */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-secondary mb-6 neon-glow">⚔️ SKILL TREE</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-pixel text-xs text-primary">
                      {skill.name}
                    </span>
                    <span className="text-pixel text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="health-bar">
                    <div
                      className={`h-full ${skill.color} transition-all duration-1000 ease-out relative`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>

        {/* Work Experience */}
        <PixelCard className="mt-8">
          <h2 className="text-pixel text-xl text-primary mb-6 neon-glow">💼 WORK EXPERIENCE</h2>
          <div className="space-y-6 text-gamer">
            <div className="border-l-4 border-primary pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-accent text-pixel text-base font-bold mb-1">
                    Senior Software Engineer
                  </h3>
                  <p className="text-sm text-secondary font-medium">Tech Innovations Inc.</p>
                </div>
                <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2023 - Present
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Led development of enterprise applications serving 100k+ users</li>
                <li>• Mentored junior developers and conducted code reviews</li>
                <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>• Collaborated with cross-functional teams on product roadmap</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-accent text-pixel text-base font-bold mb-1">
                    Full Stack Developer
                  </h3>
                  <p className="text-sm text-secondary font-medium">StartupTech Solutions</p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2021 - 2023
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Built scalable web applications from concept to production</li>
                <li>• Collaborated with design team on UX/UI implementation</li>
                <li>• Optimized application performance and SEO rankings</li>
                <li>• Developed RESTful APIs and integrated third-party services</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-accent text-pixel text-base font-bold mb-1">
                    Frontend Developer
                  </h3>
                  <p className="text-sm text-secondary font-medium">Digital Agency Pro</p>
                </div>
                <span className="text-xs text-muted-foreground bg-accent/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2019 - 2021
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Developed responsive websites using React and modern CSS</li>
                <li>• Worked with clients to translate designs into interactive experiences</li>
                <li>• Maintained and updated existing web applications</li>
                <li>• Participated in agile development processes</li>
              </ul>
            </div>
          </div>
        </PixelCard>

        {/* Certifications & Achievements */}
        <PixelCard className="mt-8">
          <h2 className="text-pixel text-xl text-accent mb-6 neon-glow">🏅 CERTIFICATIONS & ACHIEVEMENTS</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gamer">
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-pixel text-sm text-primary font-bold">
                    AWS Certified Solutions Architect
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Amazon Web Services</p>
                <p className="text-xs text-secondary">2024 - 2027</p>
              </div>

              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <h3 className="text-pixel text-sm text-secondary font-bold">
                    Google Cloud Professional Developer
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Google Cloud Platform</p>
                <p className="text-xs text-accent">2023 - 2025</p>
              </div>

              <div className="bg-accent/10 p-4 rounded border border-accent/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <h3 className="text-pixel text-sm text-accent font-bold">
                    MongoDB Certified Developer
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">MongoDB University</p>
                <p className="text-xs text-primary">2023 - 2026</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gaming-green/10 p-4 rounded border border-gaming-green/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                  <h3 className="text-pixel text-sm text-gaming-green font-bold">
                    React Certified Developer
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Meta Blueprint</p>
                <p className="text-xs text-secondary">2022 - 2025</p>
              </div>

              <div className="bg-gaming-purple/10 p-4 rounded border border-gaming-purple/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-gaming-purple rounded-full"></div>
                  <h3 className="text-pixel text-sm text-gaming-purple font-bold">
                    Docker Certified Associate
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Docker Inc.</p>
                <p className="text-xs text-accent">2022 - 2025</p>
              </div>

              <div className="bg-gaming-yellow/10 p-4 rounded border border-gaming-yellow/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-gaming-yellow rounded-full"></div>
                  <h3 className="text-pixel text-sm text-gaming-yellow font-bold">
                    Kubernetes Administrator
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Cloud Native Computing Foundation</p>
                <p className="text-xs text-primary">2021 - 2024</p>
              </div>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default About;