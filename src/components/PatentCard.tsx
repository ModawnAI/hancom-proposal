"use client";

import { Cube, TrendUp, ArrowRight } from "@phosphor-icons/react";

interface PatentCardProps {
  number: number;
  title: string;
  marketTrend: string;
  application: string;
}

export default function PatentCard({
  number,
  title,
  marketTrend,
  application,
}: PatentCardProps) {
  return (
    <div className="border border-neutral-200 rounded-xl p-5 hover:border-black transition-colors">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center font-bold">
          {number}
        </div>
        <h4 className="text-base font-semibold leading-tight pt-2">{title}</h4>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <TrendUp size={16} weight="bold" className="text-neutral-400 flex-shrink-0 mt-0.5" />
          <span className="text-neutral-600">{marketTrend}</span>
        </div>
        <div className="flex items-start gap-2">
          <ArrowRight size={16} weight="bold" className="text-black flex-shrink-0 mt-0.5" />
          <span className="text-neutral-800 font-medium">{application}</span>
        </div>
      </div>
    </div>
  );
}
