import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PixelNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b-2 border-primary p-4 relative z-50 shadow-neon">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-pixel text-primary text-xl hover:text-accent transition-colors neon-glow"
        >
         TEJAS PANCHAL⚡
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-pixel text-sm transition-colors hover:text-accent ${
                isActive(item.path) ? "text-accent" : "text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pixel text-sm text-primary hover:text-accent"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b-2 border-primary">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-pixel text-sm transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default PixelNavigation;