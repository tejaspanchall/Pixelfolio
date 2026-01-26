import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="container-narrow flex-1">
        <h1 className="text-3xl font-bold mb-8">About</h1>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Experience</h2>
        
        <p>
          <strong>Jr. Software Engineer</strong> — DMI Systems Pvt. Ltd.
          <br />
          <span className="text-muted-foreground text-sm">Aug 2025 - Present</span>
        </p>
        <ul>
          <li>Refactored a legacy online bookstore using React.js and Laravel, reducing page load times by 40%</li>
          <li>Developed and tested RESTful APIs for authentication, product, and order management</li>
          <li>Optimized backend data exchange between React frontend and Laravel APIs</li>
        </ul>
        
        <p>
          <strong>Website Developer</strong> — GinX Media Pvt. Ltd.
          <br />
          <span className="text-muted-foreground text-sm">Dec 2023 - July 2025</span>
        </p>
        <ul>
          <li>Built a reward-based platform with wallet tracking and Razorpay integration</li>
          <li>Designed and deployed mobile-friendly gym websites with class schedules and lead capture</li>
          <li>Created service-oriented websites with dynamic content and SEO optimization</li>
        </ul>
        
        <p>
          <strong>Founder & Project Developer</strong> — beingotaku
          <br />
          <span className="text-muted-foreground text-sm">Mar 2022 - Feb 2023</span>
        </p>
        <ul>
          <li>Developed a full-stack e-commerce site for anime merchandise</li>
          <li>Applied advanced SEO strategies, leading to 50% growth in organic traffic</li>
          <li>Managed end-to-end fulfillment for 200+ orders with 98% customer satisfaction</li>
        </ul>
        
        <hr />
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Skills</h2>
        
        <p><strong>Languages:</strong> JavaScript, Java, Python, SQL, PHP, HTML/CSS</p>
        <p><strong>Frameworks:</strong> React, Node.js, Spring Boot, Laravel, Next.js</p>
        <p><strong>Tools:</strong> Git/GitHub, Vercel, Postman, VS Code, IntelliJ IDEA</p>
        
        <hr />
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Certifications</h2>
        
        <ul>
          <li>
            <a href="https://www.coursera.org/account/accomplishments/certificate/99QZX4WR57KF" target="_blank" rel="noopener noreferrer">
              Blockchain Basics
            </a>{" "}
            — Coursera (May 2023)
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/tejaspanchal/responsive-web-design" target="_blank" rel="noopener noreferrer">
              Responsive Web Design
            </a>{" "}
            — freeCodeCamp (Dec 2021)
          </li>
        </ul>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
