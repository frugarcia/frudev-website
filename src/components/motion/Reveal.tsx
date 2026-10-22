"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useIsCoarsePointer } from "./useMediaQuery";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  const coarse = useIsCoarsePointer();
  return (
    <motion.div
      initial={{ opacity: 0, y: coarse ? Math.min(y, 12) : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: coarse ? 0.45 : 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
