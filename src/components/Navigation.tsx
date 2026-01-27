import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "About", path: "/about", isLink: true },
    { name: "Tejas Panchal", path: "/", isName: true },
    { name: "Projects", path: "/projects", isLink: true },
  ];

  return (
    <nav className="py-8">
      <div className="container-narrow flex justify-end items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`no-underline hover:no-underline ${
              item.isName 
                ? "text-foreground hover:text-foreground" 
                : "text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
