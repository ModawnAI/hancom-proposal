"use client";

import { Certificate, CheckCircle, Clock } from "@phosphor-icons/react";

interface PatentCardProps {
  number: number;
  title: string;
  registrationId?: string;
  status: "registered" | "pending";
  relevance: string;
  application: string;
}

export default function PatentCard({
  number,
  title,
  registrationId,
  status,
  relevance,
  application,
}: PatentCardProps) {
  return (
    <div className="border border-neutral-200 rounded-xl p-5 hover:border-black transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
            <Certificate size={20} weight="bold" className="text-neutral-700" />
          </div>
          <div>
            <span className="text-xs font-mono text-neutral-400">#{number}</span>
            <h4 className="text-base font-semibold leading-tight">{title}</h4>
          </div>
        </div>
        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
          status === "registered"
            ? "bg-neutral-900 text-white"
            : "bg-neutral-200"
        }`}>
          {status === "registered" ? (
            <>
              <CheckCircle size={12} weight="bold" />
              등록완료
            </>
          ) : (
            <>
              <Clock size={12} weight="bold" />
              출원중
            </>
          )}
        </div>
      </div>

      {registrationId && (
        <p className="text-xs font-mono text-neutral-400 mb-3">
          등록번호: {registrationId}
        </p>
      )}

      <div className="space-y-2 text-sm">
        <div>
          <span className="text-neutral-500">관련성: </span>
          <span className="text-neutral-700">{relevance}</span>
        </div>
        <div>
          <span className="text-neutral-500">적용: </span>
          <span className="text-neutral-700">{application}</span>
        </div>
      </div>
    </div>
  );
}
