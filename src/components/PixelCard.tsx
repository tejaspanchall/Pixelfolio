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
          "card-pixel transition-all duration-100",
          hover && "hover:shadow-pixel-hover hover:-translate-x-1 hover:-translate-y-1",
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