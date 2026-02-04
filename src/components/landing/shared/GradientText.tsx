"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

export function GoldText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
