import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Briefcase, Award, Code2, ArrowUpRight } from "lucide-react";

const About = () => {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL", "PHP", "HTML/CSS"],
    Frameworks: ["React", "Next.js", "Node.js", "Spring Boot", "Laravel", "Express"],
    Tools: ["Git", "Docker", "Postman", "VS Code", "IntelliJ IDEA", "Vercel"]
  };

  const experience = [
    {
      title: "Jr. Software Engineer",
      company: "DMI Systems Pvt. Ltd.",
      period: "Aug 2025 - Present",
      points: [
        "Refactored a legacy online bookstore using React.js and Laravel, reducing page load times by 40%",
        "Developed and tested RESTful APIs for authentication, product, and order management, reducing integration bugs by 60%",
        "Optimized backend data exchange between React frontend and Laravel APIs using Postman"
      ]
    },
    {
      title: "Website Developer",
      company: "GinX Media Pvt. Ltd.",
      period: "Dec 2023 - July 2025",
      points: [
        "Building a reward-based platform with wallet tracking and Razorpay integration for seamless withdrawals",
        "Designed and deployed a mobile-friendly gym website featuring class schedules, trainer profiles, and lead capture forms",
        "Created a service-oriented website for a writing agency with dynamic content, inquiry forms, and SEO"
      ]
    },
    {
      title: "Founder & Project Developer",
      company: "beingotaku",
      period: "Mar 2022 - Feb 2023",
      points: [
        "Developed a full-stack e-commerce site for anime merchandise, increasing engagement by 30%",
        "Applied advanced SEO strategies, leading to a 50% growth in organic traffic in 6 months",
        "Managed end-to-end fulfillment for 200+ orders with 98% customer satisfaction"
      ]
    }
  ];

  const certifications = [
    {
      name: "Blockchain Basics",
      issuer: "Coursera",
      date: "May 2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/99QZX4WR57KF"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Dec 2021",
      link: "https://www.freecodecamp.org/certification/tejaspanchal/responsive-web-design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h1 className="heading-lg text-foreground mb-4">About Me</h1>
            <p className="text-body text-lg">
              I'm a passionate developer who creates robust web applications with modern 
              tech stacks and attention to detail. Here's more about my journey.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-5 h-5 text-foreground" />
                <h2 className="heading-md text-foreground">Skills</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <Card key={category} delay={index * 0.1} hover={false}>
                    <h3 className="font-display font-semibold text-foreground mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-foreground" />
                <h2 className="heading-md text-foreground">Experience</h2>
              </div>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={job.title} delay={index * 0.1} hover={false}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {job.company}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-body-sm flex gap-2">
                          <span className="text-muted-foreground">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-foreground" />
                <h2 className="heading-md text-foreground">Certifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={cert.name} delay={index * 0.1}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {cert.date}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
