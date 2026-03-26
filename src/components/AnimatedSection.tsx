import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Override the default animation direction. Default: "up" */
  direction?: "up" | "none";
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const yOffset = direction === "up" ? 28 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
