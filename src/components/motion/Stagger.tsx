"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { useIsCoarsePointer } from "./useMediaQuery";

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: "div" | "ul" | "ol";
  stagger?: number;
  delay?: number;
};

export function Stagger({
  as = "div",
  stagger = 0.08,
  delay = 0,
  children,
  ...props
}: StaggerProps) {
  const Component = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li";
};

export function StaggerItem({ as = "div", children, ...props }: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;
  const coarse = useIsCoarsePointer();
  const variants: Variants = {
    hidden: { opacity: 0, y: coarse ? 12 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: coarse ? 0.4 : 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };
  return (
    <Component variants={variants} {...props}>
      {children}
    </Component>
  );
}
