"use client";

import { motion } from "framer-motion";
import { Question, HandPalm, CheckCircle } from "@phosphor-icons/react";
import { SectionWrapper, AnimatedCard } from "./shared";

const problems = [
  {
    icon: Question,
    title: '"좋은 날이에요"',
    description: "그래서 뭘 하라는 건지?",
    detail: "막연한 운세 결과, 구체적 행동 지침 없음",
  },
  {
    icon: HandPalm,
    title: "매일 보지만",
    description: "행동 변화가 없음",
    detail: "습관화되지 않는 일회성 콘텐츠",
  },
  {
    icon: CheckCircle,
    title: "운세 확인하고",
    description: "그냥 끝",
    detail: "실제 삶의 변화로 이어지지 않음",
  },
];

export function Problem() {
  return (
    <SectionWrapper id="problem" className="bg-neutral-50">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4"
        >
          Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline"
        >
          기존 운세앱,
          <br />
          <span className="text-neutral-400">뭔가 부족하지 않으셨나요?</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {problems.map((problem, index) => (
          <AnimatedCard
            key={problem.title}
            delay={index * 0.1}
            className="text-center border border-neutral-100"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-6">
              <problem.icon weight="duotone" className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {problem.title}
            </h3>
            <p className="text-xl font-medium text-neutral-700 mb-3">
              {problem.description}
            </p>
            <p className="text-sm text-neutral-500">{problem.detail}</p>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
