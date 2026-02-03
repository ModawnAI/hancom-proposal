"use client";

import {
  Star,
  Users,
  CheckCircle,
  XCircle,
  Lightbulb,
} from "@phosphor-icons/react";

interface AppCardProps {
  name: string;
  nameKr?: string;
  users?: string;
  rating?: string;
  description: string;
  pros: string[];
  cons: string[];
  insight: string;
}

export default function AppCard({
  name,
  nameKr,
  users,
  rating,
  description,
  pros,
  cons,
  insight,
}: AppCardProps) {
  return (
    <div className="border border-neutral-200 rounded-xl p-8 hover:border-black transition-colors">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="font-bold mb-4 leading-none" style={{ fontSize: "3rem" }}>{name}</h4>
          {nameKr && (
            <p className="text-neutral-500 text-2xl">
              {nameKr}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 text-base text-neutral-500">
          {users && (
            <span className="flex items-center gap-1">
              <Users size={20} weight="bold" />
              {users}
            </span>
          )}
          {rating && (
            <span className="flex items-center gap-1">
              <Star size={20} weight="fill" />
              {rating}
            </span>
          )}
        </div>
      </div>

      <p className="text-neutral-600 mb-6 text-lg leading-relaxed">
        {description}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h5 className="flex items-center gap-2 text-lg font-medium mb-3">
            <CheckCircle size={20} weight="bold" className="text-neutral-700" />
            강점
          </h5>
          <ul className="space-y-2">
            {pros.map((pro, i) => (
              <li
                key={i}
                className="text-base text-neutral-600 pl-7"
              >
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="flex items-center gap-2 text-lg font-medium mb-3">
            <XCircle size={20} weight="bold" className="text-neutral-500" />
            약점
          </h5>
          <ul className="space-y-2">
            {cons.map((con, i) => (
              <li
                key={i}
                className="text-base text-neutral-600 pl-7"
              >
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-neutral-50 rounded-lg p-5">
        <h5 className="flex items-center gap-2 text-lg font-medium mb-2">
          <Lightbulb size={20} weight="bold" />
          핵심 인사이트
        </h5>
        <p className="text-base text-neutral-600 leading-relaxed">
          {insight}
        </p>
      </div>
    </div>
  );
}
