"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, amount });
  const MotionTag = motion[as] as any;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function ScrollRevealStagger({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
  y = 20,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
