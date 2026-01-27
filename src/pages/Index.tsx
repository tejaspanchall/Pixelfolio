import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold mt-12 mb-4">Tejas Panchal</h1>
      </div>
      
      <Navigation />
      
      <main className="container-narrow flex-1">
        <p>I'm Tejas. 👋🏽</p>
        
        <p>
          I'm a passionate Software Engineer with 2+ years of experience building robust web applications. 
          Currently working as a Jr. Software Engineer at{" "}
          <a href="https://www.dmisystems.in/" target="_blank" rel="noopener noreferrer">
            DMI Systems Pvt. Ltd.
          </a>
          , where I develop full-stack solutions using React.js, Laravel, and PostgreSQL.
        </p>
        
        <p>
          Previously, I worked as a Website Developer at{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            GinX Media
          </a>
          , building reward-based platforms with payment integrations, and creating mobile-friendly websites 
          for gyms and service agencies.
        </p>
        
        <p>
          I also founded{" "}
          <a href="https://justanime.to" target="_blank" rel="noopener noreferrer">
            JustAnime
          </a>
          , a clean & ad-free anime streaming platform, and{" "}
          <a href="https://bookcafe-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
            BookCafe
          </a>
          , an educational platform for students and teachers to discover and manage digital books.
        </p>
        
        <p>
          My tech stack includes JavaScript, React, Node.js, Java, Spring Boot, Laravel, and PostgreSQL. 
          I'm constantly learning and building new things.
        </p>
        
        <p>
          You can see my projects{" "}
          <a href="/projects">here</a>.
        </p>
        
        <p>Please feel free to connect with me using the details below.</p>
        
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

export default Index;
