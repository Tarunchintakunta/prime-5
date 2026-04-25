import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ children, delay = 0, y = 24, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
