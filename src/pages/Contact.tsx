import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="container-narrow flex-1 py-16">
        <h1 className="text-4xl font-bold mb-2 tracking-tighter">Contact</h1>
        <Navigation />
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
    </div>
  );
};

export default Contact;
