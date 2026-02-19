import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container-narrow flex-1 py-16">
        <h1 className="text-4xl font-bold mb-2 tracking-tighter">Tejas Panchal</h1>
        <Navigation />
        <p>I'm Tejas. 👋🏽</p>

        <p>
          I’m a Software Engineer with 2+ years of experience building scalable, user-focused web applications.
          View my <a href="/Tejas Panchal Resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
        </p>

        <p>
          Currently building <a href="https://justanime.site" target="_blank" rel="noopener noreferrer">JustAnime</a>,
          an anime streaming platform with 1000+ daily active users, where I work across the full stack and focus on performance and reliability.
        </p>

        <p>
          Prior to this I worked as a Jr. Software Engineer at <a href="https://a11y.pub/" target="_blank" rel="noopener noreferrer">DMI Systems</a>,
          where I led the refactoring of their existing education platform to a modern tech stack.
        </p>

        <p>
          Started my career as a Website Developer at <a href="https://ginxmedia.co/" target="_blank" rel="noopener noreferrer">GinX Media</a>.
        </p>
        <p>
          I graduated from NMIMS with an MCA in 2025 and from MKS College with a BScIT in 2023.
        </p>


        <p>Please feel free to connect with me using the details below.</p>

        <hr />

        <ul>
          <li>
            GitHub:{" "}
            <a href="https://github.com/tejaspanchall" target="_blank" rel="noopener noreferrer">
              tejaspanchall
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/tejaspanchall" target="_blank" rel="noopener noreferrer">
              Tejas Panchal
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:tejaspanchal127@gmail.com">
              tejaspanchal127@gmail.com
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Index;
