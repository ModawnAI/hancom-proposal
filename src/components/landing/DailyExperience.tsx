"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sun,
  Moon,
  Bell,
  ChatCircle,
  CheckCircle,
  Star,
  Trophy,
  Fire,
} from "@phosphor-icons/react";
import { SectionWrapper, GradientText } from "./shared";

const morningExperience = {
  time: "07:00",
  icon: Sun,
  title: "상쾌한 아침",
  notification: "오늘의 운세가 도착했어요!",
  features: [
    { icon: Star, text: "오늘의 운세 확인" },
    { icon: CheckCircle, text: "일일 퀘스트 받기" },
    { icon: ChatCircle, text: "AI 코치 인사" },
  ],
  preview: {
    fortune: "오늘은 새로운 아이디어를 실행하기 좋은 날입니다",
    quest: "아침 루틴 완료하기",
    coach: "좋은 아침이에요! 오늘 중요한 결정이 있다면 오전에 하세요.",
  },
};

const eveningExperience = {
  time: "21:00",
  icon: Moon,
  title: "하루 마무리",
  notification: "오늘 하루 어떠셨나요?",
  features: [
    { icon: Trophy, text: "퀘스트 완료 체크" },
    { icon: Fire, text: "스트릭 유지" },
    { icon: Star, text: "내일 미리보기" },
  ],
  preview: {
    fortune: "오늘의 성찰: 작은 성공을 축하하세요",
    quest: "3/3 퀘스트 완료! +30 XP",
    coach: "오늘도 수고하셨어요. 내일은 더 좋은 기운이 기다리고 있어요.",
  },
};

export function DailyExperience() {
  const [isMorning, setIsMorning] = useState(true);
  const experience = isMorning ? morningExperience : eveningExperience;

  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-[#1E3A5F] uppercase tracking-wider mb-4"
        >
          Daily Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline"
        >
          <GradientText>하루를 함께하는</GradientText> DITTO
        </motion.h2>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-neutral-100 rounded-full p-1">
          <button
            onClick={() => setIsMorning(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              isMorning
                ? "bg-white text-amber-600 shadow-md"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            <Sun weight={isMorning ? "fill" : "regular"} className="w-5 h-5" />
            아침
          </button>
          <button
            onClick={() => setIsMorning(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              !isMorning
                ? "bg-white text-indigo-600 shadow-md"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            <Moon weight={!isMorning ? "fill" : "regular"} className="w-5 h-5" />
            저녁
          </button>
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={isMorning ? "morning" : "evening"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left: Phone mockup */}
        <div className="relative mx-auto max-w-sm">
          {/* Phone frame */}
          <div
            className={`relative rounded-[3rem] p-3 ${
              isMorning
                ? "bg-gradient-to-br from-amber-100 to-orange-100"
                : "bg-gradient-to-br from-indigo-100 to-purple-100"
            }`}
          >
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* Status bar */}
              <div className="bg-neutral-900 text-white px-6 py-3 flex items-center justify-between">
                <span className="text-sm font-medium">{experience.time}</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                  <div className="w-6 h-3 rounded-sm bg-white/20" />
                </div>
              </div>

              {/* Notification */}
              <div className="p-4 border-b border-neutral-100">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#1E3A5F] to-[#3B82F6] rounded-2xl text-white">
                  <Bell weight="fill" className="w-8 h-8" />
                  <div>
                    <p className="text-xs opacity-80">DITTO</p>
                    <p className="font-medium">{experience.notification}</p>
                  </div>
                </div>
              </div>

              {/* Content preview */}
              <div className="p-4 space-y-4">
                {/* Fortune */}
                <div className="p-4 bg-amber-50 rounded-xl">
                  <p className="text-xs text-amber-600 font-medium mb-1">오늘의 운세</p>
                  <p className="text-sm text-neutral-700">{experience.preview.fortune}</p>
                </div>

                {/* Quest */}
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <p className="text-xs text-emerald-600 font-medium mb-1">퀘스트</p>
                  <p className="text-sm text-neutral-700">{experience.preview.quest}</p>
                </div>

                {/* Coach message */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="text-xs text-blue-600 font-medium mb-1">AI 코치</p>
                  <p className="text-sm text-neutral-700">{experience.preview.coach}</p>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="p-4 border-t border-neutral-100">
                <div className="w-32 h-1 bg-neutral-200 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Features list */}
        <div>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              isMorning ? "bg-amber-50 text-amber-600" : "bg-indigo-50 text-indigo-600"
            }`}
          >
            <experience.icon weight="fill" className="w-5 h-5" />
            <span className="font-medium">{experience.title}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            {isMorning ? "하루의 시작을 함께" : "하루의 마무리를 함께"}
          </h3>

          <div className="space-y-4">
            {experience.features.map((feature, i) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isMorning ? "bg-amber-100 text-amber-600" : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <feature.icon weight="duotone" className="w-6 h-6" />
                </div>
                <span className="font-medium text-neutral-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
