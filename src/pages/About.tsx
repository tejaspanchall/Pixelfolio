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

        {/* Quest Log */}
        <PixelCard className="mt-8">
          <h2 className="text-pixel text-xl text-primary mb-6 neon-glow">📜 QUEST LOG</h2>
          <div className="space-y-6 text-gamer">
            <div className="border-l-4 border-primary pl-4 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary"></div>
              <div className="text-accent text-pixel text-sm mb-2">
                [2023-PRESENT] 🏆 SENIOR QUEST LEADER
              </div>
              <p className="text-sm mb-2 text-secondary">Tech Innovations Guild</p>
              <p className="text-xs text-muted-foreground">
                ⚡ Leading epic enterprise application raids<br />
                🎯 Mentoring junior adventurers and code review<br />
                🛠️ Implementing legendary CI/CD pipelines
              </p>
            </div>
            
            <div className="border-l-4 border-secondary pl-4 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary"></div>
              <div className="text-accent text-pixel text-sm mb-2">
                [2021-2023] ⚔️ FULL STACK WARRIOR
              </div>
              <p className="text-sm mb-2 text-secondary">StartupTech Arena</p>
              <p className="text-xs text-muted-foreground">
                🎮 Built scalable web applications from the ground up<br />
                🎨 Collaborated with design mages on UX/UI implementation<br />
                ⚡ Optimized performance stats and SEO rankings
              </p>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default About;