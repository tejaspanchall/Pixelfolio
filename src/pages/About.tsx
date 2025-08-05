import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";

const About = () => {
  const skills = [
    // Languages
    { name: "JAVASCRIPT", level: 90, color: "bg-gaming-yellow" },
    { name: "JAVA", level: 85, color: "bg-primary" },
    { name: "PYTHON", level: 80, color: "bg-gaming-purple" },
    { name: "SQL", level: 75, color: "bg-gaming-green" },
    { name: "PHP", level: 70, color: "bg-accent" },
    { name: "HTML/CSS", level: 95, color: "bg-secondary" },
    // Frameworks
    { name: "REACT", level: 90, color: "bg-accent" },
    { name: "NODE.JS", level: 85, color: "bg-gaming-green" },
    { name: "SPRING BOOT", level: 75, color: "bg-primary" },
    { name: "LARAVEL", level: 70, color: "bg-gaming-purple" },
    // Developer Tools
    { name: "GIT/GITHUB", level: 90, color: "bg-gaming-yellow" },
    { name: "VS CODE", level: 95, color: "bg-secondary" },
    { name: "INTELLIJ IDEA", level: 80, color: "bg-primary" },
    { name: "POSTMAN", level: 85, color: "bg-accent" },
    { name: "VERCEL", level: 75, color: "bg-gaming-green" },
  ];

  return (
    <div className="min-h-screen bg-background relative game-scanlines">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
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

          {/* Certifications & Achievements */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-accent mb-6 neon-glow">🏅 CERTIFICATIONS & ACHIEVEMENTS</h2>
            <div className="space-y-4 text-gamer">
              <div className="bg-primary/10 p-4 rounded border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h3 className="text-pixel text-sm text-primary font-bold">
                      Blockchain Basics
                    </h3>
                  </div>
                  <a href="https://www.coursera.org/account/accomplishments/certificate/99QZX4WR57KF" target="_blank" rel="noopener noreferrer">
                    <PixelButton size="sm" variant="primary">VIEW</PixelButton>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Coursera</p>
                <p className="text-xs text-secondary">May 2023</p>
              </div>

              <div className="bg-secondary/10 p-4 rounded border border-secondary/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <h3 className="text-pixel text-sm text-secondary font-bold">
                      Responsive Web Design
                    </h3>
                  </div>
                  <a href="https://www.freecodecamp.org/certification/tejaspanchal/responsive-web-design" target="_blank" rel="noopener noreferrer">
                    <PixelButton size="sm" variant="secondary">VIEW</PixelButton>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mb-1">freeCodeCamp</p>
                <p className="text-xs text-accent">Dec 2021</p>
              </div>
{/* 
              <div className="bg-accent/10 p-4 rounded border border-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <h3 className="text-pixel text-sm text-accent font-bold">
                      MongoDB Certified Developer
                    </h3>
                  </div>
                  <PixelButton size="sm" variant="accent">VIEW</PixelButton>
                </div>
                <p className="text-xs text-muted-foreground mb-1">MongoDB University</p>
                <p className="text-xs text-primary">2023 - 2026</p>
              </div> */}
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
                    Software Engineer Intern
                  </h3>
                  <p className="text-sm text-secondary font-medium">DMI Systems Pvt. Ltd.</p>
                </div>
                <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2025 - Present
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Refactored a legacy online bookstore using React.js and Laravel, reducing page load times by 40%</li>
                <li>• Developed and tested RESTful APIs for authentication, product, and order management, reducing integration bugs by 60%</li>
                <li>• Optimized backend data exchange between React frontend and Laravel APIs using Postman, improving system reliability and response time</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-secondary pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-accent text-pixel text-base font-bold mb-1">
                    Freelance Web Developer
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2024 - Present
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Building a reward-based platform with wallet tracking and Razorpay integration for seamless withdrawals</li>
                <li>• Designed and deployed a mobile-friendly gym website featuring class schedules, trainer profiles, and lead capture forms</li>
                <li>• Created a service-oriented website for a writing agency with dynamic content, inquiry forms, and SEO</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-accent text-pixel text-base font-bold mb-1">
                    Founder & Project Developer
                  </h3>
                  <p className="text-sm text-secondary font-medium">beingotaku</p>
                </div>
                <span className="text-xs text-muted-foreground bg-accent/10 px-2 py-1 rounded mt-2 md:mt-0">
                  2022 - 2023
                </span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Developed a full-stack e-commerce site for anime merchandise, increasing engagement by 30%</li>
                <li>• Applied advanced SEO strategies, leading to a 50% growth in organic traffic in 6 months</li>
                <li>• Managed end-to-end fulfillment for 200+ orders with 98% customer satisfaction</li>
              </ul>
            </div>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default About;