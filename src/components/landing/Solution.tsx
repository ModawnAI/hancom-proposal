"use client";

import { motion } from "framer-motion";
import { Compass, Target, Lightning } from "@phosphor-icons/react";
import { SectionWrapper, AnimatedCard, GradientText } from "./shared";

const pillars = [
  {
    label: "WHY",
    title: "나에게 맞는 방향 발견",
    description: "사주와 운세를 기반으로 당신만의 인생 청사진을 그립니다",
    icon: Compass,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "WHAT",
    title: "구체적 목표와 실행 계획",
    description: "대운부터 오늘 하루까지, 체계적인 인생 설계를 제시합니다",
    icon: Target,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "HOW",
    title: "실시간 맥락화 AI 기술",
    description: "Google Grounding으로 오늘의 맥락에 맞는 맞춤 조언을 제공합니다",
    icon: Lightning,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export function Solution() {
  return (
    <SectionWrapper id="solution">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-[#1E3A5F] uppercase tracking-wider mb-4"
        >
          Solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline"
        >
          <GradientText>DITTO</GradientText>는 다릅니다
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <AnimatedCard
            key={pillar.label}
            delay={index * 0.15}
            className="text-center border border-neutral-100"
          >
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${pillar.color}`}
            >
              {pillar.label}
            </span>
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${pillar.color}`}
            >
              <pillar.icon weight="duotone" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              {pillar.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {pillar.description}
            </p>
          </AnimatedCard>
        ))}
      </div>

      {/* Connection line - visual */}
      <div className="hidden md:flex items-center justify-center mt-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 w-full max-w-3xl bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
        />
      </div>

      {/* Result statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center text-subheadline text-neutral-700 mt-12"
      >
        운세를 <span className="font-semibold text-[#1E3A5F]">행동</span>으로
        연결하는 유일한 플랫폼
      </motion.p>
    </SectionWrapper>
  );
}
