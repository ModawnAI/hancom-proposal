"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, TrendUp, ChartBar } from "@phosphor-icons/react";
import { SectionWrapper, GradientText } from "./shared";

const competitors = [
  { name: "점신", users: "500만+", category: "사주/운세" },
  { name: "포스텔러", users: "400만+", category: "타로/운세" },
  { name: "청월당", users: "300만+", category: "사주" },
  { name: "헬로봇", users: "700만+", category: "AI 챗봇" },
];

const stats = [
  { value: "4조", unit: "원+", label: "국내 운세 시장 규모", icon: ChartBar },
  { value: "1,900", unit: "만+", label: "검증된 사용자 기반", icon: Users },
  { value: "20", unit: "%", label: "연간 성장률", icon: TrendUp },
];

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    });
    return controls.stop;
  }, [value, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
}

export function MarketValidation() {
  const [isInView, setIsInView] = useState(false);

  return (
    <SectionWrapper id="market" className="bg-[#1E3A5F] text-white" dark>
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-amber-400 uppercase tracking-wider mb-4"
        >
          Market Validation
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-headline text-white"
        >
          이미 <span className="text-amber-400">검증된</span> 시장
        </motion.h2>
      </div>

      {/* Stats */}
      <motion.div
        onViewportEnter={() => setIsInView(true)}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
              <stat.icon weight="duotone" className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-6xl font-bold">
                {isInView ? (
                  stat.value === "4조" ? "4" : stat.value === "1,900" ? <AnimatedNumber value={1900} /> : "20"
                ) : (
                  "0"
                )}
              </span>
              <span className="text-2xl md:text-3xl font-bold text-amber-400">
                {stat.value === "4조" ? "조" : ""}{stat.unit}
              </span>
            </div>
            <p className="text-white/70 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Competitors grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 rounded-3xl p-8 md:p-12"
      >
        <h3 className="text-xl font-semibold text-center mb-8">
          주요 경쟁사 현황
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {competitors.map((competitor, i) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white/80">
                  {competitor.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-semibold text-white mb-1">{competitor.name}</h4>
              <p className="text-amber-400 font-medium text-sm">{competitor.users}</p>
              <p className="text-white/50 text-xs mt-1">{competitor.category}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/60 mt-8 text-sm">
          기존 앱들은 운세 확인에 그침 → DITTO는 <span className="text-amber-400">행동 변화</span>까지
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
