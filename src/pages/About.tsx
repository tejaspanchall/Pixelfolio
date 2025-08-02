import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";

const About = () => {
  const skills = [
    { name: "JAVASCRIPT", level: 95, color: "bg-primary" },
    { name: "REACT", level: 90, color: "bg-accent" },
    { name: "TYPESCRIPT", level: 85, color: "bg-secondary" },
    { name: "NODE.JS", level: 80, color: "bg-pixel-blue" },
    { name: "PYTHON", level: 75, color: "bg-pixel-purple" },
    { name: "DATABASE", level: 70, color: "bg-pixel-pink" },
  ];

  return (
    <div className="min-h-screen bg-background relative scanlines">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-accent mb-6">ABOUT.EXE</h2>
            <div className="space-y-4 text-terminal">
              <p className="text-sm leading-relaxed">
                &gt; INITIALIZING_DEVELOPER_PROFILE...
              </p>
              <p className="text-sm leading-relaxed">
                Hello! I'm a passionate software engineer who transforms ideas into 
                digital reality. With expertise in modern web technologies and a love 
                for clean, efficient code.
              </p>
              <p className="text-sm leading-relaxed">
                &gt; SPECIALIZING_IN: Full-stack development, React ecosystems, 
                and creating exceptional user experiences.
              </p>
              <p className="text-sm leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or playing retro games for inspiration.
              </p>
              <div className="mt-6">
                <PixelButton variant="accent">
                  DOWNLOAD_RESUME.PDF
                </PixelButton>
              </div>
            </div>
          </PixelCard>

          {/* Skills Section */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-secondary mb-6">SKILLS.SYS</h2>
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
                  <div className="w-full bg-muted h-4 border border-primary">
                    <div
                      className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>
        </div>

        {/* Experience Timeline */}
        <PixelCard className="mt-8">
          <h2 className="text-pixel text-xl text-primary mb-6">EXPERIENCE.LOG</h2>
          <div className="space-y-6 text-terminal">
            <div className="border-l-2 border-primary pl-4">
              <div className="text-accent text-pixel text-sm mb-2">
                [2023-PRESENT] SENIOR_DEVELOPER
              </div>
              <p className="text-sm mb-2">Tech Innovations Inc.</p>
              <p className="text-xs text-muted-foreground">
                &gt; Leading development of enterprise-scale applications
                <br />
                &gt; Mentoring junior developers and code review
                <br />
                &gt; Implementing modern CI/CD pipelines
              </p>
            </div>
            
            <div className="border-l-2 border-secondary pl-4">
              <div className="text-accent text-pixel text-sm mb-2">
                [2021-2023] FULL_STACK_DEVELOPER
              </div>
              <p className="text-sm mb-2">StartupTech Solutions</p>
              <p className="text-xs text-muted-foreground">
                &gt; Built scalable web applications from scratch
                <br />
                &gt; Collaborated with design teams on UX/UI implementation
                <br />
                &gt; Optimized application performance and SEO
              </p>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default About;