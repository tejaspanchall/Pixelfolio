import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="container-narrow flex-1">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        
        <p>
          I'm currently open to job opportunities, freelance projects, collaborations, 
          and interesting challenges. Feel free to reach out!
        </p>
        
        <hr />
        
        <ul>
          <li>
            GitHub{" "}
            <a href="https://github.com/tejaspanchall" target="_blank" rel="noopener noreferrer">
              @tejaspanchall
            </a>
          </li>
          <li>
            LinkedIn{" "}
            <a href="https://www.linkedin.com/in/tejaspanchall" target="_blank" rel="noopener noreferrer">
              Tejas Panchal
            </a>
          </li>
          <li>
            Email{" "}
            <a href="mailto:tejaspanchal127@gmail.com">
              tejaspanchal127@gmail.com
            </a>
          </li>
        </ul>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
