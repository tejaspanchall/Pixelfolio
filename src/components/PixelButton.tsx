import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: boolean | string;
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, download, ...props }, ref) => {
    const baseClasses = "btn-game";
    
    const variantClasses = {
      primary: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      secondary: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
      accent: "border-accent text-accent hover:bg-accent hover:text-accent-foreground",
    };

    const sizeClasses = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    // If href is provided, render as a link
    if (href) {
      // For external links
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
            {props.children}
          </a>
        );
      }
      
      // For internal links (React Router)
      return (
        <Link
          to={href}
          className={classes}
          {...props as any}
        >
          {props.children}
        </Link>
      );
    }

    // Default button
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

PixelButton.displayName = "PixelButton";

export default PixelButton;