"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  // === Greek Mythology ===
  {
    name: "Thanos",
    nameKr: "타노스",
    color: "#4A0080",
    mythology: "그리스",
    meaning: "압도적 기술력으로 불가능한 난제를 해결하고, 데이터 세계의 새로운 질서를 정립하는 AI 엔진",
    files: ["thanos-text.png", "thanos-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Morpheus",
    nameKr: "몰피우스",
    color: "#0066FF",
    mythology: "그리스",
    meaning: "무형의 데이터와 상상을 현실적 결과물로 시각화하는 생성형(Generative) AI",
    files: ["morpheus-text.png", "morpheus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Kairos",
    nameKr: "카이로스",
    color: "#E63946",
    mythology: "그리스",
    meaning: "데이터 흐름 속 '결정적 순간'을 실시간 포착하여 최적 타이밍에 의사결정을 돕는 AI",
    files: ["kairos-text.png", "kairos-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Kratos",
    nameKr: "크라토스",
    color: "#2C3E50",
    mythology: "그리스",
    meaning: "방대한 연산과 고난도 작업을 막힘없이 처리하는 견고한 컴퓨팅 파워",
    files: ["kratos-text.png", "kratos-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Prometheus",
    nameKr: "프로메테우스",
    color: "#CC5500",
    mythology: "그리스",
    meaning: "먼저 앞을 내다보는 '예측' 능력으로 새로운 기술적 해답을 제시하는 선구자 AI",
    files: ["prometheus-text.png", "prometheus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Chronos",
    nameKr: "크로노스",
    color: "#1B3A5F",
    mythology: "그리스",
    meaning: "과거 학습 데이터와 현재 패턴을 연결하여 시간의 인과관계를 분석하는 AI",
    files: ["chronos-text.png", "chronos-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Atlas",
    nameKr: "아틀라스",
    color: "#008080",
    mythology: "그리스",
    meaning: "거대한 데이터 생태계를 흔들림 없이 지탱하는 기반 모델(Foundation Model)",
    files: ["atlas-text.png", "atlas-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Hyperion",
    nameKr: "하이페리온",
    color: "#DAA520",
    mythology: "그리스",
    meaning: "복잡한 비정형 데이터 속에서 핵심 인사이트를 발견하는 고성능 검색/비전 AI",
    files: ["hyperion-text.png", "hyperion-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Plutus",
    nameKr: "플루터스",
    color: "#2E8B57",
    mythology: "그리스",
    meaning: "데이터 최적화로 리소스 낭비를 줄이고 최대 효율과 기술적 가치를 제공하는 AI",
    files: ["plutus-text.png", "plutus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Apollo",
    nameKr: "아폴로",
    color: "#E6A817",
    mythology: "그리스",
    meaning: "예언·음악·의학을 관장하는 다재다능의 신 — 멀티도메인 범용 AI 플랫폼",
    files: ["apollo-text.png", "apollo-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Argus",
    nameKr: "아르고스",
    color: "#16A085",
    mythology: "그리스",
    meaning: "100개의 눈으로 모든 것을 감시하는 전방위 비전/모니터링 AI",
    files: ["argus-text.png", "argus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Orion",
    nameKr: "오리온",
    color: "#1A2744",
    mythology: "그리스",
    meaning: "밤하늘의 사냥꾼 별자리 — 정밀한 탐색·추적·최적화 AI",
    files: ["orion-text.png", "orion-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Helios",
    nameKr: "헬리오스",
    color: "#E67E22",
    mythology: "그리스",
    meaning: "태양의 빛으로 세상을 비추듯 데이터에서 인사이트를 발견하는 AI",
    files: ["helios-text.png", "helios-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Hermes",
    nameKr: "헤르메스",
    color: "#3498DB",
    mythology: "그리스",
    meaning: "신들의 전령 — 초고속 통신·자연어 처리·정보 중개 AI",
    files: ["hermes-text.png", "hermes-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Daedalus",
    nameKr: "다이달로스",
    color: "#7F8C8D",
    mythology: "그리스",
    meaning: "미로를 설계한 최고의 장인 — 복잡한 시스템 아키텍처 설계 AI",
    files: ["daedalus-text.png", "daedalus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Norse Mythology ===
  {
    name: "Odin",
    nameKr: "오딘",
    color: "#2C3E50",
    mythology: "북유럽",
    meaning: "지혜를 위해 눈을 희생한 최고신 — 데이터 수집·추론·범용 지능 AI",
    files: ["odin-text.png", "odin-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Thor",
    nameKr: "토르",
    color: "#C0392B",
    mythology: "북유럽",
    meaning: "천둥과 번개의 파괴적 힘 — 초고속 처리·보안·파괴적 혁신 AI",
    files: ["thor-text.png", "thor-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Heimdall",
    nameKr: "헤임달",
    color: "#8E44AD",
    mythology: "북유럽",
    meaning: "비프로스트의 수호자 — 모든 것을 보고 듣는 보안·감시·이상탐지 AI",
    files: ["heimdall-text.png", "heimdall-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Egyptian Mythology ===
  {
    name: "Horus",
    nameKr: "호루스",
    color: "#B7410E",
    mythology: "이집트",
    meaning: "매의 눈으로 하늘을 관장하는 왕 — 컴퓨터 비전·정밀 탐지·비전 AI",
    files: ["horus-text.png", "horus-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Ra",
    nameKr: "라",
    color: "#D4AC0D",
    mythology: "이집트",
    meaning: "태양의 창조주 — 생성형 AI·핵심 동력·절대적 권위의 시스템",
    files: ["ra-text.png", "ra-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Thoth",
    nameKr: "토트",
    color: "#1ABC9C",
    mythology: "이집트",
    meaning: "문자를 발명한 지혜의 신 — NLP·대규모 언어모델·지식 관리 AI",
    files: ["thoth-text.png", "thoth-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Anubis",
    nameKr: "아누비스",
    color: "#2C3E50",
    mythology: "이집트",
    meaning: "심장의 무게를 재는 심판자 — 데이터 검증·품질 평가·신뢰도 측정 AI",
    files: ["anubis-text.png", "anubis-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Hindu Mythology ===
  {
    name: "Indra",
    nameKr: "인드라",
    color: "#9B59B6",
    mythology: "힌두",
    meaning: "천둥의 왕 바즈라를 휘두르는 데바들의 지배자 — 통합 관리·오케스트레이션 AI",
    files: ["indra-text.png", "indra-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Agni",
    nameKr: "아그니",
    color: "#E74C3C",
    mythology: "힌두",
    meaning: "신과 인간을 연결하는 불의 신 — 데이터 변환·프로세싱·정화 AI",
    files: ["agni-text.png", "agni-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Rudra",
    nameKr: "루드라",
    color: "#922B21",
    mythology: "힌두",
    meaning: "포효하는 폭풍의 신 — 파괴적 혁신·기존 질서 변혁 AI",
    files: ["rudra-text.png", "rudra-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Japanese Mythology ===
  {
    name: "Raijin",
    nameKr: "라이진",
    color: "#F39C12",
    mythology: "일본",
    meaning: "북을 치며 천둥을 일으키는 뇌신 — 고속 처리·컴퓨팅 파워 AI",
    files: ["raijin-text.png", "raijin-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Susanoo",
    nameKr: "스사노오",
    color: "#2980B9",
    mythology: "일본",
    meaning: "팔기대사를 퇴치한 폭풍의 영웅 — 다중 문제 동시 해결 AI",
    files: ["susanoo-text.png", "susanoo-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Celtic Mythology ===
  {
    name: "Lugh",
    nameKr: "루",
    color: "#D4AC0D",
    mythology: "켈트",
    meaning: "모든 기술의 마스터 — 멀티태스크·범용 AI(AGI)",
    files: ["lugh-text.png", "lugh-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  // === Mesopotamian Mythology ===
  {
    name: "Marduk",
    nameKr: "마르두크",
    color: "#7D3C98",
    mythology: "메소포타미아",
    meaning: "혼돈의 티아마트를 물리치고 세계를 창조한 최고신 — 비정형 데이터 구조화 플랫폼 AI",
    files: ["marduk-text.png", "marduk-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
  {
    name: "Enki",
    nameKr: "엔키",
    color: "#17A2B8",
    mythology: "메소포타미아",
    meaning: "인류에게 문명을 전수한 지혜의 신 — AI 민주화·기술 보급·추론 AI",
    files: ["enki-text.png", "enki-symbol.png"],
    labels: ["텍스트", "심볼"],
  },
];

// Group brands by mythology
const mythologyGroups = [
  { label: "그리스 신화", key: "그리스" },
  { label: "북유럽 신화", key: "북유럽" },
  { label: "이집트 신화", key: "이집트" },
  { label: "힌두 신화", key: "힌두" },
  { label: "일본 신화", key: "일본" },
  { label: "켈트 신화", key: "켈트" },
  { label: "메소포타미아 신화", key: "메소포타미아" },
];

function BrandCard({ brand }: { brand: (typeof brands)[0] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="border rounded-xl p-4 sm:p-3 flex flex-col items-center text-center transition-all hover:shadow-lg"
      style={{ borderColor: brand.color + "30" }}
    >
      {/* Logo display */}
      <div className="flex-1 flex items-center justify-center w-full mb-3 sm:mb-2 relative min-h-[160px] sm:min-h-[140px]">
        <Image
          src={`/image/${brand.files[activeIdx]}`}
          alt={`${brand.name} ${brand.labels[activeIdx]}`}
          width={180}
          height={180}
          className="object-contain max-h-[160px] sm:max-h-[140px]"
        />
      </div>

      {/* Variant selector dots */}
      <div className="flex gap-2 sm:gap-1.5 mb-3 sm:mb-2">
        {brand.files.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className="relative group"
          >
            <div
              className="w-9 h-9 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs sm:text-[10px] font-bold transition-all cursor-pointer"
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
      <h2 className="text-xl sm:text-lg font-bold" style={{ color: brand.color }}>
        {brand.name}
      </h2>
      <span className="text-sm sm:text-xs text-neutral-400 mb-1">
        {brand.nameKr} · {brand.mythology}
      </span>
      <p className="text-neutral-600 text-xs sm:text-[11px] leading-snug line-clamp-2">
        {brand.meaning}
      </p>
    </div>
  );
}

export default function LogoPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredBrands = filter
    ? brands.filter((b) => b.mythology === filter)
    : brands;

  return (
    <main className="min-h-screen bg-white px-4 py-6 sm:p-6 overflow-auto">
      <div className="max-w-[1800px] mx-auto flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              AI Engine Brand Collection
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              신화 기반 AI 엔진 브랜드 심볼 · 30개 브랜드 × 2가지 변형 (텍스트 / 심볼)
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[9px] font-bold text-neutral-400">
                1
              </span>
              <span className="w-5 h-5 rounded-full border-2 border-neutral-400 flex items-center justify-center text-[9px] font-bold text-neutral-400">
                2
              </span>
            </span>
            클릭하여 변형 확인
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === null
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            전체 ({brands.length})
          </button>
          {mythologyGroups.map((g) => {
            const count = brands.filter((b) => b.mythology === g.key).length;
            if (count === 0) return null;
            return (
              <button
                key={g.key}
                onClick={() => setFilter(g.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === g.key
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                {g.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </main>
  );
}
