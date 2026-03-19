import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  glowColor?: string;
}

const GlowCard = ({ icon, title, description, className = "", glowColor }: Props) => {
  const borderStyle = glowColor
    ? { border: `1px solid hsl(${glowColor} / 0.3)` }
    : {};
  const hoverShadow = glowColor
    ? `0 0 20px hsl(${glowColor} / 0.2), 0 0 40px hsl(${glowColor} / 0.1)`
    : undefined;

  return (
    <motion.div
      className={`glass-card card-lift p-4 sm:p-6 text-center ${!glowColor ? "neon-border" : ""} ${className}`}
      style={borderStyle}
      whileHover={hoverShadow ? { boxShadow: hoverShadow, y: -8 } : { y: -8 }}
    >
      {icon && (
        <div
          className="mb-4 flex justify-center"
          style={glowColor ? { color: `hsl(${glowColor})` } : { color: "hsl(var(--primary))" }}
        >
          {icon}
        </div>
      )}
      <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{title}</h3>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </motion.div>
  );
};

export default GlowCard;
