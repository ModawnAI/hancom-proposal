"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  dark?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  fullHeight = false,
  dark = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        ${fullHeight ? "min-h-screen" : ""}
        ${dark ? "bg-[#1E3A5F] text-white" : "bg-white text-neutral-900"}
        py-20 md:py-28 px-4 sm:px-6 lg:px-8
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
