import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "card-game transition-all duration-200",
          hover && "hover:shadow-neon-hover hover:-translate-x-1 hover:-translate-y-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PixelCard.displayName = "PixelCard";

export default PixelCard;