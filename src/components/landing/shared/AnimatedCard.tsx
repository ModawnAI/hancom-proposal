"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : undefined}
      className={`
        bg-white rounded-2xl p-6 md:p-8 shadow-lg
        transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
