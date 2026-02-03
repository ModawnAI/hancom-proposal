"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "소개" },
  { id: "problem", label: "문제 정의" },
  { id: "korean-apps", label: "국내 앱 분석" },
  { id: "korean-apps-2", label: "국내 앱 분석" },
  { id: "global-apps", label: "해외 앱 분석" },
  { id: "global-apps-2", label: "해외 앱 분석" },
  { id: "gap", label: "경쟁 공백" },
  { id: "solution", label: "솔루션" },
  { id: "ai-coaches", label: "AI 코치" },
  { id: "user-scenario", label: "사용 시나리오" },
  { id: "gamification", label: "게이미피케이션" },
  { id: "blue-ocean", label: "블루오션" },
  { id: "patents", label: "특허 포트폴리오" },
  { id: "technologies", label: "핵심 기술" },
  { id: "technologies-2", label: "핵심 기술" },
  { id: "technologies-3", label: "핵심 기술" },
  { id: "roadmap", label: "12개월 로드맵" },
  { id: "summary", label: "요약" },
];

export default function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i].id);
          setCurrentIndex(i);
          break;
        }
      }
    };

    // Check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = sections.find((s) => s.id === currentSection);

  return (
    <div className="fixed top-6 left-6 z-50 text-left">
      <h2 className="text-2xl font-bold tracking-tight leading-none">
        {current?.label}
      </h2>
    </div>
  );
}
