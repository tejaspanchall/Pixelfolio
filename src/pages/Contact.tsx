import { useState } from "react";
import PixelNavigation from "@/components/PixelNavigation";
import PixelCard from "@/components/PixelCard";
import PixelButton from "@/components/PixelButton";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";

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
          title: "MESSAGE_SENT.SUCCESS",
          description: "Your message has been transmitted successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "MESSAGE_SENT.ERROR",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "MESSAGE_SENT.ERROR",
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

  const contactMethods = [
    {
      method: "EMAIL.PROTOCOL",
      value: "tejaspanchal127@gmail.com",
      link: "mailto:tejaspanchal127@gmail.com",
      icon: "📧",
      description: "Primary communication channel"
    },
    {
      method: "GITHUB.REPOSITORY",
      value: "github.com/tejaspanchall",
      link: "https://github.com/tejaspanchall",
      icon: "🔗",
      description: "Code repositories and contributions"
    },
    {
      method: "LINKEDIN.NETWORK",
      value: "linkedin.com/in/tejaspanchall",
      link: "https://www.linkedin.com/in/tejaspanchall",
      icon: "💼",
      description: "Professional networking"
    }
  ];

  return (
    <div className="min-h-screen bg-background game-scanlines pt-16">
      <PixelNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-pixel text-2xl text-primary mb-4 neon-glow">
            📡 COMMUNICATION HUB
          </h1>
          <p className="text-gamer text-muted-foreground">
            ⚡ ESTABLISHING MULTIPLAYER CONNECTION...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <PixelCard>
            <h2 className="text-pixel text-xl text-accent mb-6">SEND_MESSAGE.FORM</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-pixel text-xs text-primary mb-2">
                  NAME.INPUT
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-input border-2 border-primary p-3 text-terminal text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your name..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-pixel text-xs text-primary mb-2">
                  EMAIL.ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-input border-2 border-primary p-3 text-terminal text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@domain.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-pixel text-xs text-primary mb-2">
                  SUBJECT.LINE
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-input border-2 border-primary p-3 text-terminal text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="Message subject..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-pixel text-xs text-primary mb-2">
                  MESSAGE.BODY
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-input border-2 border-primary p-3 text-terminal text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Type your message here..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <PixelButton 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT_MESSAGE.EXE"}
              </PixelButton>
            </form>
          </PixelCard>

          {/* Contact Methods */}
          <div className="space-y-6">
            <PixelCard>
              <h2 className="text-pixel text-xl text-secondary mb-6">CONTACT_METHODS.LIST</h2>
              <div className="space-y-4">
                {contactMethods.map((contact) => (
                  <div key={contact.method} className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{contact.icon}</span>
                      <span className="text-pixel text-xs text-accent">
                        {contact.method}
                      </span>
                    </div>
                    <a 
                      href={contact.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-terminal text-sm text-primary mb-1 hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                      <span>{contact.value}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                    <p className="text-terminal text-xs text-muted-foreground">
                      {contact.description}
                    </p>
                  </div>
                ))}
              </div>
            </PixelCard>

            <PixelCard>
              <h2 className="text-pixel text-xl text-primary mb-4">STATUS.ONLINE</h2>
              <div className="text-terminal text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SERVER_STATUS:</span>
                  <span className="text-primary">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RESPONSE_TIME:</span>
                  <span className="text-accent">&lt; 24H</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-muted border border-primary">
                <p className="text-terminal text-xs text-foreground">
                  &gt; CURRENTLY_ACCEPTING: Job Opportunities, freelance projects, collaborations, and interesting challenges. Let's build something amazing!
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;