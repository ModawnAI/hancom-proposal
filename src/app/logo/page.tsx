"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  {
    name: "Thanos",
    nameKr: "타노스",
    color: "#4A0080",
    meaning: "압도적 기술력으로 불가능한 난제를 해결하고, 데이터 세계의 새로운 질서를 정립하는 AI 엔진",
    files: ["thanos-v2-01.png", "thanos-v2-02.png", "thanos-v2-03.png"],
    labels: ["무한+육각", "원+분할", "콘스텔레이션"],
  },
  {
    name: "Morpheus",
    nameKr: "몰피우스",
    color: "#0066FF",
    meaning: "무형의 데이터와 상상을 현실적 결과물로 시각화하는 생성형(Generative) AI",
    files: ["morpheus-v2-01.png", "morpheus-v2-02.png", "morpheus-v2-03.png"],
    labels: ["변형 나비", "M 웨이브", "사각→원"],
  },
  {
    name: "Kairos",
    nameKr: "카이로스",
    color: "#E63946",
    meaning: "데이터 흐름 속 '결정적 순간'을 실시간 포착하여 최적 타이밍에 의사결정을 돕는 AI",
    files: ["kairos-v2-01.png", "kairos-v2-02.png", "kairos-v2-03.png"],
    labels: ["화살+원", "K 크로스헤어", "모래시계"],
  },
  {
    name: "Kratos",
    nameKr: "크라토스",
    color: "#2C3E50",
    meaning: "방대한 연산과 고난도 작업을 막힘없이 처리하는 견고한 컴퓨팅 파워",
    files: ["kratos-v2-01.png", "kratos-v2-02.png", "kratos-v2-03.png"],
    labels: ["방패 인터록", "K 블록", "큐브 NS"],
  },
  {
    name: "Prometheus",
    nameKr: "프로메테우스",
    color: "#CC5500",
    meaning: "먼저 앞을 내다보는 '예측' 능력으로 새로운 기술적 해답을 제시하는 선구자 AI",
    files: ["prometheus-v2-01.png", "prometheus-v2-02.png", "prometheus-v2-03.png"],
    labels: ["기하학 횃불", "선견의 눈", "P+불꽃"],
  },
  {
    name: "Chronos",
    nameKr: "크로노스",
    color: "#1B3A5F",
    meaning: "과거 학습 데이터와 현재 패턴을 연결하여 시간의 인과관계를 분석하는 AI",
    files: ["chronos-v2-01.png", "chronos-v2-02.png", "chronos-v2-03.png"],
    labels: ["3원 타임라인", "순환 루프", "무한+시계"],
  },
  {
    name: "Atlas",
    nameKr: "아틀라스",
    color: "#008080",
    meaning: "거대한 데이터 생태계를 흔들림 없이 지탱하는 기반 모델(Foundation Model)",
    files: ["atlas-v2-01.png", "atlas-v2-02.png", "atlas-v2-03.png"],
    labels: ["A 기반+원", "레이어 기반", "지구+축"],
  },
  {
    name: "Hyperion",
    nameKr: "하이페리온",
    color: "#DAA520",
    meaning: "복잡한 비정형 데이터 속에서 핵심 인사이트를 발견하는 고성능 검색/비전 AI",
    files: ["hyperion-v2-01.png", "hyperion-v2-02.png", "hyperion-v2-03.png"],
    labels: ["빛줄기 삼각", "H+4각별", "눈+광선"],
  },
  {
    name: "Plutus",
    nameKr: "플루터스",
    color: "#2E8B57",
    meaning: "데이터 최적화로 리소스 낭비를 줄이고 최대 효율과 기술적 가치를 제공하는 AI",
    files: ["plutus-v2-01.png", "plutus-v2-02.png", "plutus-v2-03.png"],
    labels: ["상승 곡선", "P+화살", "풍요 곡선"],
  },
];

function BrandCard({ brand }: { brand: (typeof brands)[0] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="border rounded-xl p-3 flex flex-col items-center text-center transition-all hover:shadow-lg"
      style={{ borderColor: brand.color + "30" }}
    >
      {/* Logo display */}
      <div className="flex-1 flex items-center justify-center w-full mb-2 relative min-h-[140px]">
        <Image
          src={`/image/${brand.files[activeIdx]}`}
          alt={`${brand.name} ${brand.labels[activeIdx]}`}
          width={180}
          height={180}
          className="object-contain max-h-[140px]"
        />
      </div>

      {/* Variant selector dots */}
      <div className="flex gap-1.5 mb-2">
        {brand.files.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className="relative group"
          >
            <div
              className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer"
              style={{
                borderColor: activeIdx === idx ? brand.color : "#d1d5db",
                backgroundColor: activeIdx === idx ? brand.color : "transparent",
                color: activeIdx === idx ? "white" : "#9ca3af",
              }}
            >
              {idx + 1}
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {brand.labels[idx]}
            </span>
          </button>
        ))}
      </div>

      {/* Brand info */}
      <h2 className="text-lg font-bold" style={{ color: brand.color }}>
        {brand.name}
      </h2>
      <span className="text-xs text-neutral-400 mb-1">{brand.nameKr}</span>
      <p className="text-neutral-600 text-[11px] leading-snug line-clamp-2">
        {brand.meaning}
      </p>
    </div>
  );
}

export default function LogoPage() {
  return (
    <main className="h-screen bg-white p-6 overflow-hidden">
      <div className="h-full max-w-[1800px] mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">AI Engine Brand Collection</h1>
            <p className="text-sm text-neutral-400 mt-1">
              그리스 신화 기반 AI 엔진 브랜드 심볼 · 각 브랜드 3가지 변형
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[9px] font-bold text-neutral-400">1</span>
              <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[9px] font-bold text-neutral-400">2</span>
              <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[9px] font-bold text-neutral-400">3</span>
            </span>
            클릭하여 변형 확인
          </div>
        </div>

        <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </main>
  );
}
