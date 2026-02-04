"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Calculator,
  VirtualReality,
  ArrowRight,
} from "@phosphor-icons/react";
import { SectionWrapper, GradientText, AnimatedCard } from "./shared";

const techStack = [
  {
    icon: Brain,
    title: "Gemini AI",
    description: "Google의 최신 AI 모델 기반 자연어 처리 및 분석",
  },
  {
    icon: Globe,
    title: "Google Grounding",
    description: "실시간 뉴스, 날씨, 이벤트를 운세에 반영",
  },
  {
    icon: Calculator,
    title: "정밀 만세력",
    description: "천문학적 계산 기반 정확한 사주 분석 엔진",
  },
  {
    icon: VirtualReality,
    title: "AR/VR Ready",
    description: "메타버스 확장을 위한 기술 기반 구축",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    period: "2025 Q1",
    title: "MVP 출시",
    items: ["핵심 기능 개발", "베타 테스트", "3월 정식 출시"],
    active: true,
  },
  {
    phase: "Phase 2",
    period: "2025 Q2-Q3",
    title: "확장 & 성장",
    items: ["AI 코치 고도화", "게이미피케이션 확대", "파트너십 확보"],
    active: false,
  },
  {
    phase: "Phase 3",
    period: "2025 Q4+",
    title: "생태계 구축",
    items: ["메타버스 통합", "글로벌 확장", "플랫폼 고도화"],
    active: false,
  },
];

export function Technology() {
  return (
    <SectionWrapper id="technology" className="bg-neutral-50">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-[#1E3A5F] uppercase tracking-wider mb-4"
        >
          Technology
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline"
        >
          <GradientText>검증된 기술력</GradientText>
        </motion.h2>
      </div>

      {/* Tech stack grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {techStack.map((tech, i) => (
          <AnimatedCard
            key={tech.title}
            delay={i * 0.1}
            className="text-center border border-neutral-100"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] mb-4">
              <tech.icon weight="duotone" className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">{tech.title}</h3>
            <p className="text-sm text-neutral-500">{tech.description}</p>
          </AnimatedCard>
        ))}
      </div>

      {/* Roadmap */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-12"
        >
          로드맵
        </motion.h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-neutral-200" />

          <div className="grid md:grid-cols-3 gap-8">
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      phase.active
                        ? "bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] text-white"
                        : "bg-white border-2 border-neutral-200 text-neutral-400"
                    }`}
                  >
                    <span className="text-xs font-bold">{phase.period.split(" ")[1]}</span>
                  </div>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    phase.active
                      ? "bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] text-white"
                      : "bg-white border border-neutral-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        phase.active ? "bg-white/20" : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className={`text-xs ${
                        phase.active ? "text-white/70" : "text-neutral-400"
                      }`}
                    >
                      {phase.period}
                    </span>
                  </div>
                  <h4
                    className={`text-lg font-bold mb-3 ${
                      phase.active ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {phase.title}
                  </h4>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-2 text-sm ${
                          phase.active ? "text-white/80" : "text-neutral-500"
                        }`}
                      >
                        <ArrowRight className="w-3 h-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
