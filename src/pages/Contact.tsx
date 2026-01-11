import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail(formData);
      
      if (success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      name: "Email",
      value: "tejaspanchal127@gmail.com",
      href: "mailto:tejaspanchal127@gmail.com",
      icon: Mail
    },
    {
      name: "GitHub",
      value: "github.com/tejaspanchall",
      href: "https://github.com/tejaspanchall",
      icon: Github
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/tejaspanchall",
      href: "https://www.linkedin.com/in/tejaspanchall",
      icon: Linkedin
    }
  ];

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
            <h1 className="heading-lg text-foreground mb-4">Get in Touch</h1>
            <p className="text-body">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card hover={false} delay={0.1}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Send a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="What's this about?"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Links */}
            <div className="space-y-6">
              <Card hover={false} delay={0.2}>
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Other ways to reach me
                </h2>
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <link.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-foreground">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.value}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>

              <Card hover={false} delay={0.3}>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Current Status
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-foreground">Available for work</span>
                  </div>
                  <p className="text-muted-foreground">
                    Currently accepting job opportunities, freelance projects, and interesting 
                    collaborations. Response time is typically within 24 hours.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
