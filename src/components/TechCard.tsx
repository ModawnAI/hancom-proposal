"use client";

import { ReactNode } from "react";

interface TechCardProps {
  number: number;
  title: string;
  patentRef?: string;
  description: string;
  icon: ReactNode;
  application: string;
}

export default function TechCard({
  number,
  title,
  patentRef,
  description,
  icon,
  application,
}: TechCardProps) {
  return (
    <div className="group border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
          {icon}
        </div>
        <div>
          <span className="text-xs font-mono text-neutral-400">
            {String(number).padStart(2, "0")}
          </span>
          <h4 className="text-lg font-semibold">{title}</h4>
          {patentRef && (
            <span className="text-xs text-neutral-500 font-mono">
              특허: {patentRef}
            </span>
          )}
        </div>
      </div>

      <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="border-t border-neutral-200 pt-4">
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          적용 방안
        </span>
        <p className="text-sm mt-1">{application}</p>
      </div>
    </div>
  );
}
