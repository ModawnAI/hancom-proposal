"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Lightning,
  TreeStructure,
  Robot,
  GameController,
  ArrowRight,
  Check,
  X,
} from "@phosphor-icons/react";
import { SectionWrapper, GradientText } from "./shared";

const features = [
  {
    id: "realtime",
    icon: Lightning,
    title: "실시간 맥락화 운세",
    subtitle: "Google Grounding 기술",
    description:
      "오늘의 날씨, 뉴스, 일정을 반영한 초개인화된 운세. 더 이상 뻔한 운세는 없습니다.",
    comparison: {
      before: [
        "오늘은 좋은 하루가 될 것입니다",
        "금전운이 상승합니다",
        "인간관계에 주의하세요",
      ],
      after: [
        "오늘 예정된 미팅에서 신중하게 의견을 제시하세요",
        "이번 주 삼성전자 주가 변동에 주의가 필요합니다",
        "비 오는 날씨, 카페에서 차분하게 서류 검토를 추천드립니다",
      ],
    },
  },
  {
    id: "lifedesign",
    icon: TreeStructure,
    title: "인생 설계 시스템",
    subtitle: "대운에서 오늘까지",
    description:
      "10년 대운부터 오늘의 시간 단위까지. 체계적인 목표와 실천 로드맵을 제시합니다.",
    pyramid: [
      { level: "대운", period: "10년", description: "인생의 큰 방향" },
      { level: "년운", period: "1년", description: "올해의 목표" },
      { level: "월운", period: "1달", description: "이번 달 실천" },
      { level: "일운", period: "하루", description: "오늘의 퀘스트" },
    ],
  },
  {
    id: "aicoach",
    icon: Robot,
    title: "AI 캐릭터 코치",
    subtitle: "오행 기반 5가지 코치",
    description:
      "당신의 사주 용신에 맞는 AI 코치가 맞춤형 동기부여와 조언을 제공합니다.",
    coaches: [
      { element: "목", name: "성장", area: "커리어/학습", style: "격려 코칭" },
      { element: "화", name: "열정", area: "연애/관계", style: "동기부여" },
      { element: "토", name: "안정", area: "건강/습관", style: "체계적 계획" },
      { element: "금", name: "결단", area: "재테크/결정", style: "현실적 조언" },
      { element: "수", name: "지혜", area: "정서/명상", style: "감정 공감" },
    ],
  },
  {
    id: "gamification",
    icon: GameController,
    title: "게이미피케이션",
    subtitle: "지속 가능한 성장",
    description:
      "스트릭, 퀘스트, XP 시스템으로 운세 실천을 습관화하고 성장을 시각화합니다.",
    features: [
      { name: "스트릭 시스템", desc: "일일/주간/월간 연속 달성" },
      { name: "레벨 & XP", desc: "RPG 스타일 성장 시각화" },
      { name: "퀘스트", desc: "운세 기반 일일 미션" },
      { name: "리그", desc: "주간 랭킹 및 경쟁" },
    ],
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState("realtime");
  const currentFeature = features.find((f) => f.id === activeFeature)!;

  return (
    <SectionWrapper id="features" className="bg-neutral-50">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4"
        >
          Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline"
        >
          <GradientText>4가지 차별점</GradientText>
        </motion.h2>
      </div>

      {/* Feature tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {features.map((feature) => (
          <motion.button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
              activeFeature === feature.id
                ? "bg-[#1E3A5F] text-white shadow-lg"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300"
            }`}
          >
            <feature.icon
              weight={activeFeature === feature.id ? "fill" : "regular"}
              className="w-5 h-5"
            />
            <span className="hidden sm:inline">{feature.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Feature content */}
      <motion.div
        key={activeFeature}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-100"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Description */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
              {currentFeature.subtitle}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {currentFeature.title}
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {currentFeature.description}
            </p>
          </div>

          {/* Right: Visual */}
          <div className="bg-neutral-50 rounded-2xl p-6">
            {currentFeature.comparison && (
              <div className="space-y-6">
                {/* Before */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <X weight="bold" className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-sm font-medium text-neutral-500">기존 운세앱</span>
                  </div>
                  <div className="space-y-2">
                    {currentFeature.comparison.before.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-white rounded-lg text-sm text-neutral-500 border border-neutral-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* After */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check weight="bold" className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium text-emerald-600">DITTO</span>
                  </div>
                  <div className="space-y-2">
                    {currentFeature.comparison.after.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 bg-emerald-50 rounded-lg text-sm text-emerald-700 border border-emerald-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentFeature.pyramid && (
              <div className="space-y-3">
                {currentFeature.pyramid.map((level, i) => (
                  <div
                    key={level.level}
                    className="flex items-center gap-4 p-3 bg-white rounded-lg border border-neutral-100"
                    style={{ marginLeft: `${i * 12}px` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-bold">{level.level}</span>
                      <span className="text-[10px] opacity-80">{level.period}</span>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{level.level}</p>
                      <p className="text-sm text-neutral-500">{level.description}</p>
                    </div>
                    {i < currentFeature.pyramid.length - 1 && (
                      <ArrowRight className="ml-auto w-4 h-4 text-neutral-300" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {currentFeature.coaches && (
              <div className="grid grid-cols-5 gap-2">
                {currentFeature.coaches.map((coach) => (
                  <div
                    key={coach.element}
                    className="text-center p-3 bg-white rounded-xl border border-neutral-100"
                  >
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] flex items-center justify-center text-white font-bold text-sm mb-2">
                      {coach.element}
                    </div>
                    <p className="text-xs font-medium text-neutral-900">{coach.name}</p>
                    <p className="text-[10px] text-neutral-500 mt-1">{coach.area}</p>
                  </div>
                ))}
              </div>
            )}

            {currentFeature.features && (
              <div className="grid grid-cols-2 gap-3">
                {currentFeature.features.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 bg-white rounded-xl border border-neutral-100"
                  >
                    <p className="font-medium text-neutral-900 text-sm">{item.name}</p>
                    <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
