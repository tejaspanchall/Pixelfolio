import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, download, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";
    
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
      secondary: "border border-border text-foreground hover:bg-accent hover:border-accent",
      ghost: "text-muted-foreground hover:text-foreground",
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      if (external) {
        return (
          <a 
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            download={download}
            {...props as any}
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link
          to={href}
          className={classes}
          {...props as any}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
