import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  hover?: boolean;
  delay?: number;
  children: ReactNode;
}

const Card = ({ className, hover = true, delay = 0, children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "card-modern",
        hover && "hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
