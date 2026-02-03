"use client";

import {
  Star,
  Users,
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
} from "@phosphor-icons/react";

interface AppCardProps {
  name: string;
  nameKr?: string;
  users?: string;
  rating?: string;
  positioning: string;
  pros: string[];
  cons: string[];
  insight: string;
  weLearn: string;
}

export default function AppCard({
  name,
  nameKr,
  users,
  rating,
  positioning,
  pros,
  cons,
  insight,
  weLearn,
}: AppCardProps) {
  return (
    <div className="border border-neutral-200 rounded-xl p-8 hover:border-black transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold mb-1 leading-none" style={{ fontSize: "2.5rem" }}>{name}</h4>
          {nameKr && (
            <p className="text-neutral-500 text-lg">
              {nameKr}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          {users && (
            <span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded">
              <Users size={16} weight="bold" />
              {users}
            </span>
          )}
          {rating && (
            <span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded">
              <Star size={16} weight="fill" />
              {rating}
            </span>
          )}
        </div>
      </div>

      {/* Positioning */}
      <p className="text-neutral-600 mb-6 text-base font-medium">
        {positioning}
      </p>

      {/* Pros & Cons - Compact */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h5 className="flex items-center gap-2 text-base font-semibold mb-3 text-neutral-700">
            <CheckCircle size={20} weight="bold" />
            강점
          </h5>
          <div className="flex flex-wrap gap-2">
            {pros.map((pro, i) => (
              <span
                key={i}
                className="text-sm bg-neutral-100 px-3 py-1.5 rounded"
              >
                {pro}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h5 className="flex items-center gap-2 text-base font-semibold mb-3 text-neutral-500">
            <XCircle size={20} weight="bold" />
            약점
          </h5>
          <div className="flex flex-wrap gap-2">
            {cons.map((con, i) => (
              <span
                key={i}
                className="text-sm border border-neutral-200 px-3 py-1.5 rounded text-neutral-500"
              >
                {con}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-neutral-50 rounded-lg p-5 mb-4">
        <h5 className="flex items-center gap-2 text-base font-semibold mb-2">
          <Lightbulb size={20} weight="bold" />
          핵심 인사이트
        </h5>
        <p className="text-base text-neutral-600 leading-relaxed">
          {insight}
        </p>
      </div>

      {/* We Learn */}
      <div className="bg-neutral-900 text-white rounded-lg p-5">
        <h5 className="flex items-center gap-2 text-base font-semibold mb-2 text-white">
          <Target size={20} weight="bold" />
          우리가 배울 점
        </h5>
        <p className="text-base text-neutral-200 leading-relaxed">
          {weLearn}
        </p>
      </div>
    </div>
  );
}
